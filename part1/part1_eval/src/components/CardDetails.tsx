import axios, { AxiosResponseHeaders } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { setEnvironmentData } from "worker_threads";

function CardDetails() {
  const [data, setdata] = useState()
const id=useParams()
// useEffect(()=>{
//   axios.get("http://localhost:8080/products?id=5").then((res:any)=>{
//     setdata(res)
//   })


  
  
// },[])

  return (
    <div className="product">
      <span>
        <h4 className="detailsTitle"></h4>
      </span>
      <img className="detailsImage" src="" alt="" />
      {/* Notice the "Price: $". do not edit it. */}
      <span className="detailsPrice">Price: $ {data} </span>
      <span className="detailsPrice"></span>
      <div>
        <h5>Reviews:</h5>
        {/* Iterate over reviews and populate review like: 
        
        <div className="review">
          <span className="reviewBy">UserName1234</span>
          <span className="reviewDesc">This product is really good etc....</span>
        </div>
        
        */}
      </div>
    </div>
  );
}
export { CardDetails };
