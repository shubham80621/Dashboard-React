import './style.css';

import SettingIcon from '../../assets/images/setting.png'
import DashboardIcon from '../../assets/images/dashboard.png'
import ProductIcon from '../../assets/images/product.png'
import CustomerIcon from '../../assets/images/customer.png'
import IncomeIcon from '../../assets/images/income.png'
import PromoteIcon from '../../assets/images/promote.png'
import HelpIcon from '../../assets/images/help.png'
import LeftArrowIcon from '../../assets/images/leftArrow.png'
import DownArrowIcon from '../../assets/images/downArrow2.png'
import Icon from '../../assets/images/setting.png'
import ProfImage from '../../assets/images/shubham.png'

function SideBarNavigation(){

  const handleClick = (path) => {
    window.location.href = path; 
  };


  return <>
        <nav className="navbar navbar-dark d-sm-none" style={{backgroundColor: 'rgb(7, 7, 66)'}}>
          <div className="container-fluid d-flex justify-content-end">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
  

        <div className="position-absolute d-sm-flex position-sm-static collapse h-100" id="navbarToggleExternalContent">
         <div className="sideBar d-flex flex-column px-3 py-3 gap-4 h-100 " >
          <div className='d-flex w-100'>
            <img className='mainIcon' src={SettingIcon}/>
            <div className='ms-2 sideTitle'>Dashboard</div>
          </div>

          <div className='w-100 d-flex flex-column gap-1 mt-1'>
            <div className='sideLinkOption selected' onClick={()=>handleClick('/')}>
              <img src={DashboardIcon} /><div>Dashboard</div>
            </div>
            <div className='sideLinkOption' onClick={()=>handleClick('/product')}>
              <img src={ProductIcon}/><div>Product</div>
              <img src={LeftArrowIcon} className='ms-auto' style={{width: '8px', height:'8px'}}/>
            </div>
            <div className='sideLinkOption' onClick={()=>handleClick('/customer')}>
              <img src={CustomerIcon}/><div>Customer</div>
              <img src={LeftArrowIcon} className='ms-auto' style={{width: '8px', height:'8px'}}/>
            </div>
            <div className='sideLinkOption' onClick={()=>handleClick('/income')}>
              <img src={IncomeIcon}/><div>Income</div>
              <img src={LeftArrowIcon} className='ms-auto' style={{width: '8px', height:'8px'}}/>
            </div>
            <div className='sideLinkOption' onClick={()=>handleClick('/promote')}>
              <img src={PromoteIcon}/><div>Promote</div>
              <img src={LeftArrowIcon} className='ms-auto' style={{width: '8px', height:'8px'}}/>
            </div>
            <div className='sideLinkOption' onClick={()=>handleClick('/help')}>
              <img src={HelpIcon}/><div>Help</div>
              <img src={LeftArrowIcon} className='ms-auto' style={{width: '8px', height:'8px'}}/>
            </div>
          </div>

          <div className='d-flex w-100 mt-auto sideUser selected px-2 py-1 align-items-center gap-2 rounded-1 cursor-pointer' style={{cursor:'pointer'}}
          onClick={()=>{window.open('https://www.linkedin.com/in/shubham-verma-a0b9791b3', '_blank')}}>
              <img src={ProfImage}/>
              <div style={{lineHeight: '9px'}}>
                <span className='sideUserName'>Shubham</span><br></br>
                <span className='sideUserPosition'>Product Manager</span>
              </div>
              <img src={DownArrowIcon} className='ms-auto' style={{width: '10px', height:'8px'}}/>
          </div>
         </div>
         </div>
         </>  
}

export default SideBarNavigation;