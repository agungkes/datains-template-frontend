import React from 'react';
import { render, screen } from '../testUtils';
import Home from '@pages/index';

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  it('ada tulisan welcome', () => {
    render(<Home />, {});
    // window.alert = jest.fn()
    // fireEvent.click(getByText('Test Button'))
    expect(screen.getByTestId('welcome-text')).toHaveTextContent(
      'Welcome to Next.js!',
    );
    // expect(window.alert).toHaveBeenCalledWith('With typescript and Jest')
  });
});
