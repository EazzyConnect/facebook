import React from 'react';
import LinkBar from './LinkBar';
// import HeaderCSS from './Header.module.css';
import { Link } from 'react-router-dom';


const Header = () => {


 return (
  <>
   <div>

    <div>
     <h1>Logo</h1>
    </div>

    <div>

     <div>
      <Link to={"/login"}>
       <button >Login</button>
      </Link>
      <img src="" alt="profileImg" />
      <Link to={"/"}>
       <button >Logout</button>
      </Link>
     </div>

     <div>
      <LinkBar to={"/"} text={"Home"} />
      <LinkBar to={"/about"} text={"About"} />
      <LinkBar to={"/contact"} text={"Contact"} />
      <LinkBar to={"/settings"} text={"Settings"} />
     </div>

    </div>

   </div>

  </>
 )
};

export default Header;
