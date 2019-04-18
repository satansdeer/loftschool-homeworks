import { Component } from 'react';
import PropTypes from 'prop-types';
import ValidatorRuleItem from './ValidatiorRuleItem';

export default class Validator extends Component {
    static propTypes = {
        setErrors: PropTypes.func.isRequired,
        value: PropTypes.string.isRequired,
        classError: PropTypes.string,

        realTimeValidation: PropTypes.bool,
        rules: PropTypes.arrayOf(PropTypes.instanceOf(ValidatorRuleItem))
    }

    static defaultProps = {
        rules: [],
        realTimeValidation: false,
    }
    
    state = {
        errors: [],
        isEnabled: true,
    }

    componentDidMount() {
        if(!this.props.rules.length) {
            this.setState({
                isEnabled: false,
            });

            this.props.setErrors([]);
            return;
        }

        this.validate();
    }

    inputChanged(previousState) {
        return previousState.value !== this.props.value;
    }

    validate = async() => {
        var errors = this.props.rules.map(rule => rule.getErrorIfInvalid(this.props.value)).filter(x => x);

        await this.setState({
            errors: errors
        });

        this.props.setErrors(this.state.errors);        
    }

    componentDidUpdate(previousState) {
        if (!this.inputChanged(previousState))
            return;

        if (!this.state.isEnabled)
            return;

        this.validate();
    }

    render() {
        return null;
    }
};