import React from "react"
import "./style.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>E-Commerce</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
            <li>banimazar, Elmaia, Egypt </li>
              <li>Email: eslammoh907@gmail.com</li>
              <li>Phone: 01013771873 ,</li>
            </ul>
            <ul 
            className="media"
            style={{display:"flex",marginTop:"20px" ,justifyContent:"space-between", gap:"1px"}}>
              <li ><Link to={"https://github.com/Eslam1907"}><i class="fa-brands fa-github"></i></Link></li>
              <li ><Link  to={"https://www.linkedin.com/in/eslam-mohamed-5a98a12b6"}><i  class="fa-brands fa-linkedin"></i></Link></li>
              <li><Link to={"https://api.whatsapp.com/send/?phone=%2B201013771873&text&type=phone_number&app_absent=0"}><i class="fa-brands fa-whatsapp"></i></Link></li>
              <li><Link to={"https://www.facebook.com/profile.php?id=100008340670121"}><i class="fa-brands fa-facebook"></i></Link></li>
              <li ><Link to={"https://www.instagram.com/eslammohamed3751?igsh=YzljYTk1ODg3Zg=="}><i  class="fa-brands fa-instagram"></i></Link></li>

            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
