<template>
	<div>
		<p>this is first!123</p>
		<p>first数据：{{msg}}</p>
		<button @click='getName'>点击显示页面名称</button>
		<div style="border:1px solid blue;">
			<p>first子组件</p>
			<first-son></first-son>
		</div>
		<div style="border:2px solid red;">
			<h3>
				获取到的网络数据
			</h3>
			<div style="width:700px; margin:15px auto;">
				<el-table
            		border
		            :show-header="true"
		            :data="dataFromApi"
		            style="width: 100%">
		            <el-table-column
		            	label="channelid"
		            	prop="channelid">
		            </el-table-column>
		            <el-table-column
		            	label="歌名"
		            	prop="name">
		            </el-table-column>
		            <el-table-column
		            	label="cate_name"
		            	prop="cate_name">
		            </el-table-column>
		            <el-table-column
		            	label="cate_sname"
		            	prop="cate_sname">
		            </el-table-column>
		        </el-table>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import firstSon from '@/components/firstSon'
	export default {
		data (){
			return{
				name: 'first',
				msg: 'first data',
				dataFromApi: []
			}
		},
		mounted(){
			//this.getApiData();
			this.getMyApi()
		},
		components:{
			firstSon
		},
		methods:{
			getApiData(){
				console.log('mounted runed!');
				this.axios.get('https://api.apiopen.top/musicBroadcasting')
				.then((res)=>{
					console.log('rel:',res)
					//console.log('rel:',res,res.data.result[0].channellist.length)
					this.dataFromApi = res.data.result[0].channellist
				})
			},
			getName(){
				alert(this.name);
			},
			sonSay(data){
				alert('我是子,我说：',data);
			}
		}

	}
</script>