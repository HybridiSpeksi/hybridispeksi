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
                            <td disabled>{esitys.name}</td> :
                            <td onClick={this.props.toggleUusiVarausModal}>{esitys.name}</td>}
                    <td><i>{tilaa}</i></td>
                </tr>
            )
        })
        console.log(this.props.esitykset)
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