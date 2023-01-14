<script setup>
import { computed } from 'vue'
import { convertNestedMarkdownContentToHtml } from '../utils';

import awardJson from '../content/awards.json'

const awardArr = computed(() => {
  return convertNestedMarkdownContentToHtml(awardJson)
})
const idPrefix = "award"

</script>

<template>
  <h2>🏆 Awards & Honors</h2>
  <div v-for="(awardList, listIdx) in awardArr" :key="listIdx">
    <h3>{{ awardList.category }}</h3>
    <div v-for="(award, index) in awardList.list">
      <label :for="`${idPrefix}-${listIdx}-${index}`">{{ award.date }}</label>
      <div :id="`${idPrefix}-${listIdx}-${index}`" v-html="award.content"></div>
    </div>
  </div>
</template>