<script lang="ts">
	import '../app.postcss';

	import IconBaselineSpa from '~icons/ic/baseline-spa';
	import IconBaselineClose from '~icons/ic/baseline-close';
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

	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	const links = [
		{ name: 'Plant Finder 🔎', url: '/wizard' },
		{ name: 'Explore 🪴', url: '/explore' },
		{ name: 'About 👤', url: '/about' },
		{ name: 'Contact 👋', url: '/contact' }
	];
</script>

<Drawer>
	{#if $drawerStore.id === 'plant-filter'}
		<div class=" h-full bg-yellow-400 border-2 border-black rounded-lg rounded-b-none">
			<FilterDrawer />
		</div>
	{:else if $drawerStore.id === 'main-navigation'}
		<div class="flex flex-col h-full bg-green-600">
			<div class="flex justify-between items-start border-b-2 border-black p-4 bg-green-600">
				<button on:click={() => navigate('/')} class="text-2xl h2">BloomBase</button>
				<div />
				<button on:click={() => drawerStore.close()}><IconBaselineClose class="w-8 h-8 " /></button>
			</div>

			<ul class="flex flex-col text-xl font-semibold px-4">
				{#each links as link}
					<li class="border-b-2 py-4 -mx-4 px-4 leading-loose border-black bg-yellow-400">
						<button on:click={() => navigate(link.url)}>{link.name}</button>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
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
