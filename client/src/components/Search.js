import React, { Component } from "react";
import axios from 'axios';
import { Search } from "@material-ui/icons";
import Card from '@material-ui/core/Card';

export default class Searchfunction extends Component{
    state = {
        location:"",
        typeOfFood:"",
        results: []
    }
        
    inputHandler = (event) => {
        const {name, value} = event.target;
        this.setState( { [name]: value }) 
    }

    search = (event) => {
        event.preventDefault()

        axios.get(`/locations/search?location=${ this.state.location }&typeOfFood=${ this.state.typeOfFood }`)
            .then(res => {
                console.log(res.data)
                this.setState({ results: res.data });
            
            }).catch(err => console.log(err)) 
    }

    render()    {
        return (
            <div>
                <form onSubmit={ this.search }
                style={{
                    textAlign: 'center',
                    paddingTop: '20px'
                }}
                >
                    <input type="text" name="location" placeholder="Location" value={ this.state.location } onChange={ this.inputHandler }/>
                    <input type="text" name="typeOfFood" placeholder="Type of Food"value={ this.state.typeOfFood } onChange={ this.inputHandler }/>  
                    <br/>
                    <button type="submit" style={{backgroundColor:'#3fa9f5', color: 'white', marginTop: '20px'}} >
                        <Search/>
                        Search
                    </button>
                </form>
                { this.state.results.map(location => <Card style={{marginTop: '20px', height: '50px', width: '350px', justifyContent: 'center', display: 'flex', backgroundColor: '#f7931e', color:'white'}}>{location.result_object.name}</Card>)}                
            </div>    
        )
    }
}



