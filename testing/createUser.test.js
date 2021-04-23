const { test, expect } = require("@jest/globals")

localStorage.setItem('john', 'sijtsma');


test('testing local storage', () => {
    expect(localStorage.getItem('john')).toBe('sijtsma')
})

