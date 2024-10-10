import React from 'react';
import img from '../../imgs/shutterstock_2285064375-1.png';
import './P1.css';

export default function P1() {
  return (
    <div>

      <div class="container-fluide mt-5 mx-5">
        <div class="row align-items-center">
            <div class="col-md-6">
                <h1 class="mb-4">Your partner in green technology</h1>
                <p class="mb-4">Green Warehouse is your partner in green technology. Here, you will not only find all the products and parts that you need, as an installer. We will also provide the support you need as a professional, such as customised advice, training and service.</p>
                <button class="custom-btn">See More</button>
            </div>
            <div class="col-md-6">
                <img src={img} alt="Solar panel installation" class="img-fluid rounded"/>
            </div>
        </div>
      </div>
    </div>
  );
}
