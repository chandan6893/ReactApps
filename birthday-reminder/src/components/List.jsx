import React from 'react';
import { useState } from 'react';

export function List(props) {
    const {people}= props;
    // console.log(people);
    const [items, setItems] = useState(people);
   
    // console.log(items);
    const handleDelete = (id) =>{
      const x =items.filter((i)=>{
        console.log(i,i.id,id);
        return i.id !== id ;
      });
      setItems(x);
      // console.log(x)
    }
  return (
    <div>
      {items.map((person) => (
        <section className='SectOne'>
          <article className="content" key={person.id}>
            <img className="images" src={person.image} alt="" />
            <ul className="name-age">
              <li>{person.name},</li>
              <li>{person.age}</li>
            </ul>
          </article>
          <button className='buttonTwo' onClick={ ()=> handleDelete(person.id)} >Delete</button>
        </section>
      ))}
    </div>
  );
}

