<script>
	import { onMount } from 'svelte';

	let map1, map2;

	onMount(async () => {
		const L = await import('leaflet');
		// Initialize your maps here. You could use a library like Leaflet or Google Maps API.
		// This is an example with Leaflet.
		map1 = L.map('map1', {
			center: [45.5289418, -122.6885737],
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
</style>
