import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import Carousel from './components/Carousel';

class App extends Component {
    constructor(){
        super();
        this.state = {category:"food"}
    }
    render(){
        var products = this.props.state.products.filter((prod)=>{
            return prod.category === this.state.category;
        });
        products = products.map(function(prod){
            return <ProductDetail product={prod} />;
        });
        var categories = this.props.state.categories.map((cat)=>{
            return  <a onClick={
                ()=>{
                    this.setState({category:cat});
                }
            } 
            href="#" className="list-group-item">{cat}</a>;
        });
        return (
            <div className="App">
                <NavBar />
                <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <p className="lead">Shop Name</p>
                        <div className="list-group">
                            {categories}
                        </div>
                    </div>
                    <div className="col-md-9">
                        <Carousel />
                        <div className="row">
                            {products}
                        </div>
                    </div>
                </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
