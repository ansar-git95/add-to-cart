import React, { useState } from "react";
import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { cardlist } from "./card-Data";

export default function Card() {
  const [count, setCount] = useState(0);
  const [id, setId] = useState(null);
  const [visible, setVisible] = useState(false);
  const [matchId, setMatchId] = useState(false);

  const [cart, setCart] = useState([]);
  // const cardlist = [
  //   {
  //     name: "Bags",
  //     price: "5$",
  //     img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  //     id: 1,
  //     quantity: 1,
  //   },
  //   {
  //     name: "Watch",
  //     price: "10$",
  //     img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  //     id: 2,
  //     quantity: 1,
  //   },
  //   {
  //     name: "Laptop",
  //     price: "50$",
  //     img: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //     id: 3,
  //     quantity: 1,
  //   },
  //   {
  //     name: "Cup",
  //     price: "3$",
  //     img: "https://images.unsplash.com/photo-1570784332176-fdd73da66f03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
  //     id: 4,
  //     quantity: 1,
  //   },
  // ];
  function addtocart(item, index) {
    console.log("item:", item);


    setCount((prev) => prev + item.quantity);
    if (item.id == matchId) {
    
      // if (count == 1) {
      //  const btn = document.getElementById("addBtn")
      //  btn.disable = true
      //  console.log('this is btn', btn);

      // }  
      // setCart([...cart, item])
    } else {
      setCart([...cart, item]);
    }
    
  }

  function handleUndo(item, index) {
    console.log("count", count);
    // if (count == 1) {
    setCount((prev) => prev - item.quantity);

    // } else {
    //   setCount(count)
    //   setId(null)

    // }
  }

  console.log("cart............", cart);
  return (
    <>
      <div className="cart-btn">
        <Link
          // to="/carddetail"
          to={{
            pathname: "/carddetail",
            productdetailProps: {
              allItems: cart,
            },
          }}
        >   
          <i className="fa-solid fa-cart-shopping">{count}</i>
          
        </Link>
        
      </div>
      <div className="row">
        {cardlist?.map((item, i) => (
          <div
            className="card col-3"
            style={{ width: "18rem", margin: "auto" }}
            key={i}
          >
            <img
              src={item.img}
              className="card-img-top"
              alt="..."
              style={{ height: "9cm" }}
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.price}</p>
              <p>{item.quantity}</p>
              {item.id == id ? (
                <button
                  onClick={() => {
                    handleUndo(item, i);
                  }}
                  className="btn btn-warning"
                >
                  Undo
                </button>
              ) : (
                ""
              )}

              <button 
                onClick={() => {
                  setMatchId(item.id);
                  addtocart(item);
                  setId(i + 1);
                }}
                className="btn btn-primary
                 "
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
