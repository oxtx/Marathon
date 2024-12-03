<script>
    import { 
         Button,
       } from 'flowbite-svelte';
    let {
        bgcolor,
        image,
        imageScript,
        buttoncontent,
        buttonColor,
        headingTitle,
        headingTitleStyle,
        string,
        stringStyle
    } =$props();
</script>

    <div class="w-full
                mt-8
                lg:w-1/2
                lg:mt-0 
                rounded-2xl
                {bgcolor}">
        <div class="p-2 md:p-6">
            <img src={image} alt={imageScript} class="w-full">
        </div>
        <div class=" text-center pt-2 md:pt-0">
            <Button pill 
                    outline 
                    class="px-2 py-0 md:p-2 lg:px-4 {buttonColor}"
                > {buttoncontent}
            </Button>
        </div> 
        
        <p class="text-center
                    py-4
                    {headingTitleStyle}">
                    {@html headingTitle}
        </p>
        <p class=" text-center 
                    text-xs
                    md:text-sm 
                    pb-4 {stringStyle}">
                    {@html string}
        </p>
    </div>