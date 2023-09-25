<script lang="ts">
	import IconBaselineFilterAlt from '~icons/ic/baseline-filter-alt';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';
	const drawerStore = getDrawerStore();
	const drawerSettings: DrawerSettings = {
		id: 'plant-filter',
		position: 'bottom',
		meta: { foo: 'bar', fizz: 'buzz', age: 40 },

		padding: 'p-4'
	};
</script>

<div>
	<button class="variant-filled flex btn" on:click={() => drawerStore.open(drawerSettings)}>
		<IconBaselineFilterAlt />
		<div>Filter</div>
	</button>
</div>
