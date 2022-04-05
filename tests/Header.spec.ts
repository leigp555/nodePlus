// import { mount } from '@vue/test-utils'
// // @ts-ignore
// import Header from '../src/components/Header.vue'
//
// describe('Header.vue', () => {
//   it('renders', () => {
//     const wrapper = mount(Header)
//     expect(wrapper.html()).toContain('Vite2.x + Vue3.x + TypeScript Starter')
//   })
// })
const addX = (a: number, b: number): number => {
  return a + b
}
// @ts-ignore
test('adds 1 + 2 to equal 3', () => {
  expect(addX(1, 2)).toBe(3)
})
