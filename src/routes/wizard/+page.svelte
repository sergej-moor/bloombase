<script lang="ts">
	import QuestionCard from './QuestionCard.svelte';
	import LoadResults from './LoadResults.svelte';
	import type { PageData } from './$types';
	import { questionIndexStore } from '../../stores/questionIndexStore';
	import ProgressBar from './ProgressBar.svelte';

	//7 fragen abspeichern
	//
	import { page } from '$app/stores';
	import type { Question } from '../../app';
	export let data;
	let questions: Array<Question> = [
		{
			title: 'How experienced are you with plants?',
			type: 'experience',
			answers: [
				'I have extensive knowledge of plants 🌿🧐',
				'I can manage a few plants 🌱',
				'I struggle with plant care 🥀'
			],
			answerValues: [2, 1, 0]
		},
		{
			title: 'How much sunlight would your plants get?',
			type: 'light',
			answers: [
				'My plants bask in abundant sunlight ☀️',
				'They get sufficient light 🌤',
				'Sunlight is a mystery to my plants 🌚'
			],
			answerValues: [2, 1, 0]
		},
		/* 		{
			title: 'Do you have pets that chew on plants?',
			type: 'pets',
			answers: ['Yes, they love snacking on my plants 🐶🌿', 'My pets are plant-friendly 🐱❌'],
			answerValues: [1, 0]
		}, */
		{
			title: 'Are you a person that has time to water?',
			type: 'watering',
			answers: [
				'I have plenty of time for plant watering 🌧️',
				'I some time for plant watering 💦',
				'I can spare a minute or two for watering 💧',
				'I have not much time for watering 🕒'
			],
			answerValues: [3, 2, 1, 0]
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
	let surveyStarted: boolean = false;
</script>

<svelte:head>
	<title>Plant Survey - bloombase</title>
	<meta name="description" content="Find your ideal houseplant with the plant survey!" />
</svelte:head>
<div class=" h-full flex flex-col justify-between items-center">
	<div class="lg:max-w-lg">
		{#if surveyStarted}
			<!-- content here -->
			{#if currentQuestionIndex <= lastQuestionIndex}
				<div class="mt-8" />
				<div class="mb-20">
					<ProgressBar maxValue={lastQuestionIndex + 1} value={currentQuestionIndex} />
				</div>
				<QuestionCard question={questions[currentQuestionIndex]} index={currentQuestionIndex} />
			{:else}
				<LoadResults />
			{/if}
		{:else}
			<img
				src="/images/home/home2.png"
				alt=""
				class="z-10 object-contain animate-[spin_10s_ease-in-out_infinite_alternate] w-full"
			/>
			<div class="flex flex-col gap-y-4 my-8 z-50">
				<h2 class="text-4xl font-bold">Let's find some matching plants!</h2>

				<p>Take a short survey to find out which plants would fit for you and your space</p>

				<button
					on:click={() => (surveyStarted = true)}
					class="cardbox p-2 w-full mt-8 font-bold text-bg bg-primary">Let's start now!</button
				>
			</div>
		{/if}
	</div>
</div>
