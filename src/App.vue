<script setup>
import Bio from './components/Bio.vue'
import NewsList from './components/NewsList.vue'
import EducationList from './components/EducationList.vue'
import PublicationList from './components/PublicationList.vue'
import AwardList from './components/AwardList.vue'
import SoftwareList from './components/SoftwareList.vue'
import TalkList from './components/TalkList.vue'

</script>

<template>
  <header>
    <Bio />
    <hr>
  </header>

  <main>
    <NewsList />
    <hr>
    <EducationList />
    <PublicationList />
    <AwardList />
    <TalkList />
    <SoftwareList />
  </main>

  <footer>
    <hr>
    <p>
      Links:
      <a href="https://chen-wenliang.github.io/" target="_blank">Wenliang Chen</a>
      | <a href="https://jacob-zhou.github.io/" target="_blank">Houquan Zhou</a>
      | <a href="https://yzhangcs.github.io/" target="_blank">Yu Zhang</a>
    </p>
    <p>
      Made by Tong Zhu w/ ❤️
    </p>
  </footer>
</template>

<style>

</style>
