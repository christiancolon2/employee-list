import React from 'react'

function EmployeeListItem({img,name,position}) {
  return (
    <div className='item'>
      <div className='img-div'>
      <img src={img} />
      </div>
      <div className='name-div'>
      <h4>{name}</h4>
       <p>{position}</p>
      </div>

       
    </div>
  )
}

export default EmployeeListItem;