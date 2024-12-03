<script>

    let {image1,script1,title1, image2,script2,title2, image3, script3} = $props();

</script>


<div class="w-full 
            lg:mr-4
            lg:w-1/2
            flex
            flex-col 
            justify-between">
        <div class="flex flex-row justify-between items-start w-full">
            <div class="w-1/2 mr-2 md:mr-4  flex flex-col ">
                <img src={image1} class="size-full " alt={script1}>
                <p class="text-center 
                        text-xs 
                        font-semibold
                        md:text-sm
                        lg:text-base
                        my-6
                        ">
                        {@html title1}
                </p>
            </div>
            <div class="w-1/2 ml-2 md:ml-4 flex flex-col ">
                <img src={image2} alt={script2} class="size-full">
                <p class="text-center 
                        text-xs
                        font-semibold
                        md:text-sm
                        lg:text-base
                        my-6  
                        ">
                        {@html title2}
                </p>
            </div>
        </div>
        <div class="pt-4 w-full ">
            <img src={image3} alt={script3} class="size-full">
        </div>
</div>