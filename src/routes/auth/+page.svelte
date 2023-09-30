<!-- // src/routes/auth/+page.svelte -->
<script lang="ts">
	export let data;
	let { supabase } = data;

	$: ({ supabase } = data);

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
		console.log('Sign up');
		console.log(data.session);
		console.log(res);
		if (!res.error && res.data) {
			showSignUpFeedback = true;
		}
	};

	const handleSignIn = async () => {
		let res = await supabase.auth.signInWithPassword({
			email,
			password
		});
		console.log('Sign in');
		console.log(data.session);
		console.log(res);
	};

	const handleSignOut = async () => {
		let res = await supabase.auth.signOut();
		console.log('Sign out');
		console.log(data.session);
		console.log(res);
	};
</script>

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
	Awesome! Confirm your email address by clicking on the link we've sent to you.
{/if}

<button
	class="btn w-full bg-white border-black border-2 border-b-4 border-r-4 rounded-lg"
	on:click={handleSignIn}>Sign in</button
>

{#if data.session}
	<!-- content here -->
	<button
		class="btn bg-white border-black border-2 border-b-4 border-r-4 rounded-lg"
		on:click={handleSignOut}>Sign out</button
	>
{/if}
