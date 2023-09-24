<script lang="ts">
	import '../app.postcss';
	import { Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';

	initializeStores();
	const drawerStore = getDrawerStore();
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	//SkeletonUI
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<Drawer>
	{#if $drawerStore.id === 'plant-filter'}
		<div class="m-4">
			<div class="flex justify-between">
				<h2 class="text-2xl">Filter</h2>

				<button on:click={() => drawerStore.close()}>x</button>
			</div>

			<form>
				<label for="">
					<span class="font-bold text-lg">Light needed</span>
					<div class="flex">
						<span class="w-16">Low</span>
						<input type="range" class="range" value="1" max="2" name="" id="" />
						<span class="w-16 text-end">High</span>
					</div>
				</label>
			</form>
		</div>
	{/if}
</Drawer>
<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">.</svelte:fragment>

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
