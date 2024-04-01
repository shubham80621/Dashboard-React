import {useState, useEffect, useRef} from 'react'
import './style.css'

import UpArrowIcon from '../../assets/images/upArrow.png'
import DownArrowIcon from '../../assets/images/downArrow.png'

function InfoCard(props){
    const [value, setValue] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const componentRef = useRef(null);

    useEffect(() => {
        const startValue = value;
        const difference = props.value - startValue;
        const duration = 500; // 1 second duration
    
        const startTime = Date.now();
        const intervalId = setInterval(() => {
          const elapsedTime = Date.now() - startTime;
          const progress = Math.min(1, elapsedTime / duration);
          const step = Math.round(difference * progress);
          setValue(startValue + step);
    
          if (progress >= 1) {
            clearInterval(intervalId);
          }
        }, 16); // Update approximately every 16ms (60fps)
    
        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
      }, [props.value]); // Re-run effect whenever props.value changes
    
      useEffect(() => {
        const startValue = percentage;
        const difference = props.percentage - startValue;
        const duration = 500; // 1 second duration
    
        const startTime = Date.now();
        const intervalId = setInterval(() => {
          const elapsedTime = Date.now() - startTime;
          const progress = Math.min(1, elapsedTime / duration);
          const step = Math.round(difference * progress);
          setPercentage(startValue + step);
    
          if (progress >= 1) {
            clearInterval(intervalId);
          }
        }, 16); // Update approximately every 16ms (60fps)
    
        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
      }, [props.percentage]); // Re-run effect whenever props.value changes
        
    function convertToShortFormat(number) {
        if (number >= 1000000) {
            return '$' + (number / 1000000).toFixed(1) + 'M';
        } else if (number >= 1000) {
            return '$' + (number / 1000).toFixed(1) + 'k';
        } else {
            return number.toString();
        }
    }

    return(
        <div className="infoCard d-flex flex-column flex-sm-row justify-content-around" ref={componentRef}>
            <div className='d-flex justify-content-center'>
                <div className='infoCardIcon' style={{backgroundColor: props.iconBg}}>
                    <img src={props.icon}/>
                </div>
            </div>
            <div className='d-flex flex-column align-items-center align-items-sm-start'>
                <div className='mutedText'>{props.title}</div>
                <div className='cardValue'>{convertToShortFormat(value)}</div>
                <div className="cardText">
                    <div ><img src={percentage<0? DownArrowIcon : UpArrowIcon} style={{height:'10px'}}/></div>
                    <div style={percentage<0 ? {color:'#c00', fontWeight: 700} : {color: '#0a0', fontWeight: 700}}>{percentage}%</div>
                    <div>{props.timeSpan}</div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard;