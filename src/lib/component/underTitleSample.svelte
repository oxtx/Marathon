<script>
    let {title,bgcolor,} = $props();
</script>

<div class="px-2 sm:px-8 py-4 w-full lg:px-4 xl:w-Custom_width xl:px-4 xl:mx-auto">
    <div class="{bgcolor}">
        <div class="pt-8
                    mx-2
                    lg:mx-8
                    lg:py-8 
                    text-xl
                    md:text-2xl
                    lg:text-3xl 
                    font-semibold
                     border-b-2 border-black
                    ">{title}
        </div>
        <div class="p-4
                    md:p-8
                    lg:py-8 
                    w-full
                    flex 
                    flex-col 
                    justify-start 
                    items-center
                    lg:flex-row
                    lg:justify-between
                    lg:items-stretch"
        >
            <HalfMarathon {...HalfMarathonData}/>
            <HowToTrain {...FashionablyData} />
           
        </div>
        
    </div>


</div>
