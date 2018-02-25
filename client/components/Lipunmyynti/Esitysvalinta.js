import React, { Component } from 'react'

class Esitysvalinta extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let esitykset = this.props.esitykset.map((t, i) => {
            let tilaa = '';
            if (t.bookingCount < 100){
                tilaa = "Tilaa";
            }
            else if(t.bookingCount < 130) {
                tilaa = "Lähes täynnä";
            }
            else {
                tilaa = "Täynnä";
            }
            <tr key={i}>
                <td className="table-inverse">
                    { tilaa === "Täynnä" ? <button disabled type="button" className="btn btn-secondary" onClick={this.props.toggleUusiVarausModal}>t.name</button> : <button type="button" className="btn btn-secondary" onClick={this.props.toggleUusiVarausModal}>t.name</button>}
                </td>
                <td className="table-inverse"><i>{tilaa}</i></td>
            </tr>
        })
        console.log(this.props.esitykset)
        return (
            <div>
                <table className="table">
                    <tbody>
                    <tr>
                        <td>TÖTTÖTÖRÖRÖ</td>
                    </tr>
                        {esitykset}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Esitysvalinta