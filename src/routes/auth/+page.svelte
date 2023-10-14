<script lang="ts">
	import { Toast, getToastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings, ToastStore } from '@skeletonlabs/skeleton';
	const toast: ToastSettings = {
		message: "Awesome! Confirm your email address by clicking on the link we've sent to you.",
		// Provide any utility or variant background style:
		background: 'bg-secondary',
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
		if (!data.session) {
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
				toast.message =
					"Awesome! Confirm your email address by clicking on the link we've sent to you.";
				toastStore.trigger(toast);
				// s

				/* const auth_uid = res.data.user.id; //session.
			const name = res.data.user.email;
			const { error } = await supabase.from('user').insert({ auth_id: auth_uid, username: name });
			console.log(error); */
			} else {
				toast.message = 'Something went wrong. Please try again later';
				toast.background = 'bg-error';
				toastStore.trigger(toast);
			}
		}
	};


</script>

<div class="my-16">
	<section class="sign-up font-semibold">
		<h2 class="font-bold text-4xl my-4">Register</h2>
		<p class="text-xl">Save your favorite plants <br /> with a bloombase account</p>

		<div class="flex flex-col gap-y-2 cardbox mb-8">
			<form on:submit={handleSignUp} class="flex flex-col gap-2">
				<div class="flex flex-col gap-2">
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
					<div class="flex flex-col items-center mt-6">
						<button
							class="btn bg-primary border-black border-2 border-b-4 border-r-4 rounded-lg w-full font-bold text-bg"
							>Register</button
						>
					</div>
				</div>
			</form>

			{#if showSignUpFeedback}
				<!-- content here -->
			{/if}

			<!-- 	<a
					class="bg-white block rounded-lg border-black border border-b-4 p-2 text-center font-bold"
					href="#a">Sign up with Apple</a
				> -->
		</div>
		<div class="font-semibold">
			<p>Already have an account?</p>
			<a href="/login" class="underline text-secondary">Click here to login</a>
		</div>
		<!-- 	<a
				class="bg-primary block rounded-lg border-black border border-b-4 p-2 text-center font-bold"
				href="#a">Sign up with Google</a
			> -->
		<!-- 	<button class="block text-center underline my-8" on:click={() => dispatch('skipLogin')}
				>Skip for now</button
			> -->
	</section>
</div>
