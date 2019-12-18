import React from 'react'
import ErrorPage from './index'
import renderer from 'react-test-renderer'

jest.mock("react-router-dom", () => ({
    Link: "Link"
}));

describe('ErrorPage component', () => {
    test('should render correctly', () => {
        const component = renderer.create(
            <ErrorPage />
        )
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})