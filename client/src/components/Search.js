import React, { Component } from "react";
import axios from 'axios';
import { Search } from "@material-ui/icons";

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
                <form onSubmit={ this.search }>
                    <input type="text" name="location" value={ this.state.location } onChange={ this.inputHandler }/>
                    <input type="text" name="typeOfFood" value={ this.state.typeOfFood } onChange={ this.inputHandler }/>  
                    <button type="submit">search</button>
                </form>
                { this.state.results.map(location => <h1>{location.result_object.name}</h1>)}                
            </div>    
        )
    }
}



