import React from 'react'
import About from './index'
import renderer from 'react-test-renderer'

describe('About component', () => {
    test('should render correctly', () => {
        const component = renderer.create(
            <About />
        )
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})