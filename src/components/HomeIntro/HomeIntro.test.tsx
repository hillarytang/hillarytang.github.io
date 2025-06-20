import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomeIntro from './HomeIntro';

describe('<HomeIntro />', () => {
  test('it should mount', () => {
    render(<HomeIntro />);

    const homeIntro = screen.getByTestId('HomeIntro');

    expect(homeIntro).toBeInTheDocument();
  });
});