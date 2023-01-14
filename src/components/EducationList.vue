<script setup>
import { computed } from 'vue'
import { convertMarkdownContentToHtml } from '../utils';

import eduJson from '../content/education.json'

const eduArr = computed(() => {
  return convertMarkdownContentToHtml(eduJson)
})
const idPrefix = "education"

</script>

<template>
  <h2>🎓 Education</h2>
  <div v-for="(education, index) in eduArr" :key="index">
    <label :for="`${idPrefix}-${index}`">{{ education.date }}</label>
    <div :id="`${idPrefix}-${index}`" v-html="education.content"></div>
  </div>
</template>