<script lang="ts">
	// your script goes here
	import { goto } from '$app/navigation';
	import { questionIndexStore, nextQuestion } from '../../stores/questionIndexStore';
	import { page } from '$app/stores';
	import type { Question } from '../../app';
	export let question: Question = {
		title: '',
		type: '',
		answers: [],
		answerValues: []
	};
	export let index: number;

	export function answerQuestion(answerValue: number) {
		let query = new URLSearchParams($page.url.searchParams.toString());
		query.set('question', (index + 1).toString());
		query.set(question.type, answerValue.toString());
		goto(`?${query.toString()}`);

		nextQuestion();
	}

	export function skipQuestion() {
		let query = new URLSearchParams($page.url.searchParams.toString());

		query.set('question', (index + 1).toString());

		goto(`?${query.toString()}`);
		nextQuestion();
		//goto(`/wizard?question=${index + 1}`);
	}
</script>

<div class="flex flex-col justify-between h-full my-4">
	<div class="flex flex-col justify-between h-full">
		<div>
			<p class="text-sm font-bold">Question {index + 1}</p>
			<h2 class="text-3xl mb-16 font-bold">{question.title}</h2>
			<div class="answer-box flex flex-col gap-2">
				{#each question.answers as answer, index}
					<!-- content here -->
					<button
						on:click={() => answerQuestion(question.answerValues[index])}
						type="button"
						class=" block rounded-lg border-black border border-b-4 border-r-4 p-2 text-center font-bold"
					>
						{answer}
					</button>
				{/each}
				<button type="button" class="btn font-bold w-full" on:click={() => skipQuestion()}>
					Skip Question 👉
				</button>
			</div>
		</div>
		<div />
	</div>
	<!-- 	<div>
		<div class="flex flex-col gap-2">
			<button type="button" class="btn underline">Skip</button>
		</div>
	</div> -->
</div>
