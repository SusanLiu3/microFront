<template>
	<div class="btn-wrap" :style="styleObj" @click="clkProcess">按钮 1</div>
</template>
<script>
export default {
	data() {
		return {
			count: 0,
			styleObj: {
				width: "60px",
				height: "32px",
				color: "#fff",
				"background-color": "#ccc",
				"border-radius": "4px",
				"text-align": "center",
				"line-height": "32px",
				cursor: "pointer",
			},
		}
	},
	methods: {
		clkProcess() {
			this.count++
			console.log("点击了:", this.count)
		},
	},
}
</script>

<style scoped>
/* .btn-wrap {
	width: 60px;
	height: 32px;
	color: #fff;
	background-color: #ccc;
	border-radius: 4px;
	text-align: center;
	line-height: 32px;
	cursor: pointer;
} */
</style>
