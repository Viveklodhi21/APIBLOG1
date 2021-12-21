import React from 'react'
import {configure,shallow} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {Provider} from 'react-redux'
import store from "../app/store"
import {GoogleLogin} from "react-google-login"
import Homepage from "../Components/Homepage"
configure({adapter:new Adapter()})

describe('render home page', () => {
    let isSignedIn = false;
    it('renders text books!',()=>{
        const wrapper = shallow(<Provider store={store}><Homepage isSignedIn={true} /></Provider>);
       const text = wrapper.find(<h2>BookS!</h2>)
        expect(text).toBeDefined();
        
    })
})