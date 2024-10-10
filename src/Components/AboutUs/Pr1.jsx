import React from 'react'
import imgPr from './shutterstock_1998106664-1.png'


export default function Pr1() {
  return (
    <div>

        <div className='container-fluide mt- mx-5'>
            <div className="row">
                <div className="col-md-6 about-text" >
                    <h6 class="mb-3" style={{color:'grey',fontSize:'18px'}}>About us</h6>
                    <h1 className='mb-3' style={{fontFamily:"Fantasy",fontSize:'48px'}}>We speak the same language</h1>
                    <p className='mb-3' style={{fontFamily:'"Gilroy", sans-serif'}}>Have you been waiting for Green Warehouse? We understand the importance of reliability, stock and lead times. We understand the needs of installers and technology specialists. We speak the same language.</p>
                </div>
            </div>
            <div class="col-md-12">
                    <img src={imgPr} alt="Team meeting" class="img-fluid about-image mb-5"/>
            </div>

        </div>

      

        
      
    </div>
  )
}
