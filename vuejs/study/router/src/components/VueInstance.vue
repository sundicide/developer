<template>
  <div>
    <h2>Vue 인스턴스</h2>
    <div>
      <div>
        <span>v-text: </span>
        <span v-text="vText" />
      </div>
      <div>
        <span>v-html: </span>
        <!-- vHTML의 경우 자식 속성(현재는 span 아래에 <h3>가 생긴다.)으로 들어간다.  따라서 display 스타일 속성이 필요하다 -->
        <span style="display: inline-block" v-html="vHtml" />
      </div>
      <div>
        <span>v-bind: </span>
        <!-- vHTML의 경우 자식 속성(현재는 span 아래에 <h3>가 생긴다.)으로 들어간다.  따라서 display 스타일 속성이 필요하다 -->
        <input v-bind:value="vBind" />
        <span>{{vBind}}</span>
      </div>
      <hr/>
      <div>
        <span>v-model: </span>
        <input v-model="vModel" />
        <span>{{vModel}}</span>
      </div>
      <div>
        <input type="checkbox" value="사과" v-model="fruits">사과,
        <input type="checkbox" value="키위" v-model="fruits">키위,
        <input type="checkbox" value="포도" v-model="fruits">포도,
        <input type="checkbox" value="수박" v-model="fruits">수박,
        <input type="checkbox" value="참외" v-model="fruits">참외
        <div>
          선택한 과일들: <span v-html="fruits" />
        </div>
      </div>
      <div>
        <select v-model="selected">
          <option disabled="disabled" selected>옵션을 선택하세요</option>
          <option v-for="option in vModelOption" v-bind:key="option.index"
            v-bind:value="option.value">
            {{option.text}}
          </option>
        </select>
        <span>Selected: {{ selected }}</span>
      </div>
      <div >
        예금액: <input type="text" v-model="amount" />
        <img v-if="amount < 0" src="@/assets/error.png"
                              title="마이너스는 허용하지 않습니다"
                              style="width: 15px; height: 15px; vertical-aling: middle" />
        <!-- == 로 해야 한다. ===로 하면 안된다 -->
        <img v-else-if="amount == 0" src="@/assets/logo.png"
                              style="width: 15px; height: 15px; vertical-aling: middle" />
        <span v-else>{{amount}} 입니다</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueInstance',
  data() {
    return {
      vText: '<h3>HTML 태그는 어찌 되나?</h3>',
      vHtml: '<h3>HTML 태그는 어찌 되나?</h3>',
      vBind: '단방향 바인딩',
      vModel: '양방향 바인딩',
      fruits: [],
      selected: 'A',
      vModelOption: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' },
      ],
      amount: 0,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
