import InfoCard from '../../components/InfoCard'
import EarningChart from '../../components/EarningChart'
import CustomerChart from '../../components/CustomerChart'
import TableGrid from '../../components/TableGrid'
import SearchInput from '../../components/SearchInput'
import HandIcon from '../../assets/images/waving-hand.png'

import EarningIcon from '../../assets/images/earning.png'
import BalanceIcon from '../../assets/images/balance.png'
import OrdersIcon from '../../assets/images/orders.png'
import SalesIcon from '../../assets/images/sales.png'

function DashboardView(props){
   const{infoStats } =props
    return <div className='pageBody d-flex flex-column gap-2 gap-sm-2 gap-md-4 p-1 py-sm-2 px-sm-2 py-md-4 px-md-5'>
                       <div className="d-flex justify-content-between ">
                            <span style={{fontWeight:'700'}}>Hello Shubham <img className='icon' src={HandIcon}/> ,</span>
                            <SearchInput
                             style={{backgroundColor:'white'}}
                             placeholder={'Search'}
                            />
                       </div>
                       <div className='row row-cols-2 row-cols-xl-4 g-2 g-sm-2 g-md-4' >
                          <div className='col'>
                                <InfoCard
                                        icon = {EarningIcon}
                                        iconBg = '#ddffdd' 
                                        title= 'Earning' value={infoStats.earning}
                                        profit='true' percentage={infoStats.earningIncrease}
                                        timeSpan={infoStats.timeSpan}  />
                          </div>
                          <div className='col'>
                                <InfoCard
                                    icon = {OrdersIcon}
                                    iconBg = '#ddddff' 
                                    title= 'Orders' value={infoStats.orders}
                                    profit='true' percentage={infoStats.orderIncrease}
                                    timeSpan={infoStats.timeSpan}  />
                          </div>
                          <div className='col'>
                                <InfoCard
                                    icon = {BalanceIcon}
                                    iconBg = '#ffdddd'  
                                    title= 'Balance' value={infoStats.balance}
                                    profit='true' percentage={infoStats.balanceIncrease}
                                    timeSpan={infoStats.timeSpan}  /></div>
                          <div className='col'>
                                <InfoCard
                                    icon = {SalesIcon}
                                    iconBg = '#ffffdd' 
                                    title= 'Sales' value={infoStats.totalSales}
                                    profit='true' percentage={infoStats.totalSalesIncrease}
                                    timeSpan={infoStats.timeSpan}  /> 
                        </div>
                            
                            
                       </div>
                       <div className='row g-2 g-sm-2 g-md-4 h-100'>
                          <div className='col-12 col-lg-8'>
                                <EarningChart
                                data={props.timeSpanEarningInfo} 
                                selectedIndex = {props.selectedTimeSpan-1}
                                onClick={props.handleSelectedTimeSpan}


                                selectedDropDown={props.timeSpanType}
                                dropDownOptions={['Monthly', 'Yearly', 'Quaterly']}
                                onDropDownChange={props.handleDataTimeSpan}
                                /> 
                          </div>
                          <div className='col-12 col-lg-4'>
                                <CustomerChart newCustomer={infoStats.newCustomers}/>
                          </div>
                       </div>
                       <div className='d-flex '>
                       <TableGrid/>
                       </div> 
            </div>

}


export default DashboardView;