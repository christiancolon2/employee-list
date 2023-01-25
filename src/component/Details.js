import React from 'react'

function Details({call,num}) {
  return (
    <div className='details'>
        <div className='call'>
        <h4>{call}</h4>
       <h4>{num}</h4>
        </div>
       
       <div className='arrow'>
       <i class='fa fa-angle-right'></i>
       </div>
       
    </div>
  )
}

export default Details