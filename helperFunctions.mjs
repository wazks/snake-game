const randomNum = range => Math.floor(Math.random() * range)
const randomArrEl = arr => arr[randomNum(arr.length)]
const convertCoordsToId = coords => coords[0] + coords[1] * numOfColumns
const addCoords = (coords1, coords2) => [
  coords1[0] + coords2[0],
  coords1[1] + coords2[1],
]

export { randomArrEl, convertCoordsToId, addCoords }
