import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonPrimary from './ButtonPrimary';

describe('<ButtonPrimary />', () => {
  test('it should mount', () => {
    render(<ButtonPrimary />);

    const buttonPrimary = screen.getByTestId('ButtonPrimary');

    expect(buttonPrimary).toBeInTheDocument();
  });
});