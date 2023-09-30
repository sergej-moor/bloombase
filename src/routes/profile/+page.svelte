<script lang="ts">
	export let data;
	let { supabase } = data;
	console.log('session:');
	console.log(data.session);
</script>

<div>
	protected priflele site

	<div>
		{supabase}
	</div>
</div>
