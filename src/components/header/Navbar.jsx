import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  Typography,

} from "@mui/material";
import { ArrowDropDownOutlined } from "@mui/icons-material";






function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [MobileMenu,setMobileMenu] = useState(false)
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Fashion",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Electronic",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Cars",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Home & Garden",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Gifts",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Music",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Health & Beauty",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Pets",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Baby Toys",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Groceries",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Books",
    },
    
  ]
 
  return (
    <header className="header">
      <div className="container d_flex">
      
            <div className="categories d_flex" 
       >
          <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            bgcolor: "#f6f9fc",
            width: 230,
            height:50,
            color: "#000",
            borderRadius:20,
            p: "20px",
          }}
        >
          <i className='fa fa-border-all' style={{fontSize:"20px"}}></i>
       
          <Typography
            sx={{
              p: "20px",
              textTransform: "capitalize",
            }}
          >
            Categories
          </Typography>
         
         <ArrowDropDownOutlined color="#fff111" />
        </Button>
        
        <Menu
        
        
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".MuiPaper-root": {
              width: 230,
             
            },

          }}
        >
        {data.map((item,index)=>{
          return(
          <MenuItem onClick={handleClose} >
        
            <img style={{width:30 , marginRight:15} } src= {item.cateImg} alt=""/>
            <span>{item.cateName}</span>
          </MenuItem>

          )
        })}
        </Menu>
  

        </div>
        
       
        <div className="Link">
        <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
            <li>
           
            
            </li>
            <li> 
                <Link to="/">home</Link>
            </li>
            <li> 
                <Link to="/pages">pages</Link>
            </li>
            <li>
              <Link to="/user">user account</Link>
            </li>
            <li>
              <Link to="/vendor">vendor account</Link>
            </li>
            <li>
              <Link to="/track">track my order</Link>
            </li>
            <li>
                <Link to='/contact'>contact</Link>
              </li>
          </ul>
          <button className="toggle" onClick={()=> setMobileMenu(!MobileMenu)}>
            {
              MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>
            }
          </button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
