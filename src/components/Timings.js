import React,{ Component } from 'react';


class Timings extends Component{


render(){

	return  (this.props.act_period.activity_periods.map((act) => 
		(<tr>{act.start_time.replace("  "," ").split(" ").map((a) =>(
			<td>{a}</td>



			))



		                              
	}
	{act.start_time.replace("  "," ").split(" ").map((a) =>(
			<td>{a}</td>



			))



		                              
	}
	

	
            



			
    </tr>

			                                          ))
		






		);


}


}


export default Timings;