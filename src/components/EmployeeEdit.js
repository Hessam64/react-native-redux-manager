import React, {Component} from "react";
import {Card, CardSection, Button, Confirm} from "./common";
import EmployeeForm from "./EmployeeForm";
import {connect} from "react-redux";
import {employeeUpdate, employeeSave, employeeDelete} from "../actions";
import _ from "lodash";
import Communications from "react-native-communications";

class EmployeeEdit extends Component {
    state = {showModal: false};

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({prop, value});
        });
    }

    onButtonPress() {

        const {name, phone, shift} = this.props;
        this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid});
    }

    onTextPress() {
        const {phone, shift}  = this.props;

        Communications.text(phone, `Your upcoming shift if on ${shift}`);
    }

    onDecline() {
        this.setState({showModal: false});
    }

    onAccept() {
        this.props.employeeDelete({uid: this.props.employee.uid});
    }

    render() {
        return (
            <Card>
                <EmployeeForm/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Send Text
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => this.setState({showModal: !this.state.showModal})}>
                        Fire Employee
                    </Button>
                </CardSection>
                <Confirm visible={this.state.showModal}
                         onAccept={this.onAccept.bind(this)}
                         onDecline={this.onDecline.bind(this)}>
                    Are sure you want to delete this?
                </Confirm>
            </Card>
        )
    }
}

const mapSateToProps = (state) => {

    const {name, phone, shift} = state.employeeForm;

    return {
        name, phone, shift
    };

};
export default connect(mapSateToProps, {employeeUpdate, employeeSave, employeeDelete})(EmployeeEdit);