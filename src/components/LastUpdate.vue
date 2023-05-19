<script setup>
import { ref, onMounted, defineExpose } from 'vue'
import Settings from '../settings.json'

const lastUpdate = ref('')

onMounted(getLatestCommitDateTime)


async function getLatestCommitDateTime() {
  try {
    const { owner, repo, branch } = Settings

    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/branches/${branch}`
    const response = await fetch(apiUrl)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    
    const branchData = await response.json()
    const commit = branchData.commit.commit
    const commitDate = new Date(commit.committer.date)
    const formattedDate = commitDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    lastUpdate.value = formattedDate
    console.log(formattedDate)
  } catch (error) {
    console.error('Error:', error.message)
  }
}

defineExpose({lastUpdate})

</script>

<template>
  <span>Last Update: {{ lastUpdate }}</span>
</template>
