import React from 'react'
import { GridLoader } from 'react-spinners'
import './css/loading.css'
const LoadingSpinner = () => {
  return (
    <div  className='wrapperStyle'>
      <div className='boxStyle'>
        <GridLoader color="#2f675d" size={15} margin={2} />
      </div>
    </div>
  )
}





export default LoadingSpinner
