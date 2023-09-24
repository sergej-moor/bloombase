import { supabase } from '$lib/supabaseClient';

import { setFilter } from '../../stores/plantFilterStore.js';

export const load = async ({ url }) => {
	//get filters from url
	const searchParams = url.searchParams;
	/* console.log(searchParams); */

	const filter: PlantFilter = {
		water_frequency: 0,
		light_level: 0,
		pet_friendly: false,
		experience: 0
	};

	for (const [key, val] of searchParams) {
		switch (key) {
			case 'experience':
				filter.experience = parseInt(val);
				break;
			case 'light':
				filter.light_level = parseInt(val);
				break;
			case 'watering':
				filter.water_frequency = parseInt(val);
				break;
			case 'pets':
				filter.pet_friendly = val === '0' ? false : true;
				break;
			default:
				break;
		}
	}

;

	setFilter(filter);

	//fetch call or graphql client

	const { data } = await supabase.from('plants').select();
	return {
		plants: data ?? [],
		filters: filter,
	};
};
