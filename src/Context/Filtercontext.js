import { createContext } from "react";

const initialFilterparams = {
    brands : [],
    categories : []
}

 const Filtercontext = createContext(initialFilterparams );
 export default Filtercontext;