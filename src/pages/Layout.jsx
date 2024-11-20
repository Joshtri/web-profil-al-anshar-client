
// import React from 'react';
import PropTypes from "prop-types";
import CustomNavbar from "../components/partials/CustomNavbar";
import Footer from "../components/partials/Footer";



function Layout({ children }) {
  return (
    <>
      <CustomNavbar />
      <div className='mt-5 pt-10'>
        {/* <ShareSidebar /> */}
        {children} {/* Ensure this is rendering */}
      </div>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout;

