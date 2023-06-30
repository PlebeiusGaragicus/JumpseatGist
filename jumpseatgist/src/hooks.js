// src/hooks.js
import { get } from 'svelte/store';
import WebSocket from 'ws';
import session from '$app/stores'; // SvelteKit's session store

// Open WebSocket connections
const socket1 = new WebSocket('ws://example.com/socket1');
const socket2 = new WebSocket('ws://example.com/socket2');

// Handle socket messages
socket1.on('message', (data) => {
    // Handle data
    // You can store it in session if you need to make it available to your endpoints
    session.set({ socket1Data: data });
});

socket2.on('message', (data) => {
    // Handle data
    session.set({ socket2Data: data });
});

export async function getSession(request) {
    return get(session); // SvelteKit uses this for session data
}
