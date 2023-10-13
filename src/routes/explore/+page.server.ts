import { supabaseClient } from '$lib/supabaseClient';
import { fail, redirect } from '@sveltejs/kit';
import type { PlantFilter } from '../../app';

export const load = async ({ url, locals: { supabase, getSession } }) => {
	const session = await getSession();

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

	let datas;
	//if session
	if (session) {
		//console.log(session.user.id);
		const { data } = await supabaseClient
			.from('houseplants')
			.select(`*,likes(plant_id)`)
			.eq('likes.user_id', session.user.id)
			.limit(10);
		datas = data;
		//console.log(datas);
		//console.log(datas);
	} else {
		const { data } = await supabaseClient.from('houseplants').select().limit(20);
		datas = data;
	}

	return {
		plants: datas ?? [],
		filters: filter,
		session
	};
};
