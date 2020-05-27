import React from 'react'

function Employee({ firstName, lastName, image, dept, email, phone }){
  return (
    <div className="employeeContainer">
      <img
        className="photo"
        src ={image}
        alt= 'Employee Photo'
      />
      <br></br>
        <span className="name">{ firstName } { lastName }</span>
        <br></br>
        <span className="email"> { email }</span>
        <br></br>
        <span className="dept">{ dept }</span>
          <hr></hr>
    </div>
  )
}
 
export default Employee;