import React from 'react';
import './Pr2.css'; // Importing a custom CSS file to style the paragraph

export default function Pr2() {
  return (
    <div className="container-fluid mt-5 mx-5">
      <div className="row d-flex justify-content-center text-center">
        <div className="col-md-8"> {/* Restrict width to center content */}

          <h1 className="mb-4 Mrket">Market expertise</h1>
          <p className="mb-4 paragraph-style" style={{fontFamily:'"Gilroy", sans-serif'}}>
            We are a new company, but driven by local professionals who worked together, with their own capital, and combine more than 30 years of experience in the industry. We are always up-to-date with developments and monitor the market closely. This is a robust foundation on which to build.
          </p>
        </div>
      </div>
    </div>
  );
}
