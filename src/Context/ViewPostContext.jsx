import { createContext, useState } from "react";


export const viewPostContext = createContext(null)

const ViewPost =({children})=>{
const[PostDetails, setPostDetails] = useState({})
    return(
  <viewPostContext.Provider value={{PostDetails, setPostDetails}}>
               {children}
  </viewPostContext.Provider>
    )
}

export default ViewPost