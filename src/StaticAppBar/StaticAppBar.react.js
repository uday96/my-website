import './StaticAppBar.css';
import AppBar from 'material-ui/AppBar';
import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import MenuItem from 'material-ui/MenuItem';

class StaticAppBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          openDrawer: false
        };
    }
    // Open app bar's drawer
    handleDrawer = () => this.setState({
      openDrawer: !this.state.openDrawer
    });
    // Close app bar's drawer
    handleDrawerClose = () => this.setState({
      openDrawer: false
    });

    componentDidMount() {
        var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = $('header').outerHeight();
        $(window).scroll(function (event) {
            didScroll = true;
        });
        setInterval(function () {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 500);

        function hasScrolled() {
            var st = $(window).scrollTop();
            // Make sure they scroll more than delta
            if (Math.abs(lastScrollTop - st) <= delta) {
                return;
            }
            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > navbarHeight + 250) {
                // Scroll Down
                $('header').removeClass('nav-down').addClass('nav-up');
            } else if (st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
            }
            lastScrollTop = st;
        }
    }

    render() {
      var title = <div className='triangle'><span className='title-text'>Uday Theja</span></div>

      const labelStyle = {
            padding: '0px 25px 7px 25px',
            font: '500 14px Roboto,sans-serif',
            margin: '0 2px',
            textTransform: 'none',
            textDecoration:'none',
            wordSpacing: '2px',
            color: '#f2f2f2',
            verticalAlign: 'bottom'
        }

        const linkstyle = {
            color: '#fff',
            height: '64px',
            textDecoration: 'none'
        }
        var topLeftLinks = [
            {
                lable: 'About',
                url: '/',
                style: linkstyle,
                labelStyle: labelStyle
            },
            {
                lable: 'Work',
                url: '/work',
                style: linkstyle,
                labelStyle: labelStyle
            },
        ];

        var topRightLinks = [
          {
            lable: 'Projects',
            url: '/projects',
            style: linkstyle,
            labelStyle: labelStyle
        },
        {
            lable: 'Blogs',
            url: '/blogs',
            style: linkstyle,
            labelStyle: labelStyle
        },
      ];

      var topLinks = topLeftLinks.concat(topRightLinks);

        let navLeftlinks = topLeftLinks.map((link, i) => {
             if (this.props.location.pathname === link.url) {
                link.labelStyle = {
                    borderBottom: '2px solid #fff',
                    padding: '0px 25px 12px 25px',
                    margin: '0 2px',
                    color:'#fff',
                    textDecoration:'none',
                    font: '700 14px Roboto,sans-serif',
                    wordSpacing: '2px',
                    textTransform: 'none',
                    verticalAlign: 'bottom'
                };
            }
            return (
                 <Link key={i} to={link.url} style={link.labelStyle}>{link.lable}</Link>

            )
        });

        let navRightlinks = topRightLinks.map((link, i) => {
             if (this.props.location.pathname === link.url) {
                link.labelStyle = {
                    borderBottom: '2px solid #fff',
                    padding: '0px 25px 12px 25px',
                    margin: '0 2px',
                    color:'#fff',
                    textDecoration:'none',
                    font: '700 14px Roboto,sans-serif',
                    wordSpacing: '2px',
                    textTransform: 'none',
                    verticalAlign: 'bottom'
                };
            }
            return (
                 <Link key={i} to={link.url} style={link.labelStyle}>{link.lable}</Link>

            )
        });

        let menuLlinks = topLinks.map((link, i) => {
             if (this.props.location.pathname === link.url) {
                link.labelStyle = {
                    font: '700 14px Roboto,sans-serif',
                    wordSpacing: '2px',
                    textTransform: 'none',
                    borderBottom: '3px solid #fff',
                    padding: '0px 20px 16px 20px',
                    margin: '0 1px'
                };
            }
            return (
                <MenuItem key={i} onTouchTap={this.handleDrawerClose} className="drawerItem">
                    <Link to={link.url}>{link.lable}</Link>
                </MenuItem>
            )
        });

        const TopLeftMenu = (props) => (
            <div style={{ position: 'relative'}}>
                <div className="top-menu" style={{ position: 'relative'}}>
                    {navLeftlinks}
                </div>
            </div>
        );

        const TopRightMenu = (props) => (
            <div style={{ position: 'relative'}}>
                <div className="top-menu" style={{ position: 'relative'}}>
                    {navRightlinks}
                </div>
            </div>
        );

        return (

            <div>
                <header className="nav-down" >
                {(window.matchMedia('only screen and (max-width: 768px)').matches) ?
                  (<AppBar
                      style={{
                        backgroundColor: '#4285f4',
                      }}
                      id="headerSection"
                      className="topAppBar"
                      title={title}
                      onLeftIconButtonTouchTap={this.handleDrawer}
                      iconElementRight={<TopRightMenu />}
                  />)
                  :
                  (<AppBar
                      style={{
                        backgroundColor: '#4285f4',
                      }}
                      id="headerSection"
                      className="topAppBar"
                      title={title}
                      onLeftIconButtonTouchTap={this.handleDrawer}
                      iconElementLeft={<TopLeftMenu />}
                      iconElementRight={<TopRightMenu />}
                  />)
                }
                </header>
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.openDrawer}
                    onRequestChange={(openDrawer) => this.setState({ openDrawer })}
                >
                    <AppBar
                        style={{
                          backgroundColor: '#4285f4',
                        }}
                        className="drawerAppBar"
                        onTouchTap={this.handleDrawerClose} />
                    {menuLlinks}
                </Drawer>
            </div>
        );
    }

}

export default StaticAppBar;
