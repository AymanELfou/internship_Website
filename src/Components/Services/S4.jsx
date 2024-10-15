import React from 'react'
import mg4 from './shutterstock_2432187207-1.png';

export default function S4() {
  return (
    <div>
      <div class="container-fluide mt-5 mx-5">
            <div class="">
                <div class="row g-0">
                    <div class="col-md-6 about-text ">
                        
                        <h2 class="mb-4" style={{fontWeight:'bold',fontSize:'50px'}}>Financing and interest!</h2>
                        <p class="mb-4 m-1" style={{fontFamily:'"Gilroy", sans-serif'}}>Discover the innovation in sustainable installation technology with our brand new platform, exclusively for installers who want to offer individuals and companies an all-in-one solution. Our platform, an extension of Green Warehouse, puts solar panels, heat pumps and charging stations at your fingertips. Pay for your installation easily over a period of 20 or 25 years and benefit from an all-in solution: from purchase to insurance and maintenance - everything is included. This revolutionary system, which is exclusive to the Benelux, not only offers access to top quality products, but also facilitates the services for installers. Take the step towards a sustainable future today and let our platform be your guide. Welcome to the Green Warehouse family - where innovation, sustainability and quality come together.</p>
                        <button class="custom-btn ">More info</button>
                    </div>

                    <div class="col-md-6">
                        <img src={mg4} alt="Team meeting" class="img-fluid about-image mb-5"/>
                    </div>
                </div>
            </div>
      </div>
      
    </div>
  )
}
