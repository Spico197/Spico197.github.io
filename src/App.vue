<script setup>
import Bio from './components/Bio.vue'
import NewsList from './components/NewsList.vue'
import EducationList from './components/EducationList.vue'
import ExperienceList from './components/ExperienceList.vue'
import PublicationList from './components/PublicationList.vue'
import AwardList from './components/AwardList.vue'
import SoftwareList from './components/SoftwareList.vue'
import TalkList from './components/TalkList.vue'
import Footer from './components/Footer.vue'

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
    <ExperienceList />
    <PublicationList />
    <AwardList />
    <TalkList />
    <SoftwareList />
  </main>

  <Footer />
</template>

<style>

</style>
