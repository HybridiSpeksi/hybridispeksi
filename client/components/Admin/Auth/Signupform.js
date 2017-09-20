import React, { Component } from 'react';

class Signupform extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-auto">
                        <h3>Luo tunnukset admin-paneeliin</h3>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <form onSubmit={this.props.handleSubmit} className="col-sm-5">

                        <div className="form-group">
                            <label htmlFor="fnameInput">Etunimi</label>
                            <input name="fname" type="text" onChange={this.props.handleChange} value={this.props.fname} className="form-control" id="fnameInput" placeholder="Etunimi" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="snameInput">Sukunimi</label>
                            <input name="sname" type="text" onChange={this.props.handleChange} value={this.props.sname} className="form-control" id="snameInput" placeholder="Sukunimi" />
                        </div>


                        <div className="form-group">
                            <label htmlFor="emailInput">Sähköposti</label>
                            <input name="email" type="email" onChange={this.props.handleChange} value={this.props.email} className="form-control" id="emailInput" placeholder="Sähköpostiosoite" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="passwordInput">Salasana</label>
                            <input name="password" type="password" onChange={this.props.handleChange} value={this.props.password} className="form-control" id="passwordInput" placeholder="Salasana" />
                        </div>
                        <button className="btn btn-default" type="submit">Submit</button>
                        <button inputMode="numeric" type="button" className="btn btn-default" onClick={this.props.handleChange} name="authState" value={0}>Minulla on jo tunnus, kirjaudu sisään</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signupform;