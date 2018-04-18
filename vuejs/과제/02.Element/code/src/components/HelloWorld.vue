<template>
  <el-container class="nms_comp_sty1_fit_item">
    <el-aside width="200px">
      <el-tree :data="data" :props="defaultProps"></el-tree>
    </el-aside>
    <el-container>
      <el-header>Local</el-header>
      <el-main>
        <el-row>
          <el-tabs>
            <el-tab-pane label="성능조회" name="performance">성능조회</el-tab-pane>
            <el-tab-pane label="이벤트/알람" name="eventalarm">이벤트/알람</el-tab-pane>
            <el-tab-pane label="CPU" name="cpu">CPU</el-tab-pane>
            <el-tab-pane label="서비스" name="service">서비스</el-tab-pane>
          </el-tabs>
        </el-row>
        <el-row :gutter="5" type="flex" class="button_row">
          <el-col :span="buttonSpan">
            <el-button size="medium" class="nms_comp_sty1_red">
              <div>5</div>
              <div>종합</div>
            </el-button>
          </el-col>
          <el-col :span="buttonSpan">
            <el-button class="nms_comp_sty1_red">
              <div>3</div>
              <div>장비 다운</div>
            </el-button>
          </el-col>
          <el-col :span="buttonSpan">
            <el-button class="nms_comp_sty1_blue">
              <div>0</div>
              <div>응답 시간</div>
            </el-button>
          </el-col>
          <el-col :span="buttonSpan">
            <el-button class="nms_comp_sty1_blue">
              <div>0</div>
              <div>CPU</div>
            </el-button>
          </el-col>
          <el-col :span="buttonSpan">
            <el-button class="nms_comp_sty1_blue">
              <div>0</div>
              <div>메모리</div>
            </el-button>
          </el-col>
          <el-col :span="buttonSpan">
            <el-button class="nms_comp_sty1_blue">
              <div>0</div>
              <div>온도</div>
            </el-button>
          </el-col>
          <el-col :span="buttonSpan">
            <el-button class="nms_comp_sty1_red">
              <div>1</div>
              <div>시스템 로그</div>
              <div>(SysLog)</div>
            </el-button>
          </el-col>
          <el-col :span="buttonSpan">
            <el-button class="nms_comp_sty1_red">
              <div>1</div>
              <div>장비 알람(Trap)</div>
            </el-button>
          </el-col>
          <el-col :span="buttonSpan">
            <el-button class="nms_comp_sty1_blue">
              <div>0</div>
              <div>사용자 정의</div>
            </el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="2">
            <el-checkbox>이벤트 발생</el-checkbox>
          </el-col>
          <el-col :span="2">
            <i class="el-icon-star-on">관심대상</i>
          </el-col>
          <el-col>
            <el-input
               placeholder=""
               suffix-icon="el-icon-search">
            </el-input>
          </el-col>
        </el-row>
        <el-row>
          테이블
        </el-row>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      buttonSpan: 4,
      data: [{
        label: 'Local',
        children: [{
          label: '테스트 그룹',
          children: [{
          }]
        }, {
          label: '10.* 관리 그룹',
          children: [{
          }]
        }, {
          label: '전체 장비 관리 그룹',
          children: [{
          }]
        }, {
          label: '테스트 그룹'
        }, {
          label: '1234',
          children: [{
          }]
        }, {
          label: 'test3',
          children: [{
          }]
        }, {
          label: '테스트 그룹1'
        }, {
          label: '테스트 그룹2'
        }, {
          label: '테스트'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick(data){
      console.log(data);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
  border: 1px solid grey;
  background-color: blue;
  text-align: left;
}
.el-row.button_row{
  height: 100px;
  justify-content: space-between;
  margin-bottom: 20px;
}
.el-row .el-button{
  width: 100%;
  height: 100%;
}

.nms_comp_sty1_fit_item {/*수정*/
	height: 100%;
}

.nms_comp_sty1_dataview_item {/*수정*/
	position: relative;
	float: left;
	padding: 2.5px;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}

.nms_comp_sty1_wrap .x-view-item-focused {/*수정*/
	outline-style: none;
	outline: 0px !important;
}

/* default comp_sty1 css */
.nms_comp_sty1_wrap {/*수정*/
	position: absolute;
	cursor: pointer;
	width: calc(100% - 4px);
	height: calc(100% - 6px);
	left: 2px;
	top: 2px;
	min-height: 90px;
}

.nms_comp_sty1_wrap .com_sty1_bx {/*수정*/
	width: 100px;
	height: 52px;
	position: absolute;
	text-align: center;
	margin: 2 0 0 0;
	padding: 0;
	left: calc(50% - 50px);
	top: calc(50% - 22px);
}

.nms_comp_sty1_wrap .com_sty1_bx p.num {/*수정*/
	font-size: 30px;
	font-weight: 600;
	font-family: 'NanumGothic', sans-serif;
	height: 30px;
	line-height: 30px;
	display: inherit;
	margin: 0px;
	padding-top: 0px !important;
}

.nms_comp_sty1_wrap .com_sty1_bx .comp_tit {/*수정*/
	font-size: 13px;
	font-family: 'NanumGothic', sans-serif;
	line-height: 14px;
	height: 14px;
	margin-top: 3px;
	font-weight: 600;
	color: #6c7278;
}

/*
.comp_sty1_blue {
	background-color: #f9fbfd;
	border: solid 1px #e7e9ee;
	border-top: none;
	box-shadow: inset 0px 4px 0 #618cc5;
}
*/
.nms_comp_sty1_blue { /* 20160902 *//*수정*/
	background-color: #f4f9fe;
	border: solid 1px #d3d7e3;
	border-top: none;
	box-shadow: inset 0px 4px 0 #618cc5;
}

.nms_comp_sty1_blue .com_sty1_bx p.num {/*수정*/
	color: #444e5d;
}

.nms_comp_sty1_blue .com_sty1_bx .comp_tit {/*수정*/
	color: #6c7278;
}

.nms_comp_sty1_blue:hover {/*수정*/
	background-color: #f0f6ff;
	border: solid 1px #3764a8;
	border-bottom: solid 1px #4070b8;
	border-top: none;
	box-shadow: inset 0px 4px 0 #3764a8, 0 1px 0 #e5e5e5;
}

.nms_comp_sty1_blue:hover .com_sty1_bx p.num {/*수정*/
	color: #000;
}

.nms_comp_sty1_blue:hover .com_sty1_bx .comp_tit {/*수정*/
	color: #244f90;
}

.nms_comp_sty1_blue_selected {/*수정*/
	background-color: #f0f6ff;
	border: solid 1px #3764a8;
	border-bottom: solid 1px #4070b8;
	border-top: none;
	box-shadow: inset 0px 4px 0 #3764a8, 0 1px 0 #e5e5e5;
}

.nms_comp_sty1_blue_selected .com_sty1_bx p.num {/*수정*/
	color: #000;
}

.nms_comp_sty1_blue_selected .com_sty1_bx .comp_tit {/*수정*/
	color: #244f90;
}

/*수정*//*
.nms_comp_sty1_red {
	background-color: #fff9f9;
	border: solid 1px #f0e6e6;
	border-top: none;
	box-shadow: inset 0px 4px 0 #d65154;
}
*/
.nms_comp_sty1_red { /* 20160902 *//*수정*/
	background-color: #fff6f6;
	border: solid 1px #eecccc;
	border-top: none;
	box-shadow: inset 0px 4px 0 #d65154;
}

.nms_comp_sty1_red .com_sty1_bx p.num {/*수정*/
	color: #514542;
}

.nms_comp_sty1_red .com_sty1_bx .comp_tit {/*수정*/
	color: #7a7a7a;
}

.nms_comp_sty1_red:hover {/*수정*/
	background-color: #fef1f1;
	border: solid 1px #c60101;
	border-bottom: solid 1px #dc8293;
	border-top: none;
	box-shadow: inset 0px 4px 0 #c60101, 0 1px 0 #e5e5e5;
}

.nms_comp_sty1_red:hover .com_sty1_bx p.num {/*수정*/
	color: #000;
}

.nms_comp_sty1_red:hover .com_sty1_bx .comp_tit {/*수정*/
	color: #d0001d;
}

.nms_comp_sty1_red_selected {/*수정*/
	background-color: #fef1f1;
	border: solid 1px #c60101;
	border-bottom: solid 1px #dc8293;
	border-top: none;
	box-shadow: inset 0px 4px 0 #c60101, 0 1px 0 #e5e5e5;
}

.nms_comp_sty1_red_selected .com_sty1_bx p.num {/*수정*/
	color: #000;
}

.nms_comp_sty1_red_selected .com_sty1_bx .comp_tit {/*수정*/
	color: #d0001d;
}
</style>
