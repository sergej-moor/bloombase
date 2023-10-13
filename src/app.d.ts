// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
import 'unplugin-icons/types/svelte';

import { SupabaseClient, Session } from '@supabase/supabase-js';
import { Database } from './DatabaseDefinitions';

declare global {
	namespace App {
		interface Locals {
			supabase: SupabaseClient<Database>;
			getSession(): Promise<Session | null>;
		}
		interface PageData {
			session: Session | null;
		}
		// interface Error {}
		// interface Platform {}
	}
}
interface Question {
	title: string;
	type: string; //used to know about which attribute this question is about
	answers: Array<string>;
	answerValues: Array<number>;
}

interface PlantFilter {
	experience: number;
	water_frequency: number;
	light_level: number;
	pet_friendly: boolean;
}

interface PlantCard {
	id: number;
	latin: string;
	name: string;
	category: string;
	cover_img: string;
	light_level: number;
	watering_frequency: number;
	pet_friendly: boolean;
	experience: number;
	use: Array<string>;
	liked: boolean;
}

interface Plant {
	id: number;
	latin: string;
	family: string;
	name: string;
	category: string;
	origin: string;
	climate: string;
	tempmax: number;
	tempmin: number;
	ideallight: string;
	toleratedlight: string;
	watering: string;
	insects: string;
	diseases: string;
	use: Array<string>;
	cover_img: string;
	light_level: number;
	watering_frequency: number;
	pet_friendly: boolean;
	experience: number;
}
import { SupabaseClient, Session } from '@supabase/supabase-js';
import { Database } from './DatabaseDefinitions';
