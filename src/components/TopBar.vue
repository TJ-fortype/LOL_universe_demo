
<template>
<div class="topbar">
	<div class="container">
		<div class="logo">
			<a href="#"><i class="fa fa-ravelry" aria-hidden="true"></i>Dream-Travel</a>
		</div>
		<ul class="menu">
			<li>
				<router-link to="/">首页</router-link>
			</li>
			<li>
				<router-link to="/info">旅游信息</router-link>
			</li>
			<li>
				<router-link to="/seasons">季节</router-link>
			</li>
			<li>
				<router-link to="/experiences">体会</router-link>
			</li>
		</ul>
		<div class="col" @mouseenter="openDropdown" @mouseleave="hideDropdown" >
			<router-link to="/mf" >
				<i class="fa fa-heart-o">
					<div>我喜爱的</div>
				</i>
			</router-link>
			<div :class="dropdownMsg">
				<li v-for="m in myFavorites">
					{{m}}
				</li>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	export default {
		components:{},
		data(){
			return{
				myFavorites:[
					'吃饭','睡觉','打豆豆',
				],
				dropdownMsg:{
					dropdown:true,
					open:false,
				},
			}
		},
		methods:{
			openDropdown(){
				this.dropdownMsg.open = true
				console.log("啊啊啊进来了")
			},
			hideDropdown(){
				this.dropdownMsg.open = false
			},
			
		}
		
	}
</script>

<style>
	.topbar .container{
		display: flex;
		text-align: center;
	}
	.container .logo {
		flex: 1;
		display: inline-block;
		opacity:0.7;  
		font:30px/25px 'Microsoft yahei';  
		-webkit-box-reflect: below 1px -webkit-gradient(linear, center top, center bottom, from(transparent),color-stop(0.2, transparent), to(white)); 
	}
	/* 页面列表 */
	.container .menu {
		flex: 2;
		display: flex;
		vertical-align: middle;
	}
	/* 页面列表中的选择 */
	.container .menu li {
		flex: 1;
		font-size: 16px;
		position: relative;
		border-left: 1px solid #fff;
	}
	.container .menu li a{
		transform: translateX(-50%);
		position: absolute;
		top: 5px;
	}
	/* 我喜欢的（想去的） */
	.container .col {
		flex: .5;
		position: relative;
		font-size: 16px;
		border-left: 1px solid #fff;
		border-right: 1px solid #fff;
	}
	/* 下拉框 */
	.col .dropdown {
		display: none;
		position: absolute;
		width: 100%;
		z-index: 10;
		background: #ccc;
		border-bottom: 1px solid #fff;
		border-left: 1px solid #fff;
		border-right: 1px solid #fff;
		padding: 2em 3em;
	}
	.col .dropdown li {
		cursor: pointer;
	}
	.container .col .open{
		display: block;
	}
</style>
