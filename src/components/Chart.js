import React, { Component } from 'react'
import {Bar ,Line, Pie} from 'react-chartjs-2';

export default class Chart extends Component {
    constructor(props){
        super(props);
        this.state ={
            chartData: {
                labels:['Mumbai','Hyderabad','Banglore','Chennai','Nagpur','Pune'],
                datasets:[
                    {
                        label:'Population',
                        data:[
                            617529,
                            181029,
                            153029,
                            106519,
                            105162,
                            95702
                        ],
                        backgroundColor:[
                            'rgba(255, 99 ,132,0.6)',
                            'rgba(54, 162 ,235,0.6)',
                            'rgba(255, 206 ,86,0.6)',
                            'rgba(75, 192 ,192,0.6)',
                            'rgba(153, 102 ,255,0.6)',
                            'rgba(255, 159 ,64,0.6)',
                            'rgba(255, 99 ,132,0.6)'
                        ]
                    }
                ]
            }
        }
    }
    static defaultProps ={
        displayTitle: true,
        displayLegend:true,
        legendPosition:'right'
    }


  render() {
    return (
      <div className="chart">
        <Bar 
            data={this.state.chartData}
            // width={100}
            // height={50}
            option={{
                title:{
                    display : this.props.displayTitle,
                    text:'Largest Cities in India',
                    fontSize:25
                },
                legend:{
                    display:this.props.displayLegend,
                    position:this.props.legendPosition
                }
            }}
        />
      </div>
    )
  }
}
