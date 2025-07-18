import { initialEnquiryFormData, } from "@/config";
import { getBlog } from "@/services/Blog";
import { getDestination } from "@/services/Destinations";
import { createEnquiry, } from "@/services/Enquiry";
import { getPage } from "@/services/Page";
import { createContext, useEffect, useState } from "react";
import { toast } from "sonner";
import { baseUrl } from "@/utils/constant";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [packegesData, setPackegesData] = useState([])
  const [blogData, setBlogData] = useState([])
  const [destinationsData, setDestinationsData] = useState([])
  const [pageData, setPageData] = useState([])
  const [categoryData, setCategoryData] = useState([])
  const [popupHeadline, setPopupHeadline] = useState("")
  const [isPopupOpen, setIsPopupOpen,] = useState(false)
  const [isPopupOpen2, setIsPopupOpen2,] = useState(false)
 
  const HandleSubmitEnquiry = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formData = Object.fromEntries(data);
    console.log(formData);
    
    
    try {
      const data =await fetch(`${baseUrl}/enquiry/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((res) => { 
       
        toast.success("Message sent successfully");
      })
    
      await createEnquiry(formData);
      toast.success("Enquiry submitted successfully");
      e.target.reset();
      setIsPopupOpen(false)
      setIsPopupOpen2(false)
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };


  const getCategoryData = async () => {
    const data = await fetch(`${baseUrl}/v1/api/get-category`)
    if (data) {
      const res = await data.json()
      setCategoryData(res.data)

    }
  }


  const getPackegesData = async () => {
    const data = await fetch(`${baseUrl}/v1/api/get-packeges`)
    if (data) {
      const res = await data.json()
      setPackegesData(res.data)

    }
  }


  const getBlogData = async () => {
    const data = await getBlog()
    if (data) {

      setBlogData(data.data)

    }
  }

  const getDestinationsData = async () => {
    const data = await getDestination()
    if (data) {

      setDestinationsData(data.data)

    }
  }


  const getPageData = async () => {
    const data = await getPage()
    if (data) {

      setPageData(data.data)

    }
  }
  useEffect(() => {
    getCategoryData()
    getPackegesData()
    getBlogData()
    getPageData()
    getDestinationsData()
  }, [])

  // console.log(packegesData);

  return <AuthContext.Provider value={{
  
   
    HandleSubmitEnquiry,
    categoryData,
    packegesData,
    blogData,
    isPopupOpen,
    setIsPopupOpen,
    isPopupOpen2,
    setIsPopupOpen2,
    popupHeadline,
    setPopupHeadline,
    pageData,
    destinationsData
  }}>{children}</AuthContext.Provider>;
}