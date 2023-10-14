<script lang="ts">
	// your script goes here
	export let maxValue: number;
	export let value: number;
</script>

<div>
	<ul class="flex gap-x-2 justify-between w-full">
		{#each { length: maxValue } as _, i}
			<div class="w-full">
				<li class="border-2 border-black rounded-lg text-transparent" class:bg-primary={i <= value}>
					{i + 1}
				</li>
			</div>
			<!-- content here -->
		{/each}
	</ul>
</div>
