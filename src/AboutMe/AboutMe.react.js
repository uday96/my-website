import React, { Component } from 'react';
import './AboutMe.css';
import StaticAppBar from '../StaticAppBar/StaticAppBar.react';
import RaisedButton from 'material-ui/RaisedButton';
import Footer from '../Footer/Footer.react';
import UdayImg from '../images/Uday.jpg';
import $ from 'jquery';
import EduIcon from 'material-ui/svg-icons/social/school';

class AboutMe extends Component{

  componentDidMount() {
    // Adding title tag to page
    document.title = 'About | Uday Theja';
    //  Scrolling to top of page when component loads
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  }

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
        <div className="blue-wrapper">
          <div className="blue-container">
              <div className="heading">Download my Resume</div>
              <RaisedButton
                label="Download"
                style={{margin: '20px'}} />
          </div>
        </div>
        <center style={{marginTop: '15px'}}>
          <div className="heading"><h1>Education</h1></div>
        </center>
        <section id="cd-timeline" className="cd-container">
          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture">
              <EduIcon color='#fff' style={{width: '100%',height:'80%',paddingTop:'10%'}}/>
            </div>
            <div className="cd-timeline-content">
              <h2>Bharaiya Vidya Bhavans Public School - BVBPS</h2>
              <p style={{marginTop:'-1px'}}>Hyderabad, Telangana</p>
              <p>{'The school that gave me my basic schooling from LKG to grade 10, along with great childhood memories of amazing and fun teachers. Graduated with CGPA 10.'}</p>
              <span className="cd-date">{'LKG - X (CBSE)'}</span>
            </div>
          </div>
          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture">
              <EduIcon color='#fff' style={{width: '100%',height:'80%',paddingTop:'10%'}}/>
            </div>
            <div className="cd-timeline-content">
              <h2>Narayana Junior College</h2>
              <p style={{marginTop:'-1px'}}>Hyderabad, Telangana</p>
              <p>{'Grade 12, Board of Intermediate Education, graduated with 98.7%'}</p>
              <span className="cd-date">{'XI - XII (MPC)'}</span>
            </div>
          </div>
          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture">
              <EduIcon color='#fff' style={{width: '100%',height:'80%',paddingTop:'10%'}}/>
            </div>
            <div className="cd-timeline-content">
              <h2>Indian Institute of Technology Madras</h2>
              <p style={{marginTop:'-1px'}}>Chennai, TamilNadu</p>
              <p>{'Currently pursuing my Computer Science & Engineering Major with a CGPA of 8.10*'}</p>
              <span className="cd-date">{'B.Tech (CSE)'}</span>
            </div>
          </div>
        </section>
      <Footer />
      </div>
    );
  };
}

export default AboutMe;
