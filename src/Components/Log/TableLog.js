import React from 'react';
import {Table, Button, Modal, Form, Col, Row} from 'react-bootstrap';
import {createUser, getCollection, updateDocumentInCollection, userJson} from "../../Help/Help";

export default class App extends React.Component{
    /** ====================================================================================================
     *              Main
     =====================================================================================================*/
    constructor (props, context) {
        super(props, context);
        this.state = {
            log: [],
            errorMessage: '',
            searchText: ''
        };
    }
    componentDidMount() {
        this.getUsers();
    }
    getUsers(){
        getCollection('log').then( r => {
            r.sort(function(a,b){
                return new Date(b.dateCreation) - new Date(a.dateCreation);
            });
            this.setState({log: r, errorMessage: ''});
        }).catch( e => {
            this.setState({errorMessage: 'Error'});
        });
    };
    /*** ================================================================================
     *          Handle
     * ================================================================================*/
    handleSearch = (e) => {
        let text = e.target.value;

        const log = this.state.log.filter(function (el) {
            return el.state.includes(text);
        });
        this.setState({searchText: text, log: log});
    };
    /*** ================================================================================
     *          Methods
     * ================================================================================*/

    /** ====================================================================================================
     *              Render
     =====================================================================================================*/
    render(){
        return (
            <div>
                <Row>
                    <Col>
                        <div className={"TableAutoErrorMsg"}>{this.state.errorMessage}</div>
                        <Form.Group controlId="3">
                            <Form.Label>Search:</Form.Label>
                            <Form.Control type="text" placeholder="Search" value={this.state.searchText} onChange={this.handleSearch}/>
                        </Form.Group>
                    </Col>
                </Row>
                <div className={"TableScroll"}>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>dateCreation</th>
                            <th>text</th>
                            <th>state</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.log.map( (u, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <th>{u.dateCreation}</th>
                                <th>{u.text}</th>
                                <th>{JSON.stringify(u.state)}</th>
                            </tr>
                        ))}
                        </tbody>
                    </Table>


                </div>
            </div>
        );
    }
}
