import React, { useState } from "react";
import ResourceList from "./resourceList";

const App = () => {
   const [resource, setResource] = useState("posts");
   return (
      <div>
         <h1>HOOK</h1>
         <hr />
         <button onClick={() => setResource("posts")}>Posts</button>
         <br />
         <br />
         <button onClick={() => setResource("todos")}>Todos</button>
         <hr />
         <ResourceList resource={resource}/>
      </div>
   )
}

export default App;