<script setup>
import { ref, computed } from 'vue'
import { convertMarkdownToHtml } from '../utils'
import metaJson from '../content/meta.json'

const metaContent = ref(metaJson)
const description = computed(() => {
  return convertMarkdownToHtml(metaContent.value.description)
})
</script>

<template>
  <h1>{{ metaContent.name }}</h1>
  <div v-html="description"></div>
  <img src="../assets/personal-photo.jpg" width="150" alt="personal photo">
  <div v-for="(contact, key) in metaContent.contact" :key="key">
    <i :class="contact.icon"></i>
    <a :href="contact.url" target="_blank">{{ key }}</a>
  </div>
</template>