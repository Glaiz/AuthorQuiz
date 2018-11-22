import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount, swallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AuthorQuiz from './AuthorQuiz';
Enzyme.configure({ adapter: new Adapter() });

const state = {
  turnData: {
    books: ['ta mere en sauce', 'ta mere en sauce2'],
    author: {
      name: 'Mark Twain',
      imageUrl: 'images/authors/Mylenemad.jpg',
      imageSource: 'Allo',
      books: [
        'The adventure of huckeberry Finn',
        'ta mere',
        'ta mere en sauce' ]
    },
  },
  highlight: 'none'
}

describe("Author Quiz", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={() => { }} />, div);
  });

  describe("When no answer has been selected", () => {
    let wrapper;

      wrapper = mount(<AuthorQuiz {...state} onAnswerSelected={() => { }} />);
      
    it('Should no render BG color', () => {
      expect(wrapper.find('div.row.turn').props().style.background).toBe('');
    });
  });

});

