<script setup>
import Bio from './components/Bio.vue'
import NewsList from './components/NewsList.vue'
import EducationList from './components/EducationList.vue'
import AwardList from './components/AwardList.vue'
import SoftwareList from './components/SoftwareList.vue'
</script>

<template>
  <header>
    <Bio />
  </header>

  <hr>

  <main>
    <NewsList />
    <hr>
    <EducationList />
    <AwardList />
    <SoftwareList />
  </main>

  <hr>

  <footer>
    Made by Tong Zhu w/ ❤️
  </footer>
</template>

<style>

</style>
