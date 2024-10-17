<template>
    <div class="common-layout">
      <el-container class="layout-container">
        <el-header class="Header">
          <div class="logo">MyLogo</div>
            <nav class="nav-bar">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
        </el-header>
        <MainContainer class="Main"></MainContainer>
        <el-footer class="Footer">Footer</el-footer>
      </el-container>
    </div>
  </template>

  <script>
    import MainContainer from './components/MainContainer.vue'   
    export default {
      name: '',
      components:{
        MainContainer
      },
      setup() {
        
      },
    }

</script>
  
  <style scoped>
  * {
    margin: 0; /* 清除所有元素的 margin */
    padding: 0; /* 清除所有元素的 padding */
    box-sizing: border-box; /* 使所有元素的宽高包含内边距和边框 */
  }
  
  html, body {
    height: 100%; /* 确保 html 和 body 占满整个视口 */
  }
  
  .common-layout {
    height: 100vh; /* 让容器高度占满视口 */
    display: flex;
    flex-direction: column; /* 纵向排列子元素 */
  }
  
  .layout-container {
    flex: 1; /* 使容器占满剩余高度 */
    display: flex;
    flex-direction: column; /* 纵向排列 Header, Main, Footer */
  }
  
  .Header {
    background-color: #6EAFF1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 5vh;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
  }
  
  .nav-bar ul {
    list-style-type: none;
    display: flex;
    gap: 15px;
  }
  
  .nav-bar a {
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
  }
  
  .Main {
    flex: 1; /* 使 Main 占据剩余的高度 */
    background-color: #FFFFFF; /* 可以设置背景颜色以便观察效果 */
    margin: 2em;
  }
  
  .Footer {
    background-color: #375778; /* 设置 Footer 背景颜色 */
    height: 5vh; /* 设置 Footer 高度 */
    width: 100%; /* 设置宽度占满 */
  }
  </style>
  