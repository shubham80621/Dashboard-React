import { useEffect, useState } from 'react'
import SearchInput from '../SearchInput'
import SelectInput from '../SelectInput'
import './style.css'
import productImage1 from '../../assets/images/p1.jpeg'
import productImage2 from '../../assets/images/p2.jpeg'
import productImage3 from '../../assets/images/p3.jpeg'
const products = [{
    img: productImage1,
    name:'Tools',
    stock:'200',
    price:'100',
    sales:'2000'
},{
    img: productImage2,
    name:'Lamp',
    stock:'100',
    price:'200',
    sales:'500'
},{
    img: productImage3,
    name:'LED',
    stock:'2000',
    price:'10',
    sales:'50000'
},{
    img:productImage1,
    name:'Pen',
    stock:'2000',
    price:'4',
    sales:'5000'
},{
    img:productImage2,
    name:'Shoes',
    stock:'200',
    price:'300',
    sales:'2000'
},{
    img:productImage3,
    name:'Insurance',
    stock:'1000',
    price:'500',
    sales:'1000'
},]
function TableGrid(props){
    const [searchValue, setSearchValue] = useState('');

    return <div className="dashboardCard flex-grow-1 flex-column h-100">
                <div className='d-flex w-100'>    
                    <div className='heading'>Product Sell</div>
                    <div className='d-flex w-60 ms-auto align-items-center gap-2'>
                        <SearchInput  value={searchValue}
                                placeholder='Search' 
                                onChange={(event)=>{setSearchValue(event.target.value)}}
                                style={{backgroundColor: '#f5f5f5', width:'100%'}}
                                />
                        <SelectInput 
                            selected={''}
                            options={['Last 30 days']}
                            onSelect={(newSelection)=>{console.log(newSelection)}}
                        />
                    </div>        
                </div>
                <div className='mt-2'>
                    <table className='myTable'>
                        <tr className='mutedText'>
                            <th align='left' style={{textAlign: 'left'}}>Product name</th>
                            <th>Stock</th>
                            <th>Price</th>
                            <th>Total Sales</th>
                        </tr>
                        {products.map((product,index)=>{
                              

                        return product.name.toLowerCase().includes(searchValue.toLowerCase())?<tr key={index}>
                            <td className='d-flex gap-2' >
                                <img className='productImg m-2' src={product.img}/>
                                <div className='d-flex flex-column justify-content-center'>
                                   <span style={{fontSize:'12px', fontWeight: '700'}} >{product.name}</span>
                                   <span className='mutedText'>{product.name}</span>
                                </div>
                            </td>
                            <td>{product.stock} in stock</td>
                            <td style={{fontSize: '11px', fontWeight:'700'}}>${product.price}</td>
                            <td >{product.sales}</td>
                        </tr>:null
                        })}
                        
                      
                    </table>
                </div>
           </div>
}

export default TableGrid;