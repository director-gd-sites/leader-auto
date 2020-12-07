import React from 'react';
import {Form} from 'react-bootstrap';

export default class App extends React.Component{
    /** ====================================================================================================
     *              Main
     =====================================================================================================*/
    constructor (props, context) {
        super(props, context);
        this.state = {
            name: '',
            balance: 0,
            email: '',
            password: '',
            passwordConfirm: '',
        };
    }
    componentDidMount() {
        if (!this.props.create){
            this.setState(this.props.user)
        }
    }

    handleChange = (type, e) => {
        switch (type) {
            case 'name':
                this.setState({name: e.target.value});
                this.props.returnValues({...this.state, name: e.target.value});
                return;
            case 'balance':
                this.setState({balance: e.target.value});
                this.props.returnValues({...this.state, balance: e.target.value});
                return;
            case 'email':
                this.setState({email: e.target.value});
                this.props.returnValues({...this.state, email: e.target.value});
                return;
            case 'password':
                this.setState({password: e.target.value});
                this.props.returnValues({...this.state, password: e.target.value});
                return;
            case 'passwordConfirm':
                this.setState({passwordConfirm: e.target.value});
                this.props.returnValues({...this.state, passwordConfirm: e.target.value});
                return;
            default:
                return;
        }
    };

    /** ====================================================================================================
     *              Render
     =====================================================================================================*/
    render(){
        return (
            <div>
                <Form>
                    <Form.Group controlId="name">
                        <Form.Label>ФИО:</Form.Label>
                        <Form.Control type="text" placeholder="Введите ФИО" value={this.state.name} onChange={this.handleChange.bind(this, 'name')}/>
                    </Form.Group>
                    <Form.Group controlId="bal">
                        <Form.Label>Баланс:</Form.Label>
                        <Form.Control type="number" placeholder="Введите Баланс" value={this.state.balance} onChange={this.handleChange.bind(this, 'balance')}/>
                    </Form.Group>
                    {this.props.create ? (
                        <div>
                            <Form.Group controlId="emailRegisterHoneyDate">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email" placeholder="Введите  email" value={this.state.email} onChange={this.handleChange.bind(this, 'email')}/>
                            </Form.Group>
                            <Form.Group controlId="passwordRegisterHoneyDate">
                                <Form.Label>Пароль:</Form.Label>
                                <Form.Control type="password" placeholder="Введите пароль" value={this.state.password} onChange={this.handleChange.bind(this, 'password')}/>
                            </Form.Group>
                            <Form.Group controlId="confirmPasswordRegisterHoneyDate">
                                <Form.Label>Подтверждение пароля:</Form.Label>
                                <Form.Control type="password" placeholder="Подтвердите пароль" value={this.state.passwordConfirm} onChange={this.handleChange.bind(this, 'passwordConfirm')}/>
                            </Form.Group>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </Form>
            </div>
        );
    }
}
