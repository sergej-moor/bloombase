import { supabaseClient } from '$lib/supabaseClient';
import type { Plant } from '../../../app';

export const load = async ({ params, locals: { supabase, getSession } }) => {
	const session = await getSession();

	function getPlantId() {
		const firstNumber = new RegExp(/(\d+)/m);
		const id = params.slug.match(firstNumber) ?? ['-1'];
		return parseInt(id[0]);
	}

	const { data } = await supabaseClient.from('houseplants').select().eq('id', getPlantId());
	const plant = data !== null ? data[0] : {};

	const fetchedPlant: Plant = {
		id: plant.id,
		latin: plant.latin,
		family: plant.family,
		name: plant.common,
		category: plant.category,
		origin: plant.origin,
		climate: plant.climate,
		tempmax: plant.tempmax,
		tempmin: plant.tempmin,
		ideallight: plant.ideallight,
		toleratedlight: plant.toleratedlight,
		watering: plant.watering,
		insects: plant.insects,
		diseases: plant.diseases,
		use: plant.use.split(','),
		cover_img: plant.cover_img,
		light_level: plant.light_level,
		watering_frequency: plant.watering_frequency,
		pet_friendly: true,
		experience: 2
	};
	return {
		slug: params.slug,
		plant: fetchedPlant,
		session: session,
		
	};
};
