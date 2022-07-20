import React, { Component } from 'react';
import { render } from 'react-dom';
import { Bar } from 'react-chartjs-2';
import { UserData } from './userData';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const BarChart = () => { 

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        labels: UserData.map((o) => o.year),
        datasets: [
          {
            label: 'Users Gained',
            backgroundColor: 'rgba(0, 255, 0, 0.2)',
            borderColor: 'rgb(0, 255, 0)',
            borderWidth: 1,
            data: UserData.map((o) => o.userGain),
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Bar Chart',
          },
        },
      },
    };
  }

  render() {
    return <Bar data={this.state.data} options={this.state.options} />;
  }
}

render(<Customers />, document.getElementById('root'));

}
export default BarChart;
// import React from "react";
// import NavTabs  from '../tab';
// const Customers=()=>{
//     return(
//         <div>
//         <h1>Customers</h1>
//         <NavTabs></NavTabs>
//         </div>
//     )
// }
// export default Customers;