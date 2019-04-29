const path = require('path')
const lineReader = require('line-reader')
const ultils = require('../src/ultils/ultils')

class Balance {
  constructor () {
    this.balance = []
    this.readFile()
  }

  buildBalance (data) {
    const obj = {
      description: data[1] ? ultils.onlyLetter(data[1]) : 0,
      classifier: data[0] ? ultils.removeDots(data[0]) : 0,
      openingBalance: data[2] ? parseFloat(ultils.removeLetter(data[2])) : 0,
      debit: data[3] ? parseFloat(data[3]) : data[3],
      credit: data[4] ? parseFloat(data[4]) : data[4],
      finalBalance: data[5]
        ? parseFloat(ultils.removeLetter(data[5]))
        : data[5],
      parent: data[6] ? parseFloat(data[6]) : null
    }
    this.balance.push(obj)
    // console.log(this.balance)
    // return this.balance
  }

  readFile () {
    lineReader.eachLine(path.resolve(__dirname, `../tmp/Level3.txt`), line => {
      const l = line.replace(/\t/g, '  ').split('  ')
      const newLine = l.filter(e => {
        return e !== ''
      })
      // console.log(newLine[0])
      if (
        newLine.length > 0 &&
        !newLine[0].match(/[a-zA-Z]+/g) & !newLine[0].match('-')
      ) {
        // console.log(newLine.length)
        if (newLine.length === 7) {
          this.buildBalance(ultils.clearInput(ultils.concatClassifier(newLine)))
        }
        this.buildBalance(ultils.clearInput(newLine))
      }
    })
  }
}

module.exports = new Balance()
