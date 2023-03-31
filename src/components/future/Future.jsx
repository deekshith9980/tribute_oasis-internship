import React from 'react';
import './Future.css';
import mars from '../../assets/mars.webp';
import brain from '../../assets/brain.jpeg';
import tunnel from '../../assets/tunnel.jpeg';

const Future = () => {
  return (
    <div id='page3' className='future'>
     <h1 className='future-title'>Future Plans :</h1>
     <div className="future-content">
        <div className="future-container">
            <img src={mars} alt="mars" id='img' />
            <h3 className='future-container-h3'>Life on Mars</h3>
            <p className='future-container-p'>No person from Earth has ever stepped foot on Mars. However, Musk plans on changing that and he plans on doing so pretty soon too. Musk said that he was “highly confident” that people would land on the planet “about six years from now.”
Musk also said that if things go well enough, we could start seeing people on Mars by 2024.</p>
        </div>

        <div className="future-container">
            <img src={brain} alt="brain" id='img' />
            <h3 className='future-container-h3'>Brain Technology</h3>
            <p className='future-container-p'>Musk founded Neuralink in 2016 and has since developed a device that will give those suffering from spinal cord injuries more opportunities to communicate with the technology we use each day. It will also potentially roll out to individuals suffering from other brain-related problems, with the capacity to possibly be something that healthy individuals also use one day.</p>
        </div>

        <div className="future-container">
            <img src={tunnel} alt="tunnel" id='img' />
            <h3 className='future-container-h3'>Tunnel Vision</h3>
            <p className='future-container-p'>Driving to work is a cause of stress for the lives of many people in the US each day. The same is true for Musk, who got so fed up and founded The Boring Company on the same day and got to work trying to fix American cities notorious traffic jam problems.Since then, TBC has undertaken numerous projects for fast-speed tunnels.Musk’s tunnel in Vegas cost over $40 million to complete.</p>
        </div>
     </div>
    </div>
  );
}

export default Future;
