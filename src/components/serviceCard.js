import React from "react";

const ServiceCard = () => {
    return (
        <div className="cardStack">
            <div className="card">
                <i class="fas fa-drafting-compass"></i>
                <h3>Free Inspection</h3>
            </div>
            <div className="card">
                <i className="far fa-file-alt"></i>
                <h3>File a Claim</h3>
            </div>
            <div className="card">
                <i class="fas fa-tools"></i>
                <h3>Replace or Repair a Roof</h3>
            </div>
        </div>
    );
}

export default ServiceCard;