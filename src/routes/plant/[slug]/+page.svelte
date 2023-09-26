<script lang="ts">
	import IconSharpArrowBack from '~icons/ic/sharp-arrow-back';
	export let data;

	function getStats(plant: Plant) {
		let stats = [];
		stats.push({ name: 'Common Name(s)', value: plant.name.replace(',', ', ') });
		stats.push({ name: 'Family', value: plant.family });
		stats.push({ name: 'Category', value: plant.category });
		stats.push({ name: 'Origin', value: plant.origin });
		stats.push({ name: 'Insects', value: plant.insects });
		return stats;
	}

	function getLightText() {
		let plant = data.plant;
		return `${plant.ideallight.replace('.', '')}, ${plant.toleratedlight.replace('.', '')}`;
	}

	function getTemperatureText() {
		return `The ideal temperature lies between ${data.plant.tempmin}°C and ${data.plant.tempmax}°C.`;
	}
</script>

<div class="flex justify-center h-full">
	<div class="flex flex-col justify-between gap-4 min-w-full md:w-[750px] mb-8">
		<div class="">
			<!-- svelte-ignore a11y-invalid-attribute -->
			<a class="my-2 w-fit flex items-center" href="javascript:history.back()"
				><IconSharpArrowBack class="mt-0.5" /> Go Back</a
			>

			<div class="bg-white border-black border-2 border-b-4 border-r-4 rounded-lg">
				<header class="card-header h-80 p-0">
					<img
						src={data.plant.cover_img}
						class="object-cover object-center h-full w-full rounded-lg rounded-b-none"
						alt=""
					/>
				</header>
				<div class="p-2 pt-0">
					<div class="text-gray-500 font-light text-sm mt-2 -mb-1">{data.plant.latin}</div>
					<div class="text-3xl h2">{data.plant.name}</div>
				</div>
			</div>
			<section class="my-4 bg-white border-black border-2 border-b-4 border-r-4 rounded-lg">
				<div class="text-xl font-semibold border-b border-black p-2">Description</div>
				<p class="text-sm p-2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus corporis quasi ex
					deserunt. Dignissimos, non suscipit nihil sed molestias itaque doloremque, laborum quod
					fugit placeat, rerum similique voluptas asperiores nulla?
				</p>
			</section>

			<section class="my-4 bg-white border-black border-2 border-b-4 border-r-4 rounded-lg pb-2">
				<div class="text-xl font-semibold border-b border-black p-2">Care Guide</div>

				<div class="p-2">
					<div class=" font-bold">Watering</div>
					<p class="text-sm">{data.plant.watering}</p>
				</div>
				<div class="p-2">
					<div class=" font-bold">Ideal Light</div>
					<p class="text-sm">{getLightText()}</p>
				</div>
				<div class="p-2">
					<div class=" font-bold">Ideal Temperature</div>
					<p class="text-sm">{getTemperatureText()}</p>
				</div>
			</section>

			<section class="my-4 bg-white border-black border-2 border-b-4 border-r-4 rounded-lg">
				<div class="text-xl font-semibold border-b border-black p-2">Stats</div>
				<div class="table-container">
					<!-- Native Table Element -->
					<table class="table table-compact table-hover">
						<tbody>
							{#each getStats(data.plant) as row, i}
								<tr>
									<td>{row.name}</td>
									<td>{row.value}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</section>
		</div>
	</div>
</div>