import React, { useEffect ,useState} from 'react'
import PageTitle from '../component/PageTitle';
import WorkCard from '../component/WorkCard';
import handyman from '../assets/handyman.jpg'
import { api_url } from '../config';
const Work = () => {
  const base_url = api_url
  const [works, setWorks] = useState([]);
  const [error, setError] = useState(null);
  // const works = [{category:"Bedroom",image:"https://static.wixstatic.com/media/74f558_4ef3f401e4a2400a8979c42d1a7ba1a7~mv2_d_5760_3840_s_4_2.jpeg/v1/fill/w_364,h_726,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/74f558_4ef3f401e4a2400a8979c42d1a7ba1a7~mv2_d_5760_3840_s_4_2.jpeg"},
  //   {category:"Bedroom",image:"https://static.wixstatic.com/media/74f558_4ef3f401e4a2400a8979c42d1a7ba1a7~mv2_d_5760_3840_s_4_2.jpeg/v1/fill/w_364,h_726,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/74f558_4ef3f401e4a2400a8979c42d1a7ba1a7~mv2_d_5760_3840_s_4_2.jpeg"},
  //   {category:"Bedroom",image:"https://static.wixstatic.com/media/74f558_4ef3f401e4a2400a8979c42d1a7ba1a7~mv2_d_5760_3840_s_4_2.jpeg/v1/fill/w_364,h_726,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/74f558_4ef3f401e4a2400a8979c42d1a7ba1a7~mv2_d_5760_3840_s_4_2.jpeg"},{category:"Bedroom",image:"https://static.wixstatic.com/media/74f558_4ef3f401e4a2400a8979c42d1a7ba1a7~mv2_d_5760_3840_s_4_2.jpeg/v1/fill/w_364,h_726,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/74f558_4ef3f401e4a2400a8979c42d1a7ba1a7~mv2_d_5760_3840_s_4_2.jpeg"},
  //   {category:"Bedroom",image:"https://static.wixstatic.com/media/74f558_4ef3f401e4a2400a8979c42d1a7ba1a7~mv2_d_5760_3840_s_4_2.jpeg/v1/fill/w_364,h_726,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/74f558_4ef3f401e4a2400a8979c42d1a7ba1a7~mv2_d_5760_3840_s_4_2.jpeg"},
  //   {category:"Bedroom",image:"https://static.wixstatic.com/media/74f558_4ef3f401e4a2400a8979c42d1a7ba1a7~mv2_d_5760_3840_s_4_2.jpeg/v1/fill/w_364,h_726,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/74f558_4ef3f401e4a2400a8979c42d1a7ba1a7~mv2_d_5760_3840_s_4_2.jpeg"}
  // ];
  const [loaded, setLoaded] = useState(false);


  


  useEffect(() => {
    const fetchWorkAreas = async () => {
      try {
        const response = await fetch(`${base_url}/api/workareas`);
        if (!response.ok) {
          throw new Error('Failed to fetch work areas');
        }
        const data = await response.json();
      setLoaded(true);
        console.log(data);
        
        setWorks(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchWorkAreas();
  }, []);
  return (
    <>
    <PageTitle/>
    <div style={{backgroundImage:`url(${handyman})`}} className="">
    <div className={`bg-[#000000e6] min-h-screen`}>
      {!loaded?<div className="text-2xl text-white p-4 h-100 w-full flex items-center justify-center">Loading...</div>:<div className={` flex flex-wrap space-x justify-center transform transition-all duration-150 ease-out ${loaded?'scale-100':'scale-0'}`}>
      {works.map((work,index)=><WorkCard key={index} work={work}/>)}</div>}
    </div>
    </div>
    </>
  )
}

export default Work
