<script lang="ts">
	import QuestionCard from '../../components/QuestionCard.svelte';
	import LoadResults from '../../components/LoadResults.svelte';
	import type { PageData } from './$types';
	import { questionIndexStore } from '../../stores/questionIndexStore';

	//7 fragen abspeichern
	//
	import { page } from '$app/stores';

	let questions: Array<Question> = [
		{
			title: 'Experience?',
			type: 'experience',
			answers: ['yes', 'a bit', 'no']
		},
		{
			title: 'Do you have sunlight?',
			type: 'light',
			answers: ['a lot', 'a bit', 'no']
		},
		{
			title: 'Do you have pets?',
			type: 'pets',
			answers: ['yes', 'no']
		},
		{
			title: 'Watering time?',
			type: 'watering',
			answers: ['a lot', 'a bit', 'no']
		}
	];
	const url = $page.url;
	const question = url.searchParams.get('question');
	let currentQuestionIndex: number = 0;

	questionIndexStore.subscribe((value) => {
		currentQuestionIndex = value;
	});
	//question !== null ? parseInt(question) : 0;
	/* console.log(currentQuestionIndex); */

	let lastQuestionIndex: number = questions.length - 1;
</script>

<div>
	{#if currentQuestionIndex <= lastQuestionIndex}
		<progress value={currentQuestionIndex} max={lastQuestionIndex + 1} />
		<QuestionCard question={questions[currentQuestionIndex]} index={currentQuestionIndex} />
	{:else}
		<!-- else content here -->
		<LoadResults />
	{/if}
</div>
