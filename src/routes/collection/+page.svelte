<script lang="ts">
	import SmallCard from '../../components/SmallCard.svelte';
	import BigCard from '../../components/BigCard.svelte';
	import type { Plant, PlantCard } from '../../app';

	export let data;

	let { supabase, session, plants } = data;
	$: ({ supabase, session, plants } = data);

	const plantCards = data.plants.map((plant) => {
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

	/* export let plants: Array<Plant>; */

	let activeView = 1;
</script>

<div>
	<h2 class="h2 text-6xl">Your Collection</h2>
	<section class="card-container">
		{#if activeView == 1}
			<!-- content here -->
			<ul class="grid grid-cols-2 gap-x-2 gap-y-4">
				{#each plantCards as plant}
					<li><SmallCard {plant} {supabase} {session} /></li>
				{/each}
			</ul>
		{:else}
			<!-- else content here -->
			<ul class="">
				{#each plantCards as plant}
					<li><BigCard {plant} {supabase} {session} /></li>
				{/each}
			</ul>
		{/if}
	</section>
</div>
