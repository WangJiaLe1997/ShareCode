import { defineStore } from 'pinia'

// 定义主 Store
export const useMainStore = defineStore('mainStore', {
  state: () => ({
    message: 'Welcome to ShareCode!',
    userName: null,
    theme: 'light', // 默认主题
    fontSize: '14px', // 默认字体
    windowHeight: '', // 屏幕高度
    windowWidth: '', // 屏幕宽度
  }),
  actions: {
    setMessage(newMessage) {
      this.message = newMessage
    },
    setUserName(newUserName) {
      this.userName = newUserName
    },
    setFontSize(newFontSize) {
      this.fontSize = newFontSize
    },
    setWindowHeight(newHeight) {
      this.windowHeight = newHeight
    },
    setWindowWidth(newWidth) {
      this.windowWidth = newWidth
    },
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
    }
  },
  getters: {
    isLoggedIn: (state) => !!state.userName,
    displayFontSize: (state) => {
      return `${state.fontSize}`; // 可以根据需要格式化字体大小
    },
    // 可以添加其他派生状态
  },
})
