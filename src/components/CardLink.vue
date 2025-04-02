<script setup>
const props = defineProps({
  cards: {
    type: Array,
    required: true,
  },
})

const handleCardClick = (card) => {
  if (card.link === '') {
    return
  }
  if (isEmail(card.link)) {
    window.open(`mailto:${card.link}`, '_blank', 'noopener,noreferrer')
  } else {
    window.open(card.link, '_blank', 'noopener,noreferrer')
  }
}

const isEmail = (link) => {
  return typeof link === 'string' && link.includes('@')
}
</script>

<template>
  <div class="card-link">
    <div v-for="card in props.cards" :key="card.id" class="card">
      <div class="image-container" @click.prevent="handleCardClick(card)">
        <img :src="card.img" :alt="card.title" class="card-image" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-link {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.image-container {
  cursor: pointer;
  width: 25px;
}

.card-image {
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}
</style>
