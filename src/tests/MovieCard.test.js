import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from '../components/MovieCard';

const movies = [
  {
    title: 'Movie Title 1',
    subtitle: 'Movie Subtitle 1',
    storyline: 'Movie Storyline 1',
    rating: 4.5,
    imagePath: 'images/movie_1',
  },
  {
    title: 'Movie Title 2',
    subtitle: 'Movie Subtitle 2',
    storyline: 'Movie Storyline 2',
    rating: 4.5,
    imagePath: 'images/movie_2',
  },
  {
    title: 'Movie Title 3',
    subtitle: 'Movie Subtitle 3',
    storyline: 'Movie Storyline 3',
    rating: 3,
    imagePath: 'images/movie_3',
  },
];

describe('6 - Crie um componente `<MovieCard />`', () => {
  const movie = movies[0];

  it('Renderize o componente `<MovieCard />`', () => {
    shallow(<MovieCard movie={ movie } />);
  });
});

describe('7 - Renderize a imagem do filme dentro de uma tag `img`', () => {
  let wrapper;
  const movie = movies[0];
  it('Renderize a imagem do filme dentro de uma tag `img`', () => {
    wrapper = shallow(<MovieCard movie={ movie } />);
    expect(wrapper.find('img').prop('src')).toEqual('images/movie_1');
  });
});

describe('8 - Renderize o título do filme dentro de uma tag `h4`', () => {
  let wrapper;
  const movie = movies[0];
  it('Renderize o título do filme dentro de uma tag `h4`', () => {
    wrapper = shallow(<MovieCard movie={ movie } />);
    expect(wrapper.find('h4').text()).toBe('Movie Title 1');
  });
});

describe('9 - Renderize o subtítulo do filme dentro de uma tag `h5`', () => {
  let wrapper;
  const movie = movies[0];
  it('Renderize o subtítulo do filme dentro de uma tag `h5`', () => {
    wrapper = shallow(<MovieCard movie={ movie } />);
    expect(wrapper.find('h5').text()).toBe('Movie Subtitle 1');
  });
});

describe('10 - Renderize a sinopse do filme dentro de uma tag `p`', () => {
  let wrapper;
  const movie = movies[0];
  it('Renderize a sinopse do filme dentro de uma tag `p`', () => {
    wrapper = shallow(<MovieCard movie={ movie } />);
    expect(wrapper.find('p').text()).toBe('Movie Storyline 1');
  });
});
