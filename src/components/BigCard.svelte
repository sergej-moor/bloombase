<script lang="ts">
	import IconBaselineFavorite from '~icons/ic/baseline-favorite';
	import slugify from '@sindresorhus/slugify';
	export let plant: PlantCard;

	const link = `/plant/${plant.id}-${slugify(plant.name)}`;
</script>

<div class="mb-8 border-2 border-b-8 border-r-8 bg-white border-black rounded-lg">
	<a class="card bg-red-300" href={link}>
		<div class="h-full w-full  rounded-lg">
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
				<!-- <div class="m-2 bg-red-300"><IconBaselineFavorite class="h-8 w-8" /></div> -->
			</section>
			<!-- <footer class="card-footer">(footer)</footer> -->
		</div>
	</a>
</div>
