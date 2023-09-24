import type { PageLoad } from './$types';
import { setQuestion } from '../../stores/questionIndexStore';
export const load = (({ url }) => {
	const filters = url.searchParams;

	let questionIndex = url.searchParams.get('question');
	//console.log(filters);

	if (filters.size === 0) {
		filters.append('question', '0');
		questionIndex = '0';
	}

	setQuestion(parseInt(questionIndex !== null ? questionIndex : '0'));

	return {
		filters,
		questionIndex
	};
}) satisfies PageLoad;
