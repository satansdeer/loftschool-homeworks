import React, { Component} from 'react'
import './Form.css'

const formData = {
    firstname: {value: 'james', error: 'Имя указано не верно', errorEmpty: 'Нужно указать имя'},
    lastname: {value: 'bond', error: 'Фамилия указана не верно', errorEmpty: 'Нужно указать фамилию'},
    password: {value: '007', error: 'Пароль указан не верно', errorEmpty: 'Нужно указать пароль'}
};

class Form extends Component {
    state = {
        errors: {},
        onSubmit: false,
        values: {firstname: '', lastname: '', password: ''}
    };

    changeInput = e => {
        const target = e.target;

        this.setState({
            values: { ...this.state.values, ...{ [target.name]: target.value } },
            //убирает ошибку только из того поля, где начат набор
            errors: {...this.state.errors, ...{ [target.name]: ''}}
        });
        //console.log(this.state);
    };

    formLogin = e => {
        e.preventDefault();
        const errors = {};

        //console.log(this.state.values.firstname);
        Object.keys(formData).forEach(key => {
            //console.log(this.state.values[key]);
            //console.log(key);
            if (this.state.values[key] === '') {
                errors[key] = formData[key].errorEmpty;
            } else if (this.state.values[key].toLowerCase() !== formData[key].value) {
                errors[key] = formData[key].error;
            }
        });
        //console.log(errors);
        this.setState({errors: errors, onSubmit: Object.keys(errors).length === 0})
    };

    render() {
        if (!this.state.onSubmit) {
            return (
                <div className='app-container'>
                    <form className='form' onSubmit={this.formLogin}>
                        <h1>Введите свои данные агент</h1>
                        <p className='field'>
                            <label className='field__label' htmlFor='firstname'>
                                <span className='field-label'>Имя</span>
                            </label>
                            <input type='text'
                                   className='field__input field-input t-input-firstname'
                                   name='firstname'
                                   value={this.state.values['firstname']}
                                   onChange={this.changeInput}/>
                            <span className='field__error field-error t-error-firstname'>{this.state.errors['firstname']}</span>
                        </p>
                        <p className='field'>
                            <label className='field__label' htmlFor='lastname'>
                                <span className='field-label'>Фамилия</span>
                            </label>
                            <input type='text'
                                   className='field__input field-input t-input-lastname'
                                   name='lastname'
                                   value={this.state.values['lastname']}
                                   onChange={this.changeInput}/>
                            <span className='field__error field-error t-error-lastname'>{this.state.errors['lastname']}</span>
                        </p>
                        <p className='field'>
                            <label className='field__label' htmlFor='firstname'>
                                <span className='field-label'>Пароль</span>
                            </label>
                            <input autoComplete='off'
                                   type='password'
                                   className='field__input field-input t-input-password'
                                   name='password'
                                   value={this.state.values['password']}
                                   onChange={this.changeInput}/>
                            <span className='field__error field-error t-error-password'>{this.state.errors['password']}</span>
                        </p>
                        <div className='form__buttons'>
                            <input
                                className='button t-submit'
                                type='submit'
                                value='Проверить'/>
                        </div>
                    </form>
                </div>
            )
        } else {
            return (
                <div className='app-container'>
                    <img src={require('./assets/bond_approve.jpg')} alt='bond approve' className='t-bond-image'/>
                </div>
            )
        }

    }
}

export default Form