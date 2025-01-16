import React, { useEffect,useState } from "react";
import ItemCard from "./ItemCard";
import { api_url } from "../../config";

const ItemsSection = ({selectedItem}) => {
  
  const base_url = api_url
  const [items,setItems] = useState([{}]);
  const [loading ,setLoading] = useState(true)
  useEffect(() => {
    const fetchWorkAreas = async () => {
      try {
        const response = await fetch(`${base_url}/api/services/category?categoryName=${selectedItem}`
         
        );
        if (!response.ok) {
          throw new Error('Failed to fetch work areas');
        }
        const data = await response.json();
        
        setItems(data);
        setLoading(false)
      } catch (error) {
        // setError(error.message);
console.log(error.message);

      }
    };

      // setLoaded(true);   
    setLoading(true)
    fetchWorkAreas();
    
  }, [selectedItem]);

  // if(loading) return <h1>Loading...</h1>
  return (
    < div className="w-full sm:w-2/3 bg-gray-5f00 sm:my-8 p-3 rounded-lg">
    <div className="hidden sm:block text-center text-3xl py-4 my-2 font-medium text-[var(--primary-color)] bg-gray-500 rounded-2xl bg-opacity-30">{selectedItem.toUpperCase()}</div>
      {loading ? <div className="text-2xl text-white p-4">Loading...</div>: <div className="flex flex-wrap items-center ljustify-center">
      {items.length > 0 ? (
          items.map((item, index) => (
        <ItemCard key={index} item={item}/>
      ))
    ) : (
      <p>No items found.</p>
    )}
       
      </div>}
    </div>
  );
};

export default ItemsSection;
