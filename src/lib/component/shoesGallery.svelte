<script>
 import { 
         Button,
       } from 'flowbite-svelte';
    let {
        img,imgScript,title
    } =$props();
    
</script>

    <div class="bg-white rounded-xl"> 
        <div class="p-2 pb-4">
            <Button outline color="dark" pill>Super Shoe</Button>
            <Button outline color="dark" pill>9.2</Button>
        </div>
        <div>
            <img src={img} class="size-full" alt={imgScript}>
        </div>
        <div class="flex flex-col items-center mb-4 ">
            <p class="text-lg my-2 text-center">{title}</p>
            <Button class="bg-Header_button_orange w-3/5 mx-auto hover:bg-red-400 my-2" pill>The Preview</Button>
            <Button color="dark" class="my-2 hover:bg-lime-500 w-3/5 mx-auto" outline pill >Buy Now</Button>
        </div>
    </div>
