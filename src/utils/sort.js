import { recipeKey, recipeKeyWithDelim } from '../constants'

const sortBoards = data => {
  return data.reduce((result, n) => {
    if (n.name.toLowerCase().includes(recipeKey)) {
      result[n.id] = {
        name: n.name.toLowerCase().replace(recipeKeyWithDelim, ''),
        id: n.id,
        pins: []
      }
    }

    return result
  }, {})
}

export { sortBoards }
