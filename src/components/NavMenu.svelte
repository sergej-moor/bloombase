<script lang="ts">
	import IconBaselineClose from '~icons/ic/baseline-close';
	import { Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	import { goto, invalidateAll } from '$app/navigation';
	const drawerStore = getDrawerStore();

	const links = [
		{ name: 'Plant Finder 🔎', url: '/wizard' },
		{ name: 'Explore 🪴', url: '/explore' }
	];

	const userLinks = [
		{ name: 'My Collection', url: '/collection' },
		{ name: 'My Profile', url: '/profile' }
	];

	const linksBottom = [
		{ name: 'About', url: '/about' },
		{ name: 'Contact', url: '/contact' }
	];

	function navigate(link: string) {
		drawerStore.close();
		goto(link);
	}
	export let data: any;
	let { supabase } = data;
	$: ({ supabase } = data);

	import { Toast, getToastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings, ToastStore } from '@skeletonlabs/skeleton';

	const signOutToast: ToastSettings = {
		message: 'Successfully signed out!',
		// Provide any utility or variant background style:
		background: 'bg-secondary',
		hideDismiss: true,
		classes: 'border-black border-2 border-b-4 border-r-4 font-semibold',

		timeout: 3000
	};

	const toastStore = getToastStore();

	const handleSignOut = async () => {
		let res = await supabase.auth.signOut();
		console.log(res);

		if (!res.error) {
			/* showSignUpFeedback = true; */
			toastStore.trigger(signOutToast);
			invalidateAll();
		}
	};
</script>

<div class="flex flex-col justify-between h-full bg-primary">
	<div>
		<div class="flex justify-between items-start border-b-2 border-black p-4 bg-primary">
			<button on:click={() => navigate('/')} class="text-2xl h2">BloomBase</button>
			<div />
			<button on:click={() => drawerStore.close()}><IconBaselineClose class="w-8 h-8 " /></button>
		</div>

		<ul class="flex flex-col text-xl font-semibold px-4">
			{#each links as link}
				<li class="border-b-2 py-4 -mx-4 px-4 leading-loose border-black bg-bg">
					<button on:click={() => navigate(link.url)}>{link.name}</button>
				</li>
			{/each}

			{#if data.session}
				<!-- content here -->
				{#each userLinks as link}
					<li class="border-b-2 py-4 -mx-4 px-4 leading-loose border-black bg-bg">
						<button on:click={() => navigate(link.url)}>{link.name}</button>
					</li>
				{/each}
			{/if}
		</ul>
	</div>
	<div class="flex justify-between p-4">
		<ul class="flex gap-x-4">
			{#each linksBottom as link}
				<li>
					<button class="underline text-lg" on:click={() => navigate(link.url)}>{link.name}</button>
				</li>
			{/each}
		</ul>
		{#if data.session}
			<!-- content here -->
			<button on:click={handleSignOut} class="underline text-lg">Sign out</button>
		{:else}
			<button on:click={() => navigate('/auth')} class="underline text-lg">Sign in</button>
		{/if}
	</div>
</div>
