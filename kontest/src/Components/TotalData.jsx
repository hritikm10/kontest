import React, { useState } from 'react'
import { useEffect } from 'react'
const axios = require('axios');

function TotalData() {

    var gapi = window.gapi
    var CLIENT_ID = "291033616043-2c9uuvdi2181kas4pbbgkgfp867ne3fp.apps.googleusercontent.com"
    var API_KEY ="AIzaSyBI75x58ddcclv3c5RENRzrD3J9MYSOCIE"
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
    var SCOPES = "https://www.googleapis.com/auth/calendar.events"

  function handlee(){
    gapi.load('client:auth2',()=>{
        gapi.client.init({
            apiKey: API_KEY,
            discoveryDocs: [DISCOVERY_DOCS],
            scope : SCOPES,
            clientid : CLIENT_ID
          })
           gapi.client.load('calendar','v3',()=> console.log("yes"))
           gapi.auth2.getAuthInstance().signIn()
           .then(()=>{
           })


    })
    
   

  }

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
        Data.map((contest,key)=>
        {   
            return (
                <>
                   <center>
                   <div className="card" key={key}>
                    <div className="innercard">
                        <div className="title">Name : {contest.name}</div>
                        <div className="date">Date : {contest.start_time.substring(0, 10)}</div>
                        <div className="stime">Start time: {(parseInt(contest.start_time.substring(11, 13)) <= 12 ?  contest.start_time.substring(11, 13) :  parseInt(contest.start_time.substring(11, 13)) - 12) + contest.start_time.substring(13, 19) + (parseInt(contest.start_time.substring(11, 13)) <= 12 ? " AM"  : " PM")}</div>
                        <div className="duration">Duration of test :{Math.floor(contest.duration / 86400) == "0" ? contest.duration/3600 + " Hours " : Math.floor(contest.duration / 86400) + " Days"}</div>
                        <div className="site">Platform : {contest.site}</div>
                        <div className="status">Status : {contest.status == "CODING" ? "Ongoing" : "Upcoming"}</div>
                        <div className="in24">In 24 hours : {contest.in_24_hours}</div>
                        <div className="cardButtons">
                            <a className='cardButton' href={contest.url} target="_blank"><span>Go To Contest</span></a>
                            <a className='cardButton' target="_blank" onClick={handlee}>Add to calender</a>
                        </div>
                       
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