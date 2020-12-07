import React from 'react';
import {Table, Button, Modal, Form, Col, Row} from 'react-bootstrap';
import {createUser, getCollection, updateDocumentInCollection, userJson} from "../../Help/Help";
import CreateChangeUser from "./CreateChangeUser";

export default class App extends React.Component{
    /** ====================================================================================================
     *              Main
     =====================================================================================================*/
    constructor (props, context) {
        super(props, context);
        this.state = {
            users: [],
            currentUser: userJson,
            errorMessage: '',
            showRegister: false,
            create: false,
            stateModal: userJson,
        };
    }
    componentDidMount() {
        this.getUsers();
    }
    getUsers(){
        getCollection('users').then( r => {
            const users = r.filter(function (el) {
                return el.position === 'User';
            });
            this.setState({users: users, errorMessage: '', currentUser: userJson,});
        }).catch( e => {
            this.setState({errorMessage: 'Error'});
        });
    };
    /*** ================================================================================
     *          Handle
     * ================================================================================*/
    handleregister(create, currentUser){
        if (create){
            this.setState({showRegister: !this.state.showRegister, currentUser: currentUser, create: create});
        }else {
            this.setState({showRegister: !this.state.showRegister, currentUser: currentUser, create: create});
        }
    };
    handleModal = (state) => {
        this.setState({stateModal: state});
    };
    /*** ================================================================================
     *          Methods
     * ================================================================================*/
    createUsers = () => {
        if (this.state.stateModal.name === '' || this.state.stateModal.email === '' || this.state.stateModal.password === '' || this.state.stateModal.passwordConfirm === ''){
            this.setState({errorMessage: 'Fill in all the fields'});
            return;
        }
        if (this.state.stateModal.password !== this.state.stateModal.passwordConfirm){
            this.setState({errorMessage: 'Passwords do not match'});
            return;
        }
        var user = userJson;
        user.email = this.state.stateModal.email;
        user.name = this.state.stateModal.name;
        user.balance = this.state.stateModal.balance;
        user.password = this.state.stateModal.password;
        user.position = 'User';
        user.status = 'Active';
        createUser(user).then( r => {
            this.getUsers();
            this.handleregister(true, userJson);
            this.setState({errorMessage: 'Пользователь успешно создан!'});
            setTimeout(() => {
                this.setState({errorMessage: ''});
            }, 3000);
        }).catch( e => {
            this.setState({errorMessage: 'Ошибка создания!'});
        });
    };
    changeUsers = () => {
        if (this.state.stateModal.name === '' ){
            this.setState({errorMessage: 'Fill in all the fields'});
            return;
        }
        updateDocumentInCollection('users', this.state.stateModal.id , this.state.stateModal).then( r => {
            this.getUsers();
            this.handleregister(true, userJson);
            this.setState({errorMessage: 'Пользователь успешно обновлен!'});
            setTimeout(() => {
                this.setState({errorMessage: ''});
            }, 3000);
        }).catch( e => {
            this.setState({ errorMessage: 'Ошибка изменения!'});
        });
    };
    /** ====================================================================================================
     *              Render
     =====================================================================================================*/
    render(){
        return (
            <div>
                <Button variant={"primary"} className={"TableButton"} onClick={() => this.handleregister(true, userJson)}>Создать пользователя</Button>
                <Row>
                    <Col>
                        <div className={"TableAutoErrorMsg"}>{this.state.errorMessage}</div>
                    </Col>
                </Row>
                <div className={"TableScroll"}>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>ФИО</th>
                            <th>Почта</th>
                            <th>Баланс</th>
                            <th>Действия</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.users.map( (u, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <th>{u.uid}</th>
                                <th>{u.name}</th>
                                <th>{u.email}</th>
                                <th>{u.balance}</th>
                                <th className={"TableButtonContainer"}>
                                    <Button variant={"primary"} className={"TableButton"} onClick={() => this.handleregister(false, u)}>Изменить</Button>
                                </th>
                            </tr>
                        ))}
                        </tbody>
                    </Table>

                    <Modal show={this.state.showRegister} onHide={() => this.handleregister(true, userJson)} animation={false}>
                        <Modal.Header className={"ModalHeaderRegister"}>
                            <Modal.Title>{this.state.create ? "Регистрация" : this.state.currentUser.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {this.state.create ? (<div></div>) : (<div><Form.Label>{"Email: "+this.state.currentUser.email}</Form.Label></div>)}
                            <CreateChangeUser
                                user={this.state.currentUser}
                                create={this.state.create}
                                returnValues={this.handleModal}
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="outline-danger" onClick={() => this.handleregister(true, userJson)}>
                                Закрыть
                            </Button>
                            {this.state.create ? (
                                <Button variant="primary" onClick={() => this.createUsers()}>Создать пользователя</Button>
                            ) : (
                                <Button variant="primary" onClick={() => this.changeUsers()}>Изменить</Button>
                            )}
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        );
    }
}
