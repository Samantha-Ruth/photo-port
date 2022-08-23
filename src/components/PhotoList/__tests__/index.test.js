// __tests__/Gallery.test.js
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PhotoList from '..'

afterEach(cleanup)

describe('PhotoList component', () => {
    
  it('renders', () => {
    render(<PhotoList />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<PhotoList />)
    expect(asFragment()).toMatchSnapshot()
  })
});

// it('renders', () => {
//   const { getByTestId } = render(<Gallery currentCategory={portrait} />)
//   expect(getByTestId ('h2tag')).toHaveTextContent('Portraits')
// })