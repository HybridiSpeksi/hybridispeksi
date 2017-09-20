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
                    <form onSubmit={this.props.handleSubmit} className="col-sm-5">
                        
                        <div className="form-group">
                            <label htmlFor="emailInput">Sähköposti</label>
                            <input name="email" type="email" onChange={this.props.handleChange} value={this.props.email} className="form-control" id="emailInput" placeholder="Sähköpostiosoite" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="passwordInput">Salasana</label>
                            <input name="password" type="password" onChange={this.props.handleChange} value={this.props.password} className="form-control" id="passwordInput" placeholder="Salasana" />
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Loginform;