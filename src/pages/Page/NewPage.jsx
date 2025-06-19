import Navbar from '@/components/navbar/Navbar'
import ScrolltoTop from '@/components/ScrolltoTop'
import { AuthContext } from '@/context'
import Footer from '@/footer/Footer'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const NewPage = () => {
    const {pageData}=useContext(AuthContext)
    const [PageDetails,setPageDetails]=useState({})
const slug=useParams()
    
    console.log(slug.slug);
    
    useEffect(()=>{
      pageData?.map((item)=>{
        if(item.slug==slug.slug){
          setPageDetails(item)
        }
      })
    })
    
  return (
    <div>
       <ScrolltoTop/>
    <div>
    <Navbar/>

    <div className="bg-gray-50 min-h-screen py-8 px-4">
        <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{PageDetails.title}</h1>
            <p className="text-gray-700"> 05 Apr 2025</p>

            <div className=' shadow-2xl mt-4'>
                <img src={PageDetails.image} className='w-full h-150 object-cover rounded-2xl' >

                </img>
            </div>

              <div className=' shadow-2xl my-4 w-full rounded-2xl'>
                <div className=''>

                <h1 className='border-b-2 border-gray-300 py-5 px-5 text-xl'>Browse:- {PageDetails.title}</h1>

                <p className='p-5 leading-12'>
                <div
                  className="prose prose-gray max-w-none leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: PageDetails.description }}
                />
                  {}
                </p>

                </div>

               
            </div>
        </div>
       
    </div>
    <Footer/>
      
    </div>
    </div>
  )
}

export default NewPage
