import React, { useState } from 'react'
import { useEffect } from 'react'
const axios = require('axios');

function TotalData() {
const [Data, setData] = useState([]);
useEffect(() => {
    axios.get('https://www.kontests.net/api/v1/all')
    .then(function (response) {
      setData(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
}, [])


  return (
    <>
    {
        Data.map((contest)=>
        {
            return (
                <>
                   <center>
                   <div className="card">
                    <div className="innercard">
                        <div className="title">{contest.name}</div>
                        <div className="date">{contest.start_time.substring(0, 10)}</div>
                        <a href={contest.url} target="_blank">Go To Contest</a>
                        <div className="stime">{(parseInt(contest.start_time.substring(11, 13)) <= 12 ?  contest.start_time.substring(11, 13) :  parseInt(contest.start_time.substring(11, 13)) - 12) + contest.start_time.substring(13, 19) + (parseInt(contest.start_time.substring(11, 13)) <= 12 ? " AM"  : " PM")}</div>
                        <div className="duration">{Math.floor(contest.duration / 86400) == "0" ? contest.duration/3600 + " Hours " : Math.floor(contest.duration / 86400) + " Days"}</div>
                        <div className="site">{contest.site}</div>
                        <div className="status">{contest.status == "CODING" ? "Ongoing" : "Upcoming"}</div>
                        <div className="in24">{contest.in_24_hours}</div>
                    </div>
                   </div>
                   </center>

                   <br />
                </>
            );
            
        })
    }
    </>
  )
}

export default TotalData