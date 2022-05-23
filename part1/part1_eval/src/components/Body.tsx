import { Card } from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";

function Body() {
  const [data,setdata]=useState([])
useEffect(() => {
  axios.get("http://localhost:8080/products").then(res=>setdata(res.data)
  )
}, [])

  return (
    <div className="container">
      {/* Iterate over data and show `Card` here */}

      {data.map(elem=>{
        return <Card  d={elem}/>
      })}
    

    </div>
  );
}

export { Body };
