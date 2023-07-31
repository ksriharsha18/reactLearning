import React from "react";
import userContext from "../utils/userContext";

class About extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "Krovi S S Sri Harsha",
            location: "India",
            contact: "@H99Harsha"
        }

        console.log("constructor call");
    }

    componentDidMount() {
        console.log("Component Did Mount");
    }

    render() {
        console.log("render call");
        return (
            <div>
                <userContext.Consumer>
                    {({loggedInUser}) => (
                        <h3>Hi! {loggedInUser}</h3>
                    )}
                </userContext.Consumer>
                <h1>About Us</h1>
                <h3>Name: {this.state.name}</h3>
                <h3>Location: {this.state.location}</h3>
                <h3>Contact: {"(" +this.state.contact+ ")"} </h3>
            </div>
        )
    }

}

export default About;
