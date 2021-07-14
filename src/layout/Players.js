import React, { Component } from 'react'
import store from '../store/store'
import { connect } from 'react-redux'
var axios = require("axios").default;

var options = {
    method: 'GET',
    url: 'https://real-time-football-content.p.rapidapi.com/football',
    params: { langs: 'en,es,fr,de,it,ru,hi,pl,uk,pa', limit: '10', skip: '0' },
    headers: {
        'x-rapidapi-key': '2bd03537e5mshd8aea3d092a5e91p18ed18jsn43c3b0c1063c',
        'x-rapidapi-host': 'real-time-football-content.p.rapidapi.com'
    }
};








class Players extends Component {
     searchMovie=()=>{ 
         axios.request(options).then(function (response) {
             console.log(response.data);
         }).catch(function (error) {
             console.error(error);
         });

        //  axios.get('https://v3.football.api-sports.io/teams/arsenal' )
        //     .then(response => store.dispatch({
        //         type: "FETCH_DATA",
        //         payload: response.data

        //     })).catch((error) => {
        //       alert("you have some error ")
        //       alert(error)
        //     })
     
        //  axios.request(options).then(function (response) {
        //      console.log(response.data);
        //  }).catch(function (error) {
        //      console.error(error);
        //  });

    }


        
    
    render() {
        return (
         
            <div id="accordion" className='slideInUp'>
                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                           
                           
                            <div class="card slideInLeft">
                                    <div class="card-header" id="headingOne">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"  >
                                                111
                                            </button>

                                        </h5>
                                    </div>

                                    <div id="collapseOne" class="collapse " aria-labelledby="headingOne" data-parent="#accordion">
                                        <div class="card-body">
                                            premare league pfkwokpfwkowefkowefweoew
                                            efwwefewf
                                            fewefwfew
                                            we
                                            efwewewfewfwefwefwefwef
                                            fewewfewfffffffffffffffffffffffffffffffffffffffffff
                                            fweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                                        </div>
                                    </div>
                                </div>


                        </div>
                        <div class="col-sm">
                                <div class="card">
                                    <div class="card-header" id="headingTwo">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Collapsible Group Item #2
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div class="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div class="col-sm">
                            <div class="card slideInRight">
                                    <div class="card-header" id="headingThree">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Collapsible Group Item #3
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                        <div class="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
        
                </div>
        )
    }
}
const mapStateToProps = (state) => ({ text: "ahmad" })
const con = connect(mapStateToProps)(Players)
export default con;
