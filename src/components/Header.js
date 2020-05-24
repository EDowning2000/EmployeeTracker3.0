import React from "react"

// import schoolLogo from '../assets/images/logo.png'

function Header (){
  return (
    <div className=''>
      <header className='container'>
        {/* <img className='' src={schoolLogo} alt='UCF School Logo'/> */}
          <h2 className="headerText"> Employee Tracker </h2>
            <a href="https://github.com/EDowning2000/employee-tracker">This projects source Code.</a>
      </header>
    </div>
  )
}
export default Header