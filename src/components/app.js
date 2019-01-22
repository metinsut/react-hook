import React, { useState } from 'react';
import ResourceList from './resourceList';
import UserList from './userList';

const App = () => {
   const [resource, setResource] = useState('posts');
   return (
      <div>
         <h1>HOOK</h1>
         <hr />
         <UserList />
         <button onClick={() => setResource('posts')}>Posts</button>
         <br />
         <br />
         <button onClick={() => setResource('todos')}>Todos</button>
         <hr />
         <ResourceList resource={resource} />
      </div>
   );
};

export default App;
