import Navbar from '@/components/navbar/Navbar'
import Footer from '@/footer/Footer'
import React, { use, useContext, useEffect, useState } from 'react'
import img from '../../../public/imgs/slider-1.png'
import { AuthContext } from '@/context'
import { useParams } from 'react-router-dom'
import ScrolltoTop from '@/components/ScrolltoTop'

const Blog = () => {
  const {destinationsData}=useContext(AuthContext)
  const [blogDetails,setBlogDetails]=useState({})

  const {id}=useParams()


useEffect(()=>{
  destinationsData?.map((item)=>{
    if(item.slug==id){
      setBlogDetails(item)
    }
  })
})


  return (
    <>
    <ScrolltoTop/>
    <div>
    <Navbar/>

    <div className="bg-gray-50 min-h-screen py-8 px-4">
        <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{blogDetails.title}</h1>
            <p className="text-gray-700"> 05 Apr 2025</p>

            <div className=' shadow-2xl mt-4'>
                <img src={blogDetails.image} className='w-full h-150 object-cover rounded-2xl' >

                </img>
            </div>

              <div className=' shadow-2xl my-4 w-full rounded-2xl'>
                <div className=''>

                <h1 className='border-b-2 border-gray-300 py-5 px-5 text-xl'>Browse:- {blogDetails.title}</h1>

                <p className='p-5 leading-12'>
                <div
                  className="prose prose-gray max-w-none leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: blogDetails.description }}
                />
                  {}
                </p>

                </div>

               
            </div>
        </div>
       
    </div>
    <Footer/>
      
    </div>
      
    </>
  )
}

export default Blog
