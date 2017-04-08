import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';

function App () {
    return (
      <div className="App">
      <NavBar />

    <div className="container">

        <div className="row">

            <div className="col-md-3">
                <p className="lead">Shop Name</p>
                <div className="list-group">
                    <a href="#" className="list-group-item">Category 1</a>
                    <a href="#" className="list-group-item">Category 2</a>
                    <a href="#" className="list-group-item">Category 3</a>
                </div>
            </div>

            <div className="col-md-9">

                <div className="row carousel-holder">

                    <div className="col-md-12">
                        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="item active">
                                    <img className="slide-image" src="http://placehold.it/800x300" alt=""/>
                                </div>
                                <div className="item">
                                    <img className="slide-image" src="http://placehold.it/800x300" alt=""/>
                                </div>
                                <div className="item">
                                    <img className="slide-image" src="http://placehold.it/800x300" alt=""/>
                                </div>
                            </div>
                            <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left"></span>
                            </a>
                            <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right"></span>
                            </a>
                        </div>
                    </div>

                </div>

                <div className="row">
                  <ProductDetail />
                  <ProductDetail />
                  <ProductDetail />
                  <ProductDetail />
                  <ProductDetail />
                  <ProductDetail />
                  <div className="col-sm-4 col-lg-4 col-md-4">
                      <h4><a href="#">Like this template?</a>
                      </h4>
                      <p>If you like this template, then check out <a target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">this tutorial</a> on how to build a working review system for your online store!</p>
                      <a className="btn btn-primary" target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">View Tutorial</a>
                  </div>
                </div>
            </div>
        </div>
    </div>
   <Footer />
      </div>
    );
}

export default App;
