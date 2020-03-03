<!--
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2019-12-11 17:31:11
 * @LastEditors  : yizheng.yuan
 * @LastEditTime : 2020-02-14 16:18:43
 -->
<template>
    <div @contextmenu="showMenu">
        <vue-context-menu 
            :contextMenuData="contextMenuData" 
            @rcRename="rcRename" 
            @rcSave="rcSave"
            @rcAddGroupBefore="rcAddGroupBefore" 
            @rcAddGroupBehind="rcAddGroupBehind"
            @rcAddTestBefore="rcAddTestBefore" 
            @rcAddTestBehind="rcAddTestBehind"
            @rcDelete="rcDelete"
            @rcCopy="rcCopy"
            @rcInsertBefore="rcInsertBefore"
            @rcInsertBehind="rcInsertBehind" 
            @rcDuplicate="rcDuplicate"
        >
        </vue-context-menu>

        <el-tree 
            :data="treeData" 
            node-key="id" 
            default-expand-all 
            show-checkbox 
            @node-contextmenu="rightClickFun"
            :expand-on-click-node="false">
            <span class="custom-tree-node" slot-scope="{ node, data }">
                <span v-if="(data.type=='TestPlan') || (data.type=='TestGroup')" class="iconfont icon-wenjian" style="margin-right:5px;">
                    {{ node.label }}
                </span>
                <span v-else-if="(data.type=='Diagrams')" class="iconfont icon-ic_temp" style="margin-right:5px;">
                    {{ node.label }}
                </span>
                <span v-else-if="(data.type=='shortcuts') || (data.type=='shortcut')" class="iconfont icon-shoudong" style="margin-right:5px;">
                    {{ node.label }}
                </span>
                <span v-else-if="data.class && (data.type=='csvfile')" class="iconfont icon-shoudong" style="margin-right:5px;float:left;">
                    {{ data.class }}
                </span>
                <span v-else-if="data.type=='csvfile'" class="iconfont icon-shoudong" style="margin-right:5px;float:left;">
                    {{ data.label }}
                </span>

                <span v-else-if="data.type=='Diagram'" class="iconfont icon-ic_temp" style="margin-right:5px;">
                    <span v-if="!data.editable">{{ node.label }}</span>
                    <input v-else v-model="data.label" @blur="inputBlur(data)" class="renameInput" />
                </span>
                <!-- <span v-if="data.type=='csvfile'" class="iconfont icon-CSV" style="margin-right:5px;">
                    <span v-if="!data.editable">{{ node.label }}</span>
                    <input v-else v-model="data.label" @blur="inputBlur(data)" class="renameInput" />
                </span> -->
                <span v-else-if="data.type=='shortcutFile'" class="iconfont icon-wenjianfile63" style="margin-right:5px;">
                    <span v-if="!data.editable">{{ node.label }}</span>
                    <input v-else v-model="data.label" @blur="inputBlur(data)" class="renameInput" />
                </span>
            </span>
        </el-tree>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                currentNode: null,
                // contextmenu data (菜单数据)
                contextMenuData: {
                    // the contextmenu name(@1.4.1 updated)
                    menuName: 'demo',
                    // The coordinates of the display(菜单显示的位置)
                    axis: {
                        x: null,
                        y: null
                    },
                    // Menu options (菜单选项)
                    menulists: [
                        {
                            fnHandler: 'rcRename', // Binding events(绑定事件)
                            icoName: '', // icon (icon图标 )，如：iconfont icon-CSV
                            btnName: 'Rename' // The name of the menu option (菜单名称)
                        }, 
                        {
                            fnHandler: 'rcSave',
                            btnName: 'Save'
                        }, 
                        {
                            fnHandler: 'rcAddGroupBefore',
                            btnName: 'Add'
                        },
                        {
                            fnHandler: 'rcDelete',
                            btnName: 'Delete'
                        }, 
                        {
                            fnHandler: 'rcCopy',
                            btnName: 'Copy'
                        }, 
                        {
                            fnHandler: 'rcInsertBefore',
                            btnName: 'Insert clipboard'
                        },
                        {
                            fnHandler: 'rcDuplicate',
                            btnName: 'Duplicate'
                        }
                    ]
                },
                treeData: [
                    {
                        id: 1,
                        label: 'TestPlan',
                        type: 'TestPlan',
                        customCheckbox: false,
                        children: [{
                            id: 4,
                            label: 'TestGroup1',
                            type: 'TestGroup',
                            children: [{
                                class: 'floatL',
                                id: 9,
                                label: 'Test1--l',
                                type: 'csvfile',
                                editable: false,
                                children: [
                                {
                                        id: 1009,
                                        label: 'Test1009',
                                        type: 'csvfile',
                                        editable: false,
                                    },
                                    {
                                        id: 1010,
                                        label: 'Test1010',
                                        type: 'csvfile',
                                        editable: false,
                                    }
                                ]
                            }, {
                                class: 'floatL',
                                id: 10,
                                label: 'Test2--l',
                                type: 'csvfile',
                                editable: false
                            }]
                        }, {
                            id: 44,
                            label: 'TestGroup2',
                            type: 'TestGroup',
                            children: [{
                                id: 9,
                                label: 'Test1',
                                type: 'csvfile',
                                editable: false
                            }, {
                                id: 10,
                                label: 'Test2',
                                type: 'csvfile',
                                editable: false
                            }]
                        }
                        ]
                    }, {
                        id: 2,
                        label: 'Diagrams',
                        type: 'Diagrams',
                        customCheckbox: false,
                        children: [{
                            id: 5,
                            label: 'Diagrams',
                            type: 'Diagram',
                            customCheckbox: false,
                            children: [{
                                id: 9,
                                label: 'Power Supply',
                                type: 'Diagram',
                                customCheckbox: false,
                                editable: false
                            }, {
                                id: 10,
                                label: 'DMM',
                                type: 'Diagram',
                                customCheckbox: false,
                                editable: false
                            }]

                        }]
                    }, {
                        id: 3,
                        label: 'Shortcuts',
                        type: 'shortcuts',
                        customCheckbox: false,
                        children: [{
                            id: 47,
                            label: 'Group1',
                            type: 'shortcut',
                            children: [{
                                id: 9,
                                label: 'Enter Diags',
                                type: 'shortcutFile',
                                editable: false
                            }, {
                                id: 10,
                                label: 'Battery Boot',
                                type: 'shortcutFile',
                                editable: false
                            }]
                        }, {
                            id: 7,
                            label: 'Group2',
                            type: 'shortcut',
                            children: [{
                                id: 9,
                                label: 'DMM Battery',
                                type: 'shortcutFile',
                                editable: false
                            }, {
                                id: 10,
                                label: 'Read All IO',
                                type: 'shortcutFile',
                                editable: false
                            }]
                        }]
                    }
                ],
            }
        },
        methods: {
            rightClickFun(event, data, node, nodeVueComponent) {
                console.log('--rightClick:', event, data, node, nodeVueComponent);
                this.currentNode = data;
                this.showMenu();
            },
            inputBlur(item){
                console.log('--now item',item);
                item.editable = false;
            },
            showMenu() {
                event.preventDefault()
                var x = event.clientX
                var y = event.clientY
                console.log('---x, y:', x, y)
                // Get the current location
                this.contextMenuData.axis = {
                    x, y
                }
            },
            rcRename() {
                console.log('--1right click rcRename--');
                this.$set(this.currentNode,'editable',true);
            },
            rcSave() {
                console.log('--2right click rcSave--')
            },
            rcAddGroupBefore() {
                console.log('--3right click rcAddGroupBefore--')
            },
            rcAddGroupBehind() {
                console.log('--4right click rcAddGroupBehind--')
            },
            rcAddTestBefore() {
                console.log('--5right click rcAddTestBefore--')
            },
            rcAddTestBehind() {
                console.log('--6right click rcAddTestBehind--')
            },
            rcDelete() {
                console.log('--7right click rcDelete--')
            },
            rcCopy() {
                console.log('--8right click rcCopy--')
            },
            rcInsertBefore() {
                console.log('--9right click rcInsertBefore--')
            },
            rcInsertBehind() {
                console.log('--10right click rcInsertBehind--')
            },
            rcDuplicate() {
                console.log('--11right click rcDuplicate--')
            }
        }
    }
</script>

<style scoped>
 /deep/ ul {
     padding:0;
     margin:0;
 }
 /deep/ li{
    font-family: PingFangSC-Regular, sans-serif;
    line-height: 22px;
    height: 22px;
 }
 /deep/ i.nav-icon-fontawe{
    left:5px;
 }
 .renameInput{width:80px; height:20px; line-height: 20px; border:1px solid #eee;}
 /* /deep/ .el-tree-node{
     float: left;
 } */
 .el-tree{
     overflow: hidden;
 }
</style>