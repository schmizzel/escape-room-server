<script lang="ts">
    import UpdateBar from "./UpdateBar.svelte";
    import Window from "./Window.svelte";

    let state: 'Updating' | 'Ready' = 'Updating'
    let isUpdating = false
    let isRunning = false
    const addr = 'ws://192.168.1.1:3000/wss'
    const host = 'http://192.168.1.1'
    
    const socket = new WebSocket(addr);
    // Listen for messages
    socket.addEventListener('message', (event) => {
        const response = JSON.parse(event.data)
        if (['Updating', 'Ready'].includes(response.state)) {
            state = response.state
        }
    });

    function onClick() {
        if (isRunning) {
            stop()
        } else {
            start()
        }
    }

    function start() {
        isRunning = true
        fetch(`${host}/api/start`, { method: 'POST' })
            .then(res => res.json())
            .then(json => console.log('laser started'))
            .catch(err => console.error(err))
    }

    function stop() {
        isRunning = false
        fetch(`${host}/api/stop`, { method: 'POST' })
            .then(res => res.json())
            .then(json => console.log('laser stopped'))
            .catch(err => console.error(err)) 
    }
</script>

<Window title="Laser">
    <div class="py-6 px-16 flex flex-col items-center gap-6">
        {#if state === 'Updating'}
            <div class="flex gap-4">
                <img class="h-16" src="assets/warning.png" alt="Laser Warning">
                <div>
                    <h1 class="text-3xl">Laser</h1>
                    <h2 class="text-lg">Update required</h2>
                </div>
            </div> 
            {#if isUpdating}
                <UpdateBar/>
                <button class="btn" on:click={() => isUpdating = false}>Cancel</button>
            {:else}
                <button class="btn" on:click={() => isUpdating = true}>Start Update</button>
            {/if}
        {/if}
        {#if state === 'Ready'}
            <div class="flex gap-4">
                <img class="h-16" src="assets/warning.png" alt="Laser Warning">
                <div>
                    <h1 class="text-3xl">Laser</h1>
                    <h2 class="text-lg">Ready</h2>
                </div>
            </div> 
            <button class="btn" style="padding: 0 20px;" on:click={onClick}>
                {#if isRunning}Stop{:else}Start{/if}
            </button>
        {/if}
    </div>
</Window>