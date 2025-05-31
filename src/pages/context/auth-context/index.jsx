import { initialSignInFormData, initialSignUpFormData } from "@/config";
import { loginUser, registerService } from "@/services/authApi";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {

    const [signInFormdata, setSignInFormdata] = useState(initialSignInFormData);
    const [signUpFormdata, setSignUpFormdata] = useState(initialSignUpFormData);


    const registerHandleSubmit = (e) => {
        e.preventDefault();
        registerService(signUpFormdata);
    }
    const loginHandleSubmit = (e) => {
        e.preventDefault();
        loginUser(signInFormdata);
    }
    
    return <AuthContext.Provider value={{
        signInFormdata,
        setSignInFormdata,
        signUpFormdata,
        setSignUpFormdata,
        registerHandleSubmit,
        loginHandleSubmit
    }}>{children}</AuthContext.Provider>;
}