import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./covid.css";

function Covid() {
  const [data, setData] = useState([]);
  const [item,setItem] = useState([]);
  const [search,setSearch] = useState('');
  const getCovidData = async () => {
    try {
      const response = await fetch("https://data.covid19india.org/data.json");
      const actualData = await response.json();
      console.log(actualData);
      // console.log(actualData.statewise);
      setData(actualData.statewise[0]);
      setItem(actualData.statewise)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);
console.log(item)
  return (
    <div>
      <section className="mainContainer">
        <h3 id="live">Live</h3>
        <h1 id="lcd">Live Covid Tracker</h1>
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
                <span>Migratedother</span>
              </p>
              <p className="data">
                <span>{data.migratedother}</span>
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section>

        <div className="mainHeading">
          <h1>Covid19 Dashboard</h1>
          <input className="searchBox" type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
        </div>  
        

        <div className="tableResponsive">
          <table>
            <tbody>
              <tr>
                <th>State</th>
                <th>Recovered</th>
                <th>Active</th>
                <th>Confirmed</th>
                <th>Delta Recovered</th>
                <th>Migreted Other</th>
              </tr>
            </tbody>

            <tbody>
              {item.filter((ele,ind)=>{
                return ele.state.toLowerCase().includes(search.toLowerCase()) 
              }).map((currelem, index) => {
                return (
                  <tr key={index} draggable >
                    <td>{currelem.state}</td>
                    <td>{currelem.recovered}</td>
                    <td>{currelem.active}</td>
                    <td>{currelem.confirmed}</td>
                    <td>{currelem.deltarecovered}</td>
                    <td>{currelem.migratedother}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Covid;
