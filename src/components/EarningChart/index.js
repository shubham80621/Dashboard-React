import { useState, useEffect } from 'react';
import SelectInput from '../SelectInput';
import './style.css'

function EarningChart(props){
    const [data, setData] = useState([])
    useEffect(()=>{
        var max = 0
        props.data.forEach(obj => {
            if(obj.value > max)
             max=obj.value
        });

        var normalizedData = [...props.data]
        normalizedData = normalizedData.map(obj=> {
            obj.value = Number(obj.value *100 /max)
            return obj
        })
        setData(normalizedData)
    },[props.data])
    return(
        <div className="dashboardCard d-flex rounded-2 flex-grow-1 flex-column gap-2">
            <div className="d-flex justify-content-between w-100">
                <div>
                    <div className='heading'>Overview</div>
                    <div className="mutedText">Monthly Earning</div>
                </div>
                <SelectInput 
                        selected={props.selectedDropDown}
                        options={props.dropDownOptions}
                        onSelect={props.onDropDownChange}
                    />
            </div>
            <div className="d-flex gap-2 gap-md-3 gap-lg-4 w-100 flex-grow-1">
                {data.map((obj, index)=>{
                    return (<div className="d-flex flex-column gap-2 align-items-center" 
                                 style={{cursor:'pointer', flex:1}}
                                onClick={()=>props.onClick(index)}>
                             <div className='graphColumn' 
                                     style={props.selectedIndex === index?
                                         {height: obj.value/3+'vh', backgroundColor:'rgba(90, 50, 234, 0.8)'}:
                                         {height:obj.value/3+'vh'}
                                        }
                                     
                                     ></div>
                             <div style={{fontSize: '11px', color:'#454545'}}>{obj.name}</div>
                            </div>)
                })}

            </div>
        </div>)
}

export default EarningChart;