import React from 'react';
import './App.css';
import './bootstrap.min.css';




function AuthorQuiz({ turnData, highlight, onAnswerSelected }) {
  return (
    <div className="container-fluid" >
      <Hero />
      <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
      <Continue />
      <Footer />
    </div>
  );
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


function Footer() {
  return (<div id="footer" className="row">
    <div className="col-12">

      <p className="text-muted credit">
        All image are from <a href="https://Urmother.com">Ur mother</a>
      </p>
    </div>
  </div>
  );
}

function Turn({ author, books, highlight ,onAnswerSelected}) {

  function highlightToBgColor(highlight) {
    const mapping = {
      'none': '',
      'correct': 'green',
      'wrong': 'red'
    };
    return mapping[highlight];
  }

  return (
    <div className="row turn" style={{ background: highlightToBgColor(highlight) }}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorimage" alt="Author" ></img>
      </div>
      <div className="col-6">
        {books.map((title) => <Book title={title} key={title} onClick={onAnswerSelected} ></Book>)}
      </div>
    </div>
  );
}

function Book({ title, onClick }) {
  return (<div className="answer" onClick={()=> {onClick(title);}}>
    <h4>{title}</h4>
  </div>

  );
}

function Continue() {
  return (<div />);
}

export default AuthorQuiz;
