// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

interface Question {
	title: string;
	type: string; //used to know about which attribute this question is about
	answers: Array<string>;
}



interface PlantFilter {
	experience: number;
	water_frequency: number;
	light_level: number;
	pet_friendly: boolean;
}

interface Plant {
	id: number;
	name: string;
	image_url: string;
	light_level: number;
	water_frequency: number;
	pet_friendly: boolean;
	experience: number;
}
