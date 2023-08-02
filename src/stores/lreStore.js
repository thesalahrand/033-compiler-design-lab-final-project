import { defineStore } from 'pinia'

export const useLREStore = defineStore('lre', {
  state() {
    return {
      leftSide: '',
      rightSide: '',
      result: '',
    }
  },

  actions: {
    needToRemove() {
      return (
        this.rightSideArr.findIndex((el) => el.startsWith(this.leftSide)) != -1
      )
    },

    canBeRemoved() {
      return (
        this.rightSideArr.length !=
        this.rightSideArr.reduce((acc, el) => {
          return el.startsWith(this.leftSide) ? acc + 1 : acc
        }, 0)
      )
    },

    getFirstLineResult() {
      return this.rightSideArr
        .filter((el) => !el.startsWith(this.leftSide))
        .map((el) => `${el}${this.leftSide}′`)
    },

    getSecondLineResult() {
      return this.rightSideArr
        .filter((el) => el.startsWith(this.leftSide))
        .map((el) => `${el.substring(1)}${this.leftSide}′`)
        .concat(['∈'])
    },

    calcResult() {
      if (!this.needToRemove()) this.result = 'Left recursion not needed'
      else if (!this.canBeRemoved())
        this.result = "Can't eliminate left recursion"
      else
        this.result = `${this.leftSide} → ${this.getFirstLineResult().join(
          ' | '
        )}<br/>${this.leftSide}′ → ${this.getSecondLineResult().join(' | ')}`
    },

    resetResult() {
      this.result = ''
    },
  },

  getters: {
    rightSideArr() {
      return this.rightSide
        .split('|')
        .map((el) => el.trim())
        .filter((el) => Boolean(el))
    },
  },
})
