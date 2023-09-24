<script lang="ts">
	export let plant: PlantCard = {
		title: '',
		image: ''
	};
</script>

<div class="my-4">
	<a class="card" href="/">
		<div class="h-full w-full variant-filled p-2">
			<header class="card-header h-48 bg-black p-0">
				<img src={plant.image} class="object-cover object-center h-full w-full" alt="" />
			</header>
			<section class="flex justify-between">
				<h2 class="text-lg">{plant.title}</h2>
				<button>Like</button>
			</section>
			<!-- <footer class="card-footer">(footer)</footer> -->
		</div>
        
	</a>
</div>
