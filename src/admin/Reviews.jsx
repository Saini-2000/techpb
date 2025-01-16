import React, { useContext, useEffect, useState } from 'react'
import FeedbackCard from './Components/FeedbackCard'
import { api_url } from '../config';
import { TokenContext } from '../adminroutes/AdminRoutes';
import { toast } from 'react-toastify';

const Reviews = () => {
  
  const base_url = api_url;
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true); 
  const {token} = useContext(TokenContext)

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch(`${base_url}/api/feedbacks`, {
           
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
          },
        });
        
        const data = await response.json();
        if(response.status ==  401 || response.status == 403){
          toast.error(data.message)
           
        }
        else if (!response.ok) {
          toast.error('Network response was not ok');
        }
        setFeedbacks(data);
      } catch (err) {
        toast.error('Failed to fetch feedbacks');
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  if (loading) return <p>Loading...</p>;
  
  
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 h-full overflow-y-scroll bg-gray-100">
    
    {feedbacks.map((feedback, index) => (
      <>
      <FeedbackCard
        key={index}
        messageHeading={feedback.messageHeading}
        message={feedback.message}
        suggestion={feedback.suggestion}
      /></>
    ))}
  </div>
  )
}

export default Reviews
