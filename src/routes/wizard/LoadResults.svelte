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

<div class="h-screen">
	<div class="flex flex-col gap-8 justify-center items-center my-16 py-16">
		<h2 class="text-4xl font-bold">Thanks!</h2>
		<ProgressRadial stroke={100} meter="stroke-bg" track="stroke-black" />
		<p class="text-center text-xl font-semibold">
			We're searching for your next <br /> houseplants...
		</p>
	</div>
</div>
