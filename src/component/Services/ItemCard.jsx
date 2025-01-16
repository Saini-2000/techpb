import React from 'react'
import { Link } from 'react-router-dom'
import { api_url } from '../../config'

const ItemCard = ({item}) => {
  const imageurl = api_url+"/"+item.image
  
  return (
    <div className='w-full sm:w-1/2 lg:w-1/3  p-3 '>
      <div className='bg-gray-200 rounded-lg text-center h-60 overflow-hidden relative border-1 border-white shadow-lg shadow-slate-500'>
       <Link to={`/workItem/${item._id}`}>
        <div style={{backgroundImage:`url(${imageurl})`} } className={`w-full h-full bg-cover hover:scale-110 transition transition:transform transition:500 bg-[url(${imageurl})]`}></div>
        <img src={api_url+item.image} alt="img"/>
        <p className='absolute bottom-0 w-full bg-gray-200 bg-opacity-75 py-1'>{item.name}</p></Link>
      </div>
    </div>
  )
}

export default ItemCard
