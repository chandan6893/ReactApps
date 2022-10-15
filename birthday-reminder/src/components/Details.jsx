import React from 'react'

export function Details(props) {
    const { detail } = props;
    // console.log(detail)
  return (
    <>
      <div>
        <section className="details">
          <ul className="justDetail">
            <li>name :{detail.name}</li>
            <li>age :{detail.age}</li>
            <li>id :{detail.id}</li>
          </ul>
        </section>
      </div>
    </>
  );
}

