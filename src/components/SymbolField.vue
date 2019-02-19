<template>
	<div class="SymbolField">
		<input v-model="symb" placeholder="Enter stock symbol">
	</div>
</template>

<script>
export default {
	name: 'SymbolField',
  data: function () {
		return {
			symb: '',
		}
  },
  methods: {
  },
};
</script>

<style>
h1, h2 {
	font-weight: normal;
}

</style>

