import Ad from '@/components/Ad'

describe('Ad', () => {
  it('has a created hook', () => {
    expect(typeof Ad.created).to.be.equal('function')
  })
})
