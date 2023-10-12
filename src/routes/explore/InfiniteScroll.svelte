<script>
	import { onMount, onDestroy, createEventDispatcher } from 'svelte';
	let y;
	export let threshold = 0;
	export let horizontal = false;
	/**
	 * @type {any}
	 */
	export let elementScroll;
	export let hasMore = true;

	const dispatch = createEventDispatcher();
	let isLoadMore = false;
	/**
	 * @type {HTMLDivElement}
	 */
	let component;

	$: {
		if (component || elementScroll) {
			//const element = elementScroll ? elementScroll : component.parentNode;
			//console.log(element);
			const element = document.getElementById('page');
			element.addEventListener('scroll', onScroll);
			element.addEventListener('resize', onScroll);
		}
	}

	const onScroll = (e) => {
		const offset = horizontal
			? e.target.scrollWidth - e.target.clientWidth - e.target.scrollLeft
			: e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop;

		if (offset <= threshold) {
			if (!isLoadMore && hasMore) {
				dispatch('loadMore');
			}
			isLoadMore = true;
		} else {
			isLoadMore = false;
		}
	};

	onDestroy(() => {
		if (component || elementScroll) {
			const element = elementScroll ? elementScroll : component.parentNode;

			element.removeEventListener('scroll', null);
			element.removeEventListener('resize', null);
		}
	});
</script>

<div bind:this={component} style="width:0px" />
