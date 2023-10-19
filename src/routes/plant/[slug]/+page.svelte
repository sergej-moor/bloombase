<script lang="ts">
	import IconSharpArrowBack from '~icons/ic/sharp-arrow-back';
	import IconBaselineFavorite from '~icons/ic/baseline-favorite';
	import LikeButton from '../../../components/LikeButton.svelte';
	import type { Plant } from '../../../app';
	 
	let liked = false;
	let { session, supabase } = data;
	$: ({ session, supabase } = data);

	function getStats(plant: Plant) {
		let stats = [];
		let use = plant.use;
		stats.push({ name: 'Common Name', value: plant.name.replace(',', ', ') });
		stats.push({ name: 'Latin Name', value: plant.latin });
		stats.push({ name: 'Family', value: plant.family });
		stats.push({ name: 'Category', value: plant.category });
		stats.push({ name: 'Origin', value: plant.origin });
		stats.push({ name: 'Insects', value: plant.insects.replace(',', ', ') });
		stats.push({ name: 'Use', value: plant.use.join('<br>') });
		return stats;
	}

	function getLightText() {
		let plant = data.plant;
		return `${plant.ideallight.replace('.', '')}, ${plant.toleratedlight.replace('.', '')}`;
	}

	function getTemperatureText() {
		return `The ideal temperature lies between ${data.plant.tempmin}°C and ${data.plant.tempmax}°C.`;
	}

	async function isLiked() {
		let res = await supabase
			.from('likes')
			.select()
			.eq('user_id', session.user.id)
			.eq('plant_id', data.plant.id);

		if (!res.data) return false;
		liked = res.data.length > 0;
		return res;
	}

	async function toggleLike() {
	
		let res = await isLiked();

		if (!res.data) return false;
		if (res.data.length == 0) {
			//like
			let res = await supabase
				.from('likes')
				.insert({ user_id: session.user.id, plant_id: data.plant.id });

			liked = true;
		} else {
			//unlike
			const { error } = await supabase
				.from('likes')
				.delete()
				.eq('user_id', session.user.id)
				.eq('plant_id', data.plant.id);

			liked = false;
		}
	}

	const googlelink = `http://www.google.com/search?q=${data.plant.latin} ${data.plant.name}`;
</script>

<svelte:head>
	<title>{data.plant.name} - bloombase</title>
	<meta
		name="description"
		content={`Details for the ${data.plant.name} plant, also known as ${data.plant.latin}`}
	/>
</svelte:head>
<div class="flex justify-center h-full">
	<div class="flex justify-center gap-4 min-w-full mb-8">
		<div class="md:w-[750px]">
			<!-- svelte-ignore a11y-invalid-attribute -->
			<a class="my-2 w-fit flex items-center" href="javascript:history.back()"
				><IconSharpArrowBack class="mt-0.5" /> Go Back</a
			>

			<div class="bg-bg border-black border-2 border-b-4 border-r-4 rounded-lg">
				<header class="card-header h-fit p-0 relative">
					<img
						src={data.plant.cover_img}
						class="object-cover object-center h-full w-full rounded-lg rounded-b-none"
						alt=""
					/>
					{#if session}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						{#await isLiked() then like}
							<!-- promise was fulfilled -->
							<LikeButton {liked} on:toggleLike={toggleLike} />
						{/await}
					{/if}
				</header>
				<div class="p-2 pt-0">
					<div class="text-gray-500 font-light text-sm mt-2 -mb-1">{data.plant.latin}</div>
					<div class="text-3xl h2">{data.plant.name}</div>
				</div>
			</div>
			<!-- 			<section class="my-4 bg-white border-black border-2 border-b-4 border-r-4 rounded-lg">
				<div class="text-xl font-semibold border-b border-black p-2">Description</div>
				<p class="text-sm p-2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus corporis quasi ex
					deserunt. Dignissimos, non suscipit nihil sed molestias itaque doloremque, laborum quod
					fugit placeat, rerum similique voluptas asperiores nulla?
				</p>
			</section> -->

			<section class="my-4 bg-bg border-black border-2 border-b-4 border-r-4 rounded-lg pb-2">
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

			<section class="my-4 bg-bg border-black border-2 border-b-4 border-r-4 rounded-lg">
				<div class="text-xl font-semibold border-b border-black p-2">Stats</div>
				<div class="table-container">
					<!-- Native Table Element -->
					<table class="table table-compact table-hover whitespace-pre-line">
						<tbody>
							{#each getStats(data.plant) as row, i}
								<tr>
									<td>{row.name}</td>
									<td>{@html row.value}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</section>

			<section id="googleit">
				<a
					href={googlelink}
					target="_blank"
					class="block cardbox p-2 text-center bg-primary font-bold text-bg">Make a websearch</a
				>
			</section>
		</div>
	</div>
</div>
