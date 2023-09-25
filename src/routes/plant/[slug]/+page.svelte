<script lang="ts">
	export let data;

	function getStats(plant: Plant) {
		let stats = [];
		let light_val = '';

		switch (plant.light_level) {
			case 0:
				light_val = 'A lot';
				break;
			case 1:
				light_val = 'Some';
				break;
			case 2:
				light_val = 'Not much';
				break;
			default:
				light_val = 'Some';
				break;
		}
		let water_val = '';

		switch (plant.water_frequency) {
			case 0:
				water_val = 'Often';
				break;
			case 1:
				water_val = 'Some';
				break;
			case 2:
				water_val = 'Not much';
				break;
			default:
				water_val = 'Some';
				break;
		}
		stats.push({ name: 'Light needed', value: light_val });
		stats.push({ name: 'Watering Frequency', value: water_val });
		return stats;
	}
</script>

<div class="my-2">
	<div class="bg-white border-black border-2 border-b-4 rounded-lg">
		<header class="card-header h-80 p-0">
			<img
				src={data.plant.image_url}
				class="object-cover object-center h-full w-full rounded-lg rounded-b-none"
				alt=""
			/>
		</header>
		<div class="p-2 pt-0">
			<div class="text-gray-500 font-light text-sm mt-2 -mb-1">Scientific name</div>
			<div class="text-3xl h2">{data.plant.name}</div>
		</div>
	</div>
	<section class="my-4 bg-white border-black border-2 border-b-4 rounded-lg">
		<div class="text-xl font-semibold border-b border-black p-2">Description</div>
		<p class="text-sm p-2">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus corporis quasi ex deserunt.
			Dignissimos, non suscipit nihil sed molestias itaque doloremque, laborum quod fugit placeat,
			rerum similique voluptas asperiores nulla?
		</p>
	</section>

	<section class="my-4 bg-white border-black border-2 border-b-4 rounded-lg">
		<div class="text-xl font-semibold border-b border-black p-2">Stats</div>
		<div class="table-container">
			<!-- Native Table Element -->
			<table class="table table-compact table-hover">
				<!-- 		<thead>
					<tr>
						<th>Stats</th>
						<th />
					</tr>
				</thead> -->
				<tbody>
					{#each getStats(data.plant) as row, i}
						<tr>
							<td>{row.name}</td>
							<td>{row.value}</td>
						</tr>
					{/each}
				</tbody>
				<!--  <tfoot>
                    <tr>
                        <th colspan="3">Calculated Total Weight</th>
                        <td>{totalWeight}</td>
                    </tr>
                </tfoot> -->
			</table>
		</div>
	</section>

	<!-- 	<section class="my-4">
		<div class="text-xl">Care Guide</div>
		<p>Coming Soon!</p>
	</section> -->
</div>
