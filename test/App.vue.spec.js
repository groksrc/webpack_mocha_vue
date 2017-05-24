import { chai, expect } from 'chai'
import Vue from 'vue'
import App from '../src/App.vue'

describe('App Tests', () => {
  it('is an app', () => {
    const Ctor = Vue.extend(App)
    const vm = new Ctor().$mount()
    expect(Ctor).to.not.be.null
  })
})
