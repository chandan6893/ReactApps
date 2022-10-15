import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Details } from './Details';

export function List(props) {
    const {people}= props;
    // console.log(people);
    const [items, setItems] = useState(people);
    const [details,setDetails] =useState();
   useEffect(()=>{
    setItems(people)
   },[people])
    // console.log(items);
    const handleDelete = (id) =>{
      console.log(id)
      const x =items.filter((i)=>{
        // console.log(i,i.id,id);
        return i.id !== id ;
      });
      setItems(x);
      // console.log(x)
    }

    const handleDetails = (id) =>{
      // console.log(id)
      const x = items.filter((i) => {
        // console.log(i,i.id,id);
       
        return i.id === id;
        
      });
      
      setDetails(x[0]);
     
    //  console.log(x[0])
     
      


    }

  return (
    <div>
      {items.map((person) => (
        <div>
          <section className="SectOne">
            <article className="content" key={person.id}>
              <img className="images" src={person.image} alt="" />
              <ul className="name-age">
                <li>{person.name},</li>
                <li>{person.age}</li>
              </ul>
            </article>
            <button
              className="buttonTwo"
              onClick={() => handleDelete(person.id)}
            >
              Delete
            </button>
            <button
              className="buttonThree"
              id={person.id}
              onClick={() => handleDetails(person.id)}
            >
              Details
            </button>
          </section>

          {/* {details? (<Details detail={details} />) :("")} */}
          {details && details.id === person.id && <Details detail={details} />}
        </div>
      ))}
    </div>
  );
}

