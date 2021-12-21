import React from 'react'
import {configure,shallow} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Blog from "../Components/Blogs"
import store from '../app/store'

import {Provider} from "react-redux"
configure({adapter:new Adapter()})

describe('testing Blogs',()=>{
    it("renders blogs.js",()=>{
        const wrapper = shallow(<Provider  store={store}><Blog /></Provider>)

        const file = wrapper.find('h1')
        expect(file).toBeDefined()

    })
})