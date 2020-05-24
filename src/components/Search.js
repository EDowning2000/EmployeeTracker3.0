import React from 'react'

function Search ({onSearch, searchTerm, handleSortByName, handleSortByDept}){
  return (
    <div className="container">
        <div className="buttonContainer">
            <button onClick ={handleSortByName} className="sortByNameBtn">Name</button>
            <button onClick ={handleSortByDept} className="sortByNameBtn">Department</button>
        </div>
        <div className="employeeSearchContainer">
            <form>
              <input 
                value ={searchTerm}
                onChange={onSearch}
                type="text"
                placeholder="Search Employee" />
            </form>
        </div> 
    </div> //main container div
  )
}
export default Search