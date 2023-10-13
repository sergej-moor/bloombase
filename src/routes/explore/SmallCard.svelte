<script lang="ts">
	import IconBaselineFavorite from '~icons/ic/baseline-favorite';
	import slugify from '@sindresorhus/slugify';
	import type { Session, SupabaseClient } from '@supabase/supabase-js';
	import type { PlantCard } from '../../app';
	import LikeButton from '../../components/LikeButton.svelte';
	export let plant: PlantCard;

	const link = `/plant/${plant.id}-${slugify(plant.name)}`;

	export let supabase: SupabaseClient;
	export let session: Session;

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

<div class=" border-2 border-b-8 border-r-4 bg-white border-black rounded-lg w-full relative">
	<a class="card bg-red-300" href={link}>
		<div class="h-full w-full rounded-lg">
			<header class="card-header h-32 min-w-48 p-0">
				<img
					src={plant.cover_img}
					class="object-cover object-center rounded-lg rounded-b-none border-b border-black h-full w-full"
					alt=""
				/>
			</header>
			<section class="flex justify-between items-center pt-1 h-16">
				<div
					class=" text-center w-full
				"
				>
					<!-- <p class="font-light pl-2 -mb-1">{plant.latin}</p> -->
					<h2 class="text-lg font-bold p-1 pt-0">{plant.name} <br /></h2>
				</div>

				<!-- <div class="m-2 bg-red-300"><IconBaselineFavorite class="h-8 w-8" /></div> -->
			</section>
			<!-- <footer class="card-footer">(footer)</footer> -->
		</div>
	</a>
	{#if session}
		<LikeButton liked={plant.liked} on:toggleLike={toggleLike} />
	{/if}
</div>
