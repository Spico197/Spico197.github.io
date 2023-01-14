<script setup>
import { computed } from 'vue'

import {convertNestedMarkdownContentToHtml} from '../utils'

import softwareJson from '../content/softwares.json'


const softwareArr = computed(() => {
  return convertNestedMarkdownContentToHtml(softwareJson)
})

</script>

<template>
  <h2>🕹️ Selected Softwares</h2>
  <p>Know me through my code 👀.</p>
  <div v-for="(softwareList, listIdx) in softwareArr" :key="listIdx">
    <h3>{{ softwareList.category }}</h3>
    <div v-for="(software, index) in softwareList.list" :key="index">
      <a :href="software.url">{{ software.name }}</a>
      <p v-html="software.content"></p>
    </div>
  </div>
</template>