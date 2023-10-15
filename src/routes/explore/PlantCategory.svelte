<script lang="ts">
	import type { Plant } from '../../app';

	// your script goes here
	import SmallCard from './SmallCard.svelte';
	export let plants: Array<Plant>;
	export let title: String;
</script>

<section class="my-4 bg-bg -mx-2 px-2 py-2 border-b-2 border-t-2 border-black">
	<h3 class="font-bold text-2xl mb-2">{title}</h3>
	<div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto">
		<ul class="flex gap-x-2">
			{#each plants as plant}
				<!-- content here -->
				<li class=" snap-start shrink-0 w-48">
					<SmallCard {plant} />
				</li>
			{/each}
		</ul>
	</div>
</section>
