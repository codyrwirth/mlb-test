/** @jest-environment jsdom */

import { render, screen } from '@testing-library/react';
import Roster from './roster';
import React from 'react';

// takes snapshot of page, converts to json, and compares to expected snapshot

test('renders the landing page', () => {
  render(<Roster />);
});


// TEST: Make sure that the roster is producing the accurate number of players that it is supposed to upon render

// TEST: Make sure the button is clickable and calls the function to route back to teams

// TEST: Ensure that the content expected to be on the page is rendered there