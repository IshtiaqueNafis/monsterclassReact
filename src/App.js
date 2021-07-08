
import './App.css';
import React, {Component} from "react";
import {CardList} from "./components/card-list/card-list.component";
import {Search} from "./components/search/search.component";
class App extends Component {

    constructor() {
        super();
        this.state = {
            monsters:[],
            searchField:''
        }

    }


componentDidMount() { // life cycle method
        // used componeent lifecycle cause of class method
       // used the json format
       // to get the users and set it to monsters.
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({monsters:users}));
}
   handleChange =(e) => {
        this.setState({searchField:e.target.value});
    };
    render() { // comes built in with react component
        const { monsters,searchField} = this.state; // destrucrting 
        const filterMonsters = monsters.filter(monster=>
           monster.name.toLowerCase().includes(searchField.toLowerCase()) // this checks the comments.
        )
        
    return (
        <div className="App"> {/* app is a componenent */}
            <Search  placeholder='search monster' handleChange={this.handleChange}/>
            <CardList monsters={filterMonsters}/> {/* monster is being passed here fromt he class  */}


        </div>
    );
  }
}

export default App;
