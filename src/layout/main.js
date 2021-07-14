import React, { Component } from 'react'
import img1 from '../assets/soccer-player.jpg'
import Players from './Players'
import axios from 'axios';
import Routers from './Routers';
import { Switch ,} from "react-router";
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import store from '../store/store';
import { PayloadTooLarge } from 'http-errors';
 class Main extends Component {
   
    


        // this.props.store.dispatch({ type: "FETCH_PLAYERS", payload:"ABDULAZIZ" })
       
    
    render() {
        return (



          
  

  <div div class="container">
  
                <div class="row">
                    <div class="col">
                        <div class="card slideInLeft" >
                            <img src={img1} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                                <Link to='/players'>   <button class="btn btn-primary"   >
                                players</button>
                                    </Link>    </div>
                        </div>
                    </div>
                    <div class="col">
                  
                        <div class="card slideInDown" >
                            <img src={img1} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button href="#" class="btn btn-primary" onclick={this.onclick}>clubs</button>
                            </div>
                        </div>


                    </div>
                    <div class="col">
                        <div class="card slideInRight" >
                            <img src={img1} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">gools</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    </div></div>
                    
                    
                 
            
        )}
    }
const mapStateToProps = (state) => ({ text: "ahmad" })
const con=connect(mapStateToProps)(Main)
export default con