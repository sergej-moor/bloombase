import { writable, get } from 'svelte/store';

const baseFilter: PlantFilter = {
	experience: 0,
	water_frequency: 0,
	light_level: 0,
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
