import { useState } from "react";
export const useList = (arr:any) => {
    const [Arra, setArra] = useState(arr)
    const push=(pay:number)=>{
       setArra([...Arra,pay])
    }
    const pop=()=>{
        var tp=[...Arra]
        tp.pop()
        setArra(tp)
    }
    const clear=()=>{
        setArra([])
    }
    const reset=()=>{
        setArra(arr)
    }

    const map=(el:any)=>{
        var b=[...Arra]
        b=b.map((e)=>{return e*2})
      setArra([...b])
        
    }
    
    return [Arra, { push, pop, clear, reset, map }]

};
