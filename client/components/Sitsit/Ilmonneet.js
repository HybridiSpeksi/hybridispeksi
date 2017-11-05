import React, { Component } from 'react'

import ajax from '../Utils/Ajax';

class Ilmonneet extends Component {

	constructor(props){
		super(props);
		this.state = {
			ilmonneet: [],
			hsCount: 0,
			ioCount: 0
		}
		this.countSpeksit = this.countSpeksit.bind(this);
	}

	componentDidMount() {
		ajax.sendGet('/ilmo/fantasiasitsit2017')
        .then(_data => {
			this.setState({ilmonneet: _data.data});
			this.countSpeksit();
            console.log(_data);
        })
        .catch(err => {
            console.log(err)
        })

        
	}

	countSpeksit() {
		let hs = 0;
        let io = 0;
        for(var i = 0; i < this.state.ilmonneet.length; i++){
            if(this.state.ilmonneet[i].jarjesto === "HybridiSpeksi") {
                hs = hs + 1;
                console.log({hs});
            }
            else {
                io = io + 1;
                console.log({io});
            }
		}
		this.setState({hsCount: hs, ioCount: io})
	}

	render() {
		let ilmonneet = this.state.ilmonneet.map((ilmonnut, i) => {
		    return (
		    	<tr key={i}>
		    		<td>{i + 1}</td>
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
						<th>#</th>
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