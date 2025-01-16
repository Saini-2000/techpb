import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { api_url } from "../config";

const WorkItem = () => {
  const base_url = api_url;
  const { id } = useParams();
  const [item, setItem] = useState({ name: "", description: "", images: [] });

  useEffect(() => {
    const fetchWorkItem = async () => {
      try {
        const response = await fetch(`${base_url}/api/service?id=${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch work item");
        }
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchWorkItem();
  }, [id]);

  return (
    <>
      <div className="h-24 bg-gray-700"></div>
      <div className="flex flex-col md:flex-row items-center justify-evenly bg-gray-100 min-h-screen">
        {/* Left Side: Image Slider */}
        <div className="w-full md:w-3/6 h-96 md:h-auto py-6 md:py-26">
          {item.images.length > 0 ? (
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="rounded-lg overflow-hidden h-[calc(100vh-100px)]"
            >
              {item.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`${base_url}/${image}`}
                    alt={`slide ${index}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p className="text-center text-gray-500">No images available.</p>
          )}
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-2/5 p-8 space-y-4 md:h-auto flex flex-col justify-center">
          <span className="text-3xl font-bold">{item.name}</span>
          <p>{item.description}</p>
        </div>
      </div>
    </>
  );
};

export default WorkItem;
