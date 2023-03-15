<script lang="ts">
    export let title: String
</script>

<div class="m-8 w-fit bg-windows-gray-dark windows-box-shadow">
    <div class="bg-windows-blue">
        <p class="text-white px-1">{title}</p>
    </div>
    <slot/>
</div>