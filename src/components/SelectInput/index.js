
import './style.css'
function SelectInput(props){
    return(
        <select className='selectInput' value={props.selected} onChange={props.onSelect}>
            {props?.options?.map((option, index)=>{
                return <option key={index} value={option}>{option}</option>
            })}
        </select>
    )
}


export default SelectInput;