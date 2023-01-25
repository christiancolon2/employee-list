import React,{useState} from 'react';
import Header from './Header';
import Search from './Search';
import EmployeeList from './EmployeeList';

function HomePage() {
  
  return (
    <div className='home'>
      <Header />
      <Search />
      <EmployeeList/>
    </div>
  )
}

export default HomePage;