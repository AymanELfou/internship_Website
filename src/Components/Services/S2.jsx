import React from 'react'
import './S2.css'
import Sm2 from './shutterstock_1694615014.png'


export default function S2() {
  return (
    <div>
        <div class="container-fluide mt-5 mx-5">
            <div class="">
                <div class="row g-0">
                    <div class="col-md-6 about-text ">
                        <h6 class=" mb-3" style={{color:'grey',fontSize:'20px',fontWeight:'bold'}}>Offer</h6>
                        <h2 class="mb-4" style={{fontWeight:'bold',fontSize:'50px'}}>A green range</h2>
                        <p class="mb-4 m-1" style={{fontFamily:'"Gilroy", sans-serif'}}>Green Warehouse offers an extensive range of solar panels, batteries, transformers and charging stations, all available from stock. Our mission is to provide maximum support to installers, including excellent after-sales service for top brands</p>
                        <button class="custom-btn ">Visit the webshop</button>
                    </div>

                    <div class="col-md-6 ">
                        <img src={Sm2} alt="Team meeting" class="img-fluid about-image mb-5"/>
                    </div>
                </div>
            </div>
        </div>

        
      
    </div>
  )
}
