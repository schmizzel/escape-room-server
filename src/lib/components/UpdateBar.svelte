<script lang="ts">
    import { onMount } from "svelte";

    export let interval = 1000
    let isHidden = false

    onMount(() => {
        const ref = setInterval(() => isHidden = !isHidden, interval)
        return () => {
            clearInterval(ref)
        }
    })
</script>

<div class="w-full">
    <div class="w-full h-6 windows-box-shadow">
        <div class="absolute h-6 w-4 bg-windows-blue" hidden={isHidden}></div>
    </div>
    <div class="flex justify-between my-1">
        <span>Time remaining:</span><span>25 years</span>
    </div>
</div>