import React from 'react';
import { mount, shallow } from 'enzyme';
import MovieCard from '../components/MovieCard';
import Rating from '../components/Rating';

const rating = 4.5;
const ratingThree = 3;
const movies = [
  {
    title: 'Movie Title 1',
    subtitle: 'Movie Subtitle 1',
    storyline: 'Movie Storyline 1',
    rating,
    imagePath: 'images/movie_1',
  },
  {
    title: 'Movie Title 2',
    subtitle: 'Movie Subtitle 2',
    storyline: 'Movie Storyline 2',
    rating,
    imagePath: 'images/movie_2',
  },
  {
    title: 'Movie Title 3',
    subtitle: 'Movie Subtitle 3',
    storyline: 'Movie Storyline 3',
    ratingThree,
    imagePath: 'images/movie_3',
  },
];

describe('11 - Crie um componente `<Rating />`', () => {
  it('Renderize o componente `<Rating />`', () => {
    shallow(<Rating />);
  });
});

describe('12 - Renderize a nota de um filme dentro de `Rating`', () => {
  let wrapper;
  it('Renderize a nota de um filme dentro de `Rating`', () => {
    wrapper = shallow(<Rating rating={ 3 } />);
    expect(wrapper.find('.rating').text()).toEqual('3');
  });
});

describe('13 - Renderize o componente `<Rating />` dentro de `<MovieCard />`', () => {
  let wrapper;
  const movie = movies[0];
  it('Renderize o componente `<Rating />` dentro de `<MovieCard />`', () => {
    wrapper = shallow(<MovieCard movie={ movie } />);
    expect(wrapper.find('Rating').length).toEqual(1);
  });
});

describe('14 - Passe como prop para o componente `<Rating/>` o atributo `rating`', () => {
  let wrapper;
  const movie = movies[0];
  it('Passe como prop para o componente `<Rating />` o atributo `rating`', () => {
    wrapper = mount(<MovieCard movie={ movie } />);
    const starRating = wrapper.find(Rating);
    expect(starRating.props().rating).toEqual(rating);
  });
});
