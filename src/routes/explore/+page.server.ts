import { supabase } from '$lib/supabaseClient';

export const load = async ({ url }) => {
	//get filters from url
	const searchParams = url.searchParams;
	/* console.log(searchParams); */

	const filter: PlantFilter = {
		water_frequency: 2,
		light_level: 2,
		pet_friendly: true,
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

	//fetch call or graphql client

	const { data } = await supabase.from('houseplants').select().limit(50);
	return {
		plants: data ?? [],
		filters: filter
	};
};
