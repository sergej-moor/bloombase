<script lang="ts">
	import IconRoundGridView from '~icons/ic/round-grid-view';
	import IconRoundViewAgenda from '~icons/ic/round-view-agenda';
	import SmallCard from '../../components/SmallCard.svelte';
	import BigCard from '../../components/BigCard.svelte';
	import FilterButton from '../../components/FilterButton.svelte';
	import PlantCategory from '../../components/PlantCategory.svelte';
	import { plantFilterStore, setFilter } from '../../stores/plantFilterStore';
	export let data;

	const plants = data.plants.map((plant) => {
		const plantObj: PlantCard = {
			id: plant.id,
			latin: plant.latin,
			name: plant.common.split(',')[0],
			category: plant.category,

			use: plant.use.split(','),
			cover_img: plant.cover_img,
			light_level: plant.light_level,
			watering_frequency: plant.watering_frequency,
			pet_friendly: true,
			experience: 0
		};
		return plantObj;
	});

	console.log(data.filters);

	const filteredPlants = (filters: PlantFilter) => {
		return plants.filter(
			(plant) =>
				plant.light_level <= filters.light_level &&
				plant.watering_frequency <= filters.water_frequency &&
				plant.experience <= filters.experience /* &&
				(filters.pet_friendly ? filters.pet_friendly == plant.pet_friendly : true) */
		);
	};
	let plantsFiltered: Array<PlantCard>;

	plantsFiltered = filteredPlants(data.filters);

	setFilter(data.filters);
	plantFilterStore.subscribe((filters) => {
		plantsFiltered = filteredPlants(filters);
	});

	let activeView = 1;

	const plantsByCategory = (category: String) => {
		return plants.filter((plant) => plant.category.includes(category));
	};

	const categories = [
		{ name: 'Succulents', category: 'Cactus' },
		{ name: 'Palms', category: 'Palm' },
		{ name: 'Chinese Evergreens', category: 'Chinese Evergreen' },
		{ name: 'Dragon Trees', category: 'racae' },
		{ name: 'Hanging Plants', category: 'Hanging' }
	];
	const baseFilter: PlantFilter = {
		experience: 2,
		water_frequency: 2,
		light_level: 2,
		pet_friendly: true
	};
</script>

<div>
	<h2 class="text-6xl h2 font-bold my-2 mb-8 leading-[0.9]">Discover <br /> plants</h2>

	<div class="flex justify-between mb-4">
		<!-- <input type="search" disabled class="rounded-lg border border-black" placeholder="Monstera" /> -->
		<!-- <button class="btn variant-filled">Filters</button> -->
		<FilterButton />

		<div class="flex gap-x-1 mb-4">
			<button
				class:bg-yellow-400={activeView == 0}
				class="bg-white rounded-lg p-1 border border-black"
				on:click={() => (activeView = 0)}><IconRoundViewAgenda class="w-8 h-8" /></button
			>
			<button
				class="bg-white rounded-lg p-1 border border-black"
				class:bg-yellow-400={activeView == 1}
				on:click={() => (activeView = 1)}><IconRoundGridView class="w-8 h-8" /></button
			>
		</div>
	</div>

	{#if data.filters == baseFilter}
		<!-- content here -->
		<section class="category-container">
			<ul>
				{#each categories as item}
					<!-- content here -->
					<li>
						<PlantCategory title={item.name} plants={plantsByCategory(item.category)} />
					</li>
				{/each}
			</ul>
		</section>
	{:else}
		<!-- else content here -->
		<section class="card-container">
			{#if activeView == 1}
				<!-- content here -->
				<ul class="grid grid-cols-2 gap-x-2 gap-y-4">
					{#each plantsFiltered as plant}
						<li><SmallCard {plant} /></li>
					{/each}
				</ul>
			{:else}
				<!-- else content here -->
				<ul class="">
					{#each plantsFiltered as plant}
						<li><BigCard {plant} /></li>
					{/each}
				</ul>
			{/if}
		</section>
	{/if}
</div>
