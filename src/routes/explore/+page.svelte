<script>
	import BigCard from '../../components/BigCard.svelte';
</script>

<div>
	<h2 class="text-2xl">Browse plants</h2>
	<div class="flex justify-between">
		<input type="search" placeholder="Monstera" />
		<button class="btn variant-filled">Filters (5)</button>
	</div>

	<section class="card-container">
		<BigCard />
		<BigCard />
		<BigCard />
	</section>
</div>
