<script lang="ts">
	import QuestionCard from '../components/QuestionCard.svelte';
</script>

<div class="flex justify-center h-full">
	<div class="flex flex-col justify-between gap-4 min-w-full md:min-w-[750px] my-8">
		<div class="">
			<h2 class="h2 text-6xl break-words">BloomBase</h2>
			<h4 class="text-2xl">Discover houseplants <br /> you'll like</h4>
		</div>
		<div class="flex flex-col gap-4 mb-16">
			<div
				class="bg-yellow-400 rounded-lg border-black border border-b-4 p-2 py-4 text-center font-bold text-lg"
			>
				<a href="/explore" class=""> Find Your Dream Houseplants</a>
			</div>
			<!-- <div class="flex justify-center font-light italic">or</div> -->
			<div class="bg-white rounded-lg border-black border border-b-4 p-2 text-center">
				<a href="/explore" class=""> Browse all plants</a>
			</div>
		</div>
	</div>
</div>
