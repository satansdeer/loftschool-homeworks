import React from "react";
import "./Message.css";

export default class Message extends React.Component{
    render(){
        return(
            <span className="message">
                {this.props.text}
            </span>
        )
    }
}
