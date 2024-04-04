import React from 'react';
import inputCSS from "./Input.module.css"

const Input = ({ type, name, id, placeholder, value, src, accept, onchange }) => {

 return (
  <>

   <div id={inputCSS.inputContainer}>
    <label htmlFor={id}>{id} </label>
    <input className={inputCSS.input} type={type} name={name} id={id} placeholder={placeholder} value={value} src={src} accept={accept} onChange={onchange} />
   </div>

  </>
 )
};

export default Input;