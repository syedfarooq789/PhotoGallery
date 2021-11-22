import React, { useState } from 'react';
import {
    render,
} from '@testing-library/react';
import Enzyme from 'enzyme';
import Gallery from '../pages/Gallery';
import DetailView from '../pages/DetailView';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {
    Router, BrowserRouter
} from 'react-router-dom';
Enzyme.configure({ adapter: new Adapter() });
const { createMemoryHistory } = require("history");


describe('Snapshot testing', () => {
    it('take snapshot of gallery page', async () => {
        const wrapper = render(<BrowserRouter><Gallery /></BrowserRouter>);
        expect(wrapper).toMatchSnapshot();
    });

    it('take snapshot of detailview page', async () => {

        const photoDetailsIntialValue = {
            albumId: 0,
            id: 0,
            thumbnailUrl: '',
            title: '',
            url: '',
        }
        React.useState = jest.fn().mockReturnValue([photoDetailsIntialValue, jest.fn()])
        const history = createMemoryHistory()
        const wrapper = render(
            <Router location={history.location} navigator={history}>
                <DetailView />
            </Router>
        )
        expect(wrapper).toMatchSnapshot();
    });
});