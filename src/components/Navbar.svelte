<script>
    $: isNavbarActive = false;
</script>

<div class="w-full fixed bg-black left-0 p-3 border-b border-solid flex flex-col">
	<p
        class="text-white font-black hover:cursor-pointer transition-all"
        on:click={() => isNavbarActive = !isNavbarActive}
    >
        #
    </p>
    {#if isNavbarActive}
        <div class="mt-4">
            <a class="text-red-50">nav</a>
        </div>
    {/if}
</div>