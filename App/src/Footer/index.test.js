import React from 'react'
import Footer from './index'
import renderer from 'react-test-renderer'

describe('Footer component', () => {
    test('should render correctly', () => {
        const component = renderer.create(
            <Footer />
        )
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})