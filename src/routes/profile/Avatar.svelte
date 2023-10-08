<!-- src/routes/account/Avatar.svelte -->
<script lang="ts">
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import type { SupabaseClient } from '@supabase/supabase-js';
	import { createEventDispatcher } from 'svelte';

	export let size = 10;
	export let url: string;
	export let supabase: SupabaseClient;

	let avatarUrl: string | null = null;
	let uploading = false;
	let files: FileList;

	const dispatch = createEventDispatcher();

	const downloadImage = async (path: string) => {
		try {
			const { data, error } = await supabase.storage.from('avatars').download(path);

			if (error) {
				throw error;
			}

			const url = URL.createObjectURL(data);
			avatarUrl = url;
		} catch (error) {
			if (error instanceof Error) {
				console.log('Error downloading image: ', error.message);
			}
		}
	};

	const uploadAvatar = async () => {
		try {
			uploading = true;

			if (!files || files.length === 0) {
				throw new Error('You must select an image to upload.');
			}

			const file = files[0];
			const fileExt = file.name.split('.').pop();
			const filePath = `${Math.random()}.${fileExt}`;

			let { error } = await supabase.storage.from('avatars').upload(filePath, file);

			if (error) {
				throw error;
			}

			url = filePath;

			setTimeout(() => {
				dispatch('upload');
			}, 200);
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			uploading = false;
		}
	};

	$: if (url) downloadImage(url);
</script>

<div>
	<label for="single" class="flex justify-center flex-col">
		{#if uploading}
			<div
				class="flex justify-center items-center avatar image rounded-full border-black border-2 border-b-4 border-r-4 h-64 w-64 bg-secondary"
			>
				<ProgressRadial stroke={50} meter="stroke-white" track="stroke-black" class="" />
			</div>
		{:else if avatarUrl}
			<img
				src={avatarUrl}
				alt={avatarUrl ? 'Avatar' : 'No image'}
				class="avatar image object-cover rounded-full border-black border-2 border-b-4 border-r-4 h-64 w-64"
			/>
		{:else}
			<div
				class="avatar no-image rounded-full border-black border-2 border-b-4 border-r-4 h-64 w-64"
			/>
		{/if}
	</label>
	<input type="hidden" name="avatarUrl" value={url} />

	<div>
		<!-- 		<label
			class="button primary block bg-secondary p-2 border-black border-2 border-r-4 border-b-4 rounded-lg text-center"
			for="single"
		>
			{uploading ? 'Uploading ...' : 'Upload Image'}
		</label> -->
		<input
			style="visibility: hidden; position:absolute;"
			type="file"
			id="single"
			accept="image/*"
			bind:files
			on:change={uploadAvatar}
			disabled={uploading}
		/>
	</div>
</div>
