import React from "react"

// import schoolLogo from '../assets/images/logo.png'

function Header (){
  return (
    <div className=''>
      <header className='headerContainer'>
        {/* <img className='' src={schoolLogo} alt='UCF School Logo'/> */}
          <h2 className="headerText"> Employee Tracker </h2>
            <h5 className="description">
              An application to Browse the Profiles of your Employees!
            </h5>
      </header>
    </div>
  )
}
export default Header