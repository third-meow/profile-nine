<template>
	<div class="SymbolField">
		<nav>
			<ul>
				<li>Profile Nine</li>
				<li>
					<a href="https://github.com/third-meow/profile-nine"><img src="../assets/GitHub-Mark-32px.png"></img></a>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
export default {
	name: 'NavBar',
};
</script>

<style>

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
	overflow: hidden;
  background-color: var(--main-offwhite);
}

li {
	float: left;
  display: block;
  padding: 14px 16px;
	font-weight: bold;
  color: var(--main-text-color);
}

li a img {
	width: 75%;
	height: 75%;
}

li:last-child {
	float: right;
}

/* Change the link color on hover */
li:hover {
	border-bottom: 2px var(--main-text-color);
}

</style>

