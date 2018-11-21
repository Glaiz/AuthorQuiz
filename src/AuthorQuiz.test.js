import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuizhor from './AuthorQuiz';

describe("Author Quiz", () =>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AuthorQuizhor />, div);
  });
});

