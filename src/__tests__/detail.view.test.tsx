import React from 'react';
import "@testing-library/jest-dom/extend-expect"
import { fireEvent, render, RenderResult, screen } from "@testing-library/react";
import Enzyme from "enzyme";
import DetailView from "../pages/DetailView";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {
    Router
} from 'react-router-dom';
const { createMemoryHistory } = require("history");

Enzyme.configure({ adapter: new Adapter() });


describe("detail view tests", () => {
    let history = createMemoryHistory();
    let wrapper: RenderResult;
    beforeEach(() => {

        const photoDetailsIntialValue = {
            albumId: 0,
            id: 0,
            thumbnailUrl: '',
            title: '',
            url: '',
        }
        React.useState = jest.fn().mockReturnValue([photoDetailsIntialValue, jest.fn()])
        wrapper = render(
            <Router location={history.location} navigator={history}>
                <DetailView />
            </Router>
        )
    });

    it('snapshot detailview page',  () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("check go back button exists", ()=> {
        fireEvent.submit(screen.getByRole('backButton'));
        expect(screen.getByRole('backButton')).toBeInTheDocument();
    });
});