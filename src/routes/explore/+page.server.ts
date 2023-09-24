import { supabase } from '$lib/supabaseClient';


export const load = (async () => {
	//fetch call or graphql client
	const { data } = await supabase.from('plants').select();
	return {
		plants: data ?? []
	};
})
