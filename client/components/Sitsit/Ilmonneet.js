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
		ajax.sendGet('/ilmo')
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
		    	<div className="row">
		            <div className="col-sm-4">
		              <p>{ilmonnut.fname}</p>
		            </div>
		            <div className="col-sm-4">
		              <p>{ilmonnut.sname}</p>
		            </div>
		            <div className="col-sm-4">
		              <p>{ilmonnut.jarjesto}</p>
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