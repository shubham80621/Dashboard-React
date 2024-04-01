import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './style.css'
const pieThickness = {
  id: 3,
  beforeDraw(chart) {
    const percentageWidth = 0.3; // 30% width of the chart

    const radius = Math.min(chart.width, chart.height) / 2;
    const innerRadius = radius * (1 - percentageWidth);
    const outerRadius = radius;

    // chart.getDatasetMeta(0).data.forEach((element, index) => {

    //   element.innerRadius = innerRadius;
    //   element.outerRadius = outerRadius;
      
    chart.getDatasetMeta(0).data[0].innerRadius= innerRadius * 0.8
    chart.getDatasetMeta(0).data[0].outerRadius = outerRadius
    chart.getDatasetMeta(0).data[1].innerRadius = innerRadius *0.89
    chart.getDatasetMeta(0).data[1].outerRadius = outerRadius * 0.95
    chart.getDatasetMeta(0).data[2].innerRadius = innerRadius *0.95
    chart.getDatasetMeta(0).data[2].outerRadius = outerRadius *0.88
    // });
  }
}

ChartJS.register(ArcElement, pieThickness);

var data = {
    labels: ['20', '40', '40'],
    datasets: [{
      label: '65% Total New Customers',
      data: [20, 45, 35],
      backgroundColor: [
        'rgba(222, 49, 99, 0.8)', // First color stop
        'rgba(90, 50, 234, 0.8)', // Second color stop
        'rgba(229, 228, 226, 0.8)', // Third color stop
      ],
      borderWidth: 0,
      fill: true,
    }],
  };


const options = {
  cutout: 172,
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: true,
    },
    tooltip: {
      enabled: true,
    },
    pieThickness
  }
};

const CustomerChart = (props) => {
  const[doughnutData, setDoughnutData] = useState(data)


  useEffect(()=>{
     var newData ={...doughnutData }

     newData.datasets=[{
      label: props.newCustomer+'% Total New Customers',
      data: [(100-props.newCustomer)/2, props.newCustomer, (100-props.newCustomer)/2],
      backgroundColor: [
        'rgba(222, 49, 99, 0.8)', // First color stop
        'rgba(90, 50, 234, 0.8)', // Second color stop
        'rgba(229, 228, 226, 0.8)', // Third color stop
      ],
      borderWidth: 0,
      fill: true,
    }];
     setDoughnutData(newData)
     
  },[props.newCustomer])

  return (
    <div className='dashboardCard d-flex flex-column p-3 rounded-3 h-100'>
        <div>
        <h3 className='heading'>Customers</h3>
        <div className='mutedText'>Customers that buy products</div>
        </div>

        <div className='d-flex justify-content-center align-items-center flex-grow-1' style={{position:'relative'}}>
            <div className='rounded-circle bg-white p-2 shadow-lg shadow-slate-200 square-div'>
            <Doughnut data={doughnutData} options={options} width={'30%'} height={'30%'}/>
            </div>
            <div className='text-center' 
            style={{position: 'absolute', top: '55%', width: '100px', left:'50%',transform: 'translate(-50%, -50%)'}}>
            <p className='text-base font-weight-bold lh-1' style={{fontWeight:700}}>{props.newCustomer}% <br></br><span className='text-xs font-normal lg:text-sm' style={{fontSize:'10px', fontWeight:'400'}}>Total New<br></br> Customers</span></p>
            </div>
        </ div>
    </div>
  )
}

export default CustomerChart;