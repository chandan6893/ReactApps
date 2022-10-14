import React from 'react';

export function List(props) {
    const {people}= props;
  return (
    <div>
        {people.map((person) => 
          (
                <article className='content' key={person.id}>
                    <img className='images' src={person.image} alt="" />
                    <ul className='name-age'>
                        <li>{person.name},</li>
                        <li>{person.age}</li>
                    </ul>
                </article>
            )
        )}
    </div>
  )
}

// export default List