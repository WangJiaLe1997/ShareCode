<template>
  <div>
    <el-row>
      <el-col :span="6" class="card">

      </el-col>
    </el-row>
  </div>

</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
export default {
  name: 'MyComponent', // 可以给组件起个名字
  setup() {
    console.log('1-开始创建组件-setup')
    const data = reactive({})
    onBeforeMount(() => {
      console.log('2.组件挂载页面之前执行----onBeforeMount')
    })
    onMounted(() => {
      console.log('3.-组件挂载到页面之后执行-------onMounted')
    })
    return {
      ...toRefs(data),
    }
  },
}
</script>

<style scoped >
.card {
  display: flex;
  flex-direction:row;
  background-color: #466d8f; /* 浅色背景 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 阴影 */
  border-radius: 8px; /* 圆角 */
  padding: 20px; /* 内边距 */
  transition: transform 0.3s, box-shadow 0.3s; /* 过渡效果 */
  min-width: 200px; /* 最小宽度 */
  min-height: 200px; /* 最小高度 */

}

.card:hover {
  transform: scale(1.01); /* 鼠标悬浮时放大 */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* 增强阴影 */
}
</style>
