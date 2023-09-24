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
	title: string,
	type: string, //used to know about which attribute this question is about
	answers: Array<string>
}