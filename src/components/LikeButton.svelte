<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import IconBaselineFavorite from '~icons/ic/baseline-favorite';
	const dispatch = createEventDispatcher();
	export let liked: boolean;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	on:click={() => {
		dispatch('toggleLike');
	}}
	class="m-2 absolute top-0"
>
	<div>
		<IconBaselineFavorite class="text-black h-8 w-8 absolute top-0.5 left-0.5" />
	</div>
	<IconBaselineFavorite
		class={liked ? 'text-secondary h-8 w-8 absolute ' : 'text-gray-300 h-8 w-8 absolute'}
	/>
</div>
