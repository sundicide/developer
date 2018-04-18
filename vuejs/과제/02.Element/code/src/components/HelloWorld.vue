<template>
  <el-container class="nms_comp_sty1_fit_item">
    <el-aside width="180px" class="greystyle">
      <el-input class="searchfield" suffix-icon="el-icon-search" placeholder="" v-model="aaa"></el-input>
      <el-tree :data="data" :props="defaultProps"></el-tree>
    </el-aside>
    <el-container>
      <el-header class="greystyle">
        <span style="width: 100%; height:100%; display: flex; align-items: center">
          Local
        </span>
      </el-header>
      <el-main class="greystyle">
        <el-row>
          <el-tabs v-model="activeName" class="elTabs">
            <el-tab-pane label="성능조회" name="performance" style="color: red"></el-tab-pane>
            <el-tab-pane label="이벤트/알람" name="eventalarm"></el-tab-pane>
            <el-tab-pane label="CPU" name="cpu"></el-tab-pane>
            <el-tab-pane label="서비스" name="service"></el-tab-pane>
          </el-tabs>
        </el-row>
        <el-row type="flex">
          <div v-for="values in menuValue"
            class="nms_comp_sty1_dataview_item" style="{['width:' + (100/xcount) + '%;min-width:171px;max-width:200px;height:100px;']}">
            <div v-bind:class="['nms_comp_sty1_wrap ' + (values.count > 0 ? 'nms_comp_sty1_red' : 'nms_comp_sty1_blue') +  (values.selected ? '_selected' : '')]">
                <div class="com_sty1_bx" >
                  <p class="num">{{values.count}}</p>
                  <div class="comp_tit">{{values.label}}</div>
                </div>
            </div>
          </div>
        </el-row>
        <el-row type="flex" align="middle" :gutter="2" style="margin-bottom: 10px;">
          <el-col :span="2">
            <el-checkbox>이벤트 발생</el-checkbox>
          </el-col>
          <el-col :span="2">
            <i class="el-icon-star-on">관심대상</i>
          </el-col>
          <el-col :span="16">
          </el-col>
          <el-col :span="3">
            <el-input
               placeholder=""
               suffix-icon="el-icon-search">
            </el-input>
          </el-col>
          <el-col :span="1">
            <el-button>Excel</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-table
                 :data="tableData"
                 :default-sort = "{prop: 'date', order: 'descending' }"
                 stripe
                 border
                 style="width: 100%; text-align: center;"
                 >
              <el-table-column
                 prop="status"
                 label="상태"
                 sortable
                 width="80">
                <template slot-scope="scope">
                  <div v-if="!scope.row.status" style="color:red">
                    <i class="fas fa-circle"></i>
                  </div>
                  <div v-else>
                    <i class="fas fa-circle"></i>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                 prop="deviceName"
                 label="장비명"
                 sortable
                 width="220">
              </el-table-column>
              <el-table-column
                 prop="ipAddress"
                 label="IP주소"
                 sortable
                 width="180">
              </el-table-column>
              <el-table-column
                 prop="companyName"
                 label="제조사"
                 sortable
                 width="180">
              </el-table-column>
              <el-table-column
                 prop="modelName"
                 label="모델"
                 sortable
                 width="180">
              </el-table-column>
              <el-table-column
                 prop="icmp"
                 label="ICMP(ms)"
                 sortable
                 width="95">
              </el-table-column>
              <el-table-column
                 prop="snmp"
                 label="SNMP(ms)"
                 sortable
                 width="95">
              </el-table-column>
              <el-table-column
                 prop="address"
                 label="CPU(%)"
                 sortable
                 width="120">
                <template slot-scope="scope">
                  <el-progress
                          :text-inside="true"
                          :stroke-width="18"
                          :percentage="scope.row.cpu">
                  </el-progress>
                </template>
              </el-table-column>
              <el-table-column
                 prop="address"
                 label="메모리(%)"
                 sortable
                 width="120">
                <template slot-scope="scope">
                  <el-progress
                          :text-inside="true"
                          :stroke-width="18"
                          :percentage="scope.row.memory">
                  </el-progress>
                </template>
              </el-table-column>
              <el-table-column
                 prop="temperature"
                 label="온도()"
                 sortable
                 width="90">
              </el-table-column>
              <el-table-column label="BPS" width="180">
                <el-table-column
                   prop="bpsIn"
                   label="IN"
                   sortable
                   width="90">
                </el-table-column>
                <el-table-column
                   prop="bpsOut"
                   label="OUT"
                   sortable
                   width="90">
                </el-table-column>
              </el-table-column>
              <el-table-column
                  prop= "favoriteTarget"
                  label="관심대상"
                  sortable
                  width="87">
              </el-table-column>
            </el-table>
          </el-col>
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
      menuValue: [{
        count: 5,
        selected: true,
        label: '종합'
      },{
        count: 3,
        selected: true,
        label: '장비 다운'
      },{
        count: 0,
        selected: true,
        label: '응답 시간'
      },{
        count: 0,
        selected: true,
        label: 'CPU'
      },{
        count: 0,
        selected: true,
        label: '메모리'
      },{
        count: 0,
        selected: true,
        label: '온도'
      },{
        count: 1,
        selected: true,
        label: '시스템 로그(SysLog)'
      },{
        count: 1,
        selected: true,
        label: '장비 알람(Trap)'
      },{
        count: 0,
        selected: true,
        label: '사용자 정의'
      }],
      tableData: [{
        status: false,
        deviceName: 'ProCurve Switch 2424M-33',
        ipAddress: '192.168.143.122',
        companyName: 'Alteon networks, Inc.',
        modelName: 'Catalyst 37xxStack',
        icmp: -1,
        snmp: 1,
        cpu: 0,
        memory: 0,
        temperature: '-',
        bpsIn: 2268264,
        bpsOut: 2280231,
        favoriteTarget: true,
      }, {
        status: true,
        deviceName: 'ProCurve Switch 2424M-33',
        ipAddress: '192.168.143.122',
        companyName: 'Alteon networks, Inc.',
        modelName: 'Catalyst 37xxStack',
        icmp: -1,
        snmp: 0,
        cpu: 0,
        memory: 0,
        temperature: '-',
        bpsIn: 2268264,
        bpsOut: 2280231,
        favoriteTarget: true,
      }, {
        status: true,
        deviceName: 'ProCurve Switch 2424M-33',
        ipAddress: '192.168.143.122',
        companyName: 'Alteon networks, Inc.',
        modelName: 'Catalyst 37xxStack',
        icmp: -1,
        snmp: -1,
        cpu: 0,
        memory: 0,
        temperature: '-',
        bpsIn: 2268264,
        bpsOut: 2280231,
        favoriteTarget: true,
      }, {
        status: false,
        deviceName: 'ProCurve Switch 2424M-33',
        ipAddress: '192.168.143.122',
        companyName: 'Alteon networks, Inc.',
        modelName: 'Catalyst 37xxStack',
        icmp: -1,
        snmp: 1,
        cpu: 31,
        memory: 0,
        temperature: '-',
        bpsIn: 2268264,
        bpsOut: 2280231,
        favoriteTarget: false,
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      activeName: 'performance',
      aaa: '123',
    }
  },
  methods: {
    handleNodeClick(data){
      console.log(data);
    },
    getHeaderCellStyle(row, rowIndex){
      return {
        width: '100%',
        textAlign: 'center',
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.greystyle{
  border: 1px solid #ebeef5;
  margin: 3px;
}
.el-header {
  text-align: left;
}
.el-row.button_row{
  height: 100px;
  margin-bottom: 20px;
}
.el-row .el-button{
  width: 100%;
  height: 100%;
}
.el-tabs__active-bar{
  background-color: red;
}
.el-tabs__item.is-active{
  color: red;
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
  justify-content: space-between;
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
