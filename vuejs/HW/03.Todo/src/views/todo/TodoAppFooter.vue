<template>
  <div :class="$style.div">
    <el-button-group>
      <el-button type="primary">전체</el-button>
      <el-button type="primary">남은 일</el-button>
      <el-button type="primary">완료된 일</el-button>
    </el-button-group>
    <el-button type="primary">완료된 일 모두 삭제</el-button>
  </div>
</template>

<script>
export default {
  name: 'TodoAppHeader',
  data () {
    return {
      inputValue: ''
    }
  }
}
</script>

<style module>
.div { display: flex; justify-content: space-between; }
</style>
