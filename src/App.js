
import './App.css';
import React, {Component} from "react";
import {CardList} from "./components/card-list/card-list.component";
class App extends Component {

    constructor() {
        super();
        this.state = {
            monsters:[],
            searchField:''
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
            <input type="search" placeholder='Search Monsters' onChange={e=>this.setState({searchField:e.target.value})}/> {/* e is the function targetr and value can be gained via input there.  */}
            <CardList monsters={this.state.monsters}/> {/* monster is being passed here fromt he class  */}


        </div>
    );
  }
}

export default App;
