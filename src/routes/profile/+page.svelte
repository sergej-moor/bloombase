<!-- src/routes/account/+page.svelte -->
<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';

	import Avatar from './Avatar.svelte';
	export let data;
	export let form;
	import { Toast, getToastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings, ToastStore } from '@skeletonlabs/skeleton';
	const toast: ToastSettings = {
		message: 'Updated successfully',
		// Provide any utility or variant background style:
		background: 'bg-primary',
		hideDismiss: true,
		classes: 'rounded-2xl border-black border-2 border-b-4 border-r-4 font-bold text-bg',
		timeout: 1000
	};
	const toastStore = getToastStore();

	let { session, supabase, profile } = data;
	$: ({ session, supabase, profile } = data);

	let profileForm: HTMLFormElement;
	let loading = false;
	let fullName: string = profile?.full_name ?? '';
	let username: string = profile?.username ?? '';
	let website: string = profile?.website ?? '';
	let avatarUrl: string = profile?.avatar_url ?? '';

	const handleSubmit: SubmitFunction = () => {
		loading = true;
		return async () => {
			loading = false;
			toastStore.trigger(toast);
		};
	};

	const handleSignOut: SubmitFunction = () => {
		loading = true;
		return async ({ update }) => {
			loading = false;
			update();
		};
	};
</script>

<svelte:head>
	<title>Profile - bloombase</title>
	<meta name="description" content="Your Profile of your Bloombase-Account" />
</svelte:head>
<div>
	<div class="my-8 flex flex-col justify-between gap-y-4 md:max-w-[700px]">
		<h2 class="text-4xl font-bold mb-2">Your Profile</h2>
		<div class="">
			<div class="p-4 flex flex-col cardbox">
				<form
					class="form-widget flex flex-col gap-y-4"
					method="post"
					action="?/update"
					use:enhance={handleSubmit}
					bind:this={profileForm}
				>
					<div class="flex justify-center">
						<Avatar
							{supabase}
							bind:url={avatarUrl}
							size={10}
							on:upload={() => {
								profileForm.requestSubmit();
							}}
						/>
					</div>
					<div>
						<label for="email">Email</label>
						<input
							id="email"
							type="text"
							value={session.user.email}
							disabled
							class="w-full border-t-0 border-l-0 border-r-0 border-black border-b- text-gray-600"
						/>
					</div>

					<div>
						<label for="fullName">Full Name</label>
						<input
							id="fullName"
							name="fullName"
							type="text"
							value={form?.fullName ?? fullName}
							class="w-full border-t-0 border-l-0 border-r-0 border-black border-b-2"
						/>
					</div>

					<div>
						<label for="username">Username</label>
						<input
							id="username"
							name="username"
							type="text"
							value={form?.username ?? username}
							class="w-full border-t-0 border-l-0 border-r-0 border-black border-b-2"
						/>
					</div>

					<div>
						<input
							type="submit"
							class="button block primary bg-primary text-bg font-semibold p-2 border-black border-2 border-r-4 border-b-4 rounded-lg w-full"
							value={loading ? 'Loading...' : 'Update Profile'}
							disabled={loading}
						/>
					</div>
				</form>
			</div>
		</div>

		<div
			class="flex flex-col bg-primary text-bg font-semibold p-4 border-black border-2 border-r-4 border-b-4 rounded-lg"
		>
			<!-- 	<h2>My Collection</h2> -->
			<a class="text-xl font-bold text-center block" href="/collection">📦 Go to my collection 📦</a
			>
		</div>

		<form method="post" action="?/signout" use:enhance={handleSignOut}>
			<div>
				<button
					class="bg-white p-2 font-bold border-black border-2 border-r-4 border-b-4 rounded-lg w-full"
					disabled={loading}>Sign Out</button
				>
			</div>
		</form>
	</div>
</div>
