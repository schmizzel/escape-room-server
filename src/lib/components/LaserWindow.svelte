<script lang="ts">
    import UpdateBar from "./UpdateBar.svelte";
    import Window from "./Window.svelte";

    let state: 'Updating' | 'Ready' = 'Ready'
    let isUpdating = false
    let isRunning = false

    
    const socket = new WebSocket('ws://localhost:3000/wss');
    // Listen for messages
    socket.addEventListener('message', (event) => {
        const response = JSON.parse(event.data)
        if (['Updating', 'Ready'].includes(response.state)) {
            state = response.state
        }
    });
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
            <button class="btn" style="padding: 0 20px;" on:click={() => isRunning = !isRunning}>
                {#if isRunning}Stop{:else}Start{/if}
            </button>
        {/if}
    </div>
</Window>