<script lang="ts">
	import IconBaselineMenu from '~icons/ic/baseline-menu';
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';
	const drawerStore = getDrawerStore();
	const drawerSettings: DrawerSettings = {
		id: 'main-navigation',
		position: 'left',
		width: 'w-full'
	};
	/* drawerStore.open(drawerSettings);  */
</script>

<div class="flex flex-end">
	<button class="" on:click={() => drawerStore.open(drawerSettings)}>
		<IconBaselineMenu class="w-8 h-8" /></button
	>
</div>
