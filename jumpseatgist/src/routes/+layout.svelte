<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	import Footer from '../components/Footer.svelte';
	import Connect from '../components/Connect.svelte';
	import Status from '../components/Status.svelte';

	import { connectWebSocket } from './socket.js';

	onMount(() => {
		connectWebSocket();
	});
	// connectWebSocket();
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead"><Connect /></svelte:fragment>
			<svelte:fragment slot="default">
				<Status />

				<!-- https://www.skeleton.dev/utilities/popups#combobox -->
				<button class="btn variant-ghost-primary">E3</button>
			</svelte:fragment>

			<svelte:fragment slot="trail">
				{#if $page.url.pathname.includes('settings')}
					<a href="/">🏡</a>
				{:else}
					<a href="/settings">⚙️</a>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<slot />

	<svelte:fragment slot="footer">
		<Footer />
	</svelte:fragment>
</AppShell>
