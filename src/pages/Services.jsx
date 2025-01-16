import React, { useEffect, useState } from 'react'
import ItemsSection from '../component/Services/ItemsSection'
import Sidebar from '../component/Services/Sidebar'
import PageTitle from '../component/PageTitle';
import handyman from "../assets/handyman.jpg"
import { api_url } from '../config';


const Services = () => {
  const base_url = api_url
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
    const [selectedItem,setSelectedItem] = useState("");
    const [loaded, setLoaded] = useState(false);
    
  useEffect(() => {
    const fetchWorkAreas = async () => {
      try {
        const response = await fetch(`${base_url}/api/categories`);
        if (!response.ok) {
          throw new Error('Failed to fetch work areas');
        }
        const data = await response.json();
        
        // setCategories((prevCategories) => [...prevCategories, ...data]);
        // setCategories([{name:"Popular"}, ...data]);
        setCategories(data)
      } catch (error) {
        setError(error.message);
      }
    };

      setLoaded(true);
    fetchWorkAreas();
  }, []);
    // const categories = ["Popular","Electrical","Pulumber","Kitchen"];
  return (
    <>
    <PageTitle/>
    <div style={{backgroundImage:`url(${handyman})`}} className=''>
       <div className=" bg-[#000000c2] min-h-screen "> 
        <div className='flex flex-col sm:flex-row justify-evenly animate-zoomOutCenter'>
     <Sidebar selectedItem={selectedItem} setSelectedItem={setSelectedItem} categories={categories}/>
    <ItemsSection selectedItem={selectedItem}/>
    </div>
    </div>
    </div></>
  )
}

export default Services
