import Vue from 'vue'
import Article from '@/components/Article'

describe('Article', () => {
  it('sets the default data', () => {
    expect(typeof Article.data).to.be.equal('function')
  })
  it('correctly sets the title', () => {
    const defaultData = Article.data()
    expect(defaultData.title).to.be.equal('The Rebirth of YouTube Beauty Pioneer Michelle Phan')
  })
  it('correctly sets the subtitle', () => {
    const defaultData = Article.data()
    expect(defaultData.subtitle).to.be.equal('After 10 years and over a billion views, she stopped posting and “peaced out.”')
  })
  it('correctly sets the title when created', () => {
    const vm = new Vue(Article).$mount()
    expect(vm.title).to.be.equal('The Rebirth of YouTube Beauty Pioneer Michelle Phan')
  })
  it('has Ad as a component', () => {
    const vm = new Vue(Article).$mount()
    expect(typeof vm.$options.components.Ad).to.be.equal('object')
  })
  it('captures time spent on page', () => {

  })
  it('captures how far user has scrolled', () => {
    const vm = new Vue(Article).$mount()
  })
})
