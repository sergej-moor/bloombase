<script lang="ts">
	import '../app.postcss';
	import { Toast, getToastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings, ToastStore } from '@skeletonlabs/skeleton';
	import NavMenu from '../components/NavMenu.svelte';
	import Footer from '../components/Footer.svelte';
	/* EVENT LISTENER SUPABASE */
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
	});

	import IconBaselineSpa from '~icons/ic/baseline-spa';
	import IconBaselineClose from '~icons/ic/baseline-close';
	import { Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';

	initializeStores();
	const drawerStore = getDrawerStore();
	const toastStore = getToastStore();

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	//SkeletonUI
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
	import NavigationButton from '../components/NavigationButton.svelte';
	import FilterDrawer from '../routes/explore/FilterDrawer.svelte';

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import { onNavigate } from '$app/navigation';
	import { SupabaseClient } from '@supabase/supabase-js';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<Toast rounded="rounded-lg" />
<Drawer>
	{#if $drawerStore.id === 'plant-filter'}
		<div class=" h-full bg-bg border-2 border-black rounded-lg rounded-b-none">
			<FilterDrawer />
		</div>
	{:else if $drawerStore.id === 'main-navigation'}
		<NavMenu {data} />
	{/if}
</Drawer>
<AppShell>
	<svelte:fragment slot="header">
		<AppBar background="bg-primary" padding={'p-2'} border={'border-black border-b-2'}>
			<svelte:fragment slot="lead"><div><NavigationButton /></div></svelte:fragment>

			<svelte:fragment slot="trail">
				<div class="">
					<!-- <img src="logo_small.png" class="w-full h-full mb-1" alt="" /> -->
					<a href="/"> <IconBaselineSpa class="w-8 h-8  text-black" /></a>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<div class="flex justify-center h-full px-8 bg-bg">
		<div class="flex flex-col gap-4 min-w-full md:min-w-[750px]">
			<div class="h-full">
				<slot><!-- optional fallback --></slot>
			</div>
		</div>
	</div>
	<Footer />
</AppShell>

<style>
</style>
