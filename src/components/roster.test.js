/** @jest-environment jsdom */

import { render, screen } from '@testing-library/react';
import Roster from './roster';
import React from 'react';

test('renders the landing page', () => {
  render(<Roster />);
});