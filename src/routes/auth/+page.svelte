<!-- // src/routes/auth/+page.svelte -->
<script lang="ts">
	export let data;
	let { supabase } = data;

	$: ({ supabase } = data);

	let email: string;
	let password: string;

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

<form on:submit={handleSignUp}>
	<input name="email" bind:value={email} />
	<input type="password" name="password" bind:value={password} />
	<button class="btn bg-white border-black border-2 border-b-4 border-r-4 rounded-lg"
		>Sign up</button
	>
</form>

<button
	class="btn bg-white border-black border-2 border-b-4 border-r-4 rounded-lg"
	on:click={handleSignIn}>Sign in</button
>
<button
	class="btn bg-white border-black border-2 border-b-4 border-r-4 rounded-lg"
	on:click={handleSignOut}>Sign out</button
>
