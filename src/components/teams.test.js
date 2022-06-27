/** @jest-environment jsdom */

import { render, screen } from '@testing-library/react';
import Teams from './teams';
import React from 'react';

// write a test case that makes sure the Teams component renders properly
test('renders the landing page', () => {
	  render(<Teams />);
}
);

// TEST: Make sure the teams are being rendered as 30 buttons exactly

// TEST: Ensure that each of these buttons are onClick functions are working correctly and routing

// TEST: Ensure that the content expected to be on the page is rendered there