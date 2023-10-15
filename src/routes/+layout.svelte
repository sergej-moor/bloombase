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

<div id="noisebg" />
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
		<AppBar background="bg-bg" padding={'p-2'} border={'border-black border-b-2'}>
			<svelte:fragment slot="lead"
				><div class="flex gap-x-2 items-center">
					<NavigationButton />
					<a href="/" class="h1 text-2xl">bloombase</a>
				</div></svelte:fragment
			>

			<svelte:fragment slot="trail">
				<div class="">
					<!-- <img src="logo_small.png" class="w-full h-full mb-1" alt="" /> -->
					<a href="/"> <!-- <IconBaselineSpa class="w-8 h-8  text-black" /> --></a>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<div class="flex justify-center h-full px-8 bg-bg">
		<div class="flex flex-col min-w-full md:min-w-[750px]">
			<div class="h-full min-h-screen">
				<slot><!-- optional fallback --></slot>
			</div>
			<Footer />
		</div>
	</div>
</AppShell>

<style>
	#noisebg {
		position: absolute;
		z-index: 1000;
		width: 100vw;
		height: 100vh;
		pointer-events: none;
		overflow: hidden;
	}
	#noisebg::after {
		content: '';
		position: absolute;
		width: 200vw;
		height: 200vh;
		left: -50%;
		top: -50%;
		opacity: 0.5;
		background-image: url(data:image/png;base64,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);
		animation: grain 0.1s linear infinite alternate-reverse;
	}
	@keyframes grain {
		0%,
		100% {
			transform: translate(0, 0);
		}
		10% {
			transform: translate(-5%, -3%);
		}
		30% {
			transform: translate(3%, -5%);
		}
		50% {
			transform: translate(5%, 5%);
		}
		70% {
			transform: translate(2%, 3%);
		}
		90% {
			transform: translate(-1%, 7%);
		}
	}
</style>
