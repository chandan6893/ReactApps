import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './covid.css'

function Covid() {
  const [data,setData] = useState([]);  
  const getCovidData = async() =>{
        
        try{
            const response = await fetch("https://data.covid19india.org/data.json");
            const actualData = await response.json();
            // console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        // getCovidData();
    },[])

  return (
    <div>
      <section>
        <h3 id='live' >Live</h3>
        <h1 id='lcd'>Live Covid Tracker</h1>
        <ul className="container">
          <li className="mainCard">
            <div className="content cl1">
              <p className="title">
                <span>Country</span>
              </p>
              <p className="data">
                <span>India</span>
              </p>
            </div>
          </li>

          <li className="mainCard">
            <div className="content cl2">
              <p className="title">
                <span>Recovered</span>
              </p>
              <p className="data">
                <span>{data.recovered}</span>
              </p>
            </div>
          </li>

          <li className="mainCard">
            <div className="content cl3">
              <p className="title">
                <span>Active</span>
              </p>
              <p className="data">
                <span>{data.active}</span>
              </p>
            </div>
          </li>

          <li className="mainCard">
            <div className="content cl4">
              <p className="title">
                <span>Confirmed</span>
              </p>
              <p className="data">
                <span>{data.confirmed}</span>
              </p>
            </div>
          </li>

          <li className="mainCard">
            <div className="content cl5">
              <p className="title">
                <span>DeltaRecovered</span>
              </p>
              <p className="data">
                <span>{data.deltarecovered}</span>
              </p>
            </div>
          </li>

          <li className="mainCard">
            <div className="content cl6">
              <p className="title">
                <span>UpdatedTime</span>
              </p>
              <p className="data">
                <span>{data.lastupdatedtime}</span>
              </p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Covid