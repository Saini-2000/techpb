import React, { useContext, useEffect, useState } from "react";
import ServiceCard from "./Components/ServiceCard";
import ServiceModal from "./Components/ServiceModal";
import { api_url } from "../config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../adminroutes/AdminRoutes";

const ServiceItem = () => {
  const base_url = api_url;
  const [services, setServices] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [modal, setModal] = useState(false);
  const [btn, setBtn] = useState("");
  const [modalData, setModalData] = useState({ name: "", description: "", images: [] });
  const navigation = useNavigate()
  const {token} = useContext(TokenContext)

  // Open modal for adding a new service
  const handleModalOpen = () => {
    setBtn("Add New");
  };

  // Control modal visibility based on button state
  useEffect(() => {
    if (btn === "") {
      setModal(false);
    } else {
      if (btn === "Add New") {
        setModalData({ name: "", description: "", images: [] }); // Clear modal data when adding new
      }
      setModal(true);
    }
  }, [btn]);

  // Close the modal
  const handleModalClose = () => {
    setBtn("");
  };

  // Fetch all services when component loads
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${base_url}/api/services`, {
          method: "GET",
          headers:{'Authorization': `Bearer ${token}`,}
        });
        
        const data = await response.json();
        if(response.status ==  401 || response.status == 403){
          toast.error(data.message) 
        }else if (!response.ok) {
          toast.error("Failed to fetch services");
        }
        setServices(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoaded(true);
      }
    };

    fetchServices();
  }, []);

  if (!loaded) {
    return <div>Loading...</div>;
  }

 
  // Handle deleting a service
  const onDelete = async (id) => {
    try {
      const response = await fetch(`${base_url}/api/delete-service/${id}`, {
        method: "DELETE",
                  headers:{'Authorization': `Bearer ${token}`,}
        
      });

      if (!response.ok) {
        toast.error("Failed to delete service");
      }else{
        toast.success("Deleted sucessfully")
      }

      setServices(services.filter((item) => item._id !== id));
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Open modal for updating an existing service
  const onUpdate = (id) => {
    const selectedService = services.find((service) => service._id === id);
    setModalData(selectedService);
    setBtn("Update");
  };

  // Handle adding a new service
  const handleAddNew = async ({ name, description, categories, workAreas, images }) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    categories.forEach((category) => formData.append("categoryId", category));
    workAreas.forEach((workArea) => formData.append("workAreaId", workArea));
    images.forEach((image) => formData.append("images", image));

    try {
      const response = await fetch(`${base_url}/api/service`, {
        method: "POST",
        body: formData,
      
          headers:{'Authorization': `Bearer ${token}`,}
        
      });

      
      const updatedService = await response.json();
      if(response.status ==  401 || response.status == 403){
        toast.error(data.message) 
      }else if (!response.ok) {
        toast.error("Failed to add service");
      }else{
        toast.success("Added sucessfully")
      }

      setServices((prevServices) => [...prevServices, updatedService]);
      handleModalClose();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoaded(true);
    }
  };

  // Handle updating an existing service
  const handleUpdate = async ({ name, description, categories, workAreas, images, id }) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
  
    // Append categories and work areas
    categories.forEach((category) => formData.append("categoryId", category));
    workAreas.forEach((workArea) => formData.append("workAreaId", workArea));
  
    // Separate files and URLs
    const existingImages = [];
    images.forEach((image) => {
      if (image instanceof File) {
        formData.append("images", image); // Append new files
      } else {
        existingImages.push(image); // Track existing images (URLs)
      }
    });
  
    // Optionally pass existing images as URLs in the request body
    formData.append("existingImages", JSON.stringify(existingImages));
  
    try {
      const response = await fetch(`${base_url}/api/update-service/${id}`, {
        method: "PUT",
        body: formData,
          headers:{'Authorization': `Bearer ${token}`,}
        
      });
  
      
  
      const updatedService = await response.json();
      if(response.status ==  401 || response.status == 403){
        toast.error(data.message) 
      }
      else if (!response.ok) {
        toast.error("Failed to update service");
      }else{
        toast.success("Update Sucessfully")
      }
      setServices((prevServices) =>
        prevServices.map((item) => (item._id === id ? updatedService : item))
      );
      handleModalClose();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoaded(true);
    }
  };
  
  

  return (
    <div className="h-full overflow-y-scroll bg-gray-100">
      <ServiceModal
        isOpen={modal}
        onClose={handleModalClose}
        onSave={handleAddNew}
        onUpdate={handleUpdate}
        btn={btn}
        data={modalData}
      />
      <div className="w-full justify-end flex px-4 py-2">
        <button
          onClick={handleModalOpen}
          className="bg-black text-[var(--primary-color)] p-3 px-6 text-xl rounded-full"
        >
          Add New
        </button>
      </div>
      <div className="w-full flex flex-wrap">
        {services.length === 0 ? (
          <div className="text-center w-full py-10">No Services found.</div>
        ) : (
          services.map((service) => (
            <ServiceCard
              service={service}
              key={service._id}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ServiceItem;
