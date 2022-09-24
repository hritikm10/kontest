import React from "react";


function DataCard(props) {
  function logoRender(){
    if(props.Site === "HackerEarth")
    {
      return props.Logo.hackerearth;
    }
    else if(props.Site === "CodeChef")
    {
      return props.Logo.codechef;
    }
    else if(props.Site === "AtCoder")
    {
      return props.Logo.atcoder;
    }
    else if(props.Site === "LeetCode")
    {
      return props.Logo.leetcode;
    }
    else if(props.Site === "HackerRank")
    {
      return props.Logo.hackerrank;
    }
    else if(props.Site === "CodeForces")
    {
      return props.Logo.codeforces;
    }
    else{
      return props.Logo.others;
    }
  }
  function blinking()
  {
    if(props.Status == "CODING")
    {
      return "ongoing";
    }
    else
    {
      return "upcoming";
    }
  }
  
  return (
    <div>   
      <div className="container mt-3 ">
        <div className="card text-center dataCards">
          <div className="cardHeader card-header">
           <img className="logoSize" src={logoRender()}/> 
           <div id="blinkingBulb" className={blinking()}></div> 
            <b>{props.Site } </b>  ( {props.Status == "CODING" ? "Ongoing" : "Upcoming"} )
          </div>
          <div className="card-body">
            <h5 className="card-title">{props.Name}</h5>
            <p className="card-text">
              <em>Duration -</em> {" "}
              {Math.floor(props.Duration / 86400) == "0"
                ? "3 Hours "
                : Math.floor(props.Duration / 86400) + " Days"}
            </p>
            <a href={props.Url} className="btn btn-primary myButton" target="_blank" rel="noopener noreferrer">
              Go to Contest 
            </a>
          </div>
          <div className="card-footer text-muted">
            <strong><em>  Date of Contest : </em></strong> { props.StartTime.substring(0, 10)}
          </div>
          <div className="card-footer text-muted">
          <strong><em> Contest starts At  : </em></strong>{
              (parseInt(props.StartTime.substring(11, 13)) <= 12
                ?  props.StartTime.substring(11, 13)
                :  parseInt(props.StartTime.substring(11, 13)) - 12) +
              props.StartTime.substring(13, 19) +
              (parseInt(props.StartTime.substring(11, 13)) <= 12
                ? " AM"
                : " PM")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataCard;
