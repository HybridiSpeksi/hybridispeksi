import React, { Component } from 'react'

import ajax from '../Utils/Ajax';

class Ilmonneet extends Component {

	constructor(props){
		super(props);
		this.state = {
			ilmonneet: []
		}
	}

	componentDidMount() {
		ajax.sendGet('/ilmo/fantasiasitsit2017')
        .then(_data => {
            this.setState({ilmonneet: _data.data});
            console.log(_data);
        })
        .catch(err => {
            console.log(err)
        })
	}

	render() {
		let ilmonneet = this.state.ilmonneet.map((ilmonnut, i) => {
		    return (
		    	<tr key={i}>
		            <td>{ilmonnut.fname} {ilmonnut.sname}</td>
		            <td>{ilmonnut.jarjesto}</td>
		        	<td>{ilmonnut.alterego}</td>
		        </tr>
		    )
		})
		return (
			<table className="table table-striped">
				<thead>
					<tr>
						<th>Nimi</th>
						<th>Speksi</th>
						<th>Alterego</th>
					</tr>
				</thead>
				<tbody>
					{ilmonneet}
				</tbody>
			</table>
		)
	}

}

export default Ilmonneet