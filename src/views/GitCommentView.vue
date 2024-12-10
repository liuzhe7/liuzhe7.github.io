<template>
  <git-comment
    :id="options.uuid"
    :owner="options.owner"
    :repo="options.repo"
    :client_id="options.clientID"
    :client_secret="options.clientSecret"
  />
</template>

<script setup>
import GitComment from '@/components/GitComment.vue'

const options = {
  clientID: 'Ov23liVNxMeuxDLLwaxy',
  clientSecret: '5eaec3535debab3fbd18dc0522aff3892d3e041f',
  owner: 'liuzhe7',
  repo: 'comments',
  uuid: 'mock-uuid',
}
</script>
