<script>
    let {img,imageScript,title,caption,footer,fontColor} = $props();


</script>

    <div class="flex flex-row justify-between items-start md:items-stretch mt-8 lg:m-0">
        <div class="w-1/3 mr-4 md:mr-6">
            <img src={img} alt={imageScript} class="size-full">
        </div>
        <div class="w-2/3">
            <p class="font-semibold text-xs lg:text-base mb-2 {fontColor}">{title}</p>
            <p class="font-semibold text-base md:text-xl mb-2 lg:mb-4 {fontColor} ">{caption}</p>
            <p class="text-xs font-semibold {fontColor} ">{footer}</p>
        </div>
    </div>
    


