import React from 'react'
import { Link } from 'react-router-dom'
import { api_url } from '../config'

const CategoryWorkCard = ({item}) => {
  
  const base_url = api_url
    const categorywork={image:"https://static.wixstatic.com/media/74f558_4ef3f401e4a2400a8979c42d1a7ba1a7~mv2_d_5760_3840_s_4_2.jpeg/v1/fill/w_364,h_726,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/74f558_4ef3f401e4a2400a8979c42d1a7ba1a7~mv2_d_5760_3840_s_4_2.jpeg"}
    console.log(item );
    
  return (
    <>
    
    <div className="w-full sm:w-1/4 h-72 overflow-hidden rounded m-2 ">
             <Link style={{backgroundImage:`url(${base_url}/${item.image})`}}  to={`/workItem/${item._id}`} target="_self" className="w-full h-full flex items-center justify-center bg-center bg-cover ')]">
             <div className=" w-full h-full text-xl flex items-end justify-end  ">
                  <span className='bg-black/50 backdrop-blur-sm px-2 py-1 rounded-lg text-white'>{item.name}</span>
              </div>
            
                </Link>
          </div>
    </>
  )
}

export default CategoryWorkCard
