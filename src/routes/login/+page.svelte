<!-- // src/routes/login/+page.svelte -->
<script lang="ts">
	import { Toast, getToastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings, ToastStore } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	const toast: ToastSettings = {
		message: 'Login',
		// Provide any utility or variant background style:
		background: 'bg-primary',
		hideDismiss: true,
		classes: 'rounded-2xl border-black border-2 border-b-4 border-r-4 font-bold text-bg',
		timeout: 3000
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

	const handleSignIn = async () => {
		if (!data.session) {
			let res = await supabase.auth.signInWithPassword({
				email,
				password
			});
			if (!res.error && res.data) {
				toast.message = 'Login successful!';
				toastStore.trigger(toast);
				goto('/profile');
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
			/* console.log('Sign in');
		console.log(data.session);
		console.log(res); */
		}
	};
</script>

<div class="my-16">
	<section class="sign-up font-semibold">
		<h2 class="font-bold text-4xl my-4">Login</h2>
		<p class="text-xl">Save your favorite plants <br /> with a bloombase account</p>

		<div class="flex flex-col gap-y-2 cardbox mb-8">
			<form on:submit={handleSignIn} class="flex flex-col gap-2">
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
							>Login</button
						>
					</div>
				</div>
			</form>

			<!-- 	<a
					class="bg-white block rounded-lg border-black border border-b-4 p-2 text-center font-bold"
					href="#a">Sign up with Apple</a
				> -->
		</div>
		<div class="font-semibold">
			<p>No account yet?</p>
			<a href="/auth" class="underline text-secondary">Click here to register</a>
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
