/**
 * @jest-environment jsdom
 */

 import renderer from 'react-test-renderer';
 import Teams from './components/teams';
 import React, { Component } from 'react';
 import { shallow, render, mount } from 'enzyme';
 import { configure } from 'enzyme';
 import Adapter from 'enzyme-adapter-react-16';
 
 // write unit tests for the teams Component
 describe('Teams Component', () => {
	   it('renders correctly', () => {
		 const tree = renderer.create(<Teams></Teams>).toJSON();
		 expect(tree).toMatchSnapshot();
   });
 }
 );
 
 