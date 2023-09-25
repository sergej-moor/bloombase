<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { plantFilterStore, getFilter } from '../stores/plantFilterStore';
	const drawerStore = getDrawerStore();
</script>

<div class="m-4">
	<div class="flex justify-between">
		<h2 class="text-2xl">Filter</h2>

		<button on:click={() => drawerStore.close()}>x</button>
	</div>

	<form>
		<label for="">
			<span class="font-bold text-lg">Light needed</span>
			<div class="flex">
				<span class="w-16">Low</span>
				<input type="range" class="range" bind:value={$plantFilterStore.light_level} max="2" />
				<span class="w-16 text-end">High</span>
			</div>
		</label>
	</form>
</div>
