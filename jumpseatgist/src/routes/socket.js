// import WebSocket from "ws";

// import { writable } from 'svelte/store';

// create writable store
// export const updateStore = writable(null);


import { unitStatus } from "$lib/stores";

// WebSocket connection function
export function connectWebSocket() {
    const ws = new WebSocket("ws://localhost:8901");

    ws.addEventListener('open', function(event) {
        console.log('Connecting to server - subscribing to E3')
        ws.send(JSON.stringify({ type: 'subscribe', unit: 'E3' }));
    });

    ws.addEventListener('message', function(event) {
        console.log('Message from server ', event.data);
        let msg = JSON.parse(event.data);
        if (msg.type === 'update') {
            console.log(`Received update for unit ${msg.unit}: ${JSON.stringify(msg.update, null, 2)}`);
            // update the store with the new data
            unitStatus.set(msg.update);
        }
    });

    ws.addEventListener('error', function(event) {
        console.error('WebSocket error: ', event);
    });

    ws.addEventListener('close', function(event) {
        console.log('Server connection closed ', event.code);
    });

    return ws;
}
