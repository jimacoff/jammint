import React, { Component } from 'react';
import DataService from "../../../services/DataService";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './index.css';

export default class Jammers extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        jammers: [],
    }

    console.log("Props del jammers", this.props)

  }

  componentDidMount(){
    DataService.getJammers(this.props.jamId).then(
        (jamsData)=>{
        console.log("Jams Data: ", jamsData[0])
        let jammersArr = jamsData.map((j) =>{
            return Object.assign({id: j.id}, j.data())
        }
            
        )
        this.setState({ jammers: jammersArr})

        }
    )
  }


  _renderJammers(){
      
    return this.state.jammers.map((user,i) => {
        return (

        <Link className="room-cover" key={i} to={`/user/${user.id}`}> 
            

                <div className="user-pic"> 
                    <img src={require("../../../assets/icons/user.png")}/>
                </div>

                <div className="user-info">

                    <div className="user-info-up">

                        <div className="roomNr">
                            <p>Room: {user.roomNr}</p>
                        </div>

                        <div className="user-info-detail">
                            <h4>{user.name}</h4>                          
                        </div>

                        <div className="user-info-detail">
                            <h4>{user.country}</h4>
                        </div>
                        
                    </div>


                    <div className="user-info-down">  
                    
                        <div className="user-info-studies">                 
                            <p>{user.studies}</p>
                        </div>

                        <div className="user-info-school">
                            <p>{user.school}</p>
                        </div>
                    
                    </div>

                </div>

            </Link>
        )
    })
    } 

    render() {
        console.log("render");
        console.log('props de Jammers', this.props)
        
        return (
            
            <div className="jammers">

                {this._renderJammers()}

            </div>

            
        )
        

    };
  
}


