<script lang="ts">
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	// your script goes here
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	setTimeout(() => {
		let query = new URLSearchParams($page.url.searchParams.toString());
		query.delete('question');

		goto(`/explore?${query.toString()}`);
	}, 1000);
</script>

<div class="flex flex-col gap-8 justify-center items-center h-full -mt-12">
	<h2 class="text-2xl font-bold">Awesome!</h2>
	<ProgressRadial stroke={100} meter="stroke-primary-500" track="stroke-primary-500/30" />
	<p class="text-center">Searching for your next <br /> houseplants...</p>
</div>
