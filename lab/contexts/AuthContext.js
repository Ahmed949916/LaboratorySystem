import { createContext, useContext, useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const { data: session, status } = useSession();   
  const [auth, setAuth] = useState({
    loading: true,
    user: null,
    isAdmin: false,
    isUser: false,
  });

  useEffect(() => {
    if (status === "loading") return;    
       
    if (status === "authenticated") {
      const { id, role, phone ,name} = session.user;
      setAuth({
        loading: false,
        user:   { id, role, phone,name },
        isAdmin: role === "admin",
        isUser:  role === "user",
      });
      console.log("auth",auth)
    } else {
      setAuth({ loading: false, user: null, isAdmin: false, isUser: false });
    }
  }, [status, session]);

  return (
    <AuthContext.Provider value={{ ...auth, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
