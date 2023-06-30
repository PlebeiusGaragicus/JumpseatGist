<!-- <script>
	import { onMount } from 'svelte';

	import { unitStatus } from '$lib/stores';
	import { loadEnv } from 'vite';

	let map1, map2;

	// $: lat = $unitStatus.lat;
	// $: lon = $unitStatus.lon;

	onMount(async () => {
		const L = await import('leaflet');
		// Initialize your maps here. You could use a library like Leaflet or Google Maps API.
		// This is an example with Leaflet.

		map1 = L.map('map1', {
			// center: [45.5289418, -122.6885737],
			center: [$unitStatus.lon, $unitStatus.lat],
			zoom: 17,
			dragging: false,
			touchZoom: false,
			scrollWheelZoom: false,
			doubleClickZoom: false,
			boxZoom: false,
			keyboard: false,
			zoomControl: false,
			attributionControl: false
		});
		
		// L.Icon.Default.prototype.options.shadowSize = [0, 0];
		// L.Icon.Default.prototype.options.iconSize = [30, 50];
		// L.Icon.Default.prototype.options.iconUrl = './marker.png';
		// L.Icon.Default.prototype.options.iconRetinaUrl = './marker.png';

		L.marker([45.5289418, -122.6885737]).addTo(map1);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map1);

		map2 = L.map('map2', {
			center: [45.5289418, -122.683],
			zoom: 14,
			dragging: false,
			touchZoom: false,
			scrollWheelZoom: false,
			doubleClickZoom: false,
			boxZoom: false,
			keyboard: false,
			zoomControl: false,
			attributionControl: false
		});

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map2);
	});
</script>


<div style="display: flex; height: 80vh;">
	<div id="map1" class="flex: 1;" style="height: 80vh; width: 50vw;" />
	<div id="map2" class="flex: 1;" style="height: 80vh; width: 50vw;" />
</div>

<slot />


<style>
	@import 'leaflet/dist/leaflet.css';
</style> -->

<script>
	import { onMount } from 'svelte';
	import { unitStatus } from '$lib/stores';
	import { loadEnv } from 'vite';

	let map1, map2;
	let L;
	let lat, lon;

	$: if ($unitStatus && $unitStatus.lat && $unitStatus.lon) {
		lat = $unitStatus.lat;
		lon = $unitStatus.lon;

		// Update the maps whenever there's a change in lat or lon
		if (map1 && map2) {
			updateMaps();
		}
	}

	onMount(async () => {
		L = await import('leaflet');
		initializeMaps();
	});

	function initializeMaps() {
		// Initial map setup goes here
		// Replace previous hard-coded coordinates with the ones from the store
		// The rest of the initialization code stays the same
	}

	function updateMaps() {
		// Code to update the maps when lat or lon changes goes here
		// This might involve moving the center of the map, moving markers, etc.
	}
</script>



<div style="display: flex; height: 80vh;">
	<div id="map1" class="flex: 1;" style="height: 80vh; width: 50vw;" />
	<div id="map2" class="flex: 1;" style="height: 80vh; width: 50vw;" />
</div>

<slot />


<style>
	@import 'leaflet/dist/leaflet.css';
</style>