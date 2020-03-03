<template>
	<div>
		<p>this is first!-son</p>
		<p>first数据：{{msg}}</p>
		<button @click='getName'>点击显示页面名称</button>
		<button @click='invokeFather'>调用父方法</button>
		<div style="border:1px solid blue;">
			<p>first子组件:</p>
			<first-son 
				v-bind='$attrs' 
				v-on='$listeners' 
				ref='sunName'
				@sonSunFun='invokeFatherHelpSun'
			></first-son>
		</div>
	</div>
</template>
<script type="text/javascript">
	import firstSon from '@/components/firstSon'
	export default {
		name: "sonPage",
		data (){
			return{
				name: '数据first',
				msg: '提示信息msg'
			}
		},
		components:{
			firstSon
		},
		methods:{
			getName(){
				alert(this.name);
			},
			sonSay(data){
				console.log('我是子组件，谁调用了我：',data);
			},
			toInvokeSun(data){
				this.$refs.sunName.sunSaySomething(data)
			},
			invokeFather(){
				this.$emit('sonFun','我是来自儿子')
			},
			invokeFatherHelpSun(data){
				this.$emit('sonFun',data)
			}
		}

	}
</script>