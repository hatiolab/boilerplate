declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    interface Matchers<R, T = {}> {
      toBeArrayOfUniqueItems(): void
    }
  }
}

function toBeArrayOfUniqueItems(received: any[]) {
  const pass = new Set(received).size === received.length

  return {
    pass,
    message: () => {
      return pass
        ? 'Expected the array to include duplicate items, but all items were unique'
        : 'Expected the array to contain only unique items, but duplicates were found'
    }
  }
}

expect.extend({
  toBeArrayOfUniqueItems
})

export {}
