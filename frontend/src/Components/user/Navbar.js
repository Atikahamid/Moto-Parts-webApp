import React from 'react';
import '../../Styles/App.css'
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

export default function Navbar({toggleSidebar}) {
  return (

    <div className='topbar'>
      <div className="first">
        <FaBars className='bars2' onClick={toggleSidebar} />
        <div className="row">
          <div className="col-8">
            <input type="text" className='search-box' placeholder='search...' />
          </div>
          <div className="col-2">
            <button type='submit' className='search-icon'><IoMdSearch /> </button>
          </div>
        </div>
      </div>
      <div className="side">
        <FaShoppingCart className='cart' />
        <h3 className='name'>Atika Hamid </h3>
        <button type="button" className="btn  logoutbtn">Logout</button>
      </div>
    </div>

  )
}
