<script lang="ts">
	// your script goes here
	export let maxValue: number;
	export let value: number;
</script>

<div>
	<ul class="flex gap-x-4 justify-between w-full">
		{#each { length: maxValue } as _, i}
			<div class="w-full">
				<li
					class="border border-black rounded-lg bg-white text-transparent"
					class:bg-secondary={i <= value}
				>
					{i + 1}
				</li>
			</div>
			<!-- content here -->
		{/each}
	</ul>
</div>
