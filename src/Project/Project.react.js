import $ from 'jquery';
import StaticAppBar from '../StaticAppBar/StaticAppBar.react';
import React, { Component } from 'react';
import Footer from '../Footer/Footer.react';
import AssIcon from 'material-ui/svg-icons/action/assignment';
import StarIcon from 'material-ui/svg-icons/action/grade';

class Project extends Component {

    componentDidMount() {
        // Adding title tag to page
        document.title = 'Project | Uday Theja';
        //  Scrolling to top of page when component loads
        $('html, body').animate({ scrollTop: 0 }, 'fast');
    }

    render() {

        return (
            <div>
                <StaticAppBar {...this.props}
                    location={this.props.location} />
                <div className='head_section'>
                    <div className='container'>
                        <div className="heading">
                            <h1>Projects</h1>
                            <p>{"It's all about developing new things"}</p>
                        </div>
                    </div>
                </div>
                <section id="cd-timeline" className="cd-container">
                <div className="cd-timeline-block">
                  <div className="cd-timeline-img cd-picture">
                    <StarIcon color='#fff' style={{width: '100%',height:'80%',paddingTop:'10%'}}/>
                  </div>
                  <div className="cd-timeline-content">
                    <h2>Proxy - CV Attendace System</h2>
                    <p>{'The Proxy Application is a software product intended to be used by the universities to record the '+
                    'students’ attendance based on the photographs uploaded of the class using face recognition algorithms.'+
                    ' It allows students to input their photographs and the professors to upload the class photographs.'+
                    ' The photographs uploaded by the students are used as initial training data for the application. The photographs uploaded'+
                    ' by the professor, after resolving any issues that arise, is run on training data to mark attendace and are again used to train the application resulting'+
                    ' in better recognition rate with time. Any issues that are raised by the students can be resolved by the'+
                    ' corresponding course professor via an interface in the application itself.'}</p>
                    <a href="https://github.com/uday96/Proxy" className="cd-read-more">View Source</a>
                  </div>
                </div>
                  <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-picture">
                      <StarIcon color='#fff' style={{width: '100%',height:'80%',paddingTop:'10%'}}/>
                    </div>
                    <div className="cd-timeline-content">
                      <h2>Twitter Streamer</h2>
                      <p>{'Twitter Play - Kafka filters the real-time tweets based on the keywords and location (Latitude, Longitude bounds)'+
                      ' provided and pushes them to Kafka. The filtered tweets are then visualised on a Map with respect to their geolocation.'}</p>
                      <a href="https://bitbucket.org/uday96/twitterstreamer" className="cd-read-more">View Source</a>
                    </div>
                  </div>
                  <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-picture">
                      <AssIcon color='#fff' style={{width: '100%',height:'80%',paddingTop:'10%'}}/>
                    </div>
                    <div className="cd-timeline-content">
                      <h2>128 bit Block Cipher</h2>
                      <p>{'Developed a 128 bit Block cipher using python which encrypts data file by converting it to binary and encrypting 128'+
                      ' bits each. Implemented based on ARIA Cipher.'}
                      </p>
                      <a href="#0" className="cd-read-more">View Source</a>
                    </div>
                  </div>
                  <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-picture">
                      <AssIcon color='#fff' style={{width: '100%',height:'80%',paddingTop:'10%'}}/>
                    </div>
                    <div className="cd-timeline-content">
                      <h2>BloodBankInfo - Database Management System</h2>
                      <p>{'Designed my own database with the required specifications in the Blood Bank Information management domain.'+
                      'Developed the ER Relations and Relational Schema and created the database using PostgreSQL and developed an interface to '+
                      'demonstrate basic SQL queries using a Python script.'}
                      </p>
                      <a href="https://bitbucket.org/uday96/bloodbankinfo-mydatabase" className="cd-read-more">View Source</a>
                    </div>
                  </div>
                  <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-picture">
                      <StarIcon color='#fff' style={{width: '100%',height:'80%',paddingTop:'10%'}}/>
                    </div>
                    <div className="cd-timeline-content">
                      <h2>Computer Networks</h2>
                      <p>{'Collection of programs covering different aspects of Computer Networks including :'}
                      <ul>
                        <li>UDP & TCP</li>
                        <li>Hamming Error Correction Code</li>
                        <li>GO-BACK-N (GBN) RELIABLE RETRANSMISSION PROTOCOL - UDP</li>
                        <li>Slotted Aloha Protocol</li>
                        <li>TCP Congestion Control</li>
                        <li>OSPF Routing Algorithm</li>
                      </ul>
                      </p>
                      <a href="https://bitbucket.org/uday96/computer-networks/" className="cd-read-more">View Source</a>
                    </div>
                  </div>
                  <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-picture">
                      <AssIcon color='#fff' style={{width: '100%',height:'80%',paddingTop:'10%'}}/>
                    </div>
                    <div className="cd-timeline-content">
                      <h2>Pattern Recognition - Neural Networks</h2>
                      <p>{'Matlab program to visualize datasets and build classification models for various datasets using :'}
                      <ul>
                        <li>Perceptrons</li>
                        <li>Multi-Layer Feed Forward Neural Networks - MLFFNN</li>
                        <li>Support Vector Machines - SVM</li>
                        <li>PCA dimension reductions</li>
                      </ul>
                      </p>
                      <a href="https://bitbucket.org/uday96/patternrecognition-neuralnetworks" className="cd-read-more">View Source</a>
                    </div>
                  </div>
                  <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-picture">
                      <AssIcon color='#fff' style={{width: '100%',height:'80%',paddingTop:'10%'}}/>
                    </div>
                    <div className="cd-timeline-content">
                      <h2>Pattern Recognition - Bayes Classifiers</h2>
                      <p>{'Matlab program to visualize datasets and build classification models for various datasets using :'}
                      <ul>
                        <li>K Nearest Neighbours - KNN</li>
                        <li>Naive-Bayes classifier</li>
                        <li>Bayes classifier</li>
                        <li>Hidden Markov Model - HMM</li>
                      </ul>
                      </p>
                      <a href="https://bitbucket.org/uday96/patternrecognition-bayesclassifiers/" className="cd-read-more">View Source</a>
                    </div>
                  </div>
                  <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-picture">
                      <StarIcon color='#fff' style={{width: '100%',height:'80%',paddingTop:'10%'}}/>
                    </div>
                    <div className="cd-timeline-content">
                      <h2>COMPILER for Mini-Java</h2>
                      <p>{'Through six phases, we designed a compiler for subset of Java called Mini-Java using Flex, Bison and JavaCC in C and Java :'}
                      <ol>
                        <li><b>Macro Expansion :</b> Converting MacroJava to MiniJava</li>
                        <li><b>Syntactic and Semantic Analysis</b> Type Checking for MiniJava</li>
                        <li><b>Intermediate Code Generation :</b> Converting MiniJava to MiniIR</li>
                        <li><b>Simplified Intermediate Code Generation :</b> Converting MiniIR to MicroIR</li>
                        <li><b>Register Allocation :</b> Converting MicroIR to MiniRA</li>
                        <li><b>Machine Level Code Generation :</b> Converting MiniRA to MIPS</li>
                      </ol>
                      </p>
                      <a href="https://bitbucket.org/uday96/minijava-compiler" className="cd-read-more">View Source</a>
                    </div>
                  </div>
                  <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-picture">
                      <AssIcon color='#fff' style={{width: '100%',height:'80%',paddingTop:'10%'}}/>
                    </div>
                    <div className="cd-timeline-content">
                      <h2>DataVisualisation using d3js</h2>
                      <p>{'Analysis using d3js Bar Graphs for Sector-wise Physical Performance of Districts in India - Based on Sample Survey, 2010 for:'}
                      <ul>
                        <li>Agriculture Sector</li>
                        <li>Physical and Social Infrastructure Sector</li>
                        <li>Other Sectors</li>
                      </ul>
                      </p>
                      <a href="https://bitbucket.org/uday96/datavisualisation-d3js" className="cd-read-more">View Source</a>
                    </div>
                  </div>
                  <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-picture">
                      <AssIcon color='#fff' style={{width: '100%',height:'80%',paddingTop:'10%'}}/>
                    </div>
                    <div className="cd-timeline-content">
                      <h2>Reverse-Delete Algorithm</h2>
                      <p>{'The Reverse-Delete Algorithm is an algorithm in graph theory used to obtain a minimum spanning tree from a given connected,'+
                      ' edge-weighted graph. This is a graphical visualisation of Reverse-Delete Algorithm on any input weighted graph.'}</p>
                      <a href="https://bitbucket.org/uday96/reversedeletealgorithm" className="cd-read-more">View Source</a>
                    </div>
                  </div>
                  <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-picture">
                      <AssIcon color='#fff' style={{width: '100%',height:'80%',paddingTop:'10%'}}/>
                    </div>
                    <div className="cd-timeline-content">
                      <h2>Data Compression – Huffman Coding</h2>
                      <p>{'Use Huffman coding to compress a given input file, send the stream of characters as packets to a receiver, '+
                      'stimulating noise in the channel, and finally decode the data at the receiver end.'}
                      <ul>
                        <li>Study the probability of occurrence of unique symbols in arbitrarily large text data and compute the entropy.</li>
                        <li>Source code the data using Huffman coding algorithm and generate a code book for the symbols in the text data .</li>
                        <li>Divide the data into packets of some fixed length(7 in our case) and channel encode each packet .</li>
                        <li>Assume some arbitrary bit rate error and generate bit errors in each packet .</li>
                        <li>Use the client server programs provided to send the signal across the channel.</li>
                        <li>Recover the text from the received data and check whether there is an error or not by using the Cyclic Redundancy
                        Check(CRC) and request for a re­transmission if it has an error . We do so until we generate the same text data as the input file .</li>
                      </ul>
                      </p>
                      <a href="https://bitbucket.org/uday96/channeltransmission-poc" className="cd-read-more">View Source</a>
                    </div>
                  </div>
                  <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-picture">
                      <AssIcon color='#fff' style={{width: '100%',height:'80%',paddingTop:'10%'}}/>
                    </div>
                    <div className="cd-timeline-content">
                      <h2>Regular Expression Validator</h2>
                      <p>{'Validate if a given string matches a regular expresssion.'}
                      <ul>
                        <li>Checks for the validity of the Regular Expression using Cocke-Younger-Kasami (CYK) Algorithm</li>
                        <li>Constructs an equivalent Non-Deterministic Finite Automaton (NFA)</li>
                        <li>Check if the input strings are a part of the language defined by the given regular expression.</li>
                      </ul>
                      </p>
                      <a href="https://bitbucket.org/uday96/regular-expressions-validator" className="cd-read-more">View Source</a>
                    </div>
                  </div>
                </section>
                <Footer />
            </div>
        );

    }
}

export default Project;
