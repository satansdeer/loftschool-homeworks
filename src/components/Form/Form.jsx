import React, {Component} from 'react';
import Input from '../Partials/Input';
import ValidatorRule from '../Partials/Validator/ValidatorRule';
import ValidatorForm from '../Partials/Validator/ValidatorForm';
import Approved from './assets/bond_approve.jpg';

export default class Form extends Component {
    state = {
        firstname: '',
        lastname: '',
        password: '',
        showErrors: false,
        isApproved: false,
    }

    handleFormSubmit = async(event, ValidatorForm) => {
        event.preventDefault();

        await this.setState({
            showErrors: true,
            isApproved: ValidatorForm.isFormValid()
        });
    }

    handleChange = async(value, Input) => {
        var newState = {
            showErrors: false
        };

        newState[Input.props.name] = value;
        await this.setState(newState);
    }

    render() {
        return (
            <div className="app-container">
                
                {this.state.isApproved && (<div className="t-bond-image">
                    <img src={Approved} alt="bond_approve"/>
                </div>)}

                <ValidatorForm onSubmit={this.handleFormSubmit}>
                    
                    <div className="field">
                        <div className="field__label">
                            <label htmlFor="firstname" className="field-label">Имя</label>
                        </div>
                        
                        <Input type={'text'} name="firstname" value={this.state.firstname} className={'t-input-firstname field-input'} onChange={this.handleChange} validation={[
                            ValidatorRule.Create('required', 'Нужно указать имя'),
                            ValidatorRule.Create('eq:james', 'Имя указано не верно')
                        ]} classError={'field-error'} showErrors={this.state.showErrors} />
                    </div>

                    <div className="field">
                        <div className="field__label">
                            <label htmlFor="lastname" className="field-label">Фамилия</label>
                        </div>

                        <Input type={'text'} name="lastname" value={this.state.lastname} className={'t-input-lastname field-input'} onChange={this.handleChange} validation={[
                            ValidatorRule.Create('required', 'Нужно указать фамилию'),
                            ValidatorRule.Create('eq:bond', 'Фамилия указана не верно')
                        ]} classError={'field-error'} showErrors={this.state.showErrors} />
                    </div>

                   <div className="field">
                        <div className="field__label">
                            <label htmlFor="password" className="field-label">Отчество</label>
                        </div>

                        <Input type={'password'} name="password" value={this.state.password} className={'t-input-password field-input'} onChange={this.handleChange} validation={[
                                ValidatorRule.Create('required', 'Нужно указать пароль'),
                                ValidatorRule.Create('eq:007', 'Пароль указан не верно')
                        ]} classError={'field-error'} showErrors={this.state.showErrors} />
                   </div>

                    <div className="form__buttons">
                        <button type="submit" className="t-submit button">Сохранить</button>
                    </div>
                
                </ValidatorForm>
            </div>
        );
    }
}