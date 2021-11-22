import '@testing-library/jest-dom/extend-expect';
import { render, RenderResult, screen, waitForElement } from '@testing-library/react';
import Enzyme from 'enzyme';
import Gallery from '../pages/Gallery';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {
    BrowserRouter
} from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() });


describe('gallery view tests', () => {

    let wrapper: RenderResult;
    beforeEach(() => {
        wrapper = render(<BrowserRouter><Gallery /></BrowserRouter>);
    });

    it('snapshot gallery page', () => {
        expect(wrapper).toMatchSnapshot();
    });
});