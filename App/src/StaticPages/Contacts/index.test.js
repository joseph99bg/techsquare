import React from 'react'
import Contacts from './index'
import renderer from 'react-test-renderer'

describe('Contacts component', () => {
    test('should render correctly', () => {
        const component = renderer.create(
            <Contacts />
        )
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})