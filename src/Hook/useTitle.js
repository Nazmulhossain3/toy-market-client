import { useEffect } from "react"

const useTitle = title => {

    useEffect(()=>{

        document.title = `${title} || ToyHaeven`;
    },[title])


}

export default useTitle