<script lang="ts">
	import '../app.postcss';

	import IconBaselineSpa from '~icons/ic/baseline-spa';

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
	<div class="border rounded-lg border-black h-full bg-yellow-400">
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
	</div>
</Drawer>
<AppShell>
	<svelte:fragment slot="header">
		<AppBar padding={'p-2'} border={'border-black border-b-2'}>
			<svelte:fragment slot="lead"><div><NavigationButton /></div></svelte:fragment>

			<svelte:fragment slot="trail">
				<div class="">
					<!-- <img src="logo_small.png" class="w-full h-full mb-1" alt="" /> -->
					<a href="/"> <IconBaselineSpa class="w-8 h-8  text-green-600" /></a>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<div class="flex justify-center h-full px-2 bg-green-600">
		<div class="flex flex-col gap-4 min-w-full md:min-w-[750px]">
			<div class="h-full">
				<slot><!-- optional fallback --></slot>
			</div>
		</div>
	</div>
</AppShell>

<style>
</style>
