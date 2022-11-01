import React from 'react'
import { useLocation } from "react-router";

const ScrowToTop = (props:any) => {

    const location = useLocation();
    
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

  return (
    <>{props.children}</>
  )
}

export default ScrowToTop