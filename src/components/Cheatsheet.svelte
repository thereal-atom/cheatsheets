<script lang="ts">
    import type Data from "../types/data";
        
    export let data: Data;
</script>

<div
    class="sm:px-16 px-8"
    id={data.title}
>
    <p class="font-black sm:text-5xl text-4xl sm:my-20 my-12">{data.title}</p>
    <p class="font-bold text-2xl my-4 underline">Key</p>
    {#if data.key}
        {#each data.key as key}
            <p>{key.key} - {key.meaning}</p>
        {/each}
    {/if}
    {#each data.sections as section}
        <p class="font-bold text-2xl my-4 underline">{section.title}</p>
        <div class="flex flex-col">
            {#each section.cheats as cheat}
                <div class="flex flex-col">
                    <p class="font-black">{cheat.title}</p>
                    {#each cheat.methods as method}
                        <p>{method}</p>
                    {/each}
                </div>
            {/each}
        </div>
    {/each}
</div>
<hr class="sm:mt-24 mt-16 w-screen"/>