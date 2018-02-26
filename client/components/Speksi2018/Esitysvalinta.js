import React, { Component } from 'react'

class Esitysvalinta extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let esitykset = this.props.esitykset.map((esitys, i) => {
            let tilaa = '';
            let esitystd;
            if (esitys.bookingCount < 100){
                tilaa = "Tilaa";
                esitystd = (
                    <tr key={i}>
                        <td style={{cursor:'pointer'}} 
                                onClick={() => this.props.toggleUusiVarausModal(esitys)}>
                                {esitys.name}
                        </td>
                        <td style={{cursor:'pointer'}} 
                                onClick={() => this.props.toggleUusiVarausModal(esitys)}>
                                <i>{tilaa}</i>
                        </td> 
                    </tr>
                )
            }
            else if(esitys.bookingCount < 130) {
                tilaa = "Lähes täynnä";
                esitystd = (
                    <tr key={i}>
                        <td style={{cursor:'pointer'}} 
                                onClick={() => this.props.toggleUusiVarausModal(esitys)}>
                                {esitys.name}
                        </td>
                        <td style={{cursor:'pointer'}} 
                                onClick={() => this.props.toggleUusiVarausModal(esitys)}>
                                <i>{tilaa}</i>
                        </td> 
                    </tr>
                )
            }
            else {
                tilaa = "Täynnä";
                esitystd = (
                    <tr key={i}>
                        <td style={{cursor:'not-allowed'}}>
                            {esitys.name}
                        </td>
                        <td style={{cursor:'not-allowed'}}>
                                <i>{tilaa}</i>
                        </td>
                    </tr>
                )
            }

            return (
                    {esitystd}  
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