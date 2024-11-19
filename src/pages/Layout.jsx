<<<<<<< HEAD
import React from "react";
import PropTypes from "prop-types";
import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";

function Layout({ children }) {
  return (
    <>
        <Navbar/>
            <div className="mt-4 mb-5">{children}</div>
        <Footer/>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

=======
import React from 'react';
import CustomNavbar from "../components/Partials/CustomNavbar";
import Footer from "../components/Partials/Footer";
// import ShareSidebar from "../components/Partials/ShareSidebar";

// Ensure you're accepting the children prop
// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <>
      <CustomNavbar />
      <div className='mt-5 pt-10'>
        {/* <ShareSidebar /> */}
        {children} {/* Ensure this is rendering */}
      </div>
      {/* <Footer /> */}
    </>
  );
}
  
>>>>>>> c1d4b1a (updating frontend.)
export default Layout;
