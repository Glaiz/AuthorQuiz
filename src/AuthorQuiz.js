import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';


class AuthorQuiz extends Component {
  render() {
    return (
      <div className="container-fluid" >
        <Hero />
        <Turn />
        <Continue />
      </div>
    );
  }
}


function Hero() {
  return (<div className="row">
    <div className="jumbotron col-10 offset-1">
    <h1>Author Quiz</h1>
    <p>Select the book written by the author shown</p>
    </div>
  </div>
  );
}

function Turn() {
  return (<div/>);
}

function Continue() {
  return (<div/>);
}

export default AuthorQuiz;
