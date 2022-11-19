<script lang="ts">
    import type Data from "../types/data";
        
    export let data: Data;

    const doesStartWithPrefix = (text: string, prefixes: {
        key: string;
        meaning: string;
    }[]) => {
        let startsWithPrefix = false;

        prefixes.forEach(prefix => {
            if (text.startsWith(prefix.key)) startsWithPrefix = true;
        });

        return startsWithPrefix;
    };
</script>
<div
    class="sm:px-16 px-8"
    id={data.title}
>
    <div class="mb-8">
        <p class="font-black sm:text-5xl text-4xl sm:my-20 my-12 text-indigo-500">{data.title}</p>
        <p class="font-bold text-2xl my-4 underline">Key</p>
        {#if data.key}
            {#each data.key as key}
                <p>{key.key} - {key.meaning}</p>
            {/each}
        {/if}
    </div>
    {#each data.sections as section}
        <p class="font-bold text-2xl my-4 underline">{section.title}</p>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {#each section.cheats as cheat}
                <div class="flex flex-col md:mb-16 mb-8">
                    <code class="font-black text-xs bg-gray-800 w-fit px-2 py-1 rounded-md mb-2">{cheat.title}</code>
                    {#each cheat.methods as method}
                        {#if method === "break"}
                            <p class="text-transparent">x</p>
                        {:else}
                            <p class="font-bold my-1 {doesStartWithPrefix(method, data.key ?? []) || method.startsWith(" ") || !data.key ? "" : "text-gray-600 font-black"}">{method}</p>
                        {/if}
                    {/each}
                </div>
            {/each}
        </div>
    {/each}
</div>
<hr class="sm:mt-24 mt-16 w-screen"/>