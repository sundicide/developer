<template>
  <el-container id="app" style="border: 10px solid #eee">
    <el-header height="200px">
      <router-link to="/">
        <img src="./assets/logo.png">
      </router-link>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse"
          @open="handleOpen" @close="handleClose"
          background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <!-- 하위 메뉴를 넣을 경우엔 el-submenu를 쓴다 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">Navigator One</span>
            </template>
          </el-submenu>
          <!-- 하위 메뉴를 안넣을 경우엔 el-menu-item를 쓴다 -->
          <router-link to="/directive">
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span>Directive</span>
            </el-menu-item>
          </router-link>
          <router-link to="/vueinstance">
            <el-menu-item index="3">
              <i class="el-icon-menu"></i>
              <span>VueInstance</span>
            </el-menu-item>
          </router-link>
          <router-link to="/slot">
            <el-menu-item index="4">
              <i class="el-icon-menu"></i>
              <span>Slot</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      // ESLint를 피하기 위한 코드 의미 없음
      return (`${key}, ${keyPath}`);
    },
    handleClose(key, keyPath) {
      // ESLint를 피하기 위한 코드 의미 없음
      return (`${key}, ${keyPath}`);
    },
  },
};
</script>

<style>
@import url("https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css");
.el-row {
  margin-bottom: 20px;
}
.el-col {
    border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
nav .grid-content {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  min-height: 36px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>
