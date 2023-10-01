<script lang="ts">
	export let data;
	let { supabase } = data;
	console.log('session:');
	console.log(data.session);
</script>

<div class="my-8 mx-8 flex flex-col justify-between h-[80vh] gap-y-4">
	<div
		class="flex flex-col items-center bg-white p-4 border-black border-2 border-r-4 border-b-4 rounded-lg"
	>
		<img
			src="https://picsum.photos/200"
			class="rounded-full border-black border-2 border-b-4 border-r-4"
			alt=""
		/>
		<!-- <label for="username" class="text-lg">Username</label> -->
		<input
			type="text"
			name="username"
			class="w-full border-t-0 border-l-0 border-r-0 border-black border-b-2 text-center"
			placeholder="Username"
		/>
	</div>

	<div
		class="flex flex-col bg-yellow-400 p-4 border-black border-2 border-r-4 border-b-4 rounded-lg"
	>
		<!-- 	<h2>My Collection</h2> -->
		<a class="text-xl font-bold text-center block" href="/collection">Go to my collection -></a>
	</div>

	<button class=" bg-white p-2 font-bold border-black border-2 border-r-4 border-b-4 rounded-lg"
		>Sign out</button
	>
</div>
