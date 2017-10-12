import React, { Component } from 'react'
import { Text, Radio } from '../../Utils/Form';
import utils from '../../Utils/Utils'
import Modal from '../../Utils/Modal';
import ajax from '../../Utils/Ajax';
import Messages from '../../Utils/Messages';

class Uusijasen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            messages: [],
            warnings: [],
            errors: [],
            jasen: {
                fname: "",
                sname: "",
                email: "",
                hometown: "",
                memberOfTyy: true
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.tallennaJasen = this.tallennaJasen.bind(this);
    }

    handleChange(e) {
        let _value = e.target.value;
        if (e.target.name === "memberOfTyy") {
            _value = utils.parseBoolean(_value)
        }
        let _jasen = this.state.jasen;
        _jasen[e.target.name] = _value;
        this.setState({ jasen: _jasen })
    }

    tallennaJasen() {
        if (this.state.jasen.fname === ""
            || this.state.jasen.sname === ""
            || this.state.jasen.email === ""
            || this.state.jasen.hometown === "") {
            this.setState({
                warnings: [{
                    header: "Kaikki kentät täytettävä!",
                    text: ""
                }]
            })
            setTimeout(() => {
                this.setState({ warnings: [] })
            }, 2000)
        } else {

            ajax.sendPut('/admin/h/jasenrekisteri', this.state.jasen)
                .then(data => {
                    console.log(data);
                    this.props.jasenLisatty();
                    $("#uusijasen-modal").modal('hide')
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!this.state.jasen._id && this.state.jasen._id !== nextProps.jasen._id) {
            let _jasen = nextProps.jasen;
            _jasen.hometown = "";
            _jasen.memberOfTyy = true;
            this.setState({jasen: _jasen})
        }
    }

    render() {
        return (
            <Modal
                modalTitle="Lisää uusi jäsen jäsenrekisteriin"
                closeText="Peruuta"
                saveText="Lisää jäsen"
                handleSave={this.tallennaJasen}
                modalId="uusijasen-modal" >
                <div className="container-fluid">

                    <div className="row">
                        <div className="col">
                            <Text
                                id="fname-input"
                                autoFocus="true"
                                name="fname"
                                onChange={this.handleChange}
                                value={this.state.jasen.fname}
                                placeholder="Etunimet"
                            />
                        </div>
                        <div className="col">
                            <Text
                                id="sname-input"
                                name="sname"
                                onChange={this.handleChange}
                                value={this.state.jasen.sname}
                                placeholder="Sukunimi" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Text
                                id="email-input"
                                name="email"
                                onChange={this.handleChange}
                                value={this.state.jasen.email}
                                placeholder="Sähköposti" />

                        </div>
                        <div className="col">
                            <Text
                                id="hometown-input"
                                name="hometown"
                                onChange={this.handleChange}
                                value={this.state.jasen.hometown}
                                placeholder="Kotikunta" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Radio
                                options={[
                                    { label: "TYYn jäsen", value: true },
                                    { label: "Ei TYYn jäsen", value: false }
                                ]}
                                value={this.state.jasen.memberOfTyy}
                                name="memberOfTyy"
                                onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Messages
                                messages={this.state.messages}
                                warnings={this.state.warnings}
                                errors={this.state.errors} />
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default Uusijasen