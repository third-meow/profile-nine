<script>
import { Line, mixins } from 'vue-chartjs'

export default {
	extends: Line,
	mixins: [mixins.reactiveProp],
	name: 'PriceChart',
	data: function () {
		return {
			options: {
				responsive: true,
				tooltips: {
					enabled: true,
					mode: 'single',
					/*
					callbacks: {
						label: function(tooltipItems, data) {
							return '$' + tooltipItems.yLabel;
						}
					}
					*/
				}
			}
		};
	},
  mounted: function () {
		this.renderChart(this.chartData, this.options);
		console.log(this.data);
  },
};
</script>

<style>
</style>

