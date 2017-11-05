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
		    	<div key={i} className="row">
		            <div className="col-sm-2 col-2 text-left">
		              <p>{ilmonnut.fname}</p>
		            </div>
		            <div className="col-sm-3 col-3 text-left">
		              <p>{ilmonnut.sname}</p>
		            </div>
		            <div className="col-sm-4 col-4 text-left">
		              <p>{ilmonnut.jarjesto}</p>
		            </div>
		            <div className="col-sm-4 col-4 text-left">
		              <p>{ilmonnut.alterego}</p>
		            </div>
		        </div>
		    )
		})
		return (
			<div>
				{ilmonneet}
			</div>
		)
	}

}

export default Ilmonneet