import React, { Component } from 'react';
import './AboutMe.css';
import StaticAppBar from '../StaticAppBar/StaticAppBar.react';
import RaisedButton from 'material-ui/RaisedButton';
import Footer from '../Footer/Footer.react';
import UdayImg from '../images/Uday.jpg';

class AboutMe extends Component{

  render() {

    return (
      <div>
        <StaticAppBar {...this.props}/>
        <div className='head_section'>
          <div className='container'>
            <div className="heading">
              <h1>About Me</h1>
            </div>
          </div>
        </div>
        <div className="device_section">
          <div className="device_description">
            <div className="heading">Hello!</div>
            <p className="text_description">
            Hi, I am <b>Uday Theja</b>, pursuing my Computer Science & Engineering major from Indian Institute of Technology Madras.
            </p>
          </div>
          <div className='img-container'>
            <img src={UdayImg} alt='Uday-DP' className='img-dp' />
          </div>
        </div>
        <div className="device_section">
          <div className="device_description">
            <div className="heading">Info</div>
            <p className="text_description">
              <b>Birthdate:</b> 24/October/1996<br/>
              <b>Phone:</b>+91-9940469994<br/>
              <b>E-mail:</b> udayteja96@gmail.com<br/>
              <b>Address:</b> Room 235, Ganga Hostel, IIT Madras
            </p>
          </div>
        </div>
        <div className="blue-wrapper">
          <div className="blue-container">
              <div className="heading">Download my Resume</div>
              <RaisedButton label="Download" style={{marginTop: '25px',marginBottom: '25px'}} />
          </div>
        </div>
      <Footer />
      </div>
    );
  };
}

export default AboutMe;
