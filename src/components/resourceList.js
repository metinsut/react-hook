import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = ({ resource }) => {
   const [resources, setResources] = useState([]);
   const fetchResource = async (item) => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${item}`)
      setResources(response.data)
   }
   useEffect(() => { fetchResource(resource) }, [resource])
   return <div>{resources.length}</div>;
}

export default ResourceList;