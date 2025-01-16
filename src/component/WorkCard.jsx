import React from 'react'
import { Link } from 'react-router-dom'
import { api_url } from '../config'

const workcard = ({work}) => {
  const image =api_url+"/"+work.image
  return (
    <>
    <div className="w-full sm:w-1/4 h-72 overflow-hidden rounded-xl m-6 ">
             <Link style={{backgroundImage:`url(${image})`}} to={`/work/${work.name}`} target="_self" className="w-full h-full hover:scale-110 transform transition-transform duration-300  flex items-center justify-center bg-center bg-cover ')]">
             <div className=" w-full h-full text-3xl flex items-center justify-center bg-[var(--blur-bg)] hover:bg-transparent transform transition-transform duration-500">
                  <span className="text-[var(--primary-color)]">{work.name}</span>
              </div>
            
                </Link>
          </div>
    </>
  )
}

export default workcard
