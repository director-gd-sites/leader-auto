import React from 'react';
import {Navbar, Nav, Form, Button} from 'react-bootstrap';
import {fire} from "../Firebase/Firebase";
import {getCollectionWhereKeyValue, userJson} from "../Help/Help";

export default class App extends React.Component{
    /** ====================================================================================================
     *              Main
     =====================================================================================================*/
    constructor (props, context) {
        super(props, context);
        this.state = {
            currentUser: userJson,
            signedIn: false,
        };
    }
    componentDidMount() {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({signedIn: true});
                getCollectionWhereKeyValue('users', 'uid', user.uid).then( res => {
                    this.setState({currentUser: res[0]});
                }).catch( e => {
                    this.setState({signedIn: false});
                });

            } else {
                this.setState({signedIn: false});
            }
        });
    }
    signedOut = () => {
        fire.auth().signOut().then(function() {
            // Sign-out successful.
            localStorage.setItem('leaderAutoPosition', '');
            localStorage.setItem('leaderAutoUid', '');
            window.location.assign('/');
        }).catch(function(error) {
            // An error happened.
        });
    };
    signedCabinet = () => {
        switch (localStorage.getItem('leaderAutoPosition')) {
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
    };
    /** ====================================================================================================
     *              Render
     =====================================================================================================*/
    render(){
        return (
            <Navbar bg="light" className={"NavbarContainer"}>
                <Navbar.Brand href="/">Leader-Auto</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/calc">Калькулятор</Nav.Link>
                        {/*<Nav.Link href="#">Ссылка</Nav.Link>*/}
                        {/*<NavDropdown title="Ссылка1" id="basic-nav-dropdown">*/}
                        {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Divider />*/}
                        {/*    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                        {/*</NavDropdown>*/}
                    </Nav>
                    {this.state.signedIn && (
                        <Form inline>
                            {/*<FormControl type="text" placeholder="Поиск" className="mr-sm-2" />*/}
                            <Button variant="outline-primary" onClick={() => this.signedCabinet()} className={"NavBtnCabinet"}>Личный кабинет</Button>
                            <Button variant="primary" onClick={() => this.signedOut()}>Выйти</Button>
                        </Form>
                    )}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
