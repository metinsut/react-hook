import React from 'react';
import useResources from './useResources';

const UserList = ({ resource }) => {
   const resources = useResources('users');
   return (
      <ul>
         {resources.map((item, key) => {
            return <li key={key}>{item.name}</li>;
         })}
      </ul>
   );
};

export default UserList;
