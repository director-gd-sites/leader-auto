import React from 'react';
import {Form, Row, Col} from 'react-bootstrap';
import {fire} from "../../Firebase/Firebase";
import {userJson} from "../../Help/Help";

export default class App extends React.Component{
    /** ====================================================================================================
     *              Main
     =====================================================================================================*/
    constructor (props, context) {
        super(props, context);
        this.state = {
            showAdd: false,
            errorMessage: '',

            showErrorModal: false,

            uid: '',
            fullName: '',
            carBrand: '',
            VIN: '',
            purchaseDate: '',
            auctionPrice: '',
            insurance: '',
            dateOfPayment: '',
            deliveryAmount: '',
            deliveryPaymentDate: '',
            buttonCost: '',
            dateOfPaymentButton: '',
            photoUSA: '',
            photoPortUkraine: '',
            release: false,
            complexCost: '',
            dateOfPaymentComplex: '',
            line: '',
            container: '',
            arrivalDate: '',
            totalAmount: '',
            notes: '',

            progressphotoUSA: 0,
            progressphotoPortUkraine: 0,
        };
    }
    componentDidMount() {
        if (this.props.change){
            // console.log(this.props.auto);
            this.setState({
                uid: this.props.auto.uid,
                id: this.props.auto.id,
                carBrand: this.props.auto.carBrand,
                VIN: this.props.auto.VIN,
                purchaseDate: this.props.auto.purchaseDate,
                auctionPrice: this.props.auto.auctionPrice,
                insurance: this.props.auto.insurance,
                dateOfPayment: this.props.auto.dateOfPayment,
                deliveryAmount: this.props.auto.deliveryAmount,
                deliveryPaymentDate: this.props.auto.deliveryPaymentDate,
                buttonCost: this.props.auto.buttonCost,
                dateOfPaymentButton: this.props.auto.dateOfPaymentButton,
                photoUSA: this.props.auto.photoUSA,
                photoPortUkraine: this.props.auto.photoPortUkraine,
                release: this.props.auto.release,
                complexCost: this.props.auto.complexCost,
                dateOfPaymentComplex: this.props.auto.dateOfPaymentComplex,
                line: this.props.auto.line,
                container: this.props.auto.container,
                arrivalDate: this.props.auto.arrivalDate,
                totalAmount: this.props.auto.totalAmount,
                notes: this.props.auto.notes,
            })
        }
    }

