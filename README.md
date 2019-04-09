# 2 домашнее задание

Нужно собрать упрощеную модель окна мессанджера. [Пример](https://awesome-stonebraker-fa2b72.netlify.com/).

Некоторые тонкости:
1. Для того, что бы обрабатывать изменения инпута, нужно использовать метод `onChange`.
2. Для того, что бы обработать нажатие кнопки Enter, нужно использовать метод `onKeyPress`, а в хендлере делать проверку `if (event.key === 'Enter')`.
3. Значение инпута должно быть равно значению из стейта — `<input value={this.state.messageInput} />`

