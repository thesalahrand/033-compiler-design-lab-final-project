import { reactive } from 'vue'
import { defineStore } from 'pinia'
import firstAndFollowProductionRules from '@/data/first-and-follow-production-rules'

export const useFirstAndFollowStore = defineStore('firstAndFollow', () => {
  const productionRules = reactive([])

  const initRandProductionRules = () => {
    const newProductionRules = firstAndFollowProductionRules[
      Math.floor(Math.random() * firstAndFollowProductionRules.length)
    ].map((el) => ({
      ...el,
      first: [],
      follow: []
    }))

    productionRules.splice(0, productionRules.length, ...newProductionRules)
  }

  const formatProductionRule = (productionRule) => {
    const left = productionRule.left
    const right = productionRule.right.map((el) => el.join('')).join(' | ')
    return `${left} -> ${right}`
  }

  const getFirstByNonTerminal = (nonTerminal) => {
    return productionRules.find((el) => el.left == nonTerminal).first
  }

  const calcFirst = () => {
    const productionRuleClone = [...productionRules]

    productionRuleClone.reverse().forEach((productionRule, idx) => {
      const validFirstDetectionArr = []
      validFirstDetectionArr.push(...productionRule.right)

      for (let idx = 0; idx < validFirstDetectionArr.length; idx++) {
        if (
          validFirstDetectionArr[idx]?.[0]?.length &&
          validFirstDetectionArr[idx][0].charCodeAt(0) >= 65 &&
          validFirstDetectionArr[idx][0].charCodeAt(0) <= 90
        ) {
          const firstsOfThisNonTerminal = getFirstByNonTerminal(validFirstDetectionArr[idx][0])

          firstsOfThisNonTerminal.forEach((firstOfThisNonTerminal) => {
            const validFirstDetectionItem = [...validFirstDetectionArr[idx]]
            if (firstOfThisNonTerminal == 'ε') {
              validFirstDetectionArr.push(validFirstDetectionItem.splice(1))
            } else {
              validFirstDetectionArr.push([
                firstOfThisNonTerminal,
                ...validFirstDetectionItem.splice(1)
              ])
            }
          })

          validFirstDetectionArr.splice(idx, 1)
          console.log(validFirstDetectionArr)

          idx = -1
        }
      }

      const first = [...new Set(validFirstDetectionArr.map((el) => el[0] || 'ε'))]
      productionRules[productionRules.length - idx - 1].first.splice(
        0,
        productionRules[productionRules.length - idx - 1].length
      )
      productionRules[productionRules.length - idx - 1].first.push(...first)
    })
  }

  return { productionRules, initRandProductionRules, formatProductionRule, calcFirst }
})