    handleChange = (type, e) => {
        this.setState({uid: this.props.user.uid, fullName: this.props.user.name});
        switch (type) {
            case 'carBrand':
                this.setState({carBrand: e.target.value});
                this.props.returnValues({...this.state, carBrand: e.target.value});
                return;
            case 'VIN':
                this.setState({VIN: e.target.value});
                this.props.returnValues({...this.state, VIN: e.target.value});
                return;
            case 'purchaseDate':
                this.setState({purchaseDate: e.target.value});
                this.props.returnValues({...this.state, purchaseDate: e.target.value});
                return;
            case 'auctionPrice':
                this.setState({auctionPrice: e.target.value});
                this.props.returnValues({...this.state, auctionPrice: e.target.value});
                return;
            case 'insurance':
                this.setState({insurance: e.target.value});
                this.props.returnValues({...this.state, insurance: e.target.value});
                return;
            case 'dateOfPayment':
                this.setState({dateOfPayment: e.target.value});
                this.props.returnValues({...this.state, dateOfPayment: e.target.value});
                return;
            case 'deliveryAmount':
                this.setState({deliveryAmount: e.target.value});
                this.props.returnValues({...this.state, deliveryAmount: e.target.value});
                return;
            case 'deliveryPaymentDate':
                this.setState({deliveryPaymentDate: e.target.value});
                this.props.returnValues({...this.state, deliveryPaymentDate: e.target.value});
                return;
            case 'buttonCost':
                this.setState({buttonCost: e.target.value});
                this.props.returnValues({...this.state, buttonCost: e.target.value});
                return;
            case 'dateOfPaymentButton':
                this.setState({dateOfPaymentButton: e.target.value});
                this.props.returnValues({...this.state, dateOfPaymentButton: e.target.value});
                return;
            case 'photoUSA':
                if (e.target.files[0]) {
                    var file = e.target.files[0];
                    var path = 'photoUSA/' + this.props.user.uid + "_" + new Date().getTime() + file.name;
                    fire.storage().ref().child(path).put(file).on('state_changed',
                        (snapshot) => {
                            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                            this.setState({progressphotoUSA: progress});
                        },
                        (error) => {
                            console.log(error);
                        },
                        () => {
                            fire.storage().ref().child(path).getDownloadURL().then(url => {
                                this.setState({photoUSA: url});
                                this.props.returnValues({...this.state, photoUSA: url});
                            })
                        });
                }
                return;
            case 'photoPortUkraine':
                if (e.target.files[0]) {
                    var file = e.target.files[0];
                    var path = 'photoPortUkraine/' + this.props.user.uid + "_" + new Date().getTime() + file.name;
                    fire.storage().ref().child(path).put(file).on('state_changed',
                        (snapshot) => {
                            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                            this.setState({progressphotoPortUkraine: progress});
                        },
                        (error) => {
                            console.log(error);
                        },
                        () => {
                            fire.storage().ref().child(path).getDownloadURL().then(url => {
                                this.setState({photoPortUkraine: url});
                                this.props.returnValues({...this.state, photoPortUkraine: url});
                            })
                        });
                }
                return;
            case 'release':
                this.setState({release: e.target.checked});
                this.props.returnValues({...this.state, release: e.target.checked});
                return;
            case 'complexCost':
                this.setState({complexCost: e.target.value});
                this.props.returnValues({...this.state, complexCost: e.target.value});
                return;
            case 'dateOfPaymentComplex':
                this.setState({dateOfPaymentComplex: e.target.value});
                this.props.returnValues({...this.state, dateOfPaymentComplex: e.target.value});
                return;
            case 'line':
                this.setState({line: e.target.value});
                this.props.returnValues({...this.state, line: e.target.value});
                return;
            case 'container':
                this.setState({container: e.target.value});
                this.props.returnValues({...this.state, container: e.target.value});
                return;
            case 'arrivalDate':
                this.setState({arrivalDate: e.target.value});
                this.props.returnValues({...this.state, arrivalDate: e.target.value});
                return;
            case 'totalAmount':
                this.setState({totalAmount: e.target.value});
                this.props.returnValues({...this.state, totalAmount: e.target.value});
                return;
            case 'notes':
                this.setState({notes: e.target.value});
                this.props.returnValues({...this.state, notes: e.target.value});
                return;
            case 'uid':
                try {
                    var value = e.target.value.split('ID:');
                    this.setState({uid: value[1]});
                    this.props.returnValues({...this.state, uid: value[1]});
                    return;
                }catch (e) {
                    this.setState({uid: ''});
                    this.props.returnValues({...this.state, uid: ''});
                    return;
                }

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
                <Row>
                    <Col md={6}>
                        <Form.Group controlId="2">
                            <Form.Label>Марка авто:</Form.Label>
                            <Form.Control type="text" placeholder="Введите марку авто" value={this.state.carBrand} onChange={this.handleChange.bind(this, 'carBrand')}/>
                        </Form.Group>
                        <Form.Group controlId="3">
                            <Form.Label>VIN:</Form.Label>
                            <Form.Control type="text" placeholder="Введите VIN" value={this.state.VIN} onChange={this.handleChange.bind(this, 'VIN')}/>
                        </Form.Group>
                        <Form.Group controlId="4">
                            <Form.Label>Дата покупки:</Form.Label>
                            <Form.Control type="date" placeholder="Введите дату покупки" value={this.state.purchaseDate} onChange={this.handleChange.bind(this, 'purchaseDate')}/>
                        </Form.Group>
                        <Form.Group controlId="5">
                            <Form.Label>Стоимость аукцион:</Form.Label>
                            <Form.Control type="number" placeholder="Введите стоимость" value={this.state.auctionPrice} onChange={this.handleChange.bind(this, 'auctionPrice')}/>
                        </Form.Group>
                        <Form.Group controlId="6">
                            <Form.Label>Стоимость страховки:</Form.Label>
                            <Form.Control type="number" placeholder="Введите стоимость" value={this.state.insurance} onChange={this.handleChange.bind(this, 'insurance')}/>
                        </Form.Group>
                        <Form.Group controlId="7">
                            <Form.Label>Дата оплаты:</Form.Label>
                            <Form.Control type="date" placeholder="Введите дату" value={this.state.dateOfPayment} onChange={this.handleChange.bind(this, 'dateOfPayment')}/>
                        </Form.Group>
                        <Form.Group controlId="8">
                            <Form.Label>Сумма доставки:</Form.Label>
                            <Form.Control type="number" placeholder="Введите сумму" value={this.state.deliveryAmount} onChange={this.handleChange.bind(this, 'deliveryAmount')}/>
                        </Form.Group>
                        <Form.Group controlId="9">
                            <Form.Label>Дата оплаты доставки:</Form.Label>
                            <Form.Control type="date" placeholder="Введите дату" value={this.state.deliveryPaymentDate} onChange={this.handleChange.bind(this, 'deliveryPaymentDate')}/>
                        </Form.Group>
                        <Form.Group controlId="10">
                            <Form.Label>Стоимость кнопки:</Form.Label>
                            <Form.Control type="number" placeholder="Введите стоимость" value={this.state.buttonCost} onChange={this.handleChange.bind(this, 'buttonCost')}/>
                        </Form.Group>
                        <Form.Group controlId="11">
                            <Form.Label>Дата оплаты кнопки:</Form.Label>
                            <Form.Control type="date" placeholder="Введите дату" value={this.state.dateOfPaymentButton} onChange={this.handleChange.bind(this, 'dateOfPaymentButton')}/>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        {this.props.errorMessage === 'Выбирите пользователя!' && (
                            <Form.Group controlId="00100" className={"SelectUserTableHeader"}>
                                <Form.Label>Выберите пользователя</Form.Label>
                                <Form.Control as="select" onChange={this.handleChange.bind(this, 'uid')}>
                                    <option key={0}>Не выбран</option>
                                    {this.props.users.map( (u,index) => (
                                        <option
                                            key={index + 1}
                                        >{u.name + "    Почта:" + u.email + " ID:" + u.uid }</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                        )}
                        <Form.Group controlId="12">
                            <Form.Label>Загрузите фото USA:</Form.Label>
                            <Form.Control
                                type="file"
                                placeholder="Загрузите фото USA"
                                onChange={this.handleChange.bind(this, 'photoUSA')}
                            />
                        </Form.Group>
                        <Form.Group controlId="13">
                            <Form.Label>Загрузите фото порт Украина:</Form.Label>
                            <Form.Control
                                type="file"
                                placeholder="Загрузите фото порт Украина"
                                onChange={this.handleChange.bind(this, 'photoPortUkraine')}/>
                        </Form.Group>
                        <Form.Group controlId="14">
                            <Form.Label>Релиз:</Form.Label>
                            <Form.Check
                                label="Pелиз (да/нет)"
                                onChange={this.handleChange.bind(this, 'release')}
                                checked={this.state.release}
                            />
                        </Form.Group>
                        <Form.Group controlId="15">
                            <Form.Label>Стоимость комплекс:</Form.Label>
                            <Form.Control type="number" placeholder="Введите стоимость" value={this.state.complexCost} onChange={this.handleChange.bind(this, 'complexCost')}/>
                        </Form.Group>
                        <Form.Group controlId="16">
                            <Form.Label>Дата оплаты комплекс:</Form.Label>
                            <Form.Control type="date" placeholder="Введите дату" value={this.state.dateOfPaymentComplex} onChange={this.handleChange.bind(this, 'dateOfPaymentComplex')}/>
                        </Form.Group>
                        <Form.Group controlId="17">
                            <Form.Label>Линия:</Form.Label>
                            <Form.Control type="text" placeholder="Введите линию" value={this.state.line} onChange={this.handleChange.bind(this, 'line')}/>
                        </Form.Group>
                        <Form.Group controlId="18">
                            <Form.Label>Контейнер:</Form.Label>
                            <Form.Control type="text" placeholder="Введите контейнер" value={this.state.container} onChange={this.handleChange.bind(this, 'container')}/>
                        </Form.Group>
                        <Form.Group controlId="19">
                            <Form.Label>Дата прибытия:</Form.Label>
                            <Form.Control type="date" placeholder="Введите дату" value={this.state.arrivalDate} onChange={this.handleChange.bind(this, 'arrivalDate')}/>
                        </Form.Group>
                        <Form.Group controlId="20">
                            <Form.Label>Общая сумма:</Form.Label>
                            <Form.Control type="number" placeholder="Введите сумму" value={this.state.totalAmount} onChange={this.handleChange.bind(this, 'totalAmount')}/>
                        </Form.Group>
                        <Form.Group controlId="21">
                            <Form.Label>Примечания:</Form.Label>
                            <Form.Control type="text" placeholder="Введите примечания" value={this.state.notes} onChange={this.handleChange.bind(this, 'notes')}/>
                        </Form.Group>
                    </Col>
                </Row>
            </div>
        );
    }
}
