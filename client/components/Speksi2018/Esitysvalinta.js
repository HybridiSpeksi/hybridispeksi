import React, { Component } from 'react'

class Esitysvalinta extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let esitykset = this.props.esitykset.map((esitys, i) => {
            let tilaa = '';
            if (esitys.bookingCount < 100){
                tilaa = "Tilaa";
            }
            else if(esitys.bookingCount < 130) {
                tilaa = "Lähes täynnä";
            }
            else {
                tilaa = "Täynnä";
            }
            return (
                <tr key={i}>
                        { tilaa === "Täynnä" ? 
                            <td style={{cursor:'not-allowed'}} onMouseOver={this.value == "Osta liput"}>{esitys.name}</td> :
                            <td style={{cursor:'pointer'}} onClick={() => this.props.toggleUusiVarausModal(esitys)} onMouseOver={this.innerHTML == "Osta liput"}>{esitys.name}</td>}
                    <td><i>{tilaa}</i></td>
                </tr>
            )
        })
        return (
            <div>
                <table className="table table-hover table-sm">
                    <tbody>
                        {esitykset}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Esitysvalinta