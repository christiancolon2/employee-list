import React from 'react';
import EmployeeListItem from './EmployeeListItem';

function EmployeeList() {

  return (
    <div className='employeelist'>
      <EmployeeListItem img={require('../image/winkboy.png')} name='James King' position='President and CEO'/> 
      <EmployeeListItem img={require('../image/women.png')} name='Julie Taylor' position='VP of Marketing'/>
      <EmployeeListItem img={require('../image/blackshirt.png')} name='Eugene Lee' position='CFO'/>
      <EmployeeListItem img={require('../image/redtie.webp')} name='John Williams' position='VP of Engineering'/>
      <EmployeeListItem img={require('../image/redman.png')} name='Ray Moore' position='VP of Sales'/>
      <EmployeeListItem img={require('../image/pinkwomen.webp')} name='Paula Jones' position='QA Manager'/>
      
    </div>
  )
}

export default EmployeeList;