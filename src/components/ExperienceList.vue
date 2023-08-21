<script setup>
import { computed } from 'vue'
import { convertMarkdownContentToHtml } from '../utils';

import eduJson from '../content/experience.json'

const eduArr = computed(() => {
  return convertMarkdownContentToHtml(eduJson)
})
const idPrefix = "experience"

</script>

<template>
  <h2>🔬 Experience</h2>
  <div class="row items-align-top" v-for="(experience, index) in eduArr" :key="index">
    <label class="col" :for="`${idPrefix}-${index}`">{{ experience.date }}</label>
    <div class="col flex-start tight-list" :id="`${idPrefix}-${index}`" v-html="experience.content"></div>
  </div>
</template>