import { useState } from "react"



function useCounter(data){
    let [count,SetCount] = useState()
    const inc=()=>SetCount(count+1)
    const dec=()=>SetCount(count-1)
    const reset=()=>SetCount(0)
    return {count,inc,dec,reset}
}
export default useCounter