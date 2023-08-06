<script setup>
import { useFirstAndFollowStore } from '../stores/FirstAndFollowStore'

const store = useFirstAndFollowStore()
</script>

<template>
  <div class="max-w-screen-xl mx-auto py-6">
    <div class="text-center mb-6">
      <button
        type="button"
        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        @click="store.initRandProductionRules()"
      >
        Load a Random Set of Production Rules from Dataset
      </button>
    </div>

    <div v-show="store.productionRules.length" class="flex flex-col items-center">
      <h2 class="font-bold text-gray-700 underline underline-offset-4 mb-4">Production Rules:</h2>
      <ul class="flex flex-col items-center space-y-2">
        <li v-for="(productionRule, idx) in store.productionRules" :key="idx" class="text-gray-500">
          {{ store.formatProductionRule(productionRule) }}
        </li>
      </ul>
      <div class="mt-4 mb-6">
        <button
          type="button"
          class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          @click="store.calcFirst()"
        >
          Calculate First and Follow
        </button>
      </div>

      <div
        v-show="store.productionRules[0]?.first.length"
        class="relative overflow-x-auto w-1/3 mx-auto"
      >
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">Non-Terminals</th>
              <th scope="col" class="px-6 py-3">FIRST()</th>
              <!-- <th scope="col" class="px-6 py-3">FOLLOW()</th> -->
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              v-for="(productionRule, idx) in store.productionRules"
              :key="idx"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ productionRule.left }}
              </th>
              <td class="px-6 py-4">{{ `\{ ${productionRule.first.join(' , ')}\ }` }}</td>
              <!-- <td class="px-6 py-4">{{ `\{ ${productionRule.first.join(' , ')}\ }` }}</td> -->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
