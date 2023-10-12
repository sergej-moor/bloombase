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

	const { data } = await supabaseClient.from('houseplants').select().limit(20);
	/* data?.map((plant) => {
		plant.liked = false;
		
	}) */
	/* 	const { error } = await supabase.from('profiles').upsert({
		id: session?.user.id,
		full_name: fullName,
		username,
		website,
		avatar_url: avatarUrl,
		updated_at: new Date()
	});

	if (error) {
		return fail(500, {
			fullName,
			username,
			website,
			avatarUrl
		});
	}
 */
	/**
	 *
	 * upload image to storage
	 * get url
	 * find id in db and set url to storage thing
	 *
	 */

	return {
		plants: data ?? [],
		filters: filter,
		session
	};
};
