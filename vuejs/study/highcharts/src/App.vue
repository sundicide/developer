<template>
  <div id="app">
    <img src="./assets/logo.png">
    <AreaChart/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import AreaChart from '@/components/AreaChart'

export default {
  name: 'App',
  components: {
    AreaChart,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
