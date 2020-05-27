import React, { useEffect, useState } from 'react';
import Wrapper from './components/Wrapper';
import Employee from './components/EmployeeCard';
import Footer from './components/Footer';
import Header from './components/Header';
import Search from './components/Search';
import API from './utils/API';


function App (){
  const [searchTerm, setSearchTerm] = useState('');
  const [sorted, setSorted] = useState(false);
  const [data, setEmployees] = useState([]);

  useEffect(()=>{

    API.getUsers().then(response =>{
      console.log(response.data.results); //console logging all employees
      setEmployees(response.data.results); //sets the employee state
    })
      .catch(err => console.log(err)) //err handling
  },[])

  const handleSearchTerm=(event)=>{ //reloads the state of the search term everytime you type and therefore makes it constantly changing as you type
    event.preventDefault();
    setSearchTerm(event.target.value) //setting the search terms state to the value in the input
  }

  const handleSortByName=(event)=>{
    event.preventDefault();
    //the sort function for ascending or descending orders by name
      if (!sorted){ //sorted starts out as false, and only changes the state when you click it
        setEmployees(data.sort((a,b)=> (a.name.first>b.name.first)? 1 : -1));
        setSorted(true); //changes the state to tell that the names have been sorted 
      }
      else{ //the oppisite of the last function
        setEmployees(data.sort((a,b)=> (a.name.first> b.name.first)?-1:1));
        setSorted(false)
      }
  }

  const handleSortByDept=(event)=>{ //sorting the employees by department
    event.preventDefault();
    // sorting the department array by ascending or descending
      if (!sorted){
        setEmployees(data.sort((a,b)=>(a.department > b.department) ? 1 : -1 ));
        setSorted(true)
      }
      else{
        setEmployees(data.sort((a,b)=>(a.department > b.department) ? -1 : 1));
        setSorted(false)
      }
  }

  const filteredEmployees = data.filter (employee => employee.name.first.toLowerCase().startsWith(searchTerm.toLowerCase())); //this is just the employees that you type into the search bar

  return (
    <Wrapper>
      <Header>
      </Header>
        <Search
            handleSortByName = {handleSortByName}
            handleSortByDept = {handleSortByDept}
            value = {searchTerm}
            onSearch = {handleSearchTerm}
        />
         <ul>
           {data.map(employee=>(
             <Employee
                firstName= {employee.name.first}
                lastName = {employee.name.last}
                email = {employee.email}
                image = {employee.picture.medium}
                // phone = {employee.phone}
                dept = {employee.phone}
                
                
             />
           ))}
          </ul>
      <Footer></Footer>
    </Wrapper>
  )




}
export default App;