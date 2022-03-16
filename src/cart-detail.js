import React, {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

function Cartdetail(props) {
  const [allData, setAllData] = useState(false);
  const [increment, setIncrement] = useState(1);
  const [total, setTotal] = useState(0);



  useEffect(()=> {
    setAllData(props.location.productdetailProps.allItems)
  }, [])
const  removeItems=(id) =>{
const cartData=  allData
const filterdata = cartData.filter((item ,index)=>
id !== item.id

)
console.log('filter data', filterdata)
setAllData(filterdata);

}
function incrementProd(item) {
  setIncrement(increment + 1)
  setTotal(parseInt(item.price)* parseInt(increment +1));
  console.log('item price',parseInt(item.price))
  console.log('item incr',parseInt(increment +1));
}
function decrementProd(item) {
  setTotal(parseInt(item.price)* parseInt(increment -1));

  if (increment !== 1) {
    setIncrement(increment-1);
   
  }
  else{

  }

}

  // let { allItems } = useParams();
  console.log('allItems.........', allData);
  return (
      <>
    <div className='shoping-cart'><h1>Shopping Cart</h1></div>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product</th>
      <th scope="col">Image</th>
      <th scope="col">Quantity</th>
      {/* <th scope="col">Quantity</th> */}
      <th scope="col"> Price</th>
      <th scope="col">Operations</th>

    </tr>
  
    {allData && allData.map((item, i)=> (
      <tr key={i}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td><img src={item.img}></img></td>
      <td>{item.quantity}<button onClick={()=> incrementProd(item)}>+</button>
      <input className='incr-input' type="text" placeholder={increment} ></input><button onClick={()=> decrementProd(item)}>-</button>
      </td>
      <td>{item.price}</td>
      <td><button className='btn btn-warning'onClick={()=>removeItems(item.id)}>Remove</button></td>
      
    </tr>
    
    ))}
  
  </thead>
</table>
<h5>Total Price{total}</h5>
</>
  )
    }


export default Cartdetail