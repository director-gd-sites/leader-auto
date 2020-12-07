import React from 'react';
import {Row, Col, Form, Button, Tab} from 'react-bootstrap';
import TableAuto from "../Components/Auto/TableAuto";
import {getCollection, getCollectionWhereKeyValue, userJson} from "../Help/Help";
import {fire} from "../Firebase/Firebase";

export default class App extends React.Component{
    /** ====================================================================================================
     *              Main
     =====================================================================================================*/
    constructor (props, context) {
        super(props, context);
        this.state = {
            currentUser: userJson,
            errorMessage: '',
            signedIn: false
        };
    }
    componentDidMount() {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                getCollectionWhereKeyValue('users', 'uid', user.uid).then( res => {
                    if (localStorage.getItem('leaderAutoPosition') === 'User'){
                        this.setState({currentUser: res[0], signedIn: true});
                    }
                }).catch( e => {
                    this.setState({signedIn: false});
                });
            } else {
                this.setState({signedIn: false});
            }
        });
    }
    /** ====================================================================================================
     *              Render
     =====================================================================================================*/
    render(){
        return (
            <div className={"UserPageContainer"}>
                {this.state.signedIn && (
                    <div>
                        <Row className={"TopHeaderContainer"}>
                            <Col>
                                <h3>{"Добро пожаловать " + this.state.currentUser.name}</h3>
                                <h6>{"Ваш баланс " + this.state.currentUser.balance}</h6>
                            </Col>
                        </Row>
                        <TableAuto
                            userPage={true}
                        />
                    </div>
                )}
            </div>
        );
    }
}
