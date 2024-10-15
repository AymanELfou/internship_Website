import React from 'react'
import mg from './shutterstock_2149854693.png'

export default function S3() {
  return (
    <div className="s3-wrapper my-4">
      <div className="container-fluid px-4 px-md-5">
        <div className="row g-4 align-items-center">
          <div className="col-md-6">
            <img src={mg} alt="Team meeting" className="img-fluid about-image w-100 h-auto" />
          </div>
          <div className="col-md-6 about-text">
            <h6 className="mb-3" style={{color: 'grey', fontSize: '20px', fontWeight: 'bold'}}>Training</h6>
            <h2 className="mb-4" style={{fontWeight: 'bold', fontSize: '50px', lineHeight: '1.2'}}>
              Greenlab: <br /> our training hub
            </h2>
            <p className="mb-4" style={{fontFamily: '"Gilroy", sans-serif'}}>
              The Greenlab aims to provide training sessions during which innovations and new releases of installation technology are presented. This involves each of the product series: solar panels, batteries, transformers and charging stations. Are you looking for specific training, or do you have questions about green technology? Let us know and sign up for an advice session. Get to know Green Warehouse and our Greenlab.
            </p>
            <button className="custom-btn">Discover our Greenlab</button>
          </div>  
        </div>
      </div>
    </div>
  )
}