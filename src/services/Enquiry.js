import { baseUrl } from "utils/constant";

  
 export async function createEnquiry(formData) {
    
 try {
     const data = await fetch(`${baseUrl}/v1/api/create-enquiry`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    const res = await data.json()
    return res
 } catch (error) {
  return error
 }
    
   
  }


// check login user

