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
        americanExpress.content = <div>
        <h3>Project Details:</h3>
        <ul>
          <li>Name of the project: <b>FICO Forecasting using Time Series Analysis and Machine Learning Techniques</b></li>
          <li>Languages used: <b>R, Python, SQL, SAS</b></li>
          <li>Tools/Services used:  <b>R, Winscp, Teradata, Putty</b></li>
        </ul>
        <h3>Project Deliverables:</h3>
        <ul>
          <li>Using the past FICO Scores of a Card Member, predict the FICO in the future</li>
          <li>Classify the predictions according to a given threshold</li>
          <li>Observe the performance for various trends amongst card members and Infer how leniency can be given for each card member’s credit limit</li>
        </ul>
        <h3>Project Implementation:</h3>
        <p>The Data Analysis included building several models to address the business problem and infer statistics after cross validating the models.</p>
        <ul>
          <li>
            <b>Data Pull</b>
            <ul>
              <li>Wrote SAS codes which needed significant knowledge of SQL to extract large datasets from the server</li>
              <li>Used Teradata testing and debugging SQL queries</li>
              <li>Used SFTP to transfer files between servers</li>
            </ul>
          </li>
          <li>
            <b>Data Processing</b>
            <ul>
              <li>Wrote Python scripts to preprocess the data and export the data in the required format for data analysis</li>
            </ul>
          </li>
          <li>
            <b>Data Analysis</b>
            <ul>
              <li>Wrote R scripts to analyze data by building different models using Time Series and Machine Learning Techniques like:
                <ul>
                  <li>ETS – Exponential Smoothing State Space Model</li>
                  <li>ARIMA – Auto Regressive Integrated Moving Average</li>
                  <li>Hybrid Models – Combines output of different Time Series Models</li>
                  <li>Min AIC Model – Custom Cross Validating Time Series Model</li>
                  <li>Multiple Regression</li>
                  <li>Logistic Regression</li>
                  <li>Multi-Layer Feed Forward Neural Network</li>
                  <li>Bayes Classifier – GMM</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <b>Executing Scripts</b>
            <ul>
              <li>Since the datasets were large, execution needed to be performed on server.</li>
              <li>Used WinSCP and PuTTY to connect to and run scripts on server</li>
            </ul>
          </li>
        </ul>
        </div>;

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
