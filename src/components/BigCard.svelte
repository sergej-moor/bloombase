<script lang="ts">
	import IconBaselineFavorite from '~icons/ic/baseline-favorite';
	import slugify from '@sindresorhus/slugify';
	import type { Session, SupabaseClient } from '@supabase/supabase-js';

	import type { PlantCard } from '../app';

	export let plant: PlantCard;
	export let supabase: SupabaseClient;
	export let session: Session;

	const link = `/plant/${plant.id}-${slugify(plant.name)}`;



	async function toggleLike() {


		if (plant.liked) {
			//unlike

			const { error } = await supabase
				.from('likes')
				.delete()
				.eq('user_id', session.user.id)
				.eq('plant_id', plant.id);
		} else {
			//like

			let res = await supabase
				.from('likes')
				.insert({ user_id: session.user.id, plant_id: plant.id });
		}
		plant.liked = !plant.liked;
	}
</script>

<div class="mb-8 border-2 border-b-8 border-r-8 bg-white border-black rounded-lg relative">
	<a class="card bg-red-300" href={link}>
		<div class="h-full w-full rounded-lg">
			<header class="card-header h-64 p-0">
				<img
					src={plant.cover_img}
					class="object-cover object-center rounded-lg rounded-b-none border-b border-black h-full w-full"
					alt=""
				/>
			</header>
			<section class="flex justify-between items-center mt-1">
				<div
					class=" text-center w-full
				"
				>
					<p class="font-light pl-2 -mb-1">{plant.latin}</p>
					<h2 class="text-2xl font-bold p-2 pt-0">{plant.name}</h2>
				</div>

				<!--  -->
			</section>
			<!-- <footer class="card-footer">(footer)</footer> -->
		</div>
	</a>
	{#if session}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->

		<!-- promise was fulfilled -->
		<div on:click={() => toggleLike()} class="m-2 absolute top-0 right-0">
			<IconBaselineFavorite
				class={plant.liked
					? 'text-secondary h-8 w-8 border-2 border-black bg-black'
					: 'text-white h-8 w-8 border-2 border-black bg-black'}
			/>
		</div>
	{/if}
</div>
