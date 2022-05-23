import { useState } from "react";
export const useCounter = (init:number) => {
    const [value,setValue]=useState(init)

    const inc=(pay=1)=>{
        setValue(value+pay)
    }
    const dec=(pay=1)=>{
        setValue(value-pay)
    }

    const set=(payload:number)=>{
        setValue(payload)
    }

    return {value,inc,dec,set}
};
