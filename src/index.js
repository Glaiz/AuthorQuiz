import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import { shuffle, sample } from 'underscore';


const authors = [
    {
        name: 'Mark Twain',
        imageUrl: 'images/authors/Mylenemad.jpg',
        imageSource: 'Allo',
        books: [
            'The adventure of huckeberry Finn',
            'ta mere',
            'ta mere en sauce'
        ]
    },
    {
        name: 'Mark Twain 2',
        imageUrl: 'images/authors/mylene.png',
        imageSource: 'Allo',
        books: [
            'The adventure of huckeberry Finn 2',
            'ta mere 2',
            'ta mere en sauce 2'
        ]
    },
    {
        name: 'Mark Twain 3',
        imageUrl: 'images/authors/dog.gif',
        imageSource: 'Allo',
        books: [
            'The adventure of huckeberry Finn 3',
            'ta mere 3',
            'ta mere en sauce 3'
        ]
    }
];

const state = {
    turnData: getTurnData(authors),
    highlight: ''
}

function getTurnData(authors) {
    const allbooks = authors.reduce(function (p, c, i) {
        return p.concat(c.books);
    }, []);
    const fourRandomBook = shuffle(allbooks).slice(0, 4);
    const answer = sample(fourRandomBook);

    return {
        books: fourRandomBook,
        author: authors.find(author => author.books.some((title) => title === answer))
    }
}

function onAnswerSelected(answer) {
    const isCorrect = state.turnData.author.books.some((book) => book === answer);
    state.highlight = isCorrect ? 'correct' : 'wrong';
    render();
}
function render() {
    ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={onAnswerSelected} />, document.getElementById('root'));
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
render();
serviceWorker.unregister();
