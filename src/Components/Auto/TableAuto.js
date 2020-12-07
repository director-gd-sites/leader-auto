import React from 'react';
import {Row, Col, Form, Table, Button, Modal} from 'react-bootstrap';
import {
    autoJson, deleteDocumentFromCollectionWithID,
    getCollection,
    getCollectionWhereKeyValue,
    setDocumentToCollection,
    updateDocumentInCollection,
    userJson,
    sendLog
} from "../../Help/Help";
import CreateChangeAuto from "../../Components/Auto/CreateChangeAuto";

export default class App extends React.Component{
    /** ====================================================================================================
     *              Main
     =====================================================================================================*/
    constructor (props, context) {
        super(props, context);
        this.state = {
            showModal: false,
            users: [], 
            autos: [],
            errorMessage: '',
            choosedUser: userJson,
            stateModal: autoJson,
            changeModal: false,
        };
    }
    componentDidMount() {
        if (this.props.userPage){
            sendLog('№0-User componentDidMount', this.state);
            this.getAutos(localStorage.getItem('leaderAutoUid'));
        }else {
            sendLog('№0-Admin componentDidMount', this.state);
            this.getUsers();
            this.getAutos('');
        }
    }
    getUsers(){
        getCollection('users').then( r => {
            const users = r.filter(function (el) {
                return el.position === 'User';
            });
            sendLog('№1 getUsers', this.state);
            this.setState({users: users, errorMessage: ''});
        }).catch( e => {
            this.setState({errorMessage: 'Ошибка закгрузки данных!'});
            sendLog('№1 getUsers Ошибка закгрузки данных пользователи', this.state);
        });
    };
    /** ====================================================================================================
     *              Methods
     =====================================================================================================*/
    handleShowModal = (stateModal, change) => {
        if (this.state.choosedUser === userJson){
            sendLog('№2 handleShowModal if choosedUser', this.state);
            this.setState({errorMessage: 'Выбирите пользователя!', showModal: !this.state.showModal, stateModal: stateModal, changeModal: change});
        }else {
            sendLog('№3 handleShowModal else', this.state);
            this.setState({showModal: !this.state.showModal, stateModal: stateModal, changeModal: change, errorMessage: ''});
        }
    };
    handleChooseUser = (e) => {
        try {
            var value = e.target.value.split('ID:');
            const user = this.state.users.filter(function (el) {return el.uid.includes(value[1]);});
            if (user[0] === undefined){
                sendLog('№3-1 handleChooseUser if (user[0] === undefined)', this.state);
                this.setState({choosedUser: userJson, errorMessage: ''});
                this.getAutos('');
            }else {
                sendLog('№3-2 handleChooseUser else', this.state);
                this.setState({choosedUser: user[0], errorMessage: ''});
                this.getAutos(value[1])
            }
        }catch (e) {
            sendLog('№3-3 handleChooseUser catch', this.state);
            this.setState({choosedUser: userJson, errorMessage: ''});
            this.getAutos('');
        }
        // console.log(e.target.value);
        // console.log(e.target.value.split('ID:')[1]);
    };
    getAutos(uid){
        getCollectionWhereKeyValue('auto', 'uid', uid).then( r => {
            r.sort(function(a,b){
                return new Date(b.purchaseDate) - new Date(a.purchaseDate);
            });
            sendLog('№4 getAutos ok', this.state);
            this.setState({autos: r});
            if (r.length === 0){
                this.setState({errorMessage: 'Нет данных!'});
            }
        }).catch( e => {
            sendLog('№4 getAutos catch', this.state);
            this.setState({errorMessage: 'Ошибка загрузки данных!'});
        });
    }
    handleModal = (state) => {
        // console.log(state)
        this.setState({stateModal: state});
    };
    submitModal = () => {
        if (!this.state.changeModal){
            setDocumentToCollection('auto', this.state.stateModal).then( r => {
                sendLog('№6 submitModal if !changeModal ok', this.state);
                this.getAutos(this.state.stateModal.uid);
                this.handleShowModal(userJson, false);
                this.setState({errorMessage: 'Данные успешно добавлены!'});
                setTimeout(() => {
                    this.setState({errorMessage: ''});
                }, 3000);
            }).catch( e => {
                sendLog('№6 submitModal if !changeModal catch', this.state);
                this.setState({errorMessage: 'Ошибка добавления!'});
            });
        }else {
            updateDocumentInCollection('auto', this.state.stateModal.id, this.state.stateModal).then( r => {
                sendLog('№6 submitModal if changeModal ok', this.state);
                this.getAutos(this.state.stateModal.uid);
                this.handleShowModal(userJson, false);
                this.setState({errorMessage: 'Данные успешно обновлены!'});
                setTimeout(() => {
                    this.setState({errorMessage: ''});
                }, 3000);
            }).catch( e => {
                sendLog('№6 submitModal if changeModal catch', this.state);
                this.setState({errorMessage: 'Ошибка обновления!'});
            });
        }
    };
    removeAuto = (a) => {
        deleteDocumentFromCollectionWithID('auto', a.id).then( r => {
            sendLog('№10 removeAuto ok', this.state);
            this.getAutos(a.uid);
            this.setState({errorMessage: 'Запись успешно удалена!'});
            setTimeout(() => {
                this.setState({errorMessage: ''});
            }, 3000);
        }).catch( e => {
            sendLog('№10 removeAuto catch', this.state);
            this.setState({errorMessage: 'Ошибка удаления!'});
        })
    };
    getText(text) {
        if (text === undefined){
            return 'Неизвестно';
        }else if (text === ''){
            return 'Неизвестно';
        }else {
            return text;
        }
    }
    /** ====================================================================================================
     *              Render
     =====================================================================================================*/
    render(){
        return (
            <div>
                {!this.props.userPage && (
                    <Row className={"TopHeaderContainer"}>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlSelect1" className={"SelectUserTableHeader"}>
                                <Form.Label>Выберите пользователя</Form.Label>
                                <Form.Control as="select" onChange={this.handleChooseUser}>
                                    <option key={0}>Не выбран</option>
                                    {this.state.users.map( (u,index) => (
                                        <option
                                            key={index + 1}
                                        >{u.name + "    Почта:" + u.email + " ID:" + u.uid }</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                            <Button variant={"primary"} onClick={() => this.handleShowModal(autoJson, false)} className={"TableButton"}>Добавить авто</Button>
                        </Col>
                    </Row>
                )}


                <Row>
                    <Col>
                        <div className={"TableAutoErrorMsg"}>{this.state.errorMessage}</div>
                    </Col>
                </Row>

                <div>
                    {this.state.autos.length > 0 && (
                        <div className={"TableScroll Flipped"}>
                            <div className={'Content'}>
                                <Table striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        {!this.props.userPage && (
                                            <th>Действия</th>
                                        )}
                                        {!this.props.userPage && (
                                            <th>ID</th>
                                        )}
                                        {!this.props.userPage && (
                                            <th>ФИО</th>
                                        )}
                                        <th>Марка авто</th>
                                        <th>VIN</th>
                                        <th>Дата покупки</th>
                                        <th>Стоимость аукцион, $</th>
                                        <th>Страховка, $</th>
                                        <th>Дата оплаты</th>
                                        <th>Сумма доставки, $</th>
                                        <th>Дата оплаты доставки</th>
                                        <th>Стоимость кнопки, $</th>
                                        <th>Дата оплаты</th>
                                        <th>Фото USA</th>
                                        <th>Фото порт Украина</th>
                                        <th>Релиз</th>
                                        <th>Стоимость комплекс , $</th>
                                        <th>Дата оплаты</th>
                                        <th>Линия</th>
                                        <th>Контейнер</th>
                                        <th>Дата прибытия</th>
                                        <th>Общая сумма</th>
                                        <th>Примечания</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.autos.map( (a, index) => (
                                        <tr key={index}>
                                            <th>{index + 1}</th>
                                            {!this.props.userPage && (
                                                <th>
                                                    <Button variant={'danger'} className={"TableButton"} onClick={() => this.removeAuto(a)}>Удалить</Button>
                                                    <Button variant={"primary"} onClick={() => this.handleShowModal(a, true)} className={"TableButton"}>Изменить</Button>
                                                </th>
                                            )}
                                            {!this.props.userPage && (
                                                <th>{a.id}</th>
                                            )}
                                            {!this.props.userPage && (
                                                <th>{a.fullName}</th>
                                            )}
                                            <th>{a.carBrand}</th>
                                            <th>{a.VIN}</th>
                                            <th>{a.purchaseDate}</th>
                                            <th>{a.auctionPrice}</th>
                                            <th>{a.insurance}</th>
                                            <th>{a.dateOfPayment}</th>
                                            <th>{a.deliveryAmount}</th>
                                            <th>{a.deliveryPaymentDate}</th>
                                            <th>{a.buttonCost}</th>
                                            <th>{a.dateOfPaymentButton}</th>
                                            <th>
                                                {a.photoUSA === '' ? (
                                                    <div>Фото нет</div>
                                                ): (
                                                    <Button variant={"primary"} onClick={() => window.open(a.photoUSA)} className={"TableButton"}>Скачать</Button>
                                                )}
                                            </th>
                                            <th>
                                                {a.photoPortUkraine === '' ? (
                                                    <div>Фото нет</div>
                                                ): (
                                                    <Button variant={"primary"} onClick={() => window.open(a.photoPortUkraine)} className={"TableButton"}>Скачать</Button>
                                                )}
                                            </th>
                                            <th>{a.release}</th>
                                            <th>{a.complexCost}</th>
                                            <th>{a.dateOfPaymentComplex}</th>
                                            <th>{a.line}</th>
                                            <th>{a.container}</th>
                                            <th>{a.arrivalDate}</th>
                                            <th>{parseInt(a.auctionPrice) + parseInt(a.insurance) + parseInt(a.deliveryAmount) + parseInt(a.buttonCost) + parseInt(a.complexCost)}</th>
                                            <th>{a.notes}</th>
                                        </tr>
                                    ))}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    )}
                </div>

                {!this.props.userPage && (
                    <Modal show={this.state.showModal} onHide={() => this.handleShowModal()} size={"xl"} animation={false}>
                        <Modal.Header className={"ModalHeaderRegister"}>
                            <Modal.Title>
                                {!this.state.changeModal ?
                                    ("Добавить авто пользователю " + this.getText(this.state.choosedUser.name)) : (
                                    "Изменить авто пользователю " + this.getText(this.state.choosedUser.name)
                                )}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Label className={"ModalRegisterErrorMessage"}>{this.state.errorMessage}</Form.Label>
                            <CreateChangeAuto
                                change={this.state.changeModal}
                                auto={this.state.stateModal}
                                user={this.state.choosedUser}
                                users={this.state.users}
                                errorMessage={this.state.errorMessage}
                                returnValues={this.handleModal}
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="outline-danger" onClick={() => this.handleShowModal()}>
                                Закрыть
                            </Button>
                            <Button variant="primary" onClick={() => this.submitModal()}>
                                {!this.state.changeModal ? ("Добавить авто") : ("Изменить")}
                            </Button>
                        </Modal.Footer>
                    </Modal>
                )}
            </div>
        );
    }
}
