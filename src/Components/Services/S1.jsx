import React from 'react'
import S from './zonnepanelen-op-een-gebouw-cropped-scaled.jpg'

export default function S1() {
  return (
    <div>
        <div className='container-fluide mt-4 mx-5'>
            <div className="row mt-5">
                <div className="col-md-7 " >
                    <h6 class="mb-3" style={{color:'grey',fontSize:'19px', fontWeight:'bold'}}>Services</h6>
                    <h1 className='mb-3' style={{fontFamily:"Fantasy",fontSize:'65px'}}>What do we offer?  </h1>
                    <p className='mb-3' style={{fontFamily:'"Gilroy", sans-serif'}}>Discover the extensive range of solar panels, batteries, transformers and charging stations at Green Warehouse. Benefit from our expert advice, based on our experience with complex projects and various applications and always accompanied by customised guidance. Discover our training opportunities for installers too.</p>
                </div>
            </div>
            <div class="col-md-12 mb-5">
                    <img src={S} alt="Team meeting" class="img-fluid about-image mb-5" style={{borderRadius:'27px'}}/>
            </div>

        </div>
    </div>
  )
}
