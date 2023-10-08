<script lang="ts">
	import { Toast, getToastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings, ToastStore } from '@skeletonlabs/skeleton';
	const checkMailToast: ToastSettings = {
		message: "Awesome! Confirm your email address by clicking on the link we've sent to you.",
		// Provide any utility or variant background style:
		background: 'bg-yellow-400',
		hideDismiss: true,
		classes: 'rounded-2xl border-black border-2 border-b-4 border-r-4 font-semibold',
		timeout: 8000
	};
	import { supabaseClient } from '$lib/supabaseClient';
	const toastStore = getToastStore();

	/* 	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher(); */

	export let data: any;

	let { supabase } = data;

	$: ({ supabase } = data);

	let showEmailSignUp: boolean = false;

	let email: string;
	let password: string;
	let showSignUpFeedback: boolean;

	const handleSignUp = async () => {
		let res = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${location.origin}/auth/callback`
			}
		});
		/* console.log('Sign up');
		console.log(data.session);
		console.log(res); */
		if (!res.error && res.data) {
			/* showSignUpFeedback = true; */
			toastStore.trigger(checkMailToast);
			// s

			/* const auth_uid = res.data.user.id; //session.
			const name = res.data.user.email;
			const { error } = await supabase.from('user').insert({ auth_id: auth_uid, username: name });
			console.log(error); */
		}
	};

	const handleSignIn = async () => {
		let res = await supabase.auth.signInWithPassword({
			email,
			password
		});
		/* console.log('Sign in');
		console.log(data.session);
		console.log(res); */
	};
</script>

<div class="my-16">
	{#if !showEmailSignUp}
		<section class="sign-up">
			<h2 class="font-bold text-4xl">Sign up today</h2>
			<p class="text-xl">Save your favorite plants <br /> with an account</p>

			<div class="flex flex-col gap-y-2 mt-16">
				<button
					on:click={() => (showEmailSignUp = true)}
					class="bg-white block rounded-lg border-black border border-b-4 p-2 text-center font-bold"
					>Sign up with Email</button
				>
				<a
					class="bg-white block rounded-lg border-black border border-b-4 p-2 text-center font-bold"
					href="#a">Sign up with Google</a
				>
				<a
					class="bg-white block rounded-lg border-black border border-b-4 p-2 text-center font-bold"
					href="#a">Sign up with Apple</a
				>
			</div>
			<!-- 	<button class="block text-center underline my-8" on:click={() => dispatch('skipLogin')}
				>Skip for now</button
			> -->
		</section>
	{:else}
		<button class="underline my-4" on:click={() => (showEmailSignUp = false)}>
			Back to other signup method
		</button>
		<h2 class="font-bold text-4xl">Sign up by E-mail</h2>
		<form on:submit={handleSignUp} class="flex flex-col gap-2 my-8">
			<div
				class="flex flex-col gap-2 w-full bg-white border-black border-2 border-b-4 border-r-4 rounded-lg p-2 px-4"
			>
				<label for="email">Email</label>
				<input
					name="email"
					class="w-full border-t-0 border-l-0 border-r-0 border-black border-b-2"
					bind:value={email}
				/>
				<label for="password">Password</label>
				<input
					type="password"
					name="password"
					class="w-full border-t-0 border-l-0 border-r-0 border-black border-b-2"
					bind:value={password}
				/>
			</div>
			{#if !data.session}
				<button class="btn bg-yellow-400 border-black border-2 border-b-4 border-r-4 rounded-lg"
					>Sign up</button
				>
			{/if}
		</form>

		{#if showSignUpFeedback}
			<!-- content here -->
		{/if}

		<button
			class="btn w-full bg-white border-black border-2 border-b-4 border-r-4 rounded-lg"
			on:click={handleSignIn}>Sign in</button
		>
	{/if}
</div>
