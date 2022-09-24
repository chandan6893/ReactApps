import React, { Component } from "react";
import { Feed } from "./Feed";
export class InstaMain extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : [
                {
                    userName: "Vasanth",
                    id: 0,
                    msg: "Welcome To Dubai",
                    imgUrl:"https://blog.hubspot.com/hs-fs/hubfs/canva-instagram-quote-template.jpg?width=450&name=canva-instagram-quote-template.jpg",
                },
                {
                    userName:"Jolly",
                    id:1,
                    msg:"Welcome To India",
                    imgUrl:"https://blog.hubspot.com/hs-fs/hubfs/instagram_quote_quotescover.jpg?width=450&name=instagram_quote_quotescover.jpg",
                },
            ],
        };
    }
    // we  will write code for UI in return under render method()
    render(){
        // return this.state.data.map((feed) => <Feed />)
        
        return(
            <div className="container">
                {
                    this.state.data.map((feed) => (<Feed feed = {feed} />
                ))}
            </div>
        ) 
        
    
    }
}