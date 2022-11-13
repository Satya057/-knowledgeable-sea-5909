import { useState } from "react";
import { createContext } from "react";


export const Explorecontext = createContext()

export default function ExplorecontextProvider({children}){
    const [unlock , setunlock] = useState(false)
    const toggleUnlock = (x)=>{
        setunlock(x)
    }
    return <Explorecontext.Provider value={{toggleUnlock,unlock}}>
        {children}
    </Explorecontext.Provider>
}