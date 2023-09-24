<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';
	const drawerStore = getDrawerStore();
	const drawerSettings: DrawerSettings = {
		id: 'plant-filter',
		position: 'bottom',
		meta: { foo: 'bar', fizz: 'buzz', age: 40 },

		padding: 'p-4'
	};
	drawerStore.open(drawerSettings);
</script>

<div>
	<button on:click={() => drawerStore.open(drawerSettings)}> Open Drawer </button>
	<div>{$drawerStore.meta}</div>
</div>
