import React, { PureComponent } from 'react';
import './App.css';
import Todo from '../Todo';
import withLocalStorage from '../../HOCs/withLocalstorage/withLocalstorage'

class App extends PureComponent  {
    render(){
        const WrapComponent = withLocalStorage(Todo)
        return(
            <main className="main">
                <div className="main__cell">
                    <WrapComponent {...this.props}/>
                </div>
            </main>
        );
    }
}

export default App;
