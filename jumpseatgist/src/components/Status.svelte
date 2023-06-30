<script>
	import { unitStatus } from '$lib/stores.js';
</script>

<button class="btn variant-filled-error">
	{#if $unitStatus}
		{$unitStatus.status}
	{:else}
        ...
		<!-- {#await $unitStatus}
			<span>Connecting...</span>
		{:then}
        <span>{$unitStatus.status}</span>
		{:catch error}
			<span style="color: red;">Error: {error.message}</span>
		{/await} -->
	{/if}
</button>
