module.exports = {
  removeDots (str) {
    if (str) return str.split('.').join('')
  },
  removeLetter (str) {
    if (str) if (str.match(/\d+/g)) return str.match(/\d+/g).join('')
  },
  clearInput (line) {
    const aux = []
    for (const e of line) {
      if (!(e.length === 1 && e.match(/[a-zA-Z]+/g))) aux.push(e)
    }
    return aux
  },
  onlyLetter (str) {
    if (str) {
      if (str.match(/[a-zA-Z]+/g)) return str.match(/[a-zA-Z]+/g).join(' ')
    }
  },
  concatClassifier (str) {
    var x = str.slice(1, str.length)
    var t = str.slice(2, str.length)

    var aux = `${str.shift()},${x.shift()}`
    t.unshift(aux)
    return t
  }
}
