<script lang="ts">
	import BigCard from '../../components/BigCard.svelte';

	export let data;

	const plantCards = data.plants.map((plant) => {
		return {
			title: plant.name,
			image: plant.image_url
		};
	});

	const plants = data.plants.map((plant) => {
		return {
			title: plant.name,
			image: plant.image_url,
			light_level: plant.light_level,
			water_frequency: plant.water_frequency,
			pet_friendly: plant.pet_friendly
		};
	});
	const filters = {
		pet_friendly: true,
		light_level: 0,
		water_frequency: 1
	};

	const filteredPlants = () => {
		return plants.filter(
			(plant) =>
				plant.light_level >= filters.light_level && plant.water_frequency >= filters.water_frequency
		);
	};

	console.log(filteredPlants());
</script>

<div>
	<h2 class="text-2xl">Browse plants</h2>
	<div class="flex justify-between">
		<input type="search" placeholder="Monstera" />
		<button class="btn variant-filled">Filters</button>
	</div>

	<section class="card-container">
		<ul>
			{#each filteredPlants() as plant}
				<li><BigCard {plant} /></li>
			{/each}
		</ul>
	</section>
</div>
