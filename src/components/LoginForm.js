import React, {Component} from "react";
import {Card, CardSection, Input, Button} from "./common/";
import {connect} from "react-redux";
import {emailChanged} from "../actions";

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input onChangeText={this.onEmailChange.bind(this)} label="Email" placeholder="email@gmail.com"/>
                </CardSection>
                <CardSection>
                    <Input label="Password" placeholder="password" secureTextEntry/>
                </CardSection>
                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default connect(null, {emailChanged})(LoginForm);