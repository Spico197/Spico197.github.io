<script setup>
import { computed } from 'vue'
import { convertMarkdownContentToHtml } from '../utils';

import newsJson from '../content/news.json'

const newsArr = computed(() => {
  return convertMarkdownContentToHtml(newsJson)
})

</script>

<template>
  <h2>📰 News</h2>
  <div v-for="(news, index) in newsArr" :key="index">
    <label :for="'news-' + index">{{ news.date }}</label>
    <div :id="'news-' + index" v-html="news.content"></div>
  </div>
</template>