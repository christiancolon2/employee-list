import React from 'react';
import Details from './Details';
import EmployeeListItem from './EmployeeListItem';

function EmployeeName() {
  return (
    <div className='employeename'>
        <h1>Employee</h1>
        <div className='employeedetails'>
        <div id='employeelistitem'>
        <EmployeeListItem img={require('../image/greenshirt.jpeg')} name='Ray Moore' position='VP of Accounting'/>
        </div>
        <div className='detail-div'>
            <Details call='Office Number' num='212-498-1093' />
            <Details call='Mobile Number' num='917-906-0381' />
            <Details call='Fax Number' num='212-408-0689' />
            <Details call='E-mail' num='Rmoore@gmail.com' />
        </div>
        </div>
    </div>
  )
}

export default EmployeeName