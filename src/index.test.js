import uuid from "./index"

const REGEXP = /[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/

describe("uuid", () => {
  for (let i = 100; !!i; i--) {
    const x = uuid()
    test(`${ i } - ${ x }`, () => expect(x).toMatch(REGEXP))
  }
})
