import React from "react"
import { Link } from "react-router-dom"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row links'>
         
             
              <Link  to={"https://myportfolio1907.netlify.app/"}>portfolio</Link>
              <Link to={"https://api.whatsapp.com/send/?phone=%2B201013771873&text&type=phone_number&app_absent=0"}><i class="fa-brands fa-whatsapp"></i></Link>

        
          </div>
          <div className='right row RText'>
            <label>Theme FAQ"s</label>
            <label>Need Help?</label>
          
            <label>EN</label>
            
            <label>USD</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head