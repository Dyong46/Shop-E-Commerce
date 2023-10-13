
import Context from "./Context";
import { useContext } from "react";

export const useStore = () =>{
    const [state,dispath] = useContext(Context)
    return [state,dispath]
}