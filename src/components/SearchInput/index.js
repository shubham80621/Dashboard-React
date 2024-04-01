
import './style.css'
function SearchInput(props){

    return(
        
        <div style={{position: 'relative'}} className='d-flex align-items-center'>
            <input className="searchInput" type="text"
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
                style={props.style}
            />
            <i class="fa fa-search search-icon"></i> 
        </div>
    )
}


export default SearchInput;