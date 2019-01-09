import React, { Component } from 'react';
import './Form.css';
import bondSrc from './assets/bond_approve.jpg';

const targetValue = {
    firstname: 'James',
    lastname: 'Bond',
    password: '007'
}
const errorTypes = {
    firstname: {
        emptyText: 'Нужно указать имя',
        incorrectText: 'Имя указано не верно'
    },
    lastname: {
        emptyText: 'Нужно указать фамилию',
        incorrectText: 'Фамилия указана не верно'
    },
    password: {
        emptyText: 'Нужно указать пароль',
        incorrectText: 'Пароль указан не верно'
    }
}

export default class extends Component {
    state = {
        isValid: false,
        firstname: '',
        lastname: '',
        password: '',
        errors: {}
    }

    /**
     * Обработчик изменения значения в любом поле для ввовда
     */
    onChangeInput = (e) => {
        let { name, value } = e.target;

        this.setState({
            [name]: value,
            errors: {}
        })
    }

    /**
     * Обработчик кнопки сабмита формы. Проверяем валидность полей формы,
     * устанавливаем соответствующие ошибки для случаев пустого поля и некорректно заполненного
     */
    onFormSubmit = (e) => {
        let errors = {};

        e.preventDefault();
        Object.keys(targetValue).forEach(key => {
            if (!this.state[key]) {
                errors[key] = errorTypes[key].emptyText
            } else if (this.state[key].toLowerCase() !== targetValue[key].toLowerCase()) {
                errors[key] = errorTypes[key].incorrectText
            }  
        });

        this.setState({ errors, isValid: Object.keys(errors).length === 0 })
    }

    render() {
        let { firstname, lastname, password, errors, isValid} = this.state;

        return isValid ?
            <div className='app-container'>
                <img
                    src={bondSrc}
                    alt='bond approve'
                    className='t-bond-image'>
                </img>
            </div>
            :
            <div className='app-container'>
                <form className='form' onSubmit={this.onFormSubmit}>
                    <p className='field'>
                        <label className='field__label'>
                            <span className='field-label' htmlFor='firstname'>Имя</span>
                        </label>
                        <input
                            className='field__input field-input t-input-firstname'
                            type='text'
                            name='firstname'
                            value={firstname}
                            onChange={this.onChangeInput}
                        ></input>
                        <span className='field__error field-error t-error-firstname'>{errors.firstname}</span>
                    </p>
                    <p className='field'>
                        <label className='field__label' htmlFor='lastname'>
                            <span className='field-label'>Фамилия</span>
                        </label>
                        <input
                            className='field__input field-input t-input-lastname'
                            type='text'
                            name='lastname'
                            value={lastname}
                            onChange={this.onChangeInput}
                        ></input>
                        <span className='field__error field-error t-error-lastname'>{errors.lastname}</span>
                    </p>
                    <p className='field'>
                        <label className='field__label' htmlFor='password'>
                            <span className='field-label'>Пароль</span>
                        </label>
                        <input
                            className='field__input field-input t-input-password'
                            type='text'
                            name='password'
                            value={password}
                            onChange={this.onChangeInput}
                        ></input>
                        <span className='field__error field-error t-error-password'>{errors.password}</span>
                    </p>
                    <div className='form__buttons'>
                        <input className='button t-submit' type='submit' value='Проверить'></input>
                    </div>
                </form>
            </div>
    }
}
