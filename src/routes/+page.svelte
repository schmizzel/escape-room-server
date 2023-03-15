<script>
    import EmailWindow from "$lib/components/EmailWindow.svelte";
import Window from "$lib/components/Window.svelte";
    import { onMount } from "svelte";
    import LaserWindow from "../lib/components/LaserWindow.svelte";

    let now = new Date();
    onMount(() => {
        const interval = setInterval(() => now = new Date(), 1000)
        return () => {
            clearInterval(interval)
        }
    })

    $: time = now.toLocaleTimeString()
</script>

<div class="fixed w-full h-full bg-windows-background">
    <div class="absolute left-16 top-16">
        <LaserWindow/>
    </div>

    <div class="absolute right-32 top-32">
        <EmailWindow/>
    </div>
    
    <div class="absolute bottom-0 w-full h-12 bg-windows-gray-dark windows-box-shadow">
        <div class="absolute left-2 top-2 bottom-2 flex items-center windows-box-shadow w-fit select-none">
            <img src="assets/windows_icon.png" alt="windows">
            <span>START</span>
        </div>

        <div class="absolute flex items-center right-2 top-2 bottom-2 px-4 windows-box-shadow w-fit select-none">
            <span class="text-xl">{time}</span>
        </div>
    </div>
</div>
