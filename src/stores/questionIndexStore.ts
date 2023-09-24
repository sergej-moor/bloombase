import { writable, get } from 'svelte/store';

export const questionIndexStore = writable<number>(0);

export function nextQuestion() {
	//question index +1
	questionIndexStore.update(() => get(questionIndexStore) + 1);
}

export function setQuestion(index: number) {
	questionIndexStore.update(() => index);
}
