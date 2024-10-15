import React from 'react'
import gr1 from './Group-126.png'
import gr2 from './Group-128.png'

export default function Pr2t() {
  return (
    <div className="d-flex justify-content-center align-items-center mt-2">
      <div className="container">
        <div className="row text-center mt-1">
          <div className="col-md-6">
            <h1>Local professionals</h1>
            <img src={gr1} alt="Local professionals icon" />
          </div>

          <div className="col-md-6">
            <h1>Always up-to-date</h1>
            <img src={gr2} alt="Always up-to-date icon" />
          </div>

        </div>
      </div>
    </div>
  )
}