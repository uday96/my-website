import './Blog.css';
import 'font-awesome/css/font-awesome.min.css';
import PropTypes from 'prop-types';
import htmlToText from 'html-to-text';
import $ from 'jquery';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import dateFormat from 'dateformat';
import StaticAppBar from '../StaticAppBar/StaticAppBar.react';
import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import Footer from '../Footer/Footer.react';
import {
    ShareButtons,
    generateShareIcon
} from 'react-share';
import Close from 'material-ui/svg-icons/navigation/close';
import Dialog from 'material-ui/Dialog';
import BlogIcon from 'material-ui/svg-icons/action/description';

function arrDiff(a1, a2) {
    var a = [], diff = [];
    for (var f = 0; f < a1.length; f++) {
        a[a1[f]] = true;
    }
    for (var z = 0; z < a2.length; z++) {
        if (a[a2[z]]) {
            delete a[a2[z]];
        } else {
            a[a2[z]] = true;
        }
    }
    for (var k in a) {
        diff.push(k);
    }
    return diff;
};

class Blog extends Component {

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
        document.title = 'Blog | Uday Theja';
        //  Scrolling to top of page when component loads
        $('html, body').animate({ scrollTop: 0 }, 'fast');
        //  Ajax call to convert the RSS feed to JSON format
        $.ajax({
            url: 'https://api.rss2json.com/v1/api.json',
            method: 'GET',
            dataType: 'json',
            data: {
                'rss_url': 'http://blog.fossasia.org/author/uday96/feed/',
                'api_key': 'qsmzjtyycc49whsfvf5ikzottxrbditq3burojhd', // put your api key here
                'count': 50
            }
        }).done(function (response) {
            if (response.status !== 'ok') { throw response.message; }
            this.setState({
              posts: response.items,
              postRendered: true
            });
            this.createCards();
        }.bind(this));
    }

    createCards = () => {
      const {
          FacebookShareButton,
          TwitterShareButton,

        } = ShareButtons;
      const FacebookIcon = generateShareIcon('facebook');
      const TwitterIcon = generateShareIcon('twitter');
      const allCategories = ['FOSSASIA', 'GSoC', 'SUSI.AI',
          'Tutorial', 'Android', 'API', 'App generator', 'CodeHeat', 'Community', 'Event',
          'Event Management', 'loklak', 'Meilix', 'Open Event', 'Phimpme', 'Pocket Science Lab', 'yaydoc'];

      let cards = [];
      this.state.posts.forEach((posts, i) => {
          let description = htmlToText.fromString(posts.description).split('…');
          let content = posts.content;
          let category = [];
          posts.categories.forEach((cat) => {
              let k = 0;
              for (k = 0; k < allCategories.length; k++) {
                  if (cat === allCategories[k]) {
                      category.push(cat);
                  }
              }
          });
          var tags = arrDiff(category, posts.categories)
          let fCategory = category.map((cat) =>
              <span key={cat} ><a className="tagname" href={'http://blog.fossasia.org/category/' + cat.replace(/\s+/g, '-').toLowerCase()}
                  rel="noopener noreferrer">{cat}</a></span>
          );
          let ftags = tags.map((tag) =>
              <span key={tag} ><a className="tagname" href={'http://blog.fossasia.org/tag/' + tag.replace(/\s+/g, '-').toLowerCase()}
                  rel="noopener noreferrer">{tag}</a></span>
          );
          let htmlContent = content.replace(/<img.*?>/, '');
          htmlContent = renderHTML(htmlContent);
          let image;
          let regExp = /\[(.*?)\]/;
          let imageUrl = regExp.exec(description[0]);
          if (imageUrl) {
              image = imageUrl[1]
          }
          let date = posts.pubDate.split(' ');
          let d = new Date(date[0]);
          cards.push(
              <div key={i} className="section_work">
                  <Card style={{ width: '100%', padding: '0' }}>
                      <CardMedia
                          overlay={
                              <CardTitle
                                  className="noUnderline"
                                  subtitle={renderHTML('<a href="' + posts.link + '" >Published on ' + dateFormat(d, 'dddd, mmmm dS, yyyy') + '</a>')} />
                          }>

                          <img className="featured_image"
                              src={image}
                              alt={posts.title}
                          />
                      </CardMedia>
                      <CardTitle className="noUnderline" title={posts.title} subtitle={renderHTML('by <a href="http://blog.fossasia.org/author/' + posts.author + '" >' + posts.author + '</a>')} />
                      <CardText style={{ fontSize: '16px' }}><div>{htmlContent}</div>
                      </CardText>
                      <div className="social-btns">
                  <TwitterShareButton
                      url={posts.guid}
                      title={posts.title}
                      via='asksusi'
                      hashtags={posts.categories.slice(0, 4)} >
                      <TwitterIcon
                          size={32}
                          round={true} />

                  </TwitterShareButton>
                  <FacebookShareButton url={posts.link}>
                      <FacebookIcon size={32} round={true} />
                  </FacebookShareButton>
                      </div>
                      <CardActions className="cardActions">
                          <span className="calendarContainer">
                              <i className="fa fa-calendar tagIcon"></i>
                              {renderHTML('<a href="' + posts.link + '">' + dateFormat(d, 'mmmm dd, yyyy') + '</a>')}
                          </span>
                          <span className="authorsContainer">
                              <i className="fa fa-user tagIcon"></i>
                              <a
                                  rel="noopener noreferrer"
                                  href={'http://blog.fossasia.org/author/' + posts.author}
                              >
                                  {posts.author}
                              </a></span>
                          <span className='categoryContainer'>
                              <i className="fa fa-folder-open-o tagIcon"></i>
                              {fCategory}
                          </span>
                          <span className='tagsContainer'>
                              <i className="fa fa-tags tagIcon"></i>
                              {ftags}
                          </span>
                      </CardActions>
                  </Card>
              </div>
          );
      })

      this.setState({
        cards: cards,
      });

    }

    showCard = (cardIndex) => {
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
          fill: '#000',
          width: '40px',
          height: '40px',
          right: '20px',
          top: '20px',
          cursor: 'pointer'
        }

        let dialogStyle = {};
        if(window.matchMedia('only screen and (max-width: 768px)').matches){
            dialogStyle = {
              width:'100%',
              maxWidth:'none',
              height:'auto',
            };
        }

        return (
            <div>
                <StaticAppBar {...this.props}
                    location={this.props.location} />
                <div className='head_section'>
                    <div className='container'>
                        <div className="heading">
                            <h1>Blog</h1>
                            <p>My Blog posts published in FOSSASIA website<br/>
                            <a href='http://blog.fossasia.org/author/uday96/'>http://blog.fossasia.org/author/uday96/</a>
                            </p>
                        </div>
                    </div>
                </div>
                <section id="cd-timeline" className="cd-container">
                  <div className="cd-timeline-block"
                    onTouchTap={this.showCard.bind(this,0)} style={{cursor: 'pointer'}}>
                   <div className="cd-timeline-img cd-picture">
                     <BlogIcon color='#fff' style={{width: '100%',height:'80%',paddingTop:'10%'}}/>
                   </div>
                   <div className="cd-timeline-content">
                     <h2>Implementing Version Control System for SUSI Skill CMS</h2>
                     <span className="cd-date">2017-08-31 04:54:59</span>
                   </div>
                 </div>
                 <div className="cd-timeline-block"
                   onTouchTap={this.showCard.bind(this,1)} style={{cursor: 'pointer'}}>
                   <div className="cd-timeline-img cd-picture">
                     <BlogIcon color='#fff' style={{width: '100%',height:'80%',paddingTop:'10%'}}/>
                   </div>
                   <div className="cd-timeline-content">
                     <h2>Fetching Images for RSS Responses in SUSI Web Chat</h2>
                     <span className="cd-date">2017-08-30 14:03:15</span>
                   </div>
                 </div>
                 <div className="cd-timeline-block"
                   onTouchTap={this.showCard.bind(this,2)} style={{cursor: 'pointer'}}>
                   <div className="cd-timeline-img cd-picture">
                     <BlogIcon color='#fff' style={{width: '100%',height:'80%',paddingTop:'10%'}}/>
                   </div>
                   <div className="cd-timeline-content">
                     <h2>Implementing Text To Speech Settings in SUSI WebChat</h2>
                     <span className="cd-date">2017-08-30 12:12:54</span>
                   </div>
                 </div>
                 <div className="cd-timeline-block"
                   onTouchTap={this.showCard.bind(this,3)} style={{cursor: 'pointer'}}>
                   <div className="cd-timeline-img cd-picture">
                     <BlogIcon color='#fff' style={{width: '100%',height:'80%',paddingTop:'10%'}}/>
                   </div>
                   <div className="cd-timeline-content">
                     <h2>Generating Map Action Responses in SUSI AI</h2>
                     <span className="cd-date">2017-08-17 04:06:06</span>
                   </div>
                 </div>
                 <div className="cd-timeline-block"
                   onTouchTap={this.showCard.bind(this,4)} style={{cursor: 'pointer'}}>
                   <div className="cd-timeline-img cd-picture">
                     <BlogIcon color='#fff' style={{width: '100%',height:'80%',paddingTop:'10%'}}/>
                   </div>
                   <div className="cd-timeline-content">
                     <h2>Implementing the Feedback Functionality in SUSI Web Chat</h2>
                     <span className="cd-date">2017-08-15 10:12:18</span>
                   </div>
                 </div>
                 <div className="cd-timeline-block"
                   onTouchTap={this.showCard.bind(this,5)} style={{cursor: 'pointer'}}>
                   <div className="cd-timeline-img cd-picture">
                     <BlogIcon color='#fff' style={{width: '100%',height:'80%',paddingTop:'10%'}}/>
                   </div>
                   <div className="cd-timeline-content">
                     <h2>Adding a Scroll To Bottom button in SUSI WebChat</h2>
                     <span className="cd-date">2017-08-08 13:22:32</span>
                   </div>
                 </div>
                 <div className="cd-timeline-block"
                   onTouchTap={this.showCard.bind(this,6)} style={{cursor: 'pointer'}}>
                   <div className="cd-timeline-img cd-picture">
                     <BlogIcon color='#fff' style={{width: '100%',height:'80%',paddingTop:'10%'}}/>
                   </div>
                   <div className="cd-timeline-content">
                     <h2>Storing User Settings on Server in SUSI Web Chat</h2>
                     <span className="cd-date">2017-07-20 11:18:15</span>
                   </div>
                 </div>
                 <div className="cd-timeline-block"
                   onTouchTap={this.showCard.bind(this,7)} style={{cursor: 'pointer'}}>
                   <div className="cd-timeline-img cd-picture">
                     <BlogIcon color='#fff' style={{width: '100%',height:'80%',paddingTop:'10%'}}/>
                   </div>
                   <div className="cd-timeline-content">
                     <h2>Implementing the Message Response Status Indicators In SUSI WebChat</h2>
                     <span className="cd-date">2017-07-13 19:07:40</span>
                   </div>
                 </div>
                 <div className="cd-timeline-block"
                   onTouchTap={this.showCard.bind(this,8)} style={{cursor: 'pointer'}}>
                   <div className="cd-timeline-img cd-picture">
                     <BlogIcon color='#fff' style={{width: '100%',height:'80%',paddingTop:'10%'}}/>
                   </div>
                   <div className="cd-timeline-content">
                     <h2>How SUSI WebChat Implements RSS Action Type</h2>
                     <span className="cd-date">2017-07-11 10:59:31</span>
                   </div>
                 </div>
                 <div className="cd-timeline-block"
                   onTouchTap={this.showCard.bind(this,9)} style={{cursor: 'pointer'}}>
                   <div className="cd-timeline-img cd-picture">
                     <BlogIcon color='#fff' style={{width: '100%',height:'80%',paddingTop:'10%'}}/>
                   </div>
                   <div className="cd-timeline-content">
                     <h2>Implementing Search Feature In SUSI Web Chat</h2>
                     <span className="cd-date">2017-07-06 06:16:28</span>
                   </div>
                 </div>
                 <div className="cd-timeline-block"
                   onTouchTap={this.showCard.bind(this,10)} style={{cursor: 'pointer'}}>
                   <div className="cd-timeline-img cd-picture">
                     <BlogIcon color='#fff' style={{width: '100%',height:'80%',paddingTop:'10%'}}/>
                   </div>
                   <div className="cd-timeline-content">
                     <h2>Processing Text Responses in SUSI Web Chat</h2>
                     <span className="cd-date">2017-07-06 05:59:31</span>
                   </div>
                 </div>
                 <div className="cd-timeline-block"
                   onTouchTap={this.showCard.bind(this,11)} style={{cursor: 'pointer'}}>
                   <div className="cd-timeline-img cd-picture">
                     <BlogIcon color='#fff' style={{width: '100%',height:'80%',paddingTop:'10%'}}/>
                   </div>
                   <div className="cd-timeline-content">
                     <h2>How SUSI AI Searches the Web For You</h2>
                     <span className="cd-date">2017-07-03 05:19:11</span>
                   </div>
                 </div>
                 <div className="cd-timeline-block"
                   onTouchTap={this.showCard.bind(this,12)} style={{cursor: 'pointer'}}>
                   <div className="cd-timeline-img cd-picture">
                     <BlogIcon color='#fff' style={{width: '100%',height:'80%',paddingTop:'10%'}}/>
                   </div>
                   <div className="cd-timeline-content">
                     <h2>How SUSI AI Tabulates Answers For You</h2>
                     <span className="cd-date">2017-07-03 04:26:04</span>
                   </div>
                 </div>
                 <div className="cd-timeline-block"
                   onTouchTap={this.showCard.bind(this,13)} style={{cursor: 'pointer'}}>
                   <div className="cd-timeline-img cd-picture">
                     <BlogIcon color='#fff' style={{width: '100%',height:'80%',paddingTop:'10%'}}/>
                   </div>
                   <div className="cd-timeline-content">
                     <h2>Map Support for SUSI Webchat</h2>
                     <span className="cd-date">2017-06-27 20:04:19</span>
                   </div>
                 </div>
                 <div className="cd-timeline-block"
                   onTouchTap={this.showCard.bind(this,14)} style={{cursor: 'pointer'}}>
                   <div className="cd-timeline-img cd-picture">
                     <BlogIcon color='#fff' style={{width: '100%',height:'80%',paddingTop:'10%'}}/>
                   </div>
                   <div className="cd-timeline-content">
                     <h2>Hyperlinking Support for SUSI Webchat</h2>
                     <span className="cd-date">2017-06-27 19:07:41</span>
                   </div>
                 </div>
                 <div className="cd-timeline-block"
                   onTouchTap={this.showCard.bind(this,15)} style={{cursor: 'pointer'}}>
                   <div className="cd-timeline-img cd-picture">
                     <BlogIcon color='#fff' style={{width: '100%',height:'80%',paddingTop:'10%'}}/>
                   </div>
                   <div className="cd-timeline-content">
                     <h2>How to teach SUSI skills calling an External API</h2>
                     <span className="cd-date">2017-05-15 14:37:43</span>
                   </div>
                 </div>
                </section>
                <Dialog
                  modal={false}
                  bodyClassName='dialog'
                  contentStyle={dialogStyle}
                  open={this.state.showCard}
                  onRequestClose={this.closeCard}
                  autoScrollBodyContent={true}
                >
                    {this.state.cards[this.state.cardIndex]}
                    <Close style={closingStyle} onTouchTap={this.closeCard} />
                </Dialog>
                <Footer />
            </div>
        );

    }
}

Blog.propTypes = {
    history: PropTypes.object,
    location: PropTypes.object
}

export default Blog;
