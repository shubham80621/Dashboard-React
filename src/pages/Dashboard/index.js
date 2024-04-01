import {useEffect, useState} from 'react'
import DashboardView from './view'
import SideBarNavigation from '../../components/SideBarNavigation'
import {Earning} from './data'

const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', "Dec"]
function Dashboard(){
    const[earning, setEarning] =useState(Earning);
    const[selectedTimeSpan, setSelectedTimeSpan] = useState(-1);
    const[timeSpanType, setTimeSpanType] = useState('Monthly');

    const[infoStats, setInfoStats] = useState({});
    const[timeSpanEarningInfo, setTimeSpanEarningInfo] =useState([]);

    const handleDataTimeSpan=(event)=>{
      setTimeSpanType(event.target.value)
    }

    useEffect(()=>{
      updateStats()
      updateTimeStampEarning()

    },[timeSpanType, selectedTimeSpan])
    

    const updateStats=()=>{

      var stats= {
        'earning': 0,
        'earningIncrease': null,
        'orders': 0,
        'orderIncrease': null,
        'totalSales': 0,
        'totalSalesIncrease': null,
        'balance': 0,
        'balanceIncrease': null,
        'timeSpan': 'this month' 
      }

      // Calculate the aggregated values based on the selected time span
      if (timeSpanType === 'Monthly' && selectedTimeSpan !=-1) {
        // Calculate the sum of values for the selected month
        const selectedMonthData = Earning[selectedTimeSpan - 1];// Assuming selectedMonth is available and is 1-based index
       
        stats.earning = selectedMonthData.totalEarning;
        stats.orders = selectedMonthData.orders;
        stats.totalSales = selectedMonthData.sales;
        stats.newCustomers = selectedMonthData.newCustomers;
        stats.timeSpan = 'this month'
        stats.balance = selectedMonthData.balance;

        if(selectedTimeSpan-1 > 0)
        {
          const previousMonthData = Earning[selectedTimeSpan - 2]; 
          stats.earningIncrease = calculatePercentageChange(stats.earning, previousMonthData.totalEarning)
          stats.orderIncrease = calculatePercentageChange(stats.orders, previousMonthData.orders)
          stats.balanceIncrease = calculatePercentageChange(stats.balance, previousMonthData.balance)
          stats.totalSalesIncrease = calculatePercentageChange(stats.totalSales, previousMonthData.sales)
        }
        else{
          stats.earningPercentage=null
          stats.orderIncrease=null
          stats.balanceIncrease=null
          stats.totalSalesIncrease=null
        }


      } else if (timeSpanType === 'Quaterly' && selectedTimeSpan !=-1 && selectedTimeSpan < 5) {
        // Calculate the sum of values for the selected quarter
        const quarterStartIndex = (selectedTimeSpan - 1) * 3;
        const quarterData = Earning.slice(quarterStartIndex, quarterStartIndex + 3);
        stats.earning = sumValues(quarterData, 'totalEarning');
        stats.orders = sumValues(quarterData, 'orders');
        stats.totalSales = sumValues(quarterData, 'sales');
        stats.newCustomers = sumValues(quarterData, 'newCustomers');
        stats.balance =  earning[quarterStartIndex +2].balance
        stats.timeSpan = 'this quater'
        
        if(quarterStartIndex-3 >= 0)
        {
          const prevQuarterData = Earning.slice(quarterStartIndex-3, quarterStartIndex);
          stats.earningIncrease = calculatePercentageChange(stats.earning,sumValues(prevQuarterData, 'totalEarning'))
          stats.orderIncrease = calculatePercentageChange(stats.orders, sumValues(prevQuarterData, 'orders'))
          stats.balanceIncrease = calculatePercentageChange(stats.balance, earning[quarterStartIndex -1].balance)
          stats.totalSalesIncrease = calculatePercentageChange(stats.totalSales, sumValues(prevQuarterData, 'sales'))
        }
        else{
          stats.earningPercentage=null
          stats.orderIncrease=null
          stats.balanceIncrease=null
          stats.totalSalesIncrease=null
        }
      } else {
        // Calculate the sum of values for the whole year
        stats.earning = sumValues(Earning, 'totalEarning');
        stats.orders = sumValues(Earning, 'orders');
        stats.totalSales = sumValues(Earning, 'sales');
        stats.newCustomers = sumValues(Earning, 'newCustomers');
        stats.balance = earning[earning.length-1].balance;
        stats.timeSpan = 'this year'

      }

      // stats.earning = convertToShortFormat(stats.earning)
      // stats.orders = convertToShortFormat(stats.orders)
      // stats.totalSales = convertToShortFormat(stats.totalSales)
      // stats.balance = convertToShortFormat(stats.balance)
      setInfoStats(stats)
    }

    const updateTimeStampEarning=()=>{
      var timeSpanEarning=[]

      if (timeSpanType === 'Monthly') {
        timeSpanEarning=Months.map((month, index)=>{
          return { 'name': month, 'value': Earning[index].totalEarning}
        })
      }
      else if (timeSpanType === 'Quaterly') {
        timeSpanEarning=[{ 'name' : 'Q1', 'value': sumValues(Earning.slice(0, 3), 'totalEarning')},
                  { 'name' : 'Q2', 'value': sumValues(Earning.slice(3, 6), 'totalEarning')},
                  { 'name' : 'Q3', 'value': sumValues(Earning.slice(6, 9), 'totalEarning')},
                  { 'name' : 'Q4', 'value': sumValues(Earning.slice(9, 12), 'totalEarning')},
      ]
      }
      if (timeSpanType === 'Yearly') 
      {
        timeSpanEarning=[{
            'name' : '2024', 'value': sumValues(Earning, 'totalEarning')
        }]
      }

      setTimeSpanEarningInfo(timeSpanEarning)
    }

    
      // Function to calculate the sum of values for a given property from an array of objects
    const sumValues = (array, property) => array.reduce((acc, obj) => acc + obj[property], 0);
    function calculatePercentageChange( newValue, oldValue) {
      const percentageChange = ((newValue - oldValue) / oldValue) * 100;
      return percentageChange.toFixed(2); // Round to 2 decimal places
    }

    return <>
              <SideBarNavigation/>
              <DashboardView 
                earning = {earning}
                selectedTimeSpan={selectedTimeSpan}
                timeSpanType={timeSpanType}
                handleSelectedTimeSpan={(value)=>setSelectedTimeSpan(value+1)}
                handleDataTimeSpan={handleDataTimeSpan}
                infoStats={infoStats}
                timeSpanEarningInfo={timeSpanEarningInfo}
              />
           </>

}


export default Dashboard;