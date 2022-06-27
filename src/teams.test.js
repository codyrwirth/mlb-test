/**
 * @jest-environment jsdom
 */

 import renderer from 'react-test-renderer';
 import Teams from './components/teams';
 import React, { Component } from 'react';
 
 // write unit tests for the teams Component
 describe('Teams Component', () => {
	   it('renders correctly', () => {
		 const tree = renderer.create(<Teams></Teams>).toJSON();
		 expect(tree).toMatchSnapshot();
   });
 }
 );
 
 