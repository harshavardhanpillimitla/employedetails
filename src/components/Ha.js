import React,{ Component } from 'react';
import Timings from './Timings';

import Employe from'./Employe';

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



			<div style={contents}>
			<div  className="employe" style={comp}>
			<p id="abc" className="alpha"> <u><b>EMPLOYEE NAMES</b></u></p>
			<ol>

			<Employe list={this.props.lis} addState={this.addState} />
			</ol>
			</div>

			<div style={comp}> 
			<div style={sticky}>

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
			</div>
			</div>
			</div>
			
	


			);




	}





}
const contents={
	display:'flex',
	
}
const sticky={

	  position: 'sticky',
      top: '0',
      background:'grey'
}

 





  


const comp={

marginLeft:'90px'



  
}






export default Ha;

