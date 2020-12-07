import React from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';
import logo from '../Images/ЛОГО телеграм ДЛЯ АВЫ.png';
import {fire} from "../Firebase/Firebase";
import {getCollectionWhereKeyValue} from "../Help/Help";

export default class App extends React.Component{
    /** ====================================================================================================
     *              Main
     =====================================================================================================*/
    constructor (props, context) {
        super(props, context);
        this.state = {
            loginShow: false,
            adminShow: false,
            userShow: false,
            message: '',
            email: '',
            password: '',
            signedIn: false,
        };
    }
    componentDidMount() {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({signedIn: true});
            } else {
                this.setState({signedIn: false});
            }
        });
    }
    /** ====================================================================================================
     *              Handle
     =====================================================================================================*/
    handleemail = e => {
        this.setState({email: e.target.value, message: ''});
    };
    handlepassword = e => {
        this.setState({password: e.target.value, message: ''});
    };

    signInBtn = () => {
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then( r => {
            getCollectionWhereKeyValue('users', 'uid', r.user.uid).then( res => {
                localStorage.setItem('leaderAutoPosition', res[0].position);
                localStorage.setItem('leaderAutoUid', r.user.uid);
                switch (res[0].position) {
                    case 'User':
                        window.location.assign('/user');
                        return;
                    case 'Admin':
                        window.location.assign('/admin');
                        return;
                    default:
                        this.setState({message: 'User error'});
                        return;
                }
            }).catch( e => {
                this.setState({message: e.message});
            })
        }).catch( e => {
            this.setState({message: e.message});
        });
    };
    /** ====================================================================================================
     *              Render
     =====================================================================================================*/
    render(){
        return (
            <div className={"BasePageContainer"}>
                <div className={"BasePageSignInFormContainer"}>
                    <div className={"BasePageLogoContainer"}>
                        <img src={logo} alt="logo" className={"BasePageLogo"}/>
                    </div>
                    {this.state.signedIn ? (
                        <div>
                            <h4>Вы уже авторизовались.</h4>
                        </div>

                    ) : (
                        <Form>
                            <Form.Label className={"ModalRegisterErrorMessage"}>{this.state.message}</Form.Label>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email" placeholder="Введите email" value={this.state.email} onChange={this.handleemail}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Пароль</Form.Label>
                                <Form.Control type="password" placeholder="Введите пароль" value={this.state.password} onChange={this.handlepassword}/>
                            </Form.Group>
                            <Button variant="primary" className={"BasePageSignInFormBtn"} onClick={() => this.signInBtn()}>
                                Войти
                            </Button>
                        </Form>
                    )}

                </div>
            </div>
        );
    }
}
