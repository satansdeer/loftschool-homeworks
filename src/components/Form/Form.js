import React, { Component } from "react";
import "./Form.css";

export default class Form extends Component {
    render() {
        return (
            <div className="app-container">
                <form className="form">
                    <h1>Введите свои данные, агент</h1>
                
                    <p className="field">
                        <input type="text" placeholder="re" className="field-input"/>
                    </p>
                    <p className="field">
                        <input type="text" placeholder="re" className="field-input"/>
                    </p>
                    <p className="field">
                        <input type="text" placeholder="re" className="field-input"/>
                    </p>

                </form>

            </div>
        )

    }
}