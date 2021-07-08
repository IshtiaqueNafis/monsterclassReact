
import './App.css';
import React, {Component} from "react";
import {CardList} from "./components/card-list/card-list.component";
class App extends Component {

    constructor() {
        super();
        this.state = {
            monsters:[

            ]
        }
    }
componentDidMount() {
        // used componeent lifecycle cause of class method
       // used the json format
       // to get the users and set it to monsters.
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({monsters:users}));
}

    render() { // comes built in with react component
    return (
        <div className="App"> {/* app is a componenent */}
            <CardList>

            {
                // eslint-disable-next-line array-callback-return
              this.state.monsters.map(monster=> <h1 key={monster.id}>{monster.name}</h1>)
            }
            </CardList>


        </div>
    );
  }
}

export default App;
