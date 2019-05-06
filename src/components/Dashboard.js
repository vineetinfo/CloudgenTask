import React, { Component } from 'react'
import Table from './Table';
import Chart from './Chart'
import {Route,Link} from 'react-router-dom';


export default class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state={
      classes:''
    }
  }
  
  render() {
  
    return (

      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-sm-4  d-flex flex-column">
            <div className="mb-1 flexbox">
              <a href="#">Grid </a>
            </div> 
              <div className="mb-1 flexbox ">
              <a href="#"><Link to="/Table" >Table</Link> 
              </a>
              </div> 
              <div className=" mb-1 flexbox ">
              <a><Link to="/Chart" >Chart</Link> 
              </a>
              </div>
            </div>
            <div className="col-sm-8">
            <Route path="/table" exact component={Table}/>
            <Route path="/chart" component={Chart} legendPosition ="bottom"/>
            </div>
          </div>
        </div>   
      </React.Fragment>
    )
  }
}
