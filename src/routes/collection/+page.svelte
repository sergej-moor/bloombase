<script lang="ts">
	import SmallCard from '../explore/SmallCard.svelte';
	import BigCard from '../explore/BigCard.svelte';
	import type { Plant, PlantCard } from '../../app';
	import { convertResToPlantCards } from '../../helpers/convert';

	export let data;

	let { supabase, session, plants } = data;
	$: ({ supabase, session, plants } = data);

	const plantCards = convertResToPlantCards(data.plants);
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
