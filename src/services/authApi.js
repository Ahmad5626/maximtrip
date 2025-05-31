  const baseAPI = "http://localhost:9000";
  
 export async function registerService(formData) {
    
    const data = await fetch(`${baseAPI}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => res.json(
      console.log(res)
    )).catch((err) => console.log(err));
    
   
  }

 export async function loginUser(formData) {
  try {
    const res = await fetch(`${baseAPI}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json(); // ✅ Parse JSON response
    console.log("Token:", data.data.token);

    // ✅ Store token in localStorage
    if (data.data.token) {
      localStorage.setItem("token", data.data.token);
    }

    return data; // ✅ return the response for future use
  } catch (err) {
    console.error("Login Error:", err);
    return null;
  }
}

// check login user
export async function getAuthenticatedUser() {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      console.warn("No token found in localStorage");
      return null;
    }

    const res = await fetch(`${baseAPI}/auth/check-auth`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // ✅ Send token in Authorization header
      },
    });

    const data = await res.json();
    if (data.success) {
      console.log("Authenticated user:", data.data.user);
      return data.data.user; // return user data
    } else {
      console.warn("Authentication failed");
      return null;
    }
  } catch (error) {
    console.error("Error checking auth:", error);
    return null;
  }
}
