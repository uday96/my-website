import React, { Component } from 'react';
import './Footer.css';
import facebookLogo from '../images/facebook.svg';
import twitterLogo from '../images/twitter.svg';
import gmailLogo from '../images/gmail.svg';
import linkedinLogo from '../images/linkedin.svg';
import githubLogo from '../images/github.svg';
import IconButton from 'material-ui/IconButton';

class Footer extends Component {

  render() {
    const styles = {
      mediumIcon: {
        width: 48,
        height: 48,
      },
      medium: {
        width: 60,
        height: 60,
        padding: 10,
      },
    };
    // Footer Component
    return (
      <div className='footer-wrapper'>
          <div className='footer-container'>
            <span><center>© 2017 <strong>Uday Theja</strong></center></span>
            <div id='outer'>
              <div className='inner'>
                <IconButton iconStyle={styles.mediumIcon}
                            style={styles.medium}
                            onTouchTap={() => {
                              window.open('mailto:udayteja96@gmail.com','_blank')
                }}>
                  <img src={gmailLogo} alt='mail' className='logo'/>
                </IconButton>
              </div>
              <div className='inner'>
              <IconButton iconStyle={styles.mediumIcon}
                          style={styles.medium}
                          onTouchTap={() => {
                            window.open('https://www.facebook.com/uday.theja.0','_blank')
                }}>
                  <img src={facebookLogo} alt='facebook' className='logo'/>
                </IconButton>
              </div>
              <div className='inner'>
              <IconButton iconStyle={styles.mediumIcon}
                          style={styles.medium}
                          onTouchTap={() => {
                            window.open('https://twitter.com/udayteja96','_blank')
                }}>
                  <img src={twitterLogo} alt='twitter' className='logo'/>
                </IconButton>
              </div>
              <div className='inner'>
              <IconButton iconStyle={styles.mediumIcon}
                          style={styles.medium}
                          onTouchTap={() => {
                            window.open('https://www.linkedin.com/in/uday-theja/','_blank')
                }}>
                  <img src={linkedinLogo} alt='divnkedin' className='logo'/>
                </IconButton>
              </div>
              <div className='inner'>
              <IconButton iconStyle={styles.mediumIcon}
                          style={styles.medium}
                          onTouchTap={() => {
                            window.open('https://github.com/uday96','_blank')
                }}>
                  <img src={githubLogo} alt='github' className='logo'/>
                </IconButton>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Footer;
