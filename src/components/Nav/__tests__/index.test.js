import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);
describe('Nav component', () => {
    // First Test
     it('renders', () => {
        render(<Nav />);
      });

    // Second Test
    it('matches snapshot', () => {
        // render Nav
        const { asFragment } = render(<Nav />);
        expect(asFragment()).toMatchSnapshot();
      });
})

describe('emoji is visible', () => {
        // Arrange
        it('inserts emoji into the h2', () => {
            const { getByLabelText } = render(<Nav />);
        // Assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
        });
    })