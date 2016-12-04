import React, {Component} from "react";
import {Card, CardSection, Button} from "./common";
import EmployeeForm from "./EmployeeForm";
import {connect} from "react-redux";
import {employeeUpdate} from "../actions";
import _ from "lodash";

class EmployeeEdit extends Component {

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({prop, value});
        });
    }

    onButtonPress() {
        debugger;
        const {name, phone, shift} = this.props;
        console.log(name + phone + shift);
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
            </Card>
        )
    }
}

const mapSateToProps = (state) => {
    const {name, phone, shift} = state;
    return {
        name, phone, shift
    };

};
export default connect(mapSateToProps, {employeeUpdate})(EmployeeEdit);