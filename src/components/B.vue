<template>
	<div>
		<p>组件b:{{mag}},{{name}}</p>
	</div>
</template>

<script>

	import Bus from '../Bus'

	export default {
		data() {
			return {
				mag: 'tenny',
				name:''
			}
		},
		mounted(){
			// var that = this;
			Bus.$on('bfangfa', (data) => {
				this.name = data;
			})
		}
	}
</script>