import {useState} from "react";
export function Button() {
    const [reactiveCount, setReactiveCount] = useState(0);
  
    return(<>
     <button onClick={()=> { setReactiveCount(reactiveCount + 1);}}>Incrémenter</button>
     <span>Nombre de clics {reactiveCount}</span>
     </> 
    );
}