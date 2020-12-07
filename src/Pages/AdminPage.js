import React from 'react';
import {Row, Col, Tabs, Tab} from 'react-bootstrap';
import TableUsers from "../Components/User/TableUsers";
import TableAuto from "../Components/Auto/TableAuto";
import TableLog from "../Components/Log/TableLog";
import {getCollectionWhereKeyValue} from "../Help/Help";
import {fire} from "../Firebase/Firebase";

function jsonConcat(o1, o2) {
    for (var key in o2) {
        o1[key] = o2[key];
    }
    return o1;
}

export default class App extends React.Component{
    /** ====================================================================================================
     *              Main
     =====================================================================================================*/
    constructor (props, context) {
        super(props, context);
        this.state = {
            users: [],
            errorMessage: '',
            signedIn: false
        };
    }
    componentDidMount() {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                getCollectionWhereKeyValue('users', 'uid', user.uid).then( res => {
                    if (localStorage.getItem('leaderAutoPosition') === 'Admin'){
                        this.setState({signedIn: true});
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
            <div className={"AdminPageContainer"}>
                {this.state.signedIn && (
                    <Row>
                        <Col md={12}>
                            <Tabs defaultActiveKey="users" id="uncontrolled-tab-example" transition={false}>
                                <Tab eventKey="users" title="Пользователи">
                                    <TableUsers/>
                                </Tab>
                                <Tab eventKey="table" title="Автомобили">
                                    <TableAuto/>
                                </Tab>
                                {/*<Tab eventKey="Log" title="Log">*/}
                                {/*    <TableLog/>*/}
                                {/*</Tab>*/}
                            </Tabs>
                        </Col>
                    </Row>
                )}
            </div>
        );
    }
}
