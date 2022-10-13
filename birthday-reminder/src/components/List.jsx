import React from 'react';

export function List({people}) {
  return (
    <div>
        {people.map((person) => {
            return(
                <article className='content' key={person.id}>
                    <img className='images' src={person.image} alt="" />
                    <ul className='name-age'>
                        <li>{person.name},</li>
                        <li>{person.age}</li>
                    </ul>
                </article>
            )
        })}
    </div>
  )
}

// export default List