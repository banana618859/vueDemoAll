<template>
	<div>
		<p>组件a:{{name}}</p>
		<button @click='send'>非父子间bus事件</button>
	</div>
</template>

<script>

	import Bus from '../Bus'

	export default {
		data() {
			return {
				name: '我是来自A组件，名字是：tom'
			}
		},
		methods: {
			send(){
				console.log('send a')
				Bus.$emit('bfangfa',this.name)
			}
		}
	}
</script>