import React from 'react'
import './ui.css'
import profile_pic from '../../assets/profile pic.jpg'

 const Ui = () => {
  return (
    <div className='ui'>
        <h1>UI Design</h1>
        <div className="ui-list">
            <div className="ui-card">
                <img src={profile_pic} alt='' />
                <div className="text-bottom">01 Soil monitoring system</div>
                <div className="text-top">Mobile view</div>
                <div class="overlay1"></div>
                <div class="overlay2"></div>
            </div>
            <div className="ui-card">
                <img src={profile_pic} alt='' />
                <div className="text-bottom">01 Soil monitoring system</div>
                <div className="text-top">Mobile view</div>
                <div class="overlay1"></div>
                <div class="overlay2"></div>
            </div>
            <div className="ui-card">
                <img src={profile_pic} alt='' />
                <div className="text-bottom">01 Soil monitoring system</div>
                <div className="text-top">Mobile view</div>
                <div class="overlay1"></div>
                <div class="overlay2"></div>
            </div>
        </div>
        <div className="ui-list">
        <div className="ui-card">
                <img src={profile_pic} alt='' />
                <div className="text-bottom">01 Soil monitoring system</div>
                <div className="text-top">Mobile view</div>
                <div class="overlay1"></div>
                <div class="overlay2"></div>
            </div>
            <div className="ui-card">
                <img src={profile_pic} alt='' />
                <div className="text-bottom">01 Soil monitoring system</div>
                <div className="text-top">Mobile view</div>
                <div class="overlay1"></div>
                <div class="overlay2"></div>
            </div>
            <div className="ui-card">
                <img src={profile_pic} alt='' />
                <div className="text-bottom">01 Soil monitoring system</div>
                <div className="text-top">Mobile view</div>
                <div class="overlay1"></div>
                <div class="overlay2"></div>
            </div>
        </div>
       
     </div>
  )
}
export default Ui