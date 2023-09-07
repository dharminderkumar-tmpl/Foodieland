import React from 'react'
import { Link } from 'react-router-dom';
const openInNewTab=(url)=>{
  window.open(url, '_blank','noreferrer');
}
function Navbar() {
  return (
    <div className='navbar'> 
      <div className='leftSide'>
       <Link to={'/'}><img src={'/Assets/logo.png'}/></Link> 
      </div>
      <div className='mid'>
        <ul className='navItems'>
            <Link to={"/"}>Home</Link>
            <Link to={'/Recipe'}>Recipe</Link>
            <Link to={'/Blog'}>Blog</Link>
            <Link to={'/Contact'}>Contact</Link>
            <Link to={'/AboutUs'}>About Us</Link>
        </ul>
      </div>

      <div className='rightSide'>
        <button onClick={()=>openInNewTab("https://www.facebook.com/")}>
            <img src={'/Assets/fb.png'}/>
        </button>
        <button onClick={()=>openInNewTab("https://www.twitter.com/")}>
            <img src={'/Assets/twitter.png'}/>
        </button>
        <button onClick={()=>openInNewTab("https://www.instagram.com/")}>
            <img src={'/Assets/instagram.png'}/>
        </button>

        
        {/* <img src={twitter}/>
        <img src={instagram}/> */}

      </div>
    </div>
  )
}

export default Navbar

