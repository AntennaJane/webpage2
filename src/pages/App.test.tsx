import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('renders index page', () => {
  const {getByText} = render(<App/>);
  const h1Element = getByText(/南次郎個人サーバ/i);
  expect(h1Element).toBeInTheDocument();
});
