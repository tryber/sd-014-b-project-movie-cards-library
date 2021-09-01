import React from 'react';
import { mount, shallow } from 'enzyme';
import MovieCard from '../components/MovieCard';
import MovieList from '../components/MovieList';

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

describe('3 - Crie um componente `<MovieList />`', () => {
  it('Renderize o componente `<MovieList />`', () => {
    shallow(<MovieList movies={ movies } />);
  });
});

describe('4 - Renderize componentes `<MovieCard />` dentro de `<MovieList />`', () => {
  let wrapper;

  it('Renderize componentes `<MovieCard />` dentro de `MovieList`', () => {
    wrapper = shallow(<MovieList movies={ movies } />);
    expect(wrapper.find(MovieCard).length).toEqual(ratingThree);
  });
});

describe('5 - Passe uma key para cada `<MovieCard />` renderizado', () => {
  let wrapper;
  it('Passe uma key para cada `<MovieCard />` renderizado', () => {
    wrapper = mount(<MovieList movies={ movies } />);
    const movieCards = wrapper.find(MovieCard);
    movieCards.forEach((movieCard, index) => {
      expect(movieCard.key()).toEqual(movies[index].title);
    });
  });
});
