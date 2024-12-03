<script>

    let {image1,script1,title1, image2,script2,title2, image3, script3,title3, image4,script4, title4,fontColor} = $props();

</script>


<div class="w-full 
            flex
            flex-col
            lg:flex-row 
            lg:justify-between
            ">
        <div class="flex flex-row justify-between items-start mx-4 lg:mx-2 w-fit lg:w-1/2 ">
            <div class=" basis-1/2 mr-2 flex flex-col ">
                <img src={image1} class="size-full " alt={script1}>
                <p class="text-center 
                        text-xs 
                        font-semibold
                        md:text-sm
                        lg:text-base
                        my-6
                        {fontColor}
                        ">
                        {@html title1}
                </p>
            </div>
            <div class=" basis-1/2 ml-2 flex flex-col ">
                <img src={image2} alt={script2} class="size-full">
                <p class="text-center 
                        text-xs
                        font-semibold
                        md:text-sm
                        lg:text-base
                        my-6  
                        {fontColor}
                        ">
                        {@html title2}
                </p>
            </div>
        </div>
        <div class="flex flex-row justify-between items-start mx-4 lg:mx-2 w-fit lg:w-1/2">
            <div class="basis-1/2 mr-4 flex flex-col ">
                <img src={image3} class="size-full " alt={script3}>
                <p class="text-center 
                        text-xs 
                        font-semibold
                        md:text-sm
                        lg:text-base
                        my-6
                        {fontColor}
                        ">
                        {@html title3}
                </p>
            </div>
            <div class="basis-1/2  flex flex-col ">
                <img src={image4} alt={script4} class="size-full">
                <p class="text-center 
                        text-xs
                        font-semibold
                        md:text-sm
                        lg:text-base
                        my-6  
                        {fontColor}
                        ">
                        {@html title4}
                </p>
            </div>
        </div>
        
</div>