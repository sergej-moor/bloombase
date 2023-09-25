<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { plantFilterStore, getFilter } from '../stores/plantFilterStore';
	import IconBaselineClose from '~icons/ic/baseline-close';
	const drawerStore = getDrawerStore();

	function updateUrl(urlQuery: string, value: number) {
		let query = new URLSearchParams($page.url.searchParams.toString());

		query.set(urlQuery, value.toString());
		goto(`?${query.toString()}`);
	}
</script>

<div class="m-4">
	<div class="flex justify-between">
		<h2 class="text-2xl">Filter</h2>

		<button on:click={() => drawerStore.close()}> <IconBaselineClose /></button>
	</div>

	<form>
		<label for="">
			<span class="font-bold text-lg">Easy-Care</span>
			<div class="flex">
				<span class="w-16">Easy</span>
				<input
					type="range"
					class="range"
					bind:value={$plantFilterStore.experience}
					on:input={() => updateUrl('experience', $plantFilterStore.experience)}
					max="2"
				/>
				<span class="w-16 text-end">Hard</span>
			</div>
		</label>
		<label for="">
			<span class="font-bold text-lg">Light needed</span>
			<div class="flex">
				<span class="w-16">Low</span>
				<input
					type="range"
					class="range"
					bind:value={$plantFilterStore.light_level}
					on:input={() => updateUrl('light', $plantFilterStore.light_level)}
					max="2"
				/>
				<span class="w-16 text-end">High</span>
			</div>
		</label>
		<label for="">
			<span class="font-bold text-lg">Watering needed</span>
			<div class="flex">
				<span class="w-16">Low</span>
				<input
					type="range"
					class="range"
					bind:value={$plantFilterStore.water_frequency}
					on:input={() => updateUrl('watering', $plantFilterStore.water_frequency)}
					max="2"
				/>
				<span class="w-16 text-end">High</span>
			</div>
		</label>
	</form>
</div>
