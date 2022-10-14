import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CovidApp.css";


export function CovidApp (){
    const [datas, setDatas] = useState({});
    const [items,setItems] =useState([]);

    useEffect(() =>{
        axios.get("https://disease.sh/v3/covid-19/all")
        .then((response) => {
        //   console.log(response.data);
          setDatas({...response.data});
        });
           
    },[]);


    useEffect(() => {
      axios.get(`https://disease.sh/v3/covid-19/countries`).then((response) => {
        console.log(response.data);
        setItems({ ...response.data });
      });
    }, []);

    return (
      <>
        <div className="covTrack">
          <h2 className="cov-title">COVID19 TRACKER</h2>

          <section>
            <article>
              <div>
                <ul>
                  <li>{items[0]?.country}</li>
                </ul>
              </div>
            </article>
          </section>
        </div>
        <section className="sectOne">
          <article className="firstArticle">
            <div className="container0">
              <div className="content">
                <ul>
                  <li>Active Cases </li>
                  <li>{datas.active}</li>
                </ul>
              </div>
            </div>
          </article>

          <article className="firstArticle">
            <div className="container1">
              <div className="content">
                <ul>
                  <li>Affected Countries </li>
                  <li>{datas.affectedCountries}</li>
                </ul>
              </div>
            </div>
          </article>

          <article className="firstArticle">
            <div className="container2">
              <div className="content">
                <ul>
                  <li> Cases</li>
                  <li>{datas.cases}</li>
                </ul>
              </div>
            </div>
          </article>

          <article className="firstArticle">
            <div className="container3">
              <div className="content">
                <ul>
                  <li>Recovered</li>
                  <li>{datas.recovered}</li>
                </ul>
              </div>
            </div>
          </article>

          <article className="firstArticle">
            <div className="container4">
              <div className="content">
                <ul>
                  <li>Tests </li>
                  <li>{datas.tests}</li>
                </ul>
              </div>
            </div>
          </article>

          <article className="firstArticle">
            <div className="container5">
              <div className="content">
                <ul>
                  <li>Today Cases </li>
                  <li>{datas.todayCases}</li>
                </ul>
              </div>
            </div>
          </article>
        </section>
      </>
    );
}