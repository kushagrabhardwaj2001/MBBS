import React from "react";
import { Navigate, useLocation } from "react-router-dom";
// import {AuthReducer} from ""

const RequireAuth = ({ children }) => {
     console.log("children:", children);
     const location = useLocation();
     const isAuth = localStorage.getItem("isAuth")
     console.log('isAuth in require component', isAuth)
     if (!isAuth) {
    //  if (false) {
          return (
               <Navigate
                    to="/login/user"
                    replace
                    state={{ data: location.pathname }}
               />
          );
     }
     console.log("children:", children);
     return children;
};
export default RequireAuth;