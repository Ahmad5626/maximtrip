  const baseAPI = "http://localhost:7000";
  
 export async function createEnquiry(formData) {
    
 try {
     const data = await fetch(`${baseAPI}/v1/api/create-enquiry`, {
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

