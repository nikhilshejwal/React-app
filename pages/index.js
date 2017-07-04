import React, { Component } from 'react';
import Head from 'next/head'



export default class extends React.Component {

    render() {

        return (

            <div>
                <Head>






                    <link href="/static/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />


                    <link href="/static/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
                    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css' />
                    <link href='https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css' />


                    <link href="/static/vendor/magnific-popup/magnific-popup.css" rel="stylesheet" />


                    <link href="/static/css/creative.min.css" rel="stylesheet" />


                    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
                    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>

                </Head>

                <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
            
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand page-scroll" href="#page-top">BRIMCODE</a>
            </div>

           
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a className="page-scroll" href="#about">About</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#services">Services</a>
                    </li>
                    
                    <li>
                        <a className="page-scroll" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            
        </div>
        
    </nav>
            
             

                <section className="bg-primary" id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-lg-offset-2 text-center">
                                <h2 className="section-heading">We've got what you need!</h2>
                                <hr className="light" />
                                <p className="text-faded">Brimcode has everything you need to get your new website up and running in no time and Easy to use!</p>
                                <a href="#services" className="page-scroll btn btn-default btn-xl sr-button">Get Started!</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading">At Your Service</h2>
                                <hr className="primary" />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="service-box">
                                    <i className="fa fa-4x fa-diamond text-primary sr-icons"></i>
                                    <h3>Zero Fee</h3>
                                    <p className="text-muted">Our freelance marketplace won’t charge commissions giving you more freedom and many reasons to switch to our platform.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="service-box">
                                    <i className="fa fa-4x fa-paper-plane text-primary sr-icons"></i>
                                    <h3>Location and Time</h3>
                                    <p className="text-muted">Integrated tools will give you possibility to scale your business without a risk of loosing data between different systems.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="service-box">
                                    <i className="fa fa-4x fa-newspaper-o text-primary sr-icons"></i>
                                    <h3>Customer Support</h3>
                                    <p className="text-muted">We want to give you the best support possible.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="service-box">
                                    <i className="fa fa-4x fa-heart text-primary sr-icons"></i>
                                    <h3>Made with Love</h3>
                                    <p className="text-muted">You have to make your websites with love these days!With Technology such as Angular, React and Wordpress</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                
                <section id="contact">
        <div className="container">
            <div class="row">
                <div className="col-lg-8 col-lg-offset-2 text-center">
                    <h2 className="section-heading">Let's Get In Touch!</h2>
                    <hr className="primary"/>
                    <p>Ready to start your next project with us? That's great! Give us a call or send us an email and we will get back to you as soon as possible!</p>
                </div>
                <div className="col-lg-4 col-lg-offset-2 text-center">
                    <i className="fa fa-phone fa-3x sr-contact"></i>
                    <p>123-456-6789</p>
                </div>
                <div className="col-lg-4 text-center">
                    <i className="fa fa-envelope-o fa-3x sr-contact"></i>
                    <p><a href="mailto:your-email@your-domain.com">feedback@brimcode.com</a></p>
                </div>
            </div>
        </div>
    </section>


                <script src="/static/vendor/jquery/jquery.min.js"></script>


                <script src="/static/vendor/bootstrap/js/bootstrap.min.js"></script>


                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
                <script src="/static/vendor/scrollreveal/scrollreveal.min.js"></script>
                <script src="/static/vendor/magnific-popup/jquery.magnific-popup.min.js"></script>


                <script src="/static/js/creative.min.js"></script>

            </div>
        )
    }

}


