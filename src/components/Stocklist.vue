<template>
	<div class="Stocklist">
		<ul>
			<li v-for="stock in stocks">{{ stock.name }}<br>{{ stock.price }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Stocklist',
	props: ['stocks'],
};
</script>

<style>

ul {
	background-color: transparent;
	list-style-type: none;
}

li {
	text-align: left;
}

h1, h2 {
	font-weight: normal;
}

</style>

