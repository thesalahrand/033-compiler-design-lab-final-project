<script setup>
import { useLREStore } from '../stores/lreStore'

const store = useLREStore()
</script>

<template>
  <form
    action=""
    class="w-full sm:w-[500px] rounded-lg bg-white p-6"
    @submit.prevent="store.calcResult()"
  >
    <legend class="text-gray-700 text-2xl text-center font-semibold mb-6">
      Left Recursion Eliminator (LRE)
    </legend>
    <h2 class="text-gray-500 font-medium mb-4">Enter Your Production Rule:</h2>
    <div class="mb-3 flex items-center">
      <div class="w-1/3">
        <label for="" class="font-medium text-gray-500">Left Side:</label>
      </div>
      <div class="w-2/3">
        <input
          type="text"
          class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Only one character (A-Z)"
          v-model="store.leftSide"
          pattern="^[A-Z]{1}$"
          @input="store.resetResult()"
          required
        />
      </div>
    </div>
    <div class="flex items-center">
      <div class="w-1/3">
        <label for="" class="font-medium text-gray-500">Right Side:</label>
      </div>
      <div class="w-2/3">
        <input
          type="text"
          class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Allowed characters (A-Z or a-z)"
          v-model="store.rightSide"
          pattern="^[A-Za-z\|]+$"
          @input="store.resetResult()"
          required
        />
      </div>
    </div>
    <button
      type="submit"
      class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-lg px-5 py-2.5 text-center mt-4"
    >
      Remove Left Recursion
    </button>
    <div
      v-html="store.result"
      v-show="store.result"
      class="mt-6 flex flex-col items-center text-center text-gray-700"
    ></div>
  </form>
</template>

<style scoped></style>
