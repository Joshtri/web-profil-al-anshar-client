
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

export default Layout;
