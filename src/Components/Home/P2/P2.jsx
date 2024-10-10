import React from 'react'
import img2 from '../../imgs/shutterstock_.png'
import './P2.css';

export default function P2() {
  return (
    <div>
      
      <div class="container-fluide mt-5 mx-5">
        <div class="about-section">
            <div class="row g-0">
                <div class="col-md-6 about-text">
                    <h6 class=" mb-3" style={{color:'grey',fontSize:'18px'}}>About us</h6>
                    <h2 class="mb-4">We speak the same language</h2>
                    <p class="mb-4">Have you been waiting for an organisation like Green Warehouse? We understand the importance of reliability, stock and lead times. We understand the needs of installers and technology specialists. We speak the same language.</p>
                    <button class="custom-btn">Get to know us</button>
                </div>
                <div class="col-md-6">
                    <img src={img2} alt="Team meeting" class="img-fluid about-image"/>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
