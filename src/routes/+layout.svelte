<script lang="ts">
	import '../app.postcss';

	import { Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';

	initializeStores();
	const drawerStore = getDrawerStore();

	function navigate(link: string) {
		drawerStore.close();
		goto(link);
	}

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	//SkeletonUI
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
	import NavigationButton from '../components/NavigationButton.svelte';
	import FilterDrawer from '../components/FilterDrawer.svelte';
	import { goto } from '$app/navigation';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

</script>

<Drawer>
	{#if $drawerStore.id === 'plant-filter'}
		<FilterDrawer />
	{:else if $drawerStore.id === 'main-navigation'}
		<div class="p-8">
			<button on:click={() => navigate('/')} class="text-2xl h2">BloomBase</button>
			<div />
			<ul class="flex flex-col my-4 gap-2 text-lg">
				<li><button on:click={() => navigate('/explore')}>Browse</button></li>
				<li><button on:click={() => navigate('/wizard')}>Plant Wizard</button></li>
			</ul>
		</div>
	{/if}
</Drawer>
<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead"><NavigationButton /></svelte:fragment>

			<svelte:fragment slot="trail">
				<div class="h-6 flex items-center gap-2">
					<!-- <img src="logo_small.png" class="w-full h-full mb-1" alt="" /> -->
					<h2 class="text-primary-500 text-lg h2">BloomBase</h2>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<div class="flex justify-center h-full mx-2">
		<div class="flex flex-col gap-4 min-w-full md:min-w-[750px]">
			<div class="h-full">
				<slot><!-- optional fallback --></slot>
			</div>
		</div>
	</div>
</AppShell>
