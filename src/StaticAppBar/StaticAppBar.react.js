import './StaticAppBar.css';
import AppBar from 'material-ui/AppBar';
import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import $ from 'jquery';

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
        return (

            <div>
                <header className="nav-down" >
                    <AppBar
                        style={{
                          backgroundColor: '#4285f4',
                        }}
                        id="headerSection"
                        className="topAppBar"
                        title={title}
                        onLeftIconButtonTouchTap={this.handleDrawer}
                    />
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
                </Drawer>
            </div>
        );
    }

}

export default StaticAppBar;
