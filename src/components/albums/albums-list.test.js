import React from 'react';
import { screen, render as testRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import AlbumsList from '../__mocks__/albums-list';
import store from '../../redux/configureStore';

const render = (component) => testRender(
  <Provider store={store}>
    {component}
  </Provider>,
);

describe('Testing albums-list component', () => {
  it('Renders component correctly', async () => {
    render(<AlbumsList />);

    const elements = await screen.findAllByTitle('album');

    expect(elements).toHaveLength(2);

    const search = screen.getByPlaceholderText('Album...');

    expect(search).toBeInTheDocument();
  });
});
