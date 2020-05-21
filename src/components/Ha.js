import React,{ Component } from 'react';
import Timings from './Timings';

import Employe from'./Employe';
import Logo from './emp.png'
class Ha extends Component {
	state = {


		id: "",
        real_name: "",
        tz: '',
        activity_periods: []




	}







		addState = (sta) => {

		
		
	
		this.setState(sta);





		



	}






	render() {
		const abc=this.state;
		
		

		
	
	



		return (



			<div style={contents} id="l1">
			<div  className="employe" style={comp}>
			<p id="abc" className="alpha"> <u><b>EMPLOYEE NAMES</b></u></p>
			<ol>

			<Employe list={this.props.lis} addState={this.addState} />
			</ol>
			</div>

			<div style={comp}> 
			<div style={sticky} >

			<p id="workinfo"><u><b>WORKING TIMING</b></u></p>
			<table >
			<thead>
			<th>month</th>
			
			<th>startdate</th>
			<th>year</th>
			
			<th>from</th>
			<th>month</th>
			
			<th>startdate</th>
			<th>year</th>
			
			<th>to</th>
			</thead>
			<tbody>

			<Timings  act_period={this.state} />
			</tbody>
			
			</table>
			<img id="image" src={Logo}></img>
			
			<p style={para}>{this.state.real_name}</p>
			</div>
			</div>

			</div>
			
	


			);




	}





}
const contents={
	display:'flex',
	marginTop:'90px',
	background:'#1EADE6',

	borderColor:'#FFFFFF'

	
}
const sticky={

	  position: 'sticky',
      top: '0',
      background:'#076EE2',

      opacity: '1',
      borderRadius:'10%'
}

 





  


const comp={

marginLeft:'90px'



  
}
const para={




  
}






export default Ha;

