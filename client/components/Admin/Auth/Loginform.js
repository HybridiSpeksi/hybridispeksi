import React, { Component } from 'react';

class Loginform extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-auto">
                        <h3>Kirjaudu admin-paneeliin</h3>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <form onSubmit={this.props.handleSubmit} className="col-sm-5" name="login">
                        
                        <div className="form-group">
                            <label htmlFor="emailInput">Sähköposti</label>
                            <input autoFocus="true" name="email" type="email" onChange={this.props.handleChange} value={this.props.email} className="form-control" id="emailInput" placeholder="Sähköpostiosoite" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="passwordInput">Salasana</label>
                            <input name="password" type="password" onChange={this.props.handleChange} value={this.props.password} className="form-control" id="passwordInput" placeholder="Salasana" />
                        </div>

                        <button className="btn btn-default" type="submit">Kirjaudu</button>
                        <button inputMode="numeric" type="button" className="btn btn-default" onClick={this.props.handleChange} name="authState" value={1}>Hae tunnusta</button>
                    </form>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-5">
                        {this.props.messages}
                    </div>
                </div>
            </div>
        );
    }
}

export default Loginform;