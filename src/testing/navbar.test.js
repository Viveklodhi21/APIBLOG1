import React from 'react'
import {configure,shallow} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {Provider} from 'react-redux'
import store from "../app/store"
import { GoogleLogout} from "react-google-login"
import Navbar from "../Components/Navbar"
configure({adapter:new Adapter()})


describe('render navbar', ()=>{
    let isSigendIn = false
    it('hiiiiiiiiiiiiii',()=>{
        // const inputValue = "tech"
        const wrapper = shallow(<Provider store={store}><Navbar /></Provider>)
        const input = wrapper.find(<input/>)
        expect(input).toBeDefined()
      
    })
    it('hiiiiiiiii22222',()=>{
        const wrapper = shallow(<Provider store={store}><Navbar /></Provider>)
        const btn = wrapper.find(<button>Search</button>)
        expect(btn).toBeDefined()
        expect(btn).toBeTruthy()
      
    })
    it('hiiiiiii33333333',()=>{
        const wrapper = shallow(<Provider store={store}><Navbar /></Provider>)
        const text = wrapper.find("user not available")
        expect(text).toBeDefined()
        expect(text).toBeTruthy()

        
    })
    
    it('hiiiiiii4444444444',()=>{
        const wrapper = shallow(<Provider store={store}><Navbar /></Provider>)
        const text = wrapper.find(<GoogleLogout/>)
        expect(text).toBeDefined()
        expect(text).toBeTruthy()
        
    })
    
    
})