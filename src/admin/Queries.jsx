import React, { useContext, useEffect ,useState} from 'react'
import Query from './Components/Query';
import { api_url } from '../config';
import { TokenContext } from '../adminroutes/AdminRoutes';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Queries = () => {
    const base_url = api_url
  const [queries, setQueries] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const {token} = useContext(TokenContext)
  


  useEffect(() => {
    const fetchWorkAreas = async () => {
      try {
        const response = await fetch(`${base_url}/api/enquiries`, {
           
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
          },
        });
        if (!response.ok) {
          toast.error('Failed to fetch work areas');
        }
        const data = await response.json();
        if(response.status ==  401 || response.status == 403){
          toast.error(data.message)
        }
        setQueries(data);
      } catch (error) {
        toast.error(error.message);
      }
    };

      setLoaded(true);
    fetchWorkAreas();
  }, []);







  return (
    <div className='flex flex-wrap w-full bg-gray-100 h-full overflow-y-scroll'>
        
      {queries.map((q,index)=><Query key={index} {...q} />)}
    </div>
  )
}

export default Queries

