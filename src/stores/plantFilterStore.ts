import { writable, get } from 'svelte/store';

const baseFilter: PlantFilter = {
	experience: 2,
	water_frequency: 2,
	light_level: 2,
	pet_friendly: true
};

export const plantFilterStore = writable<PlantFilter>(baseFilter);

export function setFilter(newFilter: PlantFilter) {
	plantFilterStore.set(newFilter);

	/* console.log('filters');
	console.log(get(plantFilterStore)); */
}

export function resetFilter() {
	plantFilterStore.update(() => baseFilter);
}

export function getFilter() {
	return get(plantFilterStore);
}
