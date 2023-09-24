<script lang="ts">
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	//SkeletonUI
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

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
	<div class="mx-4 h-full">
		<slot />
	</div>
</AppShell>
