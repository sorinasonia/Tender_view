import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from "./SearchMovies";
import './App.css';

class Main extends React.Component{

  constructor(props){
    super(props)
  }



  render() {
    return (

      <div className = "container" >
        
        <h1 className = "title" >TENDER VIEW</h1>
        <SearchMovies/>

      </div>

    );
  }
}

export default Main;
ReactDOM.render( <Main/>, document.getElementById('root'));

