import React from 'react';
import { screen, render as testRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import GenresList from '../__mocks__/genres-list';
import store from '../../redux/configureStore';

const render = (component) => testRender(
  <Provider store={store}>
    {component}
  </Provider>,
);

describe('Testing genres-list component', () => {
  it('Renders component correctly', async () => {
    render(<GenresList />);

    const header = screen.getByText('Genres');
    const elements = await screen.findAllByTitle('genre');

    expect(header).toBeInTheDocument();
    expect(elements).toHaveLength(6);
  });
});
