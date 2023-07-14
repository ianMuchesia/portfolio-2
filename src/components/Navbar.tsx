import { Icon } from '@iconify/react';
import { useState } from 'react';

const Navbar = () => {

  const [toggle , setToggle ] = useState(false)

  const handleToggleChange=()=>{
    setToggle(prevToggle=>!prevToggle)
  }
  return (
  <header>
    <div className="header__top">
      <div className="header__top-container">
      <div className="logo">
        <h4>Ian</h4>
        </div>
   {!toggle? <Icon icon="ion:menu-outline" height={40} onClick={handleToggleChange} className='toggle-icon'/>:
    <Icon icon="material-symbols:close" height={40} onClick={handleToggleChange} className='toggle-icon-close' />}
      </div>
     
      </div>
     

        <ul className={`header__links ${toggle?"show-nav":"hide-nav"}`} >
          <li>About</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>
        
   
  </header>
  )
}

export default Navbar