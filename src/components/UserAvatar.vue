<script setup>
const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="user-avatar">
    <div class="image-container">
      <img v-if="props.src" :src="props.src" :alt="props.alt" class="avatar-img" />
    </div>
    <div class="name-container">
      <span v-if="props.name" class="avatar-name">{{ props.name }}</span>
    </div>
    <div class="description-container">
      <p v-if="props.description" class="avatar-description">{{ props.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.user-avatar {
  width: 80vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
}

.image-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-img {
  max-width: 25%;
  max-height: 100%;
  border-radius: 1rem;
  object-fit: cover;

  @media (max-width: 768px) {
    max-width: 50%;
  }
}

.name-container {
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.description-container {
  flex: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
