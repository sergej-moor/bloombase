<script lang="ts">
	import IconRoundGridView from '~icons/ic/round-grid-view';
	import IconRoundViewAgenda from '~icons/ic/round-view-agenda';
	import SmallCard from './SmallCard.svelte';
	import BigCard from './BigCard.svelte';
	import FilterButton from './FilterButton.svelte';
	import PlantCategory from './PlantCategory.svelte';
	import { plantFilterStore, setFilter } from '../../stores/plantFilterStore';
	import type { PlantCard, PlantFilter } from '../../app';
	import InfiniteScroll from './InfiniteScroll.svelte';
	import { convertResToPlantCards } from '../../helpers/convert';
	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	const plants = convertResToPlantCards(data.plants);

	const filteredPlants = (filters: PlantFilter) => {
		return plants.filter((plant) =>
			plant.light_level <= filters.light_level &&
			plant.watering_frequency <= filters.water_frequency &&
			plant.experience <= filters.experience /* &&
			plant.pet_friendly
				? plant.pet_friendly == filters.pet_friendly
				: true */
		);
	};
	let plantsFiltered: Array<PlantCard>;

	plantsFiltered = filteredPlants(data.filters);
	let newBatch: Array<PlantCard> = [];
	let page = 0;
	let nextUrl = '';

	function fetchPlants() {
		let page_length = 5;
		let start = page * page_length;
		let end = page * page_length + page_length;
		newBatch = plantsFiltered.slice(start, end);

		return newBatch;
	}

	let renderedPlants = fetchPlants();

	$: renderedPlants = [...renderedPlants, ...newBatch];

	setFilter(data.filters);
	plantFilterStore.subscribe((filters) => {
		plantsFiltered = filteredPlants(filters);
		renderedPlants = fetchPlants();
	});

	let activeView = 0;

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

<svelte:head>
	<title>Browse & Explore - bloombase</title>
	<meta name="description" content="The plant catalogue with over 150 different houseplants." />
</svelte:head>
<div class="my-8">
	<!-- <h2 class="text-6xl font-bold my-2 mb-8 leading-[0.9]">Discover <br /> plants</h2> -->

	<div class="flex justify-between md:justify-start md:gap-x-8">
		<!-- <input type="search" disabled class="rounded-lg border border-black" placeholder="Monstera" /> -->
		<!-- <button class="btn variant-filled">Filters</button> -->
		<FilterButton />

		<div class="flex gap-x-1 mb-2">
			<button
				class:bg-primary={activeView == 0}
				class="bg-bg rounded-lg p-1 border border-black"
				on:click={() => (activeView = 0)}><IconRoundViewAgenda class="w-8 h-8" /></button
			>
			<button
				class="bg-bg rounded-lg p-1 border border-black"
				class:bg-primary={activeView == 1}
				on:click={() => (activeView = 1)}><IconRoundGridView class="w-8 h-8" /></button
			>
		</div>
	</div>

	<div class="font-bold mb-2">
		{plantsFiltered.length} results found
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
				<ul class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-2 gap-y-4">
					{#each renderedPlants as plant}
						<li><SmallCard {plant} {supabase} {session} /></li>
					{/each}
					<InfiniteScroll
						hasMore={true}
						threshold={100}
						on:loadMore={() => {
							page++;
							fetchPlants();
						}}
						elementScroll={null}
					/>
				</ul>
			{:else}
				<!-- else content here -->
				<ul class="grid grid- grid-cols-1 md:grid-cols-2 md:gap-4 xl:grid-cols-4 xl:gap-8">
					{#each renderedPlants as plant}
						<li><BigCard {plant} {supabase} {session} /></li>
					{/each}
					<InfiniteScroll
						hasMore={true}
						threshold={100}
						on:loadMore={() => {
							page++;
							fetchPlants();
						}}
						elementScroll={null}
					/>
				</ul>
			{/if}
		</section>
	{/if}
</div>
