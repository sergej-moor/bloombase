<script lang="ts">
	import IconBaselineFilterAlt from '~icons/ic/baseline-filter-alt';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';
	const drawerStore = getDrawerStore();
	const drawerSettings: DrawerSettings = {
		id: 'plant-filter',
		position: 'bottom',
		meta: { foo: 'bar', fizz: 'buzz', age: 40 },
		rounded: 'rounded-lg'
	};
</script>

<div>
	<button
		class="bg-yellow-400 btn border-black border rounded-lg flex"
		on:click={() => drawerStore.open(drawerSettings)}
	>
		<IconBaselineFilterAlt />
		<div>Filter</div>
	</button>
</div>
