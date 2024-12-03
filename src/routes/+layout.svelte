<script>
import "../app.css";
import { 
         Button,
         Input,
       } from 'flowbite-svelte';

import Marathon_full_logo from  "../assests/Marathon_full_logo.png";
import SocialIcons from '$lib/utility/SocialIcons.svelte';
import Child from '$lib/customSample/div.svelte';
import {SearchOutline} from 'flowbite-svelte-icons';
import { fade } from 'svelte/transition';

let { children } = $props();

const menus = [
    {name: "Latest",
    href:"/",
    sign: "+"
    },
    {name: "Newsletter",
    href:"/",
    sign: ""
    },
    {name: "Podcast",
    href:"/",
    sign: ""
    },
    {name: "Run Training",
    href:"/",
    sign: "+"
    },
    {name: "For Beginners",
    href:"/",
    sign: "+"
    },
    {name: "Traning By Distance",
    href:"/",
    sign: "+"
    },
    {name: "Traning Plans",
    href:"/",
    sign: "+"
    },
    {name: "Run Calculators",
    href:"/",
    sign: "+"
    },
    {name: "Fitness + Nutrition",
    href:"/",
    sign: "+"
    },
    {name: "Merch",
    href:"/",
    sign: ""
    },
    {name: "About",
    href:"/",
    sign: ""
    },
    {name: "Contact",
    href:"/",
    sign: ""
    },
    {name: "Partnerships",
    href:"/",
    sign: "+"
    }
]

let isShow = $state(false);

function toggleShow() {
    isShow = !isShow;
}</script>


<Child>
    <div class="flex flex-row justify-between items-center w-full bg-transparent">
        <div>
        <img src="{Marathon_full_logo}" class=" w-72 h-8 sm:h-10 sm:w-80 md:h-12 md:w-11/12 lg:h-14 lg:w-full " alt="Marathon Logo" />
        </div>
        <div class="flex flex-row justify-between items-center">
            <div class="hidden xl:block xl:flex-row xl:justify-between xl:items-center">
                <a href="/View/HomePageNew" class="text-base md:text-lg  px-3 2xl:px-4">Latest</a>
                <a href="/View/LandingPage" class="text-base md:text-lg  px-3 2xl:px-4">Training</a>
                <a href="/" class="text-base md:text-lg  px-3 2xl:px-4">Shoes &amp; Gear</a>
                <a href="/" class=" px-3 2xl:px-4">
                    <Button outline color="purple" pill class="px-4 py-0 text-base md:text-lg">
                            Podcast
                    </Button> 
                </a>
                <a href="/" class="text-base md:text-lg  px-3 2xl:px-4">
                    <Button outline pill class="text-base md:text-lg px-4 py-0 text-Header_button_orange border-Header_button_orange hover:text-white hover:bg-Header_button_orange">
                            Newsletter
                    </Button>
                </a>
                <a href="/" class="text-base md:text-lg  px-3 2xl:px-4">
                    <Button outline pill class="text-base md:text-lg px-4 py-0 border-black hover:bg-slate-900">
                            <p class="flex-row justify-between items-center">
                                <span>Menu</span> 
                                <span class="size-4 text-Header_button_orange">+</span>
                            </p>
                    </Button>
                </a>
            </div>
            <div class="hidden xl:block">
                <SearchOutline></SearchOutline>
            </div>
        </div>
        <div class=" block xl:hidden ">
            <Button pill={true} outline={true} class="!p-2" size="xl" on:click={toggleShow}> 
                {#if !isShow}
                    <svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10"/>
                    </svg> 
                {:else}
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="#E46322"/>
                        <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#F24E1E" stroke-linejoin="round"/>
                        <g clip-path="url(#clip0_1232_2941)">
                        <path d="M26.4354 15.1724L21.6078 20L26.4354 24.8276L24.8262 26.4367L19.9987 21.6092L15.1711 26.4367L13.5619 24.8276L18.3895 20L13.5619 15.1724L15.1711 13.5633L19.9987 18.3908L24.8262 13.5633L26.4354 15.1724Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1232_2941">
                        <rect width="19" height="20" fill="white" transform="translate(10.5 10)"/>
                        </clipPath>
                        </defs>
                    </svg>
                    
                {/if}
            
            </Button>
                
        </div>
    </div>
</Child>
{#if isShow}
    <div class="w-menuWidth px-4 z-20 " aria-label="mobile menu" transition:fade>
        <div>
            <Input class="rounded-3xl " type="text" id="search" placeholder="  Search"></Input>
        </div>
        <div class="flex flex-col pt-2 ">
            {#each menus as menu}
                <a href="{menu.href}" class=" text-base list-image-none py-2 font-semibold">{menu.name}
                    <span class="text-lg text-Header_button_orange">{menu.sign}</span>
                </a>
                
            {/each}
        </div>
        <div class="flex flex-row py-4 justify-between items-center ">
            <SocialIcons></SocialIcons>
        </div>
        <div>
            <svg width="350" height="1" viewBox="0 0 345 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="345" y2="0.5" stroke="black"/>
            </svg>
        </div>
        <div class="flex flex-row justify-between items-center pt-4">
            <a href="/" class="text-base font-semibold"> Privacy Policy</a>
            <a href="/" class="text-base font-semibold"> Terms and Conditions</a>
        </div>

            
        
    </div>
{/if}

{@render children()}

