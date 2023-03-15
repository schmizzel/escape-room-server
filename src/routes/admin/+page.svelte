<script lang="ts">
    function openBox() {
        fetch('http://192.168.1.1:3000/api/open', { method: 'GET' })
            .then(res => res.json())
            .then(json => console.log('box opened'))
            .catch(err => console.error(err))
    }

    function setState(state) {
        fetch('http://192.168.1.1:3000/api/setState', { 
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                state,
            })
        })
            .then(res => res.json())
            .then(json => console.log('box opened'))
            .catch(err => console.error(err)) 
    }
</script>

<div class="absolute w-full h-full flex justify-center items-center bg-windows-background"> 
    <div class="flex gap-4 text-3xl">
        <button class="btn bg-windows-gray-dark" on:click={openBox}>Open box</button>
        <button class="btn bg-windows-gray-dark" on:click={() => setState('Ready')}>Set Ready</button>
        <button class="btn bg-windows-gray-dark" on:click={() => setState('Updating')}>Set Updating</button>
    </div>
</div>

