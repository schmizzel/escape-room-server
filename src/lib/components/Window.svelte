<script lang="ts">
    export let title: string
    export let iconPath: string | undefined = undefined 
</script>

<div class="w-fit bg-windows-gray-dark windows-box-shadow">
    <div class="flex items-center bg-windows-blue">
        {#if iconPath}
            <img class="h-6 pl-1" src="{iconPath}" alt="icon">
        {/if}
        <p class="text-white px-1">{title}</p>
    </div>
    <slot/>
</div>