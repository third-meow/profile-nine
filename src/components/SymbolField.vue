<template>
	<div class="SymbolField">
		<input v-model="symb" placeholder="Enter stock symbol"></input>
		<button v-on:click="go">Go</button>
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
		go: function () {
			window.location.href = `/price?symb=${this.symb}`;
		}
  },
};
</script>

<style>
h1, h2 {
	font-weight: normal;
}

</style>

