import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="upcomingButton footerButton">
          <Link className="footerLinks" to="/upcoming" ><i class="fa fa-trophy" aria-hidden="true"></i><p>Upcoming</p></Link>    
        </div>
        <div className="liveButton footerButton">
          <Link to="/live"  className="footerLinks"><i class="fa fa-play-circle-o" aria-hidden="true"></i><p>Live</p></Link>
          
        </div>
        <div className="about footerButton">
        <Link to="/about" className="footerLinks"><i class="fa fa-handshake-o" aria-hidden="true"></i><p>About</p></Link>
        
        </div>
      </div>
    </div>
  );
}

export default Footer;
