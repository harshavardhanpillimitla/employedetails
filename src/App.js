import React,{ Component } from 'react';

import './App.css';
import Employe from './components/Employe';
import Ha from './components/Ha';



class App extends Component {

  state={
  "ok": true,
  "members": [{
      "id": "W012A3CDE",
      "real_name": "Egon Spengler",
      "tz": "America/Los_Angeles",
      "activity_periods": [{
          "start_time": "Feb 1 2020  1:33PM",
          "end_time": "Feb 1 2020 1:54PM"
        },
        {
          "start_time": "Mar 1 2020  11:11AM",
          "end_time": "Mar 1 2020 2:00PM"
        },
        {
          "start_time": "Mar 16 2020  5:33PM",
          "end_time": "Mar 4 2020 8:02PM"
        }
      ]
    },
    {
      "id": "W07QCRPA4",
      "real_name": "Glinda Southgood",
      "tz": "Asia/Kolkata",
      "activity_periods": [{
          "start_time": "Feb 02 2020  1:33PM",
          "end_time": "Feb 12 2020 1:54PM"
        },
        {
          "start_time": "Mar 02 2020  11:11AM",
          "end_time": "Mar 01 2020 8:02PM"
        },
        {
          "start_time": "Mar 01 2020  5:33PM",
          "end_time": "Mar 01 2020 8:02PM"
        }

      ]
    },
    {
      "id": "W012A3aDE",
      "real_name": "Iron man",
      "tz": "America/Los_Angeles",
      "activity_periods": [{
          "start_time": "Feb 1 2020  1:33PM",
          "end_time": "Feb 1 2020 1:54PM"
        },
        {
          "start_time": "Mar 1 2020  11:11AM",
          "end_time": "Mar 1 2020 2:00PM"
        },
        {
          "start_time": "Mar 16 2020  5:33PM",
          "end_time": "Mar 4 2020 8:02PM"
        }
      ]
    },
    {
      "id": "W07QCaPA4",
      "real_name": "thor",
      "tz": "Asia/Kolkata",
      "activity_periods": [{
          "start_time": "SEP 02 2020  1:33PM",
          "end_time": "OCT 12 2020 1:54PM"
        },
        {
          "start_time": "NOV 02 2020  11:11AM",
          "end_time": "DEC 01 2020 8:02PM"
        },
        {
          "start_time": "JUN 01 2020  5:33PM",
          "end_time": "JUL 01 2020 8:02PM"
        }
        
      ]
    },{
      "id": "W012k3CDE",
      "real_name": "hulk",
      "tz": "America/Los_Angeles",
      "activity_periods": [{
          "start_time": "Feb 1 2020  1:33PM",
          "end_time": "MAR 1 2020 1:54PM"
        },
        {
          "start_time": "Mar 1 2020  11:11AM",
          "end_time": "APR 1 2020 2:00PM"
        },
        {
          "start_time": "july 16 2020  5:33PM",
          "end_time": "aug 4 2020 8:02PM"
        }
      ]
    },
    {
      "id": "W07aCRPA4",
      "real_name": "loki",
      "tz": "Asia/Kolkata",
      "activity_periods": [{
          "start_time": "DEC 02 2020  1:33PM",
          "end_time": "DEC 12 2020 1:54PM"
        },
        {
          "start_time": "jan 02 2020  11:11AM",
          "end_time": "jan 01 2020 8:02PM"
        },
        {
          "start_time": "june 01 2020  5:33PM",
          "end_time": "june 01 2020 8:02PM"
        }
        
      ]
    },
    {
      "id": "W012A3CDE",
      "real_name": "Egon Spengler",
      "tz": "America/Los_Angeles",
      "activity_periods": [{
          "start_time": "Feb 1 2020  1:33PM",
          "end_time": "Feb 1 2020 1:54PM"
        },
        {
          "start_time": "Mar 1 2020  11:11AM",
          "end_time": "Mar 1 2020 2:00PM"
        },
        {
          "start_time": "Mar 16 2020  5:33PM",
          "end_time": "Mar 4 2020 8:02PM"
        }
      ]
    },
    {
      "id": "W07QCRPA4",
      "real_name": "Glinda Southgood",
      "tz": "Asia/Kolkata",
      "activity_periods": [{
          "start_time": "Feb 02 2020  1:33PM",
          "end_time": "Feb 12 2020 1:54PM"
        },
        {
          "start_time": "Mar 02 2020  11:11AM",
          "end_time": "Mar 01 2020 8:02PM"
        },
        {
          "start_time": "Mar 01 2020  5:33PM",
          "end_time": "Mar 01 2020 8:02PM"
        }

      ]
    },
    {
      "id": "W012A3aDE",
      "real_name": "Iron man",
      "tz": "America/Los_Angeles",
      "activity_periods": [{
          "start_time": "Feb 1 2020  1:33PM",
          "end_time": "Feb 1 2020 1:54PM"
        },
        {
          "start_time": "Mar 1 2020  11:11AM",
          "end_time": "Mar 1 2020 2:00PM"
        },
        {
          "start_time": "Mar 16 2020  5:33PM",
          "end_time": "Mar 4 2020 8:02PM"
        }
      ]
    },
    {
      "id": "W07QCaPA4",
      "real_name": "thor",
      "tz": "Asia/Kolkata",
      "activity_periods": [{
          "start_time": "SEP 02 2020  1:33PM",
          "end_time": "OCT 12 2020 1:54PM"
        },
        {
          "start_time": "NOV 02 2020  11:11AM",
          "end_time": "DEC 01 2020 8:02PM"
        },
        {
          "start_time": "JUN 01 2020  5:33PM",
          "end_time": "JUL 01 2020 8:02PM"
        }
        
      ]
    },{
      "id": "W012k3CDE",
      "real_name": "hulk",
      "tz": "America/Los_Angeles",
      "activity_periods": [{
          "start_time": "Feb 1 2020  1:33PM",
          "end_time": "MAR 1 2020 1:54PM"
        },
        {
          "start_time": "Mar 1 2020  11:11AM",
          "end_time": "APR 1 2020 2:00PM"
        },
        {
          "start_time": "july 16 2020  5:33PM",
          "end_time": "aug 4 2020 8:02PM"
        }
      ]
    },
    {
      "id": "W07aCRPA4",
      "real_name": "loki",
      "tz": "Asia/Kolkata",
      "activity_periods": [{
          "start_time": "DEC 02 2020  1:33PM",
          "end_time": "DEC 12 2020 1:54PM"
        },
        {
          "start_time": "jan 02 2020  11:11AM",
          "end_time": "jan 01 2020 8:02PM"
        },
        {
          "start_time": "june 01 2020  5:33PM",
          "end_time": "june 01 2020 8:02PM"
        }
        
      ]
    },{
      "id": "W012A3CDE",
      "real_name": "Egon Spengler",
      "tz": "America/Los_Angeles",
      "activity_periods": [{
          "start_time": "Feb 1 2020  1:33PM",
          "end_time": "Feb 1 2020 1:54PM"
        },
        {
          "start_time": "Mar 1 2020  11:11AM",
          "end_time": "Mar 1 2020 2:00PM"
        },
        {
          "start_time": "Mar 16 2020  5:33PM",
          "end_time": "Mar 4 2020 8:02PM"
        }
      ]
    },
    {
      "id": "W07QCRPA4",
      "real_name": "Glinda Southgood",
      "tz": "Asia/Kolkata",
      "activity_periods": [{
          "start_time": "Feb 02 2020  1:33PM",
          "end_time": "Feb 12 2020 1:54PM"
        },
        {
          "start_time": "Mar 02 2020  11:11AM",
          "end_time": "Mar 01 2020 8:02PM"
        },
        {
          "start_time": "Mar 01 2020  5:33PM",
          "end_time": "Mar 01 2020 8:02PM"
        }

      ]
    },
    {
      "id": "W012A3aDE",
      "real_name": "Iron man",
      "tz": "America/Los_Angeles",
      "activity_periods": [{
          "start_time": "Feb 1 2020  1:33PM",
          "end_time": "Feb 1 2020 1:54PM"
        },
        {
          "start_time": "Mar 1 2020  11:11AM",
          "end_time": "Mar 1 2020 2:00PM"
        },
        {
          "start_time": "Mar 16 2020  5:33PM",
          "end_time": "Mar 4 2020 8:02PM"
        }
      ]
    },
    {
      "id": "W07QCaPA4",
      "real_name": "thor",
      "tz": "Asia/Kolkata",
      "activity_periods": [{
          "start_time": "SEP 02 2020  1:33PM",
          "end_time": "OCT 12 2020 1:54PM"
        },
        {
          "start_time": "NOV 02 2020  11:11AM",
          "end_time": "DEC 01 2020 8:02PM"
        },
        {
          "start_time": "JUN 01 2020  5:33PM",
          "end_time": "JUL 01 2020 8:02PM"
        }
        
      ]
    },{
      "id": "W012k3CDE",
      "real_name": "hulk",
      "tz": "America/Los_Angeles",
      "activity_periods": [{
          "start_time": "Feb 1 2020  1:33PM",
          "end_time": "MAR 1 2020 1:54PM"
        },
        {
          "start_time": "Mar 1 2020  11:11AM",
          "end_time": "APR 1 2020 2:00PM"
        },
        {
          "start_time": "july 16 2020  5:33PM",
          "end_time": "aug 4 2020 8:02PM"
        }
      ]
    },
    {
      "id": "W07aCRPA4",
      "real_name": "loki",
      "tz": "Asia/Kolkata",
      "activity_periods": [{
          "start_time": "DEC 02 2020  1:33PM",
          "end_time": "DEC 12 2020 1:54PM"
        },
        {
          "start_time": "jan 02 2020  11:11AM",
          "end_time": "jan 01 2020 8:02PM"
        },
        {
          "start_time": "june 01 2020  5:33PM",
          "end_time": "june 01 2020 8:02PM"
        }
        
      ]
    },
    {
      "id": "W012A3CDE",
      "real_name": "Egon Spengler",
      "tz": "America/Los_Angeles",
      "activity_periods": [{
          "start_time": "Feb 1 2020  1:33PM",
          "end_time": "Feb 1 2020 1:54PM"
        },
        {
          "start_time": "Mar 1 2020  11:11AM",
          "end_time": "Mar 1 2020 2:00PM"
        },
        {
          "start_time": "Mar 16 2020  5:33PM",
          "end_time": "Mar 4 2020 8:02PM"
        }
      ]
    },
    {
      "id": "W07QCRPA4",
      "real_name": "Glinda Southgood",
      "tz": "Asia/Kolkata",
      "activity_periods": [{
          "start_time": "Feb 02 2020  1:33PM",
          "end_time": "Feb 12 2020 1:54PM"
        },
        {
          "start_time": "Mar 02 2020  11:11AM",
          "end_time": "Mar 01 2020 8:02PM"
        },
        {
          "start_time": "Mar 01 2020  5:33PM",
          "end_time": "Mar 01 2020 8:02PM"
        }

      ]
    },
    {
      "id": "W012A3aDE",
      "real_name": "Iron man",
      "tz": "America/Los_Angeles",
      "activity_periods": [{
          "start_time": "Feb 1 2020  1:33PM",
          "end_time": "Feb 1 2020 1:54PM"
        },
        {
          "start_time": "Mar 1 2020  11:11AM",
          "end_time": "Mar 1 2020 2:00PM"
        },
        {
          "start_time": "Mar 16 2020  5:33PM",
          "end_time": "Mar 4 2020 8:02PM"
        }
      ]
    },
    {
      "id": "W07QCaPA4",
      "real_name": "thor",
      "tz": "Asia/Kolkata",
      "activity_periods": [{
          "start_time": "SEP 02 2020  1:33PM",
          "end_time": "OCT 12 2020 1:54PM"
        },
        {
          "start_time": "NOV 02 2020  11:11AM",
          "end_time": "DEC 01 2020 8:02PM"
        },
        {
          "start_time": "JUN 01 2020  5:33PM",
          "end_time": "JUL 01 2020 8:02PM"
        }
        
      ]
    },{
      "id": "W012k3CDE",
      "real_name": "hulk",
      "tz": "America/Los_Angeles",
      "activity_periods": [{
          "start_time": "Feb 1 2020  1:33PM",
          "end_time": "MAR 1 2020 1:54PM"
        },
        {
          "start_time": "Mar 1 2020  11:11AM",
          "end_time": "APR 1 2020 2:00PM"
        },
        {
          "start_time": "july 16 2020  5:33PM",
          "end_time": "aug 4 2020 8:02PM"
        }
      ]
    },
    {
      "id": "W07aCRPA4",
      "real_name": "loki",
      "tz": "Asia/Kolkata",
      "activity_periods": [{
          "start_time": "DEC 02 2020  1:33PM",
          "end_time": "DEC 12 2020 1:54PM"
        },
        {
          "start_time": "jan 02 2020  11:11AM",
          "end_time": "jan 01 2020 8:02PM"
        },
        {
          "start_time": "june 01 2020  5:33PM",
          "end_time": "june 01 2020 8:02PM"
        }
        
      ]
    }
  ]
}


  render() {

    return(
      <div className="App">
      <header><u><b>EMPLOYEE DETAILS</b></u></header>
     

      <Ha  lis={this.state.members} />


      </div>



      );



  }




}


export default App;
