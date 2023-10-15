<script lang="ts">
	/** @type {import('./$types').ActionData} */
	export let form;

	import { Toast, getToastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings, ToastStore } from '@skeletonlabs/skeleton';
	const toast: ToastSettings = {
		message: "Awesome! Confirm your email address by clicking on the link we've sent to you.",
		// Provide any utility or variant background style:
		background: 'bg-primary',
		hideDismiss: true,
		classes: 'rounded-2xl border-black border-2 border-b-4 border-r-4 font-bold text-bg',
		timeout: 5000
	};
	const toastStore = getToastStore();

	if (form?.success) {
		toast.message = 'Successfully send message!';
		toastStore.trigger(toast);
	}

	if (form?.error) {
		toast.message = 'An error appeared. ' + form?.error;
		toastStore.trigger(toast);
	}
</script>

<svelte:head>
	<title>Contact - bloombase</title>
	<meta name="description" content="Contact page for Bloombase" />
</svelte:head>
<div class="my-8">
	<h2 class="text-6xl h1 pl-2">Contact</h2>
	<p class="p-2 text-lg">
		Do you have any questions or suggestions? Feel free to write an message below!
	</p>
	<form class="cardbox flex flex-col gap-y-1" action="?/send" method="post">
		<!-- 	<h2 class="pl-2 text-lg font-bold text-center">Contact Form</h2> -->
		<!-- Replace with accesKey sent to your email -->

		<!-- Required -->
		<label for="name" class="font-bold pl-2">Name</label>
		<input
			type="text"
			class="cardbox p-2 mb-2 focus:border-primary"
			placeholder="Name"
			name="name"
		/>
		<!-- Optional -->
		<label for="subject" class="font-bold pl-2">Subject</label>
		<input type="text" class="cardbox p-2 mb-2 focus:border-primary" name="subject" />
		<!-- Optional -->
		<label for="email" class="font-bold pl-2">Email</label>
		<input type="text" class="cardbox p-2 mb-2 focus:border-primary" name="email" />
		<!-- Optional -->
		<label for="phone" class="font-bold pl-2">Telephone</label>
		<input type="text" class="cardbox p-2 mb-2 focus:border-primary" name="phone" />
		<!-- Optional -->
		<label for="message" class="font-bold pl-2">Message</label>
		<textarea class="cardbox p-2 mb-2 h-32 min-h-full focus:border-primary" name="message" />
		<!-- Optional -->
		<!-- If you want replyTo to be set to specific email -->
		<!-- <input type="text" name="replyTo" value="myreplytoemail@example.com" /> -->
		<!-- Optional -->
		<!-- Specify @ as reply to value if you want it to be customers email -->
		<!-- 	<input type="hidden" name="replyTo" value="@" /> -->
		<!-- Optional -->
		<!-- If you want form to redirect to a specific url after submission -->
		<!-- <input type="hidden" name="redirectTo" value="https://example.com/contact/success" /> -->
		<!-- <input type="hidden" name="redirectTo" value="/contact?success=true" /> -->
		<!-- Optional -->
		<input type="text" name="honeypot" style="display: none;" />

		<input type="submit" class="cardbox p-2 bg-primary" value="Submit" />
	</form>

	<!-- 	{#if form?.success}

		   <p class="text-center">Successfully send message!</p>
	{/if}

	{#if form?.error}
		
		<p>An error appeared</p>
		<p>{form?.error}</p>
	{/if} -->
</div>
