<script lang="ts">
	import IconBaselineMenu from '~icons/ic/baseline-menu';
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';
	const drawerStore = getDrawerStore();
	const drawerSettings: DrawerSettings = {
		id: 'main-navigation',
		position: 'left'
	};
	/* drawerStore.open(drawerSettings); */
</script>

<div>
	<button on:click={() => drawerStore.open(drawerSettings)}> <IconBaselineMenu /></button>
</div>
