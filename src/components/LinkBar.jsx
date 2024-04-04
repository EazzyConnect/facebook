import { Link } from 'react-router-dom';
import LinkCSS from './LinkBar.module.css';



const LinkBar = (props) => {

 const { text, to } = props
 return (
  <>
   <Link id={LinkCSS.links} to={to}>
    <h3>{text}</h3>
   </Link>
  </>
 )
};

export default LinkBar;
