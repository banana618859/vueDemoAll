<template>
  <div class="hello" @click="helloClick">
    <div class="proTree">
      <!--目录树组件-->
      <ProjectTree></ProjectTree>
    </div>

    <div style="display: none;">
      <el-button type="primary" @click="testWX">testWX</el-button>
      <input @focus="iptFocus" @click="iptClick" />
      <div class="block" style="border:1px solid red;">
        <div class="block">
          <span class="demonstration">默认 Hover 指示器触发12</span>
          <el-carousel height="150px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="small">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <p>使用 scoped slot</p>

      </div>
      <div style="border:1px solid; margin:20px;padding:20px;">
        <span class="demonstration">多选</span>
        <el-cascader placeholder="试试搜索：指南" v-model="moreSelectValue" @change="cascaderChange" :options="options"
          :props="{ multiple: true }"></el-cascader>
      </div>
      <el-button type="success" @click="addTab">addTab</el-button>
      <div style="width:500px; float:right;">
        <el-tabs v-model="activeName" @tab-click="handleClickTab">

          <el-tab-pane v-for="(item,index) in tabArr" :key="item.id" :label="item.name" :name="item.id">
            <span slot="label">{{item.title}}</span>
            {{item.content}}
          </el-tab-pane>
        </el-tabs>
      </div>

      <div v-for="(item,index) in allTables" :key="index">
        <h3>table--{{index}}</h3>
        <el-table :data="item" style="width: 100%">
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
      </div>
      <hr>
      <h3>级联回显</h3>
      <div class="block">
        <span class="demonstration">默认 click 触发子菜单</span>
        <el-cascader v-model="seValue" :options="options" @change="handleChange"></el-cascader>
      </div>
      <el-button type="success" @click="getSelect">回显选择</el-button>

      <h3>{{ msg }}</h3>
      <div>利用v-for生成一个列表：
        <ul>
          <li v-for="(item,index) in arr" :key=index :ref='item'>{{item}}</li>
        </ul>
      </div>

      <div>
        <canvasDemo></canvasDemo>
      </div>
      <hr>
      <h3>Table-group</h3>
      <div style="border:2px solid red;">
        <el-table :data="groupTableData" style="width: 100%;margin-bottom: 20px;" row-key="id" border default-expand-all
          @cell-click="cellClickFun" :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
          <el-table-column prop="id" label="ID" sortable width="90">
          </el-table-column>
          <el-table-column prop="date" label="组名" sortable width="180">
            <template slot-scope="scope">
              <el-input v-if="scope.row.editable" v-model="scope.row.date" @focus="inputFocus(scope.row)"
                @blur="inputBlur(scope.row)" @change="inputChange(scope.row)">
              </el-input>
              <span v-else>{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="姓名" sortable width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
      </div>
      <div>
        sdfasdf222
        <el-row class="block-col-2">

          <el-col :span="12">
            <span class="demonstration">click 激活</span>
            <el-dropdown @command="handleCommand" trigger="click">
              <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">

                <el-dropdown-item v-for="item in menuData" :key="item.id" icon="el-icon-plus" :command="item.id">
                  {{item.name}} <i class="el-icon-close icon-active" @click="delMenu(item)"></i>
                </el-dropdown-item>

                <!-- <el-dropdown-item icon="el-icon-check" command="b">双皮奶 <i class="el-icon-close"></i></el-dropdown-item>
                  <el-dropdown-item icon="el-icon-circle-check" command="c">蚵仔煎 <i class="el-icon-close"></i></el-dropdown-item> -->
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </div>

      <div>
        <template>
          <el-table ref="multipleTable" :data="tableDataq" :current-row-key="currentRow"
            :highlight-current-row='highlightCurrent' :row-class-name="tableRowClassName" tooltip-effect="dark"
            style="width: 100%" @select="tableselect" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column label="日期" width="120">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址" show-overflow-tooltip>
            </el-table-column>
          </el-table>
          <div style="margin-top: 20px">
            <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
            <el-button @click="toggleSelection()">取消选择</el-button>
          </div>
        </template>
      </div>


      <p>{{ msg }}组件124</p>
      <router-view></router-view>
      <div class="cursorType" style="position:absolute;right:15px;top:15px; border:1px solid red;width:100px;">
        <span>鼠标的形状：</span>
        <p style="cursor:auto">1auto</p>
        <p style="cursor:default">default</p>
        <p style="cursor:none">none</p>
        <p style="cursor:context-menu">context-menu</p>
        <p style="cursor:help">help</p>

        <p style="cursor:pointer">6pointer</p>
        <p style="cursor:progress">progress</p>
        <p style="cursor:wait">wait</p>
        <p style="cursor:cell">cell</p>
        <p style="cursor:crosshair">crosshair</p>

        <p style="cursor:text">11text</p>
        <p style="cursor:vertical-text">vertical-text</p>
        <p style="cursor:alias">alias</p>
        <p style="cursor:copy">copy</p>
        <p style="cursor:move">move</p>

        <p style="cursor:no-drop">16no-drop</p>
        <p style="cursor:not-allowed">not-allowed</p>
        <p style="cursor:e-resize">e-resize</p>
        <p style="cursor:s-resize">s-resize</p>
        <p style="cursor:w-resize">w-resize</p>
        <p style="cursor:n-resize">n-resize</p>

        <p style="cursor:ne-resize">21 ne-resize</p>
        <p style="cursor:nw-resize">nw-resize</p>
        <p style="cursor:se-resize">se-resize</p>
        <p style="cursor:sw-resize">sw-resize</p>

        <p style="cursor:ne-resize">ew-resize</p>
        <p style="cursor:ns-resize">ns-resize</p>
        <p style="cursor:nesw-resize">nesw-resize</p>
        <p style="cursor:nwse-resize">nwse-resize</p>

        <p style="cursor:col-resize">col-resize</p>

        <p style="cursor:row-resize">31 row-resize</p>
        <p style="cursor:all-scroll">all-scroll</p>


      </div>


      <div id="tableWrap" style="position:relative;border:1px solid red; width:700px; margin:20px auto;">
        <hr>
        <!--       <el-table
            border
            class="tableE"
            :show-header="showHead"
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="date"
              width='100'
              label="日期">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              :show-overflow-tooltip="true"
              label="地址">
                <template slot-scope="scope">
                  
                </template>
            </el-table-column>
            </el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <el-button 
                  @click="handleClick(scope.row)" 
                  type="success">编辑12
                </el-button>
              </template>
            </el-table-column>
          </el-table> -->
        <ul id="resultRel">
          <li v-for="(item,index) in tableData" :key=index style="width:100%;">
            <p>{{index+" : "+item.address}}</p>
          </li>
        </ul>


        <!-- <v-table
            style="width:100%"
            is-horizontal-resize
            column-width-drag
            :show-header="showHead"
            :columns="tableDataCol"
            :table-data="tableData0">
          </v-table> -->

        <table border="2" id="table2">
          <tr>
            <td>11111</td>
            <td>sdfasdf222</td>
          </tr>
        </table>
      </div>


      <p>
        <el-button type="success" @click='invokeZi'><i class="el-icon-edit"></i>我想调用子的方法</el-button>
        <el-button type="primary" @click='invokeSun'>
          <i class="el-icon-picture-outline-round"></i>我想调用孙的方法</el-button>
        <el-button type="success" @click='getUser'>
          获取后台用户数据</el-button>
        <el-button type="primary" @click='getHello'>
          获取后台hello数据</el-button>
        <el-button type="primary" @click='getLi'>getLi-$refs</el-button>
        <!-- <el-button  type="primary" @click='getSon'>getSon-$refs</el-button> -->
      </p>
      <div class="searchWrap">
        <input type="text" name="" v-model='inputRel' class="inputSearch" placeholder="/模糊搜索-推荐搜索" @keyup='searchTip'
          @focus='getMouse' autocomplete="on" style="border:1px solid red;">
        </input>
        <!-- <ul class="tipBox" v-if="showTipBox">
            <li
              v-for='(val,index) in newArr' 
              :key='val+index'
              @click='getVal(val)'
            >
              {{val}}
            </li>
          </ul> -->
      </div>
      <div style="width:400px;padding:20px; border:2px solid blue; margin:20px auto;">
        <p>我是子组件：</p>
        <son ref='aa' data-name='father' data-age='30' data-sex='man' @sonFun='doSonFun'>
        </son>

      </div>
      <hr>

      <div>
        <el-input placeholder="请输入内容" v-model="input3">
          <template slot="prepend">
            <span style="width:200px; display:inline-block">
              Http://
            </span>
          </template>
        </el-input>
      </div>

      <!-- <div style="margin-top: 15px;">
          <el-input placeholder="请输入内容" v-model="input4">
            <template slot="append">.com</template>
          </el-input>
        </div>

        <div style="margin-top: 15px;">
          <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="餐厅名" value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
              <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div> -->
    </div>

  </div>
</template>


<script>
  import Son from './Son';
  import A from './A';
  import B from './B';
  import canvasDemo from './canvasDemo';
  import ProjectTree from './ProjectTree';
  import axios from 'axios'
  import '../assets/css/global.css';
  // 声明全局变量
  let id = 1000;
  /*
  var A = {
    template: `
      <div>
        <h3>this is component a!</h3>
      </div>
    `,
    data() {
      return {
        name:'tom'
      }
    }
  }
  
  var B = {
    template: `
      <div>
        <p>this is component B!</p>
      </div>
    `
  }*/



  export default {
    name: 'HelloWorld',
    data() {

      return {
        wxURL: "/api/cgi-bin/token?grant_type=client_credential&appid=wxd4acc9d83da12825&secret=8ff3c7ca3691f55266c9dcfa7820e2c8",
        checkStrict: false,
        oldGroupItem: '',
        groupTableData: [{
          id: 1,
          date: '1',
          editable: false,
          name: '王小虎1',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 2,
          date: '2',
          editable: false,
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 3,
          date: '3',
          editable: false,
          name: '王小虎3',
          address: '上海市普陀区金沙江路 1519 弄',
          children: [{
            id: 31,
            date: '3-1',
            editable: false,
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            id: 32,
            date: '3-2',
            editable: false,
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }]
        }, {
          id: 4,
          date: '4',
          editable: false,
          name: '王小虎4',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        tableData1: [{
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          hasChildren: true
        }, {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        tabArr: [
          {
            id: '1',
            name: 'tab1',
            title: 'first',
            content: 'first one'
          },
          {
            id: '2',
            name: 'tab2',
            title: 'second',
            content: 'second one'
          }
        ],
        activeName: 'tab1',
        allTables: [
          [{
            date: '2016-05-01',
            name: '王小虎1',
            address: '上海市普陀区金沙江路 1518 弄'
          }],
          [{
            date: '2016-05-02',
            name: '王小虎2',
            address: '上海市普陀区金沙江路 1518 弄'
          }],
        ],
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        seValue: [],
        moreSelectValue: [
        ],
        options: [
          {
            value: 'zhinan',
            label: '指南',
            children: [{
              value: 'shejiyuanze',
              label: '设计原则',
              children: [{
                value: 'yizhi',
                label: '一致',
                disabled: false
              }, {
                value: 'fankui',
                label: '反馈',
                disabled: true
              }, {
                value: 'xiaolv',
                label: '效率',
                disabled: true
              }, {
                value: 'kekong',
                label: '可控',
                disabled: true
              }]
            }, {
              value: 'daohang',
              label: '导航',
              children: [{
                value: 'cexiangdaohang',
                label: '侧向导航'
              }, {
                value: 'dingbudaohang',
                label: '顶部导航'
              }]
            }]
          }
        ],
        arr: ['1a', '9b', '3d'],
        menuData: [
          {
            name: '香蕉',
            id: '001',
          },
          {
            name: '哈密瓜',
            id: '002',
          },
          {
            name: '雪梨',
            id: '003',
          }
        ],
        currentRow: 0,
        highlightCurrent: true,
        firstTd: '',
        msg: 'hello world',
        name: 'HelloWorld',
        relArr: ["a", "b", "c", "ab", "ac", "ad", "kk"],
        newArr: [],
        showTipBox: false,
        inputRel: '',
        keyWord: [],
        tableDataMusic: [],
        input3: '',
        input4: '',
        input5: '',
        select: '',
        searchKeyWord: '茯苓',
        showHead: true,
        tableDataCol: [{
          field: 'date',
          title: '编号',
          width: 100,
          columnAlign: 'center'
        },
        {
          field: 'name',
          title: '姓名',
          width: 100,
          columnAlign: 'center'
        },
        {
          field: 'address',
          title: '身高',
          width: 498,
          columnAlign: 'left'
        }
        ],
        tableData: [{
          readonly: '',
          date: '',
          name: '',
          address: '',
          dataType: '',
          value: ''
        }],
        tableDataq: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      } // return end
    },
    created() {
      //window.location.href='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd4acc9d83da12825&redirect_uri=http%3A%2F%2Fwww.xcaiputest.cn&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect'
        
      window.keyword = this.searchKeyWord;
      this.tableData = [
        {
          readonly: true,
          date: '2016-05-02',
          name: '王小虎1',
          address: '上海市茯苓普陀区茯苓aa',
          dataType: 'radio',
          value: '1'
        },
        {
          readonly: true,
          date: '2016-05-04',
          name: '王小虎2',
          address: '上海市普陀茯苓区金沙江阿胶bb',
          dataType: 'input',
          value: '0'
        },
        {
          readonly: true,
          date: '2016-05-01',
          name: '王小虎3',
          address: '上海市普茯苓陀区金沙江茯苓路白芍cc',
          dataType: 'selectOne',
          value: '1',
          canSelectData: [1, 2, 3]
        },
        {
          readonly: true,
          date: '2016-05-03',
          name: '王小虎4',
          address: '上海市茯苓普陀区金沙江路茯苓dd',
          dataType: 'selectMulti',
          value: [],
          canSelectData: [4, 5, 6]
        }]
    },
    watch: {
      tableData: {
        handler(n, o) {
          console.log('val-change:', n, o)
        },
        immediate: true,  //刷新加载 立马触发一次handler
        deep: true  // 可以深度检测到 person 对象的属性值的变化
      }
    },
    filters: {

      /* filterAddr(value) {
         console.log('rel:',value,typeof value);
         console.log('keyw:',window.keyword);
         var firstArr = value.split(window.keyword);
         console.log('firstRel:',firstArr);
         var aStr = '<span style="color:red">'+window.keyword+'</span>';
         var secondStr = firstArr.join(aStr);
         console.log(secondStr)
         return secondStr;
       }*/
    },
    components: {
      Son,
      A,
      B,
      canvasDemo,
      ProjectTree
    },
    mounted() {
      console.log('mounted页面准备完成---');

      this.getSearchRel();
      // this.moreSelectValue = [
      //     ["zhinan","shejiyuanze","yizhi"],
      //     ["zhinan","shejiyuanze","fankui"],
      //     ["zhinan","shejiyuanze","xiaolv"],
      //     ["zhinan","shejiyuanze","kekong"]]

      // 注册监听事件
      /*var table1 = document.getElementById('table1');
      var thArr = table1.getElementsByTagName('th');
      console.log('thArr:',thArr,typeof thArr,thArr.length)
      // 循环为th注册事件
      for(var i=0;i<thArr.length;i++){
        var thOne = thArr[i];
        thOne.addEventListener('click',function(){
          console.log('table1 th be click!')
        })
      }*/

      /* this.$nextTick(() => {
   
         //表格整体拖动函数
         var tableObj = document.getElementById('tableWrap');
         var tbA = tableObj.querySelector('.el-table');
         var tr = tbA.querySelector('tr');
         var thAll = tr.querySelectorAll('td');
         this.firstTd = thAll[0];
         var gapLeft=0;
         for(var i=0;i<thAll.length-1;i++){
           var lineObj = document.createElement('div')
           $('#tableWrap').append(lineObj)
           lineObj.classList='line1'
           lineObj.style.left = thAll[i].offsetWidth+gapLeft+ 'px';
           lineObj.style.height = tableObj.offsetHeight+ 'px';
           gapLeft += thAll[i].offsetWidth
         }
       })*/

      // 用jquery注册事件
      /*$("#table1 td").delegate("borderRight","mouseover",function(){
        console.log('Jq table1 th be click!');
      });
  
      //div move
      
      var drag1 = document.getElementById('drag1')
      var title = document.getElementById('title')
      var borderR = document.getElementsByClassName('BigRightBorder')[0];
      var borderB = document.getElementsByClassName('BigBottomBorder')[0];
      var borderRB = document.getElementsByClassName('BigBrBorder')[0];
  
      borderR.style.height = drag1.offsetHeight-2 + 'px';
      borderB.style.width = drag1.offsetWidth-2 + 'px';*/
      /*
          // div移动
          title.onmousedown = function(ev){
             var x = ev.clientX - drag1.offsetLeft;
             var y = ev.clientY - drag1.offsetTop;
              document.onmousemove =  debounce(function(ev){
                  moveBox(ev,drag1,x,y)
              },30)
      
              title.onmouseup = function ( ev ) {
                  document.onmousemove=title.onmouseup=null;
              }
          }
          function moveBox(ev,drag1,x,y){
              console.log('正在移动---')
              drag1.style.left = ev.clientX-x+'px';
              drag1.style.top = ev.clientY-y + 'px';
          }
      
          document.onmouseup = function ( ev ) {
              document.onmousemove=document.onmouseup=title.onmouseup=null;
          }
           // 去抖函数
          function debounce(fn, delay) {
              var timer = null
              return function () {
                  var context = this
                  var args = arguments
                  clearTimeout(timer)
                  timer = setTimeout(function () {
                    fn.apply(context, args)
                  }, delay)
              }
          }*/

      // 获取api数据
      this.getApiData1();
      // this.getMyApi1();
    },
    methods: {
      iptClick(){
        // 解铃还须系铃人
        console.log('--ipt',event.stopPropagation)
        event.preventDefault();
        event.stopPropagation();
        console.log('--iptClick')
      },
      iptFocus(){
        console.log('--ipt',event.stopPropagation)
        console.log('--iptFocus')
      },
      helloClick(){
        console.log('--helloClick')
      },
      testWX() {
        // GET request for remote image
        window.location.href='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd4acc9d83da12825&redirect_uri=http%3A%2F%2Fwww.xcaipu.cn&response_type=code&scope=snsapi_base&state=123#wechat_redirect'
        //window.location.href=this.wxURL;
        this.axios({
          method: 'get',
          url: url
        })
          .then(function (response) {
            console.log('--response',response)
          });
      },
      append(data) {
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },
      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },
      cascaderChange(data) {
        console.log('--cascaderChange:', data)
      },
      cellClickFun(row, column, cell, event) {
        console.log('--cellClick:', row, column, cell, event);
        // column.editable = true;
        //找到其在数组中的位置
        console.log('--column.label:', column.label)
        if (column.label == "组名") {
          this.oldGroupItem = column;
          console.log('--column.label-组名:', column.label)
          let indx = -1;
          for (let i = 0; i < this.groupTableData.length; i++) {
            if (this.groupTableData[i].id == row.id) {
              indx = i;
              console.log('--indx:', indx)
            }
          }
          if (indx != -1) {
            this.$set(this.groupTableData[indx], 'editable', true)
          }
        } else {
          let indx = -1;
          for (let i = 0; i < this.groupTableData.length; i++) {
            if (this.groupTableData[i].id == this.oldGroupItem.id) {
              indx = i;
              console.log('--indx--no:', indx)
            }
          }
          if (indx != -1) {
            this.$set(this.groupTableData[indx], 'editable', false)
          }

        }

      },
      inputChange(item) {
        // this.$set(this.obj,'e',02)
        console.log('--item:', item);
        // 循环table，若找到该项相同的组名，即将该项删除，并合并到相同的组名中。
        let sameGroup = -1;
        for (let i = 0; i < this.groupTableData.length; i++) {
          if (this.groupTableData[i].id != item.id && this.groupTableData[i].date == item.date) {
            sameGroup = i;
            console.log('--sameGroup:', sameGroup)
          }
        }
        if (sameGroup != -1) {
          // 先拷贝对象
          let newItem = JSON.parse(JSON.stringify(item))
          newItem.id = new Date().getTime();
          // 再将原来的数据删除
          this.groupTableData = this.groupTableData.filter(one => one.id != item.id)
          //  最后插进去
          if (this.groupTableData[sameGroup].hasOwnProperty('children')) {
            this.groupTableData[sameGroup].children.push(newItem);
          } else {
            console.log('--no children--')
            let newArr = [];
            newArr.push(newItem);
            // this.groupTableData[sameGroup].children = newArr;
            // 新增对象实现vue劫持
            this.$set(this.groupTableData[sameGroup], 'children', newArr)
          }

        }

      },
      inputFocus() {
        console.log('--inputFocus:');
      },
      inputBlur(item) {
        console.log('--inputBlur:', item);
        //找到其在数组中的位置
        let indx = -1;
        for (let i = 0; i < this.groupTableData.length; i++) {
          if (this.groupTableData[i].id == item.id) {
            indx = i;
            console.log('--indx:', indx)
          }
        }
        if (indx != -1) {
          this.$set(this.groupTableData[indx], 'editable', false)
        }
      },
      load(tree, treeNode, resolve) {
        setTimeout(() => {
          resolve([
            {
              id: 31,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              id: 32,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }
          ])
        }, 1000)
      },
      addTab() {
        let id = this.tabArr.length;
        let newTab = {
          id: ++id + '',
          name: 'newone',
          title: 'new one',
          content: 'new demo'
        }
        this.tabArr.push(newTab);
        this.activeName = newTab.id
      },
      handleClickTab(tab, event) {
        console.log(tab, event);
      },
      handleChange(value) {
        console.log('-multi-select：', value)
      },
      getSelect() {
        this.seValue = ["zhinan", "shejiyuanze", "yizhi"]
      },
      getLi() {
        /*ref的3种用法
        1.用在普通标签上（拿到的是dom对象）
        2.用在组件上，（拿到的是对象-实例）
        3.用在v-for循环中（拿到的是数组）
        */
        console.log('--获取子页面数据-refs-li-', this.$refs['1a'][0].innerText)
      },
      getSon() {
        console.log('--获取子页面数据-son-', this.$refs.aa)
      },
      delMenu(item) {
        event.stopPropagation();
        console.log('del-item:', item);
        for (var i = 0; i < this.menuData.length; i++) {
          if (this.menuData[i].id == item.id) {
            console.log('--del--', i)
            this.menuData.splice(i, 1);
          }
        }
      },
      handleCommand(command) {
        this.$message('click on item ' + command);
      },
      tableRowClassName(row, index) {
        console.log('table-row:', row);
        if (row.rowIndex === this.currentRow) {
          return 'info-row';
        } else if (row.rowIndex === 3) {
          return 'positive-row';
        }
        return '';
      },
      tableselect() {
        console.log('---tableselect 99---')
      },
      toggleSelection(rows) {
        console.log('----toggleSelection 00---')
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        console.log('----handleSelectionChange 12---')
        this.multipleSelection = val;
      },
      getSearchRel() {
        var relArr = $('#resultRel p');
        console.log('relArr-length:', relArr.length);
        for (var i = 0; i < relArr.length; i++) {
          console.log('rel-first:', $(relArr[i]).text());
          var thisRow = $(relArr[i]).text();
          if (thisRow.indexOf(this.searchKeyWord) != -1) {
            var secondArr = thisRow.split(this.searchKeyWord);
            var theStr = '<span style="color:red;">' + this.searchKeyWord + '</span>';
            var finalStr = secondArr.join(theStr);
            console.log('fin:', finalStr);
            $(relArr[i]).html(finalStr)
          }
        }
      },
      getApiData1() {
        console.log('mounted runed!');
        this.axios.get('https://api.apiopen.top/musicBroadcasting')
          .then((res) => {
            console.log('开放api可以直接获取，不需要代理转发:', res)
            // console.log('rel:',res,res.data.result[0].channellist.length)
            this.tableDataMusic = res.data.result[0].channellist
          })
      },
      getMyApi1() {
        console.log('mounted runed!');
        this.axios.get('/api/user')
          .then((res) => {
            // console.log('rel:',res)
            //console.log('rel:',res,res.data.result[0].channellist.length)
            //this.dataFromApi = res.data.result[0].channellist
          })
      },
      getUser() { // 请求express搭建的后台数据，通过proxyTable代理实现跨域访问
        this.axios.get('/user').then((res) => {
          console.log(res.data)
        })
      },
      getHello() { // 请求express搭建的后台数据，通过proxyTable代理实现跨域访问
        this.axios.get('/hello').then((res) => {
          console.log(res.data)
        })
      },
      handleClick(row) {
        console.log(row);
        var newRow = {};
        var newOne = Object.keys(row);
        console.log(newOne)
        for (var i = 0; i < newOne.length; i++) {
          var key = newOne[i]
          var value = row[key]
          console.log(row[key])
          newRow[key] = value + 'a'
        }
        console.log("newRow", newRow, this.tableData)
        var that = this;
        this.tableData.forEach(function (value, index) {
          if (value == row) {
            that.tableData.splice(index, 1, newRow)
          }
        })
      },
      getMouse() {
        console.log(event);
        var mouseX = event.clientX;
        var mouseY = event.clientY;
        console.log('坐标：', mouseX, mouseY);
        $('body').append('<p id="showTip" style="position:absolute;border:1px solid red;">sadfasdfas</p>');
        $('#showTip').css('left', mouseX + 'px')
        $('#showTip').css('top', mouseY + 'px')
      },
      searchTip() {
        console.log(event)
        var data = event.target.value
        console.log(data)
        this.newArr = [];
        if (!data) {
          this.newArr = [];
          this.showTipBox = false;
          return
        }
        this.newArr = [];

        for (var i = 0; i < this.relArr.length; i++) {
          var index = this.relArr[i].indexOf(data);
          //console.log(this.relArr[i],index,typeof index)
          if (index > 0 || index == 0) {
            this.newArr.push(this.relArr[i])
          }
        }

        if (this.newArr.length == 0) {
          this.showTipBox = false;
        } else {
          this.showTipBox = true;
        }

      },
      getVal(result) {
        console.log(result);
        this.inputRel = result;
        this.showTipBox = false;
      },
      invokeZi() {
        //alert('调用子方法');[i].
        this.$refs.SonName.sonSay('父调子方法' + this.name)
      },
      invokeSun() {
        //alert('调用孙方法');
        // 通过子方法再去调用孙方法
        this.$refs.SonName.toInvokeSun('我是爷爷！')
      },
      doSonFun(data) {
        //此方法是：准备好给子组件调用的
        console.log('父方法，被子组件调用了，传来的值：', data)
      }
    }
  }
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /deep/ .el-table .info-row {
    background: #c9e5f5;
  }

  /deep/ .el-table .positive-row {
    background: #e2f0e4;
  }

  .line1 {
    height: 200px;
    width: 5px;
    background: #f00;
    border: 1px solid green;
    position: absolute;
    left: 100px;
    top: 0;
    cursor: ew-resize;
  }

  .freeDiv {
    width: 300px;
    height: 150px;
    background: #eee;
    border: 2px solid #69f;
    position: absolute;
    left: 2%;
    top: 5%;
    /*transform: translate(-50%,-50%);*/
  }

  .titleText {
    background: #ccc;
    padding: 0 10px;
    height: 40px;
    line-height: 40px;
    margin: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: move;
  }

  .cursorType {
    padding: 0 5px;
    border-right: 2px solid blue !important;
  }

  .cursorType p {
    border-bottom: 2px solid #eee;
  }

  .cursorNot-allowed {
    cursor: not-allowed
  }

  .cursorPointer {
    cursor: pointer
  }

  .cursorE-resize {
    cursor: e-resize
  }


  .tips {
    position: absolute;
    border: 1px solid red;
  }

  .searchWrap {
    position: relative;
    width: 400px;
    height: 40px;
    margin: 10px auto;
  }

  .tipBox {
    width: 120px;
    position: absolute;
    left: 0;
    top: 45px;
    border: 1px solid #666;
  }

  .tipBox li {
    width: 100%;
    display: inline-block;
    padding: 0 10px;
    text-align: left;
    line-height: 28px;
    background: #eee;
    cursor: pointer;
  }

  .tipBox li:hover {
    background: #fff;
  }

  .inputSearch {
    width: 100%;
    height: 40px;
    border: none;
    /*border:1px solid #666;*/
    padding: 0 10px;
  }

  * {
    box-sizing: border-box
  }

  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: inline-block;
  }

  a {
    color: #42b983;
  }

  .tableE th {
    border-right: 1px solid red !important;
  }

  .icon-active:hover {
    color: red;
    font-weight: bold;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .proTree {
    position: absolute;
    left: 0;
    top: 20px;
    background-color: #ccc;
    width: 500px;
    height: 550px;
    overflow: auto;
    padding: 10px;
    z-index: 5;
    overflow: hidden;
  }
</style>