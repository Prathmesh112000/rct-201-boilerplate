import { useState } from "react";
import { Link } from "react-router-dom";

function Card({ d }:any) {
 

  const [incart, setincart] = useState(false)
  return (
    <div className="item">
      <img src="" className="productImage" />
      <span>
        <Link className="productLink" to={`/${d.id}`}>
          {/* Product Name */}
          {d.product_name}
        </Link>
      </span>
      <span className="productCategory"></span>
      {/* Notice the $ before price. keep it dont edit it. eg: "$123" */}
     
      <span className="productPrice">$ {d.price}</span>
      {/* Notice the Ratings: text. don't edit it. eg: "Ratings: 3.5" */}
     
      <span className="productRating">Ratings: {d.rating} </span>
     
     {incart? <div className="itemInCart">Item Already in cart</div>  : 
      <button className="productAddtoCart" onClick={()=>setincart(!incart)}>
        Add to cart
      </button>}
      {/* Show button here if item is already in the cart. otherwise show "Item Already in cart" */}
      {/*
      <div className="itemInCart">Item Already in cart</div> 
       OR
      <button className="productAddtoCart">
        Add to cart
      </button>
      */}
    </div>
  );
}

export { Card };
