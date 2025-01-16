import React, { useContext, useEffect, useState } from "react";
import Modal from "./Components/Modal";
import CategoryCard from "./Components/CategoryCard";
import { api_url } from "../config";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../adminroutes/AdminRoutes";
import { toast } from "react-toastify";

const Work = () => {
  const base_url = api_url;
  const [work, setWork] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [modal, setModal] = useState(false);
  const [btn, setBtn] = useState("");
  const [modalData, setModalData] = useState({ name: "" }); 
  const {token} = useContext(TokenContext)

  const handleModalOpen = () => {
    setBtn("Add New");
  };

  useEffect(() => {
    if (btn === "") {
      setModal(false);
    } else {
      if (btn === "Add New") {
        setModalData({}); // Clear modal data when adding new
      }
      setModal(true);
    }
  }, [btn]);

  const handleModalClose = () => {
    setBtn("");
  };

  useEffect(() => {
    const fetchWorkAreas = async () => {
      try {
        const response = await fetch(`${base_url}/api/workareas`);
        
        const data = await response.json();
       if (!response.ok) {
          toast.error("Failed to fetch work areas");
        }
        setWork(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoaded(true);
      }
    };

    fetchWorkAreas();
  }, []);

  if (!loaded) {
    return <div>Loading...</div>;
  }

  

  const onDelete = async(id) => {
    try {
      const response = await fetch(`${base_url}/api/delete-workarea/${id}`, {
        method: "DELETE",
                
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
        },
      });

      if (!response.ok) {
        toast.error("Failed to delete work area");
      }
      else{
        toast.success("Deleted Sucessfully")
      }

      setWork(work.filter((item) => item._id !== id));
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onUpdate = (id) => {
    const selectedWork = work.find((work) => work._id === id);
    setModalData(selectedWork);
    setBtn("Update");
  };

  const handleAddNew = async ({ name, image }) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);
    
    try {
      const response = await fetch(`${base_url}/api/workarea`, {
        method: "POST",
        body: formData,
        headers:{'Authorization': `Bearer ${token}`,}
      });

      if (!response.ok) {
        throw new Error("Failed to add work areas");
      }

      // Fetch the updated list of work areas after a successful save
      const updatedWork = await response.json();
      if(response.status ==  401 || response.status == 403){
        toast.error(data.message) 
      }
      else if (!response.ok) {
        toast.error("Failed to add work areas");
      }else{
        toast.success("Added Sucessfully")
      }
      setWork((prevWork) => [...prevWork, updatedWork]);
      handleModalClose();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoaded(true);
    }
  };
  const handleUpdate = async ({ name, image ,id}) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);
    
    try {
      const response = await fetch(`${base_url}/api/update-workarea/${id}`, {
        method: "PUT",
        body: formData,
        headers:{'Authorization': `Bearer ${token}`,}
      });

      

      // Fetch the updated list of work areas after a successful save
      const updatedWork = await response.json();
      if(response.status ==  401 || response.status == 403){
        toast.error(data.message) 
      }else if (!response.ok) {
        toast.error("Failed to add work areas");
      }else{
        toast.success("Updated Sucessfully")
      }
      setWork((prevWork) =>
        prevWork.map((item) => (item._id === id ? updatedWork : item))
      );
      handleModalClose();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoaded(true);
    }
  };
  return (
    <div className="bg-gray-100 h-full overflow-y-scroll">
      <Modal
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
      <div className="flex w-full  flex-wrap">
        {work.length === 0 ? (
          <div className="text-center w-full py-10">No work areas found.</div>
        ) : (
          work.map((w) => (
            <CategoryCard
              w={w}
              key={w._id}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Work;
