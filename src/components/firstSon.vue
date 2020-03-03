<template>
	<div>
		<p>this is first-son!</p>
		<p>name页面名称: {{name}}</p>
		<p>收到爷爷页面的数据
		{{$attrs['data-name']}},{{$attrs['data-age']}},{{$attrs['data-sex']}}</p>
		<p><button @click='sunInvokeYeye'>sun通过son传递触发爷爷方法</button></p>
		<p><button @click='invokeYe'>sun直接触发爷爷方法-$listeners</button></p>
		<p><button @click='sunSaySomething("你好！")'>说些什么</button></p>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return{
				name: 'first-son'
			}
		},
		methods:{
			sunSaySomething (data){
				console.log('孙方法，你要说的是：',data);
			},
			sunInvokeYeye (){
				this.$emit('sonSunFun','我是来自孙')
			},
			invokeYe(){
				this.$emit('sonFun',"我是孙，直接触发爷爷,其实通过中间层v-on='$listeners'来监听而实现的");
			}
		}
	}

</script>