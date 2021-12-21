import React from 'react'
import {configure,shallow} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {Provider} from 'react-redux'
import store from "../src/app/store"
import Navbar from '../src/Components/Navbar'
// import Blogs from './Components/Blogs';

// import Homepage from "../Components/Homepage"
configure({adapter:new Adapter()})


describe('render components',()=>{
    it('should render Navbar',()=>{
        const wrapper = shallow(<Provider store={store} ><Navbar /></Provider>);
        expect(wrapper.find(<Navbar/>)).toBeDefined()
    })

})