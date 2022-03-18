import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

function Cartdetail(props) {
  const [allData, setAllData] = useState(false);
  const [bagIncrement, setBagIncrement] = useState(1);
  const [watchIncrement, setWatchIncrement] = useState(1);
  const [laptopIncrement, setLaptopIncrement] = useState(1);
  const [cupIncrement, setCupIncrement] = useState(1);
  const [increment, setIncrement] = useState(1);

  const [bagPrice, setBagPrice] = useState(0);
  const [watchPrice, setWatchPrice] = useState(0);
  const [laptopPrice, setLaptopPrice] = useState(0);
  const [cupPrice, setCupPrice] = useState(0);

  const [Price, setPrice] = useState(0);

  const [total, setTotal] = useState(0);
  useEffect(() => {
    setAllData(props.location.productdetailProps.allItems); 
    setTotal(0);
  }, []);
  // incrementProd(item)
  console.log('all..........', allData);

  useEffect(() => {
    allData && allData.forEach((item)=> {
      if(item.name == 'Bags'){
        setBagPrice(item.price);
      }
      if(item.name == 'Watch'){
        setWatchPrice(item.price);
        
      }
      if(item.name == 'Laptop'){
        setLaptopPrice(item.price);
        
      }
      if(item.name == 'Cup'){
        setCupPrice(item.price);
        
      }
    })
  }, [allData]);

  useEffect(() => {
    setTotal(0);
  }, []);
  useEffect(() => {
    setTotal(bagPrice + watchPrice + laptopPrice + cupPrice);
  }, [bagPrice, watchPrice, laptopPrice, cupPrice]);
  const removeItems = (id) => {
    const cartData = allData;
    const filterdata = cartData.filter((item, index) => id !== item.id);
    console.log("filter data", filterdata);
    setAllData(filterdata);
  };
  function incrementProd(item) {
    
    console.log('called', bagIncrement)
    if (item.name == "Bags") {
      console.log('123')
      setBagPrice(item.price * (bagIncrement + 1));
      // console.log('bahins',bagIncrement)
      setBagIncrement(bagIncrement + 1);

      // setTotal(parseInt(item.price.replace("$",'')) * parseInt(bagIncrement + 1));
      // setTotal(item.price * bagIncrement);
    }
    if (item.name == "Watch") {
      setWatchPrice(item.price * (watchIncrement + 1));
      setWatchIncrement(watchIncrement + 1);
      // setTotal(
      //   parseInt(item.price.replace("$", "")) * parseInt(watchIncrement + 1)
      // );
    }
    if (item.name == "Laptop") {
      setLaptopPrice(item.price * (laptopIncrement + 1));
      setLaptopIncrement(laptopIncrement + 1);
      // setTotal(
      //   parseInt(item.price.replace("$", "")) * parseInt(laptopIncrement + 1)
      // );
    }
    if (item.name == "Cup") {
      setCupPrice(item.price * (cupIncrement + 1));
      setCupIncrement(cupIncrement + 1);
      // setTotal(
      //   parseInt(item.price.replace("$", "")) * parseInt(laptopIncrement + 1)
      // );
    }
    // debugger
    // setTotal(parseInt(item.price.replace("$",'')) * parseInt(increment + 1));
    console.log("item price", parseInt(item.price));
    console.log("item incr", parseInt(increment + 1));
  }
  function decrementProd(item) {
    if (
      bagIncrement > 0 ||
      bagPrice > 0 ||
      watchPrice > 0 ||
      laptopPrice > 0 ||
      cupPrice > 0
    ) {
      if (item.name == "Bags") {
        setBagPrice(bagPrice - 5);
        setBagIncrement(bagIncrement - 1);
        // setTotal(
        //   parseInt(item.price.replace("$", "")) * parseInt(bagIncrement - 1)
        // );
      }
      if (item.name == "Watch") {
        setWatchPrice(watchPrice - 10);
        setWatchIncrement(watchIncrement - 1);
        // setTotal(
        //   parseInt(item.price.replace("$", "")) * parseInt(watchIncrement - 1)
        // );
      }
      if (item.name == "Laptop") {
        setLaptopPrice(laptopPrice - 50);
        setLaptopIncrement(laptopIncrement - 1);
        // setTotal(
        //   parseInt(item.price.replace("$", "")) * parseInt(laptopIncrement - 1)
        // );
      }
      if (item.name == "Cup") {
        setCupPrice(cupPrice - 3);
        setCupIncrement(cupIncrement - 1);
        // setTotal(
        //   parseInt(item.price.replace("$", "")) * parseInt(cupIncrement - 1)
        // );
      }
      // setTotal(parseInt(item.price.replace("$",'')) * parseInt(increment - 1));
    }

    if (increment !== 1) {
      setIncrement(increment - 1);
    } else {
    }
  }

  // let { allItems } = useParams();
  console.log("allItems.........", allData);
  return (
    <>
      <div className="shoping-cart">
        <h1>Shopping Cart</h1>
      </div>
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

          {allData &&
            allData.map((item, i) => (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <img src={item.img}></img>
                </td>
                <td>
                  {/* {item.quantity} */}
                  <button onClick={() => incrementProd(item)}>+</button>
                  <input
                    className="incr-input"
                    type="text"
                    placeholder={
                      item.name == "Bags"
                        ? bagIncrement 
                        : item.name == "Watch"
                        ? watchIncrement
                        : item.name == "Laptop"
                        ? laptopIncrement
                        : item.name == "Cup" && cupIncrement
                    }
                  ></input>
                  <button onClick={() => decrementProd(item)}>-</button>
                </td>
                <td>
                  {item.name == "Bags"
                    ? `${bagPrice}$`
                    : item.name == "Watch"
                    ? `${watchPrice}$`
                    : item.name == "Laptop"
                    ? `${laptopPrice}$`
                    : item.name == "Cup" ? `${cupPrice}$`:''}
                </td>
                {/* {console.log('item.price * bagIncrement', typeof(item.price))} */}
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => removeItems(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
        </thead>
      </table>
      <div className="order-btn">
        <h5>Total Price:{total}$</h5>
        {/* <button className="bt btn-primary">Order Now</button>s */}
      </div>
    </>
  );
}

export default Cartdetail;
