import { supabase } from '$lib/supabaseClient';

export const load = async ({ params }) => {
	function getPlantId() {
		const firstNumber = new RegExp(/(\d+)/m);
		const id = params.slug.match(firstNumber) ?? ['-1'];
		return parseInt(id[0]);
	}

	const { data } = await supabase.from('plants').select().eq('id', getPlantId());
	const fetchedPlant: Plant = data !== null ? data[0] : {};
	return {
		slug: params.slug,
		plant: fetchedPlant
	};
};
