import React from 'react'

function Employee({ firstName, lastName, image, dept, email, phone }){
  return (
    <div className="container">
      <img
        src ={image}
        alt= 'Employee Photo'
      />
        <p className="name">{ firstName } { lastName }</p>
        <p className="email"> { email }</p>
        <p className="phone">{ phone }</p>
        <p className="department">{ dept }</p>
          <hr></hr>
    </div>
  )
}
 
export default Employee;