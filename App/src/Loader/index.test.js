import React from 'react'
import Loader from './index'
import renderer from 'react-test-renderer'

describe('Loader component', () => {
    test('should render correctly', () => {
        const component = renderer.create(
            <Loader />
        )
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})