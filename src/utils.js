export const getLoggedInUser = () => ({ name: 'Ivan', surname: 'Ivanov' })

export const getJoke = () => fetch('https://api.chucknorris.io/jokes/random').then(response => response.json())