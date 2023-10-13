import { supabaseClient } from '$lib/supabaseClient';
import { fail, redirect } from '@sveltejs/kit';

export const load = async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();
	if (!session) {
		throw redirect(303, '/auth');
	}

	//fetch call or graphql client

	const likedPlants = await supabaseClient
		.from('likes')
		.select('houseplants(*)')
		.eq('user_id', session.user.id);

	const plantsData = likedPlants.data?.map((plant) => {
		plant.houseplants.likes = [1];
		return plant.houseplants;
	});

	/* const { data } = await supabaseClient
		.from('likes')
		.select(`*,houseplants(*)`)
		.eq('houseplants.id', 'likes.plant_id'); */
	/* 	const { data } = await supabaseClient
		.from('houseplants')
		.select('*,likes(*)')
		.eq('likes.user_id', session.user.id); */

	//console.log(data);
	/* data?.map((plant) => {
		plant.liked = false;
		
	}) */
	return {
		plants: plantsData ?? [],

		session
	};
};
