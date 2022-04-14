/*
* This program ...
*
* @author  Abdul Basit
* @version 1.0
* @since   2022-02-02
*/

'use strict'

import promptSync from "prompt-sync"
const prompt = promptSync()
 
function asteristics (integer,  spacesNum = 0) {
  // Generate asteristics.
  const AST= '*'
  let outPut = ''

  for (let counter = 0; counter < spacesNum; counter++) {
    outPut = ' ' + outPut
  }

  if (integer === 1) {
    console.log(outPut + AST)
    console.log(outPut + AST)
  } else {
    for (let counter1 = 0; counter1 < integer; counter1++) {
      outPut = outPut + AST
    }

    console.log(outPut)

    asteristics(integer - 1, spacesNum + 1)

    console.log(outPut)
  }
}

const input: string = prompt('Insert an integer:')
const inputNum: number = parseInt(input)

if (isNaN(inputNum)) {
  console.log('This is not a number.')
} else {
  asteristics(inputNum)
}

console.log('Done.')
