import { timesSign } from "./constants"


export function checkCharacterLimit(expression) {
    if (expression.length >= 9) {
        throw 'Máximo de digitos Atingido'
    }
}

export function checkIfItIsAValidExpression(expression) {
    const regexExpressionFormat = RegExp(String.raw`^(\(-[\d\.]+%?\)|-?[\d\.]+%?)([\+-${timesSign}÷](\(-[\d\.]+%?\)?|[\d\.]+%?))+$`)
    const regexSinglePercentNumber = RegExp(/^(\(-[\d\.]+%?\)|-?[\d\.]+%)$/)
    const regexSinglePositiveNumber = RegExp(/^-?[\d\.]+$/)
    if (expression.match(regexSinglePositiveNumber)) throw 'Digite uma Operação'
    if (!expression.match(regexExpressionFormat)
        && !expression.match(regexSinglePercentNumber)) {
        throw 'Operação Invalida'
    }
}

export function checkIfThereIsNumber(expression) {
    if (expression.length === 0) {
      throw 'Insira um Número'
    }
  }