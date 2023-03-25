import { createContext,useContext } from "react";

const UserContext = createContext();

export default function AppStore({ children }) {
  
    const user= {
        id: 1,
        name: "",
        token:"",
        avatar:""
    }

  return (
    <UserContext.Provider value={ {user} }>
      {children}
    </UserContext.Provider>
  );
}

// Make useUserContext Hook to easily use our context throughout the application
export function useUserContext() {
  return useContext(UserContext);
}