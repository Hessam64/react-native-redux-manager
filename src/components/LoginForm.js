import React, {Component} from "react";
import {Card, CardSection, Input, Button} from "./common/";
import {connect} from "react-redux";
import {emailChanged, passwordChanged, loginUser} from "../actions";

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const {email, password}= this.props;
        this.props.loginUser({email, password});
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input value={this.props.email} onChangeText={this.onEmailChange.bind(this)} label="Email"
                           placeholder="email@gmail.com"/>
                </CardSection>
                <CardSection>
                    <Input value={this.props.password} label="Password" placeholder="password" secureTextEntry
                           onChangeText={this.onPasswordChange.bind(this)}/>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}
const mapStateToProps = state=> {
    return {
        email: state.auth.email,
        password: state.auth.password
    }
};
export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);