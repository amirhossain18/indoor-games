import React from 'react';
import './TimeCalculatin.css'
import user from '../../images/user.jpg'
const TimeCalculatin = () => {
    return (
        <div className="text-center bg-info  user-info">
            <img src={user} alt="" />
              <h2>Amir HOssain</h2>
              <h6>Dhaka bangladesh</h6>

              <div className="border border-rounded">
                <h6>Age 22 years</h6>
                <h6>Gende Male</h6>
                <h6>Weight: 88</h6>
              </div>
        </div>
    );
};

export default TimeCalculatin;