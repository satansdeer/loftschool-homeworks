import React from 'react'

class App extends React.Component {
    render() {
        let text = 'Миру-мир, студентам - beer.';

        return (
            <div className='App'>
                <p className='description'>{ text }</p>
            </div>
        )
    }
}

export default App;