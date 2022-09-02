import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'

class Footer extends React.Component
{
  render()
  {
    return (
       
         <div class="footer-content">
            <h3>Foolish Developer</h3>
            <p>Foolish Developer is a blog website where you will find great tutorials on web design and development. Here each tutorial is beautifully described step by step with the required source code.</p>
            <ul class="socials">
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
            </ul>
        </div>
      
    )
  }
}
export default Footer;