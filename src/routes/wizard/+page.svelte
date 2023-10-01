<script lang="ts">
	import QuestionCard from '../../components/QuestionCard.svelte';
	import LoadResults from '../../components/LoadResults.svelte';
	import type { PageData } from './$types';
	import { questionIndexStore } from '../../stores/questionIndexStore';
	import ProgressBar from '../../components/ProgressBar.svelte';

	//7 fragen abspeichern
	//
	import { page } from '$app/stores';
	export let data;
	let questions: Array<Question> = [
		{
			title: 'How experienced are you with plants?',
			type: 'experience',
			answers: [
				"I'm basically a Botanical Connoisseur 🧐",
				'I can keep a few plants alive 🌱',
				'I have a PhD in plant demise 🎓'
			],
			answerValues: [2, 1, 0]
		},
		{
			title: 'How much sunlight would your plants get?',
			type: 'light',
			answers: ["I'm drowning in sunlight 😎", 'I get it then and there', "What's sunlight?! 🤔"],
			answerValues: [2, 1, 0]
		},

		{
			title: 'Do you have pets that chew on plants?',
			type: 'pets',
			answers: ['Yes, they love to munch 😱', 'No plant eaters ❌'],
			answerValues: [1, 0]
		},
		{
			title: 'Are you a person that has time to water?',
			type: 'watering',
			answers: [
				'Yes I got all the time in the world 🌎',
				'I might have a minute or two!',
				'I can barely sit down 😩'
			],
			answerValues: [2, 1, 0]
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
	let loadResults: boolean = false;
</script>

<div>
	{#if currentQuestionIndex <= lastQuestionIndex}
		<div class="mt-8" />
		<!-- <progress value={currentQuestionIndex + 1} max={lastQuestionIndex + 2} /> -->
		<ProgressBar maxValue={lastQuestionIndex + 1} value={currentQuestionIndex} />
		<div class="mt-16" />
		<QuestionCard question={questions[currentQuestionIndex]} index={currentQuestionIndex} />
	{:else}
		<LoadResults />
	{/if}
</div>
