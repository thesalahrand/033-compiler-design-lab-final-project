import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import leftRecursionProductionRules from '../data/left-recursion-production-rules'

export const useEliminateLeftRecursionStore = defineStore('eliminateLeftRecursion', () => {
  const productionRule = reactive({})
  const productionRuleAfterElimination = ref('')

  const initRandProductionRule = () => {
    const randProductionRule =
      leftRecursionProductionRules[Math.floor(Math.random() * leftRecursionProductionRules.length)]

    productionRule.left = randProductionRule.left
    productionRule.right = randProductionRule.right
  }

  const getFirstLineResult = () => {
    return productionRule.right
      .filter((el) => el[0] != productionRule.left)
      .map((el) => `${el.join('')}${productionRule.left}′`)
  }

  const getSecondLineResult = () => {
    return productionRule.right
      .filter((el) => el[0] == productionRule.left)
      .map((el) => `${el.slice(1).join('')}${productionRule.left}′`)
      .concat(['∈'])
  }

  const reset = () => {
    productionRuleAfterElimination.value = ''
  }

  const eliminate = () => {
    productionRuleAfterElimination.value = `${productionRule.left} → ${getFirstLineResult().join(
      ' | '
    )}<br/>${productionRule.left}′ → ${getSecondLineResult().join(' | ')}`
  }

  return {
    productionRule,
    productionRuleAfterElimination,
    initRandProductionRule,
    reset,
    eliminate
  }
})
