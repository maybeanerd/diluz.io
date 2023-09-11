<template>
  <div>
    <h4 class="text-sm">
      {{ props.title }}
    </h4>
    <div class="text-xs ml-2">
      <p v-if="typeof props.value === 'string'">
        {{ props.value }}
      </p>
      <ul v-else>
        <li v-for="(fact, index) in props.value" :key="index">
          {{ fact }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string; value: string | Array<string>
}>();
</script>
