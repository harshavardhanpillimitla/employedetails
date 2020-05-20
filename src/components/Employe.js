import React,{ Component } from 'react';
import Timings from './Timings';


class Employe extends Component {
	state = {


		



	}









	render() {
		



		return (
			
			this.props.list.map((emp) => (
			<li>

			<p  id="aa" onClick= {this.props.addState.bind(this,emp) }> {emp.id}&nbsp;&nbsp;<u>{emp.real_name}</u></p>
			</li>



			


			))
		
	


			);




	}





}



export default Employe;

