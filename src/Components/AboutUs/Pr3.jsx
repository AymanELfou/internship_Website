import React from 'react'
import pl from './plants.png'
import './Pr3.css';


export default function Pr3() {
  return (
    <div>
        <div class="container mx-auto my-5">
            <div class="row custom-section d-flex align-items-center">
                <div class="col-md-6 p-0">
                    <img src={pl} alt="Green globe" class="img-fluid"/>
                </div>
                
                <div class="col-md-6 custom-text ">
                    <h2 class="custom-title">Close to <br/> our customers</h2>
                    <p>Green Warehouse is centrally located, in Landen, on the border between Flemish-Brabant and Limburg. It is an ideal base just 10 minutes from the E40 and Wallonia. From this location, we serve the Benelux. We always aim to ensure we work very closely with our customers. We bring the very best in the green technology market to you, along with advice, support and training.</p>
                    <a href="#" class="custom-button">Discover our services</a>
                </div>
            </div>
        </div>
    </div>
  )
}
