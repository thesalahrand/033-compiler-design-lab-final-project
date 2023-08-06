<script setup>
import { useEliminateLeftRecursionStore } from '../stores/EliminateLeftRecursion'

const store = useEliminateLeftRecursionStore()
</script>

<template>
  <div class="max-w-screen-xl mx-auto py-6">
    <div class="text-center mb-6">
      <button
        type="button"
        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        @click="store.reset(), store.initRandProductionRule()"
      >
        Load a Random Production Rule from Dataset
      </button>
    </div>

    <div v-if="Object.keys(store.productionRule).length > 0" class="flex flex-col items-center">
      <h2 class="font-bold text-gray-700 underline underline-offset-4 mb-4">Production Rule:</h2>
      <p class="text-gray-500">
        {{
          `${store.productionRule.left} -> ${store.productionRule.right
            .map((el) => el.join(''))
            .join(' | ')}`
        }}
      </p>
      <div class="mt-4 mb-6">
        <button
          type="button"
          class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          @click="store.eliminate()"
        >
          Eliminate Left Recursion
        </button>
      </div>
      <template v-if="store.productionRuleAfterElimination">
        <h2 class="font-bold text-gray-700 underline underline-offset-4 mb-4">
          After Eliminating Left Recursion:
        </h2>
        <p class="text-gray-500 text-center" v-html="store.productionRuleAfterElimination"></p>
      </template>
    </div>
  </div>
</template>

<style scoped></style>
