import './Work.css';
import $ from 'jquery';
import { Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import StaticAppBar from '../StaticAppBar/StaticAppBar.react';
import React, { Component } from 'react';
import Footer from '../Footer/Footer.react';
import MyAllyImg from '../images/MyAlly.jpg';
import AmexImg from '../images/AmericanExpress.png'

class Work extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        }
    }

    componentDidMount() {
        // Adding title tag to page
        document.title = 'Work | Uday Theja';
        //  Scrolling to top of page when component loads
        $('html, body').animate({ scrollTop: 0 }, 'fast');

        var myAlly = {
          title: 'MyAlly.AI',
          content: '',
          designation: 'Tester and backend developer, Django-Python',
          workPeriod: 'Summer 2016, 8 weeks',
          image: MyAllyImg,
        }
        myAlly.content = <ul>
          <li>Wrote testcases for all the apps in the project</li>
          <li>Created a mailapp interface (backend part) using GMAIL API</li>
          <li>Creating and editing calendar events using Nylas API</li>
          <li>Automating the billing process using Stripe API</li>
          <li>Developed code for scheduling group events</li>
          <li>Created a facebook messenger bot (basic level) which uses webhooks to reply to a customer</li>
          <li>Managing and creating databases using PostgreSql</li>
        </ul>;

        var americanExpress = {
          title: 'American Express',
          content: '',
          designation: 'Data Analysis and Machine Learning, R Language & Python',
          workPeriod: 'Summer 2017, 8 weeks',
          image: AmexImg,
        }
        americanExpress.content = <ul>
          <li>Wrote testcases for all the apps in the project</li>
          <li>Created a mailapp interface (backend part) using GMAIL API</li>
          <li>Creating and editing calendar events using Nylas API</li>
          <li>Automating the billing process using Stripe API</li>
          <li>Developed code for scheduling group events</li>
          <li>Created a facebook messenger bot (basic level) which uses webhooks to reply to a customer</li>
          <li>Managing and creating databases using PostgreSql</li>
        </ul>;

        this.setState({
          posts: [myAlly, americanExpress]
        })
    }

    render() {

        return (
            <div>
                <StaticAppBar {...this.props}
                    location={this.props.location} />
                <div className='head_section'>
                    <div className='container'>
                        <div className="heading">
                            <h1>Professional Experience</h1>
                            <p>{"I've had a chance to work with immensely experienced and finest clients"}</p>
                        </div>
                    </div>
                </div>
                    <div style={{ width: '100%' }}>
                        {
                            this.state.posts
                                .map((posts, i) => {
                                    return (
                                        <div key={i} className="section_blog">
                                            <Card style={{ width: '100%', padding: '0' }}>
                                                <CardMedia
                                                    overlay={
                                                        <CardTitle
                                                            className="noUnderline"
                                                            subtitle={posts.workPeriod} />
                                                    }>
                                                    <img className="featured_image"
                                                        src={posts.image}
                                                        alt={posts.title}
                                                    />
                                                </CardMedia>
                                                <CardTitle className="noUnderline" title={posts.title} subtitle={posts.designation}/>
                                                <CardText style={{ fontSize: '16px' }}> {posts.content}
                                                </CardText>
                                            </Card>
                                        </div>
                                    )
                                })
                        }
                    </div>
                    <div className="post_bottom"></div>
                    <Footer />
            </div>
        );

    }
}

export default Work;
