import React from "react";
import Footer from "./Footer";
import Knavbar from "./Knavbar";
import {useEffect , useState} from "react";

function About() {
  const [Data, setData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [username, setUserName] = useState(null);

  function show() {
    var load =  document.querySelector('.animation');
    load.style.display = "block";
 }
 function hide() {
   var load =  document.querySelector('.animation');
   load.style.display = "none";
 }
  function change()
  {
    show();
   const user =  prompt("Enter CodeChef UserName");
   console.log(user);
   setUserName(user);
   var data = fetch(`https://competitive-coding-api.herokuapp.com/api/codechef/${user}`)
      .then((res) => {
        return res.json();
      })
      .then((fdata) => {
        hide();
        var about = fdata;
        var user = fdata.user_details;
        setData(about);
        setUserData(user);
      })
      .catch((err) => {
        alert("No User of this username exists in our Database!!!")
        window.location = "/about";
      });
  }
  return (
    <>
      <Knavbar />
      <div className="card" style={{width: "18rem" , margin : "auto" , marginTop : "20px"}}>
        <div className="card-body aboutCard">
          <h5 className="card-title"> {userData.name} </h5>
          <h6 className="card-subtitle mb-2 text-muted">{(!userData.username)? " " : ("@" + userData.username)}</h6>
          <p className="card-text">
          {userData.institution}
          </p>
          <p className="card-text">
           {(!userData.city  || !userData.state  || !userData.country ) ? "No information Submitted by user." : (userData.city + ", " + userData.state + ", " + userData.country)}
          </p>

          <h6 className="card-subtitle mb-2  stars">{Data.stars}</h6>
         
          <a href={username == null ? "#" : `https://www.codechef.com/users/${username}`} className="card-link visitProfile">
            <b> Visit Profile &#9829;</b>
          </a>
        </div>

        <button type="button" class="btn btn-info" onClick={change}>Enter username</button>
      </div>
      <Footer />
    </>
  );
}

export default About;
