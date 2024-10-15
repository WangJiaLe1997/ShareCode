<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script setup>
import { useMainStore } from './stores/mainStore'
import { computed, onMounted, onUnmounted } from 'vue'

const store = useMainStore()

// 从 store 中获取状态
const message = computed(() => store.message)
const windowWidth = computed(() => store.windowWidth)
const windowHeight = computed(() => store.windowHeight)
const displayFontSize = computed(() => store.displayFontSize)

// 动态更新窗口尺寸
const updateWindowSize = () => {
  store.setWindowWidth(window.innerWidth)
  store.setWindowHeight(window.innerHeight)
}

// 当组件挂载时，获取当前窗口大小并监听变化
onMounted(() => {
  updateWindowSize()
  window.addEventListener('resize', updateWindowSize)
})

// 当组件卸载时移除监听器
onUnmounted(() => {
  window.removeEventListener('resize', updateWindowSize)
})

</script>

<style scoped>

</style>
