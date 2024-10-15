import React from 'react'
import mg5 from './like.jpg'

export default function S5() {
  return (
    <div className="s3-wrapper my-4">
      <div className="container-fluid px-4 px-md-5">
        <div className="row g-4 align-items-center">
          <div className="col-md-6">
            <img src={mg5} alt="Team meeting" style={{borderRadius:'28px'}} className="img-fluid about-image w-100 h-auto" />
          </div>
          <div className="col-md-6 about-text">
            
            <h2 className="mb-4" style={{fontWeight: 'bold', fontSize: '50px', lineHeight: '1.2'}}>
            After-sales service <br /> and guarantee  
            </h2>
            <p className="mb-4" style={{fontFamily: '"Gilroy", sans-serif'}}>
                As far as we are concerned, customised service is vital, even after a sale. We offer extended factory guarantees on all our products and are committed to supporting our customers every step of the way. Our after-sales service is focussed on responding quickly and efficiently to questions and possible installation issues. We understand the importance of a reliable partner and do all we can to anticipate any obstacles or challenges. In this context, Green Warehouse has a great deal of respect for customer reviews. When you choose us, you are choosing a partner who genuinely believes in its products and who will provide the service you deserve
            </p>
            
          </div>  
        </div>
      </div>
    </div>
  )
}
