import React from "react";
import DataCard from "./DataCard";
import { useEffect, useState } from "react";
import Knavbar from "./Knavbar";
import atcoder from "../Images/atcoder.png"
import codechef from "../Images/codechef.png"
import codeforces from "../Images/codeforces.png"
import others from "../Images/others.png"
import hackerearth from "../Images/hackerearth.png"
import leetcode from "../Images/LeetCode.png"
import hackerrank from "../Images/HackerRank.png"
import Footer from "./Footer";

function CodeForces() {
  const [Data, setData] = useState([]);
  function show() {
    var load =  document.querySelector('.animation');
    load.style.display = "block";
 }
 function hide() {
   var load =  document.querySelector('.animation');
   load.style.display = "none";
 }

useEffect(() => {
 show();
 var data = fetch("https://kontests.net/api/v1/all")
   .then((res) => {
     return res.json();
   })
   .then((fdata) => {
     var d = fdata;
     setData(d);
     hide();
   })
   .catch((err) => {
     console.log(err);
   });
   
}, []);
  var logo = {
    atcoder : atcoder,
    codechef : codechef,
    codeforces : codeforces,
    others : others,
    hackerearth : hackerearth,
    leetcode : leetcode,
    hackerrank : hackerrank
  };
  return (
    <div>
      <Knavbar/>
      {Data.map((ele,pos) => {
        if(ele.site == "CodeForces")
        {
            return (
                <div key={pos}>
                  <DataCard
                    Name={ele.name}
                    Site={ele.site}
                    Url={ele.url}
                    Duration={ele.duration}
                    Status={ele.status}
                    StartTime = {ele.start_time}
                    Logo = {logo}
                  />
                </div>
              );
        }
      })}
      <Footer/>
    </div>
  );
}

export default CodeForces;
