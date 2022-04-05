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
test('addX', expect(addX(1, 3)).toBe(4))
