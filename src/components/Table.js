import React, { Component } from 'react';
import {Paper, TableHead, TableRow, TableCell} from '@material-ui/core';
import axios from 'axios'
export default class Table extends Component {
  constructor(props){
    super(props);
    this.state ={
      data :[]
    }
  }
  componentDidMount(){
    axios.get("https://www.w3schools.com/angular/customers.php")
    .then(res=>{
      console.log(res.data);
      this.setState({
        data:res.data.records
      })
    })
  }

  render() {
    const {data} = this.state;
    return ( 
      <table className="table table-hover">
        <thead>
          <th>Name</th>
          <th>City</th>
          <th>Country</th>
        </thead>
        <tbody>
          {data.map(obj=>(
            <tr key ={obj.Name}>
              <td>{obj.Name} </td>
              <td>{obj.City}</td>
              <td>{obj.Country}</td>
            </tr>
          ))}
        </tbody>
      </table>

  
    )
  }
}
