import './Work.css';
import $ from 'jquery';
import { Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import StaticAppBar from '../StaticAppBar/StaticAppBar.react';
import React, { Component } from 'react';
import Footer from '../Footer/Footer.react';
import MyAllyImg from '../images/MyAlly.jpg';
import AmexImg from '../images/AmericanExpress.png'
import GSoCImg from '../images/GSoC.jpg';
import Close from 'material-ui/svg-icons/navigation/close';
import Modal from 'react-modal';

class Work extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            postRendered: false,
            cards: [],
            showCard: false,
            cardIndex: -1,
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
              <b>ETS</b> – Exponential Smoothing State Space Model, <b>ARIMA</b> – Auto Regressive Integrated Moving Average, <b>Hybrid Models</b> – Combines output of different Time Series Models,
              <b>Min AIC Model</b> – Custom Cross Validating Time Series Model, <b>Multiple Regression</b>, <b>Logistic Regression</b>,
              <b>Multi-Layer Feed Forward Neural Network</b>, <b>Bayes Classifier</b> – GMM</li>
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

        var gsoc = {
          title: 'GSoC\'17 - FOSSASIA - SUSI.AI',
          content: '',
          designation: 'React JS Developer',
          workPeriod: 'Summer 2017, 16 weeks',
          image: GSoCImg,
        }
        gsoc.content = <div>
        <h3>Project:</h3> <a href='https://github.com/fossasia/chat.susi.ai'>A Web Application making use of the SUSI.AI Server functionalities</a>
        <h3>Project Deliverables:</h3>
        To build a web application making use of the functionalities of SUSI.AI Server. The server makes use of different skills which are defined in the <a href='https://github.com/fossasia/susi_skill_data/'>Skill Data Repository</a>. The web application utilises the <a href='http://api.susi.ai'>SUSI.AI Server API</a> and will have functionalities such as replying intelligently to user queries in different formats including text, image, table, map, emojis etc, accounting features, personalization features and much more
        <h3>Project Details:</h3>
        I contributed to several SUSI.AI projects of <a href='https://fossasia.org/'>FOSSASIA</a> within the 2017 Google Summer of Code period and my main project was <a href='https://github.com/fossasia/chat.susi.ai'>SUSI Web Chat Application</a>. My contributions to SUSI.AI repositories have been listed below.
        <h4>SUSI Web Chat: <a href='https://github.com/fossasia/chat.susi.ai'>GitHub Repository</a></h4>
        <ul>
          <li><a href='https://github.com/fossasia/chat.susi.ai/issues?q=is%3Aissue+author%3Auday96'>Issues (Assigned/Resolved)</a></li>
          <li><a href='https://github.com/fossasia/chat.susi.ai/commits/master?author=uday9'>Commits</a></li>
          <li><a href='https://github.com/fossasia/chat.susi.ai/pulls?q=is%3Apr+author%3Auday96'>Pull Requests</a></li>
          <li>Deployment Link: <a href='http://chat.susi.ai'>http://chat.susi.ai</a></li>
        </ul>
        <h4>SUSI Skill CMS: <a href='https://github.com/fossasia/susi_skill_cms'>GitHub Repository</a></h4>
        <ul>
          <li><a href='https://github.com/fossasia/susi_skill_cms/issues?q=is%3Aissue+author%3Auday96'>Issues (Assigned/Resolved)</a></li>
          <li><a href='https://github.com/fossasia/susi_skill_cms/commits/master?author=uday9'>Commits</a></li>
          <li><a href='https://github.com/fossasia/susi_skill_cms/pulls?q=is%3Apr+author%3Auday96'>Pull Requests</a></li>
          <li>Deployment Link: <a href='http://skills.susi.ai'>http://skills.susi.ai</a></li>
        </ul>
        <h4>SUSI Server: <a href='https://github.com/fossasia/susi_server'>GitHub Repository</a></h4>
        <ul>
          <li><a href='https://github.com/fossasia/susi_server/issues?q=is%3Aissue+author%3Auday96'>Issues (Assigned/Resolved)</a></li>
          <li><a href='https://github.com/fossasia/susi_server/commits/development?author=uday96'>Commits</a></li>
          <li><a href='https://github.com/fossasia/susi_server/pulls?q=is%3Apr+author%3Auday96'>Pull Requests</a></li>
          <li>Deployment Link: <a href='http://api.susi.ai'>http://api.susi.ai</a></li>
        </ul>
        <h4>SUSI Skill Data: <a href='https://github.com/fossasia/susi_skill_data/'>GitHub Repository</a></h4>
        <ul>
          <li><a href='https://github.com/fossasia/susi_skill_data/issues?q=is%3Aissue+author%3Auday96'>Issues (Assigned/Resolved)</a></li>
          <li><a href='https://github.com/fossasia/susi_skill_data/commits/master?author=uday96'>Commits</a></li>
          <li><a href='https://github.com/fossasia/susi_skill_data/pulls?q=is%3Apr+author%3Auday96'>Pull Requests</a></li>
        </ul>
        <h4>Blog Posts</h4>
        My Blogs posted till date on FOSSASIA blog website can be found <a href='http://blog.fossasia.org/author/uday96/'>here</a>
        <h4>Scrums</h4>
        My Daily Scrum Reports (i.e everyday work updates) can be found <a href='https://groups.google.com/forum/#!searchin/susiai/%5BSCRUM%5D$20Uday$20Theja$20%7Csort:relevance'>here</a>
        </div>;

        var posts = [myAlly, gsoc, americanExpress];
        var infoCards = [];
        posts.forEach((post,index)=>{
          var card = this.getCard(post);
          infoCards.push(card);
        });

        this.setState({
          posts: posts,
          postRendered: true,
          cards: infoCards,
        })
    }

    getCard = (post) => {
      return(
        <div className="section_blog">
            <Card style={{ width: '100%', padding: '0' }}>
                <CardMedia
                    overlay={
                        <CardTitle
                            className="noUnderline"
                            subtitle={post.workPeriod} />
                    }>
                    <img className="featured_image"
                        src={post.image}
                        alt={post.title}
                    />
                </CardMedia>
                <CardTitle className="noUnderline" title={post.title} subtitle={post.designation}/>
                <CardText style={{ fontSize: '16px' }}> {post.content}
                </CardText>
            </Card>
        </div>
      )
    }

    showCard = (cardIndex) => {
      console.log(cardIndex);
      this.setState({
        showCard: true,
        cardIndex: cardIndex,
      });
    }

    closeCard = () => {
      this.setState({
        showCard: false,
        cardIndex: -1,
      });
    }

    render() {
      const closingStyle = {
        position: 'absolute',
        zIndex: 120000,
        fill: '#fff',
        width: '40px',
        height: '40px',
        right: '20px',
        top: '20px',
        cursor: 'pointer'
      }
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
                <section id="cd-timeline" className="cd-container">
                  <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-picture">
                    </div>
                    <div className="cd-timeline-content">
                      <h2>Title of section 1</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
                      <div onTouchTap={this.showCard.bind(this,0)} className="cd-read-more">Read more</div>
                      <span className="cd-date">Jan 14</span>
                    </div>
                  </div>

                  <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-movie">
                    </div>
                    <div className="cd-timeline-content">
                      <h2>Title of section 2</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?</p>
                      <div onTouchTap={this.showCard.bind(this,1)} className="cd-read-more">Read more</div>
                      <span className="cd-date">Jan 18</span>
                    </div>
                  </div>

                  <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-picture">
                    </div>
                    <div className="cd-timeline-content">
                      <h2>Title of section 3</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque asperiores voluptatibus cupiditate error assumenda delectus odit similique earum voluptatem doloremque dolorem ipsam quae rerum quis. Odit, itaque, deserunt corporis vero ipsum nisi eius odio natus ullam provident pariatur temporibus quia eos repellat consequuntur perferendis enim amet quae quasi repudiandae sed quod veniam dolore possimus rem voluptatum eveniet eligendi quis fugiat aliquam sunt similique aut adipisci.</p>
                      <div onTouchTap={this.showCard.bind(this,2)} className="cd-read-more">Read more</div>
                      <span className="cd-date">Jan 24</span>
                    </div>
                  </div>
                </section>
                {this.state.showCard &&
                (<Modal
                  isOpen={this.state.showCard}
                  className="Video-Modal"
                  onRequestClose={this.closeCard}
                  contentLabel="Assistant Video"
                  overlayClassName="Video-Overlay">
                  <div className="video-container">
                    {this.state.cards[this.state.cardIndex]}
                    <Close style={closingStyle} onTouchTap={this.handleClose} />
                  </div>
                </Modal>)
                }
                <div className="post_bottom"></div>
                <Footer />
            </div>
        );

    }
}

export default Work;
