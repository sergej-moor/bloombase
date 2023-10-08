<script lang="ts">
	import IconBaselineFavorite from '~icons/ic/baseline-favorite';
	import slugify from '@sindresorhus/slugify';
	import type { Session, SupabaseClient } from '@supabase/supabase-js';
	import type { PlantCard } from '../app';
	export let plant: PlantCard;

	const link = `/plant/${plant.id}-${slugify(plant.name)}`;

	export let supabase: SupabaseClient;
	export let session: Session;

	let liked = false;
	async function isLiked() {
		let res = await supabase
			.from('likes')
			.select()
			.eq('user_id', session.user.id)
			.eq('plant_id', plant.id);

		if (!res.data) return false;
		liked = res.data.length > 0;
		return res;
	}

	async function toggleLike() {
		/* 		
		console.log();
		console.log(plant.id); */
		let res = await isLiked();

		if (!res.data) return false;
		if (res.data.length == 0) {
			//like
			let res = await supabase
				.from('likes')
				.insert({ user_id: session.user.id, plant_id: plant.id });

			liked = true;
		} else {
			//unlike
			const { error } = await supabase
				.from('likes')
				.delete()
				.eq('user_id', session.user.id)
				.eq('plant_id', plant.id);

			liked = false;
		}
		/* 
		guck in supabase, ob der eintrag geliked ist
		wenn nein, dann füge einen eintrag hinzu
		wenn ja, dann entferne den eintrag aus supabase
		*/
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
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		{#await isLiked() then like}
			<!-- promise was fulfilled -->
			<div on:click={() => toggleLike()} class="m-2 absolute top-0 right-0">
				<IconBaselineFavorite
					class={liked
						? 'text-yellow-400 h-8 w-8 border-2 border-black bg-black'
						: 'text-white h-8 w-8 border-2 border-black bg-black'}
				/>
			</div>
		{/await}
	{/if}
</div>
