/** @jest-environment jsdom */

import { render, screen } from '@testing-library/react';
import Teams from './teams';
import React from 'react';

// write a test case that makes sure the Teams component renders properly
test('renders the landing page', () => {
	  render(<Teams />);
}
);