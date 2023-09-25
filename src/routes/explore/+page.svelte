<script lang="ts">
	import BigCard from '../../components/BigCard.svelte';
	import FilterButton from '../../components/FilterButton.svelte';
	import { plantFilterStore, setFilter } from '../../stores/plantFilterStore';
	export let data;

	const plants = data.plants.map((plant) => {
		const plantObj: Plant = {
			id: plant.id,
			name: plant.name,
			image_url: plant.image_url,
			light_level: plant.light_level,
			water_frequency: plant.water_frequency,
			pet_friendly: plant.pet_friendly,
			experience: plant.experience
		};
		return plantObj;
	});
	const filteredPlants = (filters: PlantFilter) => {
		return plants.filter(
			(plant) =>
				plant.light_level >= filters.light_level &&
				plant.water_frequency >= filters.water_frequency &&
				plant.experience >= filters.experience /* &&
				(filters.pet_friendly ? filters.pet_friendly == plant.pet_friendly : true) */
		);
	};
	let plantsFiltered: Array<Plant>;

	plantsFiltered = filteredPlants(data.filters);
	setFilter(data.filters);
	plantFilterStore.subscribe((filters) => {
		plantsFiltered = filteredPlants(filters);
	});
</script>

<div>
	<h2 class="text-2xl">Browse plants</h2>
	<div class="flex justify-between">
		<input type="search" placeholder="Monstera" />
		<!-- <button class="btn variant-filled">Filters</button> -->
		<FilterButton />
	</div>

	<section class="card-container">
		<ul>
			{#each plantsFiltered as plant}
				<li><BigCard {plant} /></li>
			{/each}
		</ul>
	</section>
</div>
