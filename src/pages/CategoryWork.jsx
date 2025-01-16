import React, { useEffect, useState } from "react";
import PageTite from "../component/PageTitle";
import CategoryWorkCard from "../component/CategoryWorkCard";
import { useParams } from "react-router-dom";
import handyman from '../assets/handyman.jpg'
import { api_url } from "../config";


const CategoryWork = () => {
  
  const base_url = api_url
  const [loaded, setLoaded] = useState(false);
  const { name } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchWork = async () => {
      try {
        const response = await fetch(
          `${base_url}/api/services/Workarea?workAreaName=${name}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch work areas");
        }
        const data = await response.json();

        setItems(data);
      } catch (error) {
        // setError(error.message);
      }
    };

    setLoaded(true);
    fetchWork();
  }, []);
  return (
    <>
      <PageTite /><div style={{backgroundImage:`url(${handyman})`}}>
      <div className="bg-[#000000e6] flex justify-center min-h-screen">
        <div
          className={`flex flex-wrap justify-centerm w-11/12 transform transition-all duration-150 ease-out ${
            loaded ? "scale-100" : "scale-0"
          }`}
        >
           {items.length > 0 ? (
          items.map((item, index) => (
          <CategoryWorkCard key={index} item={item}/> ))
        ) : (
          <p>No items found.</p>
        )}
          
        </div>
      </div></div>
    </>
  );
};

export default CategoryWork;
