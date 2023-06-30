<script>
	// import { onMount, onDestroy } from 'svelte';

	// let connectionStatus = 0;

	// let ws = null;

	// onMount(() => {
	//     // create new WebSocket connection
	//     ws = new WebSocket("ws://localhost:8901");

	//     // connection established
	//     ws.addEventListener('open', function(event) {
	//         // send message to server to subscribe to "unit1"
	//         console.log('Connecting to server - subscribing to E3')
	//         ws.send(JSON.stringify({ type: 'subscribe', unit: 'E3' }));
	//         connectionStatus = 1;
	//     });

	//     // message received
	//     ws.addEventListener('message', function(event) {
	//         console.log('Message from server ', event.data);
	//         let msg = JSON.parse(event.data);
	//         if (msg.type === 'update') {
	//             console.log(`Received update for unit ${msg.unit}: ${JSON.stringify(msg.update, null, 2)}`);
	//         }
	//     });

	//     // error occurred
	//     ws.addEventListener('error', function(event) {
	//         console.error('WebSocket error: ', event);
	//     });

	//     // connection closed
	//     ws.addEventListener('close', function(event) {
	//         console.log('Server connection closed ', event.code);
	//         connectionStatus = 0;
	//     });
	// });

	// // cleanup WebSocket connection when component unmounts
	// onDestroy(() => {
	//     console.log('WebSocket connection closed');
	//     if (ws)
	//         ws.close();
	// });
	import { unitStatus } from '$lib/stores';
</script>

<!-- component markup -->
<div>
	<h1>
		{#if $unitStatus}
			<span style="color: green;">Connected</span>
		{:else}
			<span style="color: red;">Disconnected</span>
		{/if}
		<!-- {#if $unitStatus}
			{$unitStatus.status}
		{:else}
			{#await $unitStatus}
				<span>Connecting...</span>
			{:then}
				{$unitStatus.status}
			{:catch error}
				<span style="color: red;">Error: {error.message}</span>
			{/await}
		{/if} -->
	</h1>
</div>
