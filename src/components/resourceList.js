import React from 'react';
import useResources from './useResources';

const ResourceList = ({ resource }) => {
   const resources = useResources(resource);
   return (
      <ul>
         {resources.map((item, key) => {
            return <li key={key}>{item.title}</li>;
         })}
      </ul>
   );
};

export default ResourceList;
