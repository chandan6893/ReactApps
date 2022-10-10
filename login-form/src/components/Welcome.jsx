import React from 'react'

 const  Welcome =({ user }) => {
  return (
    <div className="welcomePage">
      <div>
        <h3>Welcome :{user?.userName}</h3>
      </div>
    </div>
  );
}

export default Welcome