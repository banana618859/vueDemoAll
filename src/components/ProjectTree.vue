<!--
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2019-12-11 17:31:11
 * @LastEditors: yizheng.yuan
 * @LastEditTime: 2020-03-04 14:04:27
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
            @node-contextmenu="rightClickFun"
            :expand-on-click-node="false"
            
            @node-drag-start="handleDragStart"
            @node-drag-enter="handleDragEnter"
            @node-drag-leave="handleDragLeave"
            @node-drag-over="handleDragOver"
            @node-drag-end="handleDragEnd"
            @node-drop="handleDrop"
            draggable
            :allow-drop="allowDrop"
            :allow-drag="allowDrag">
            <span class="custom-tree-node" slot-scope="{ node, data }">
                <span v-if="(data.type=='TestPlan') || (data.type=='TestGroup')" style="margin-right:5px;">
                    <label>
                        <input 
                            class="checkboxShow"
                            v-show="data.showChecked" 
                            type="checkbox" v-model="data.checked">
                        <i class="iconfont icon-wenjian" ></i>
                        {{ data.label }}
                    </label>
                </span>
                
                <span v-else-if="(data.type=='shortcuts') || (data.type=='shortcut')" style="margin-right:5px;">
                    <label>
                        <input 
                            class="checkboxShow"
                            v-show="data.showChecked" 
                            type="checkbox" v-model="data.checked">
                        <i class="iconfont icon-shoudong" ></i>
                        {{ data.label }}
                    </label>
                </span>
                <span v-else-if="data.class && (data.type=='csvfile')" style="margin-right:5px;float:left;">
                    <label>
                        <input 
                            class="checkboxShow"
                            v-show="data.showChecked" 
                            type="checkbox" v-model="data.checked">
                        <i class="iconfont icon-shoudong" ></i>
                        {{ data.label }}
                    </label>
                </span>
                <span v-else-if="data.type=='csvfile'" style="margin-right:5px;float:left;">
                    <label>
                        <input 
                            class="checkboxShow"
                            v-show="data.showChecked" 
                            type="checkbox" v-model="data.checked">
                        <i class="iconfont icon-shoudong" ></i>
                        {{ data.label }}
                    </label>
                </span>
                
                <span v-else-if="data.type=='shortcutFile'" style="margin-right:5px;">
                    <span v-if="!data.editable">
                        <label>
                            <input 
                                class="checkboxShow"
                                v-show="data.showChecked" 
                                type="checkbox" v-model="data.checked">
                            <i class="iconfont icon-wenjianfile63" ></i>
                            {{ data.label }}
                        </label>
                    </span>
                    <span v-else>
                        <label>
                            <input 
                                class="checkboxShow"
                                v-show="data.showChecked" 
                                type="checkbox" v-model="data.checked">
                            <i class="iconfont icon-wenjianfile63" ></i>
                            <input v-model="data.label" @blur="inputBlur(data)" class="renameInput" />
                        </label>
                    </span>
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
                        fatherPath: 'workspace',
                        path: 'workspace/TestPlan',
                        label: 'TestPlan',
                        type: 'TestPlan',
                        checked: true,
                        showChecked: true,
                        customCheckbox: false,
                        children: [{
                            checked: true,
                            showChecked: true,
                            fatherPath: 'workspace/TestPlan',
                            path: 'workspace/TestPlan/TestGroup1',
                            label: 'TestGroup1',
                            type: 'TestGroup',
                            children: [{
                                checked: '',
                                showChecked: true,
                                fatherPath: 'workspace/TestPlan/TestGroup1',
                                path: 'workspace/TestPlan/TestGroup1/Test1',
                                label: 'Test1',
                                type: 'csvfile',
                                editable: false,
                                },
                                {
                                checked: false,
                                showChecked: true,
                                fatherPath: 'workspace/TestPlan/TestGroup1',
                                path: 'workspace/TestPlan/TestGroup1/Test2',
                                label: 'Test2',
                                type: 'csvfile',
                                editable: false
                            },{
                                checked: false,
                                showChecked: true,
                                fatherPath: 'workspace/TestPlan/TestGroup1',
                                path: 'workspace/TestPlan/TestGroup1/Test2',
                                label: 'Test3',
                                type: 'csvfile',
                                editable: false
                            }]
                        }, {
                            checked: false,
                            showChecked: true,
                            fatherPath: 'workspace/TestPlan',
                            path: 'workspace/TestPlan/TestGroup2',
                            label: 'TestGroup2',
                            type: 'TestGroup',
                            children: [{
                                checked: false,
                                showChecked: true,
                                fatherPath: 'workspace/TestPlan/TestGroup2',
                                path: 'workspace/TestPlan/TestGroup2/Test1',
                                label: 'Test1',
                                type: 'csvfile',
                                editable: false
                            }, {
                                checked: false,
                                showChecked: true,
                                fatherPath: 'workspace/TestPlan/TestGroup2',
                                path: 'workspace/TestPlan/TestGroup2/Test2',
                                label: 'Test2',
                                type: 'csvfile',
                                editable: false
                            }, {
                                checked: false,
                                showChecked: true,
                                fatherPath: 'workspace/TestPlan/TestGroup2',
                                path: 'workspace/TestPlan/TestGroup2/Test2',
                                label: 'Test3',
                                type: 'csvfile',
                                editable: false
                            }]
                        }
                        ]
                    }, {
                        checked: false,
                        showChecked: true,
                        fatherPath: 'workspace',
                        path: 'workspace/Shortcuts',
                        label: 'Shortcuts',
                        type: 'shortcuts',
                        customCheckbox: false,
                        children: [{
                            checked: false,
                            showChecked: true,
                            fatherPath: 'workspace/Shortcuts',
                            path: 'workspace/Shortcuts/Group1',
                            label: 'Group1',
                            type: 'shortcut',
                            children: [{
                                checked: false,
                                showChecked: true,
                                fatherPath: 'workspace/Shortcuts/Group1',
                                path: 'workspace/Shortcuts/Group1/Enter Diags',
                                label: 'Enter Diags',
                                type: 'shortcutFile',
                                editable: false
                            }, {
                                checked: false,
                                showChecked: true,
                                fatherPath: 'workspace/Shortcuts/Group1',
                                path: 'workspace/Shortcuts/Group1/Battery Boot',
                                label: 'Battery Boot',
                                type: 'shortcutFile',
                                editable: false
                            }]
                        }, {
                            checked: false,
                            showChecked: true,
                            fatherPath: 'workspace/Shortcuts',
                            path: 'workspace/Shortcuts/Group2',
                            label: 'Group2',
                            type: 'shortcut',
                            children: [{
                                checked: false,
                                showChecked: true,
                                fatherPath: 'workspace/Shortcuts/Group2',
                                path: 'workspace/Shortcuts/Group2/DMM Battery',
                                label: 'DMM Battery',
                                type: 'shortcutFile',
                                editable: false
                            }, {
                                checked: false,
                                showChecked: true,
                                fatherPath: 'workspace/Shortcuts/Group2',
                                path: 'workspace/Shortcuts/Group2/Read All IO',
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
            handleDragStart(node, ev) {
                console.log('drag start', node);
                if(node.data.type.includes('file')){
                    console.log('file文件');
                    return true;
                }else{
                    console.log('不是文件');
                    return false;
                }
            },
            handleDragEnter(draggingNode, dropNode, ev) {
                console.log('tree drag enter: ', dropNode.label);
            },
            handleDragLeave(draggingNode, dropNode, ev) {
                console.log('tree drag leave: ', dropNode.label);
            },
            handleDragOver(draggingNode, dropNode, ev) {
                console.log('tree drag over: ',draggingNode, dropNode,ev);
                // if(dropNode.data.type.includes('file')){
                //     console.log('不允许 over')
                //    return false;
                // }
            },
            handleDragEnd(draggingNode, dropNode, dropType, ev) {
                
                console.log('tree drag end结束: ', dropNode,dropNode.label, dropType);
                if(dropType.includes('inner')){
                    console.log('不允许inner')
                   return false;
                }
            },
            handleDrop(draggingNode, dropNode, dropType, ev) {
                console.log('tree drop-最终放下: ', dropNode.label, dropType);
            },
            allowDrop(draggingNode, dropNode, type) {
                console.log('allowDrop----',draggingNode, dropNode, type)
                // if (dropNode.data.label === '二级 3-1') {
                // return type !== 'inner';
                // } else {
                // return true;
                // }

                console.log('父级是否相同',draggingNode.data.fatherPath==dropNode.data.fatherPath)
                if(type=='inner'){
                    console.log('不允许--inner',type);
                    return false;
                }else if(draggingNode.data.fatherPath != dropNode.data.fatherPath){
                    console.log('父级目录不同，禁止拖放');
                    return false;
                }
                if (dropNode.data.type.includes('file')) {
                    console.log('file--放')
                    return true;
                }
                else if (dropNode.data.type.includes('TestGroup')) {
                    console.log('TestGroup允许--放')
                    return true;
                }
            },
            allowDrag(draggingNode) {
                console.log('draggingNode',draggingNode)
                // return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
                if (draggingNode.data.type.includes('file')) {
                    console.log('file允许拖')
                    return true;
                }
                else if (draggingNode.data.type.includes('TestGroup')) {
                    console.log('TestGroup允许拖')
                    return true;
                } else {
                    console.log('--不允许拖')
                    return false;
                }
            },
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
 .checkboxShow{
     margin: 0;
 }
</style>