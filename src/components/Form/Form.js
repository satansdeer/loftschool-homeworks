import React, { Component} from 'react'
import './Form.css'

class Form extends Component {
    render() {
        const formData = [
            {key: 'firstname', type: 'text', description: 'Имя', errorMessage: 'Имя указано не верно', emptyMessage: 'Нужно заполнить имя'},
            {key: 'lastname', type: 'text', description: 'Фамилия', errorMessage: 'Нужно указать фамилию', emptyMessage: 'Нужно заполнить фамилию'},
            {key: 'password', type: 'password', description: 'Пароль', errorMessage: 'Пароль указан неверно', emptyMessage: 'Нужно заполнить пароль'}
        ];

        return (
            <div className='app-container'>
                <form className='form'>
                    <h1>Введите свои данные агент</h1>
                    {formData.map(inputRow => (
                        <p key={inputRow.key} className='field'>
                            <label className='field__label' htmlFor={inputRow.key}>
                                <span className='field-label'>{inputRow.description}</span>
                            </label>
                            <input type={inputRow.type} className='field-input' name={inputRow.key}/>
                            <span className='field__error field-error'></span>
                        </p>
                    ))}
                    <div className='form__buttons'>
                        <input
                            className='button t-submit'
                            type='submit'
                            value='Проверить'/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form

//todo: сделал разметку вывод ошибок и обработка клика по кнопке