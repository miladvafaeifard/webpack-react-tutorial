import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Input from "../presentational/Input";

class FormContainer extends Component {
    constructor() {
        super();
        this.state = {
            seo_title: 'Hello Milad'
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    render() {
        const {seo_title} = this.state;
        return (
            <form id="article-form">
                <Input
                    text={seo_title}
                    label="seo_title"
                    type="text"
                    id="seo_title"
                    value={seo_title}
                    handleChange={this.handleChange}
                />
                <h2>{this.state.seo_title}</h2>
            </form>

        )
    }
}

export default FormContainer;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;