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
  <div class="row items-align-center">
    <div class="col-f4">
      <h1>{{ metaContent.name }}</h1>
      <div v-html="description"></div>
    </div>
    <div>
      <img class="col" src="../assets/personal-photo.jpg" width="120" alt="personal photo">
    </div>
  </div>
  <div class="row flex-start">
    <div class="m-r1 m-tb-05" v-for="(contact, key) in metaContent.contact" :key="key">
      <i :class="contact.icon"></i>
      <a :href="contact.url" target="_blank">{{ key }}</a>
    </div>
  </div>
</template>