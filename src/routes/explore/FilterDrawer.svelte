<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { ListBox, ListBoxItem, getDrawerStore } from '@skeletonlabs/skeleton';
	import { plantFilterStore, getFilter } from '../../stores/plantFilterStore';
	import IconBaselineClose from '~icons/ic/baseline-close';
	import { SlideToggle } from '@skeletonlabs/skeleton';
	const drawerStore = getDrawerStore();

	function updateUrl(urlQuery: string, value: number | boolean) {
		let query = new URLSearchParams($page.url.searchParams.toString());

		query.set(urlQuery, value.toString());
		goto(`?${query.toString()}`);
	}
	/* 
	function clickOption(event: MouseEvent & { currentTarget: EventTarget & HTMLOptionElement }) {
		event.preventDefault();
		event.currentTarget.selected = !event.currentTarget.selected;
		return false;
	} */
	let selectedCategories: string[] = ['evergreen', 'cactus'];
</script>

<div class="m-4">
	<div class="flex justify-between items-center mb-4">
		<h2 class="text-2xl font-black ml-1">Filter</h2>

		<button on:click={() => drawerStore.close()}>
			<IconBaselineClose class="w-8 h-8 self-end" /></button
		>
	</div>

	<form class="flex flex-col j gap-4 md:max-w-md">
		<!-- 		<h2 class="font-bold">Categories</h2>
		<ListBox multiple class="text-sm font-semibold" active="bg-primary" rounded="rounded-lg">
			<ListBoxItem
				bind:group={selectedCategories}
				name="small"
				value="evergreen"
				class="border-black border-2">Chinese Evergreen</ListBoxItem
			>
			<ListBoxItem
				bind:group={selectedCategories}
				name="medium"
				value="hanging"
				class="border-black border-2">Hanging Plants</ListBoxItem
			>
			<ListBoxItem
				bind:group={selectedCategories}
				name="medium"
				value="cactus"
				class="border-black border-2">Cactus and Succulents</ListBoxItem
			>
		</ListBox> -->
		<!-- 		<label for="category">
			<h2>Categories</h2>
			<select name="category" id="category" multiple>
				<option value="hanging" on:mousedown={(e) => clickOption(e)} selected>Hanging plants</option
				>
				<option value="evergreen" on:mousedown={(e) => clickOption(e)} selected
					>Chinese Evergreen</option
				>
				<option value="cactus" on:mousedown={(e) => clickOption(e)} selected
					>Cactus And Succulents</option
				>
				<option value="fern" on:mousedown={(e) => clickOption(e)} selected>Fern</option>
				<option value="bromeliad" on:mousedown={(e) => clickOption(e)} selected>Bromeliad</option>
				<option value="foliage" on:mousedown={(e) => clickOption(e)} selected>Foliage Plant</option>
				<option value="flower" on:mousedown={(e) => clickOption(e)} selected>Flower</option>
				<option value="dracaena" on:mousedown={(e) => clickOption(e)} selected>Dracaena</option>
				<option value="ficus" on:mousedown={(e) => clickOption(e)} selected>Ficus</option>
				<option value="palm">Palm</option>
				<option value="anthurium">Anthurium</option>
				<option value="philodendron">Philodendron</option>
				<option value="spathiphyllum">Spathiphyllum</option>
				<option value="schefflera">Schefflera</option>
			</select>
		</label> -->
		<!-- 		<label for="">
			<span class="font-bold text-lg">Experience needed</span>
			<div class="flex mt-1">
		
				<input
					type="range"
					class="range mt-1"
					bind:value={$plantFilterStore.experience}
					on:input={() => updateUrl('experience', $plantFilterStore.experience)}
					max="2"
				/>
			
			</div>
		</label> -->
		<label for="">
			<span class="font-bold text-lg">Light needed</span>
			<div class="flex">
				<!-- <span class="w-16">High</span> -->
				<input
					type="range"
					class="range mt-1"
					bind:value={$plantFilterStore.light_level}
					on:input={() => updateUrl('light', $plantFilterStore.light_level)}
					max="2"
				/>
				<!-- 	<span class="w-16 text-end"> Low</span> -->
			</div>
		</label>
		<label for="" class="">
			<span class="font-bold text-lg">Watering needed</span>
			<div class="flex">
				<!-- <span class="w-16"> High</span> -->
				<input
					type="range"
					class="range mt-1"
					bind:value={$plantFilterStore.water_frequency}
					on:input={() => updateUrl('watering', $plantFilterStore.water_frequency)}
					max="3"
				/>
				<!-- 	<span class="w-16 text-end">Low</span> -->
			</div>
		</label>
		<!-- <div class="flex flex-col">
			<span class="font-bold text-lg">Pet friendly / Not chewable for pets</span>
			<SlideToggle
				background="bg-black"
				active="bg-primary"
				rounded="rounded-lg"
				name="slider-label"
				bind:checked={$plantFilterStore.pet_friendly}
				on:change={() => {
					const val = $plantFilterStore.pet_friendly ? '1' : '0';
					updateUrl('pets', val);
				}}
			/>
		</div> -->
	</form>
</div>
