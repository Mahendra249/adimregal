import React from 'react'
import './AdminLayout.css';
import Navbar from '../../Components/Navbar/Navbar';

const AdminLayout = () => {
  return (
    <div className='layout-maincontainer'> 
      <div className="layout-Navigation">
        <Navbar/>
      </div>
      <div className="layout-main-content">
        <div className="layout-navigation">

        </div>
        <div className="layout-main-pages">
            
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
