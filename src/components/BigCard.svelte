<script lang="ts">
	import slugify from '@sindresorhus/slugify';
	export let plant: Plant;

	const link = `/plant/${plant.id}-${slugify(plant.name)}`;
</script>

<div class="my-4">
	<a class="card" href={link}>
		<div class="h-full w-full variant-filled p-2">
			<header class="card-header h-48 p-0">
				<img src={plant.image_url} class="object-cover object-center h-full w-full" alt="" />
			</header>
			<section class="flex justify-between">
				<h2 class="text-lg">{plant.name}</h2>
				<button>Like</button>
			</section>
			<!-- <footer class="card-footer">(footer)</footer> -->
		</div>
	</a>
</div>
