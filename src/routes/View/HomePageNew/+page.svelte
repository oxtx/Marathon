<script>
    import {Button,Input} from 'flowbite-svelte';
    import Child from '$lib/customSample/div.svelte';
    import Carousel from '$lib/customSample/carousel.svelte';
    import HowToTrain from '$lib/component/howToTrain.svelte';
    import HalfMarathon from '$lib/component/halfMarathon.svelte';
    import Gallery from '$lib/component/gallery.svelte';
    import ShoesGallery from '$lib/component/shoesGallery.svelte';
    import snapedit_1 from '../../../assests/snapedit_1.png';
    import Rectangle_658 from '../../../assests/Rectangle_658.png';
    import Rectangle_4659 from '../../../assests/Rectangle_4659.png';
    import Rectangle_4657 from '../../../assests/Rectangle_4641.png';
    import Training_Plans from '../../../assests/Training_Plans.png';
    import Snapedit_3 from '../../../assests/snapedit_3.png';
    import Rectangle_46 from '../../../assests/Rectangle_46.png';
    import Rectangle_run_Ready from '../../../assests/Rectangle_run_Ready.png';
    import NYC_Half_Marathon from '../../../assests/NYC_Half_Marathon.png';
    import Rectangle_4696 from '../../../assests/Rectangle_4696.png';
    import VIDEO from '../../../assests/VIDEO.png';
    import snapedit_17 from '../../../assests/snapedit_17.png';
    import Rectangle_4698 from '../../../assests/Rectangle_4698.png'
    import Rectangle_4741 from '../../../assests/Rectangle 4741.png';
    import Group_15602 from '../../../assests/Group_15602.png';
    import earphone from '../../../assests/earphone.png';
    import ShoesWoman from '../../../assests/ShoesWomen.png';
    import Shoes1 from '../../../assests/shoe1.png';
    import Shoes2 from '../../../assests/shoe2.png';

    const titles =[
        "24+MLLION READERS HELPED EACH YEAR ",
        "BOSTON MARATHON RECAP",
        "165,000 + NEWSLETTER READERS ",
        "COUCH TO 5K TRAINING GUIDE ",
        "COUCH TO 5K TRAINING GUIDE"
    ]
    const HowToData = {
        bgcolor:"bg-white lg:mr-8",
        image: snapedit_1,
        imageScript: 'snapedit_1',
        buttoncontent: "Runner's Stories",
        buttonColor: 'text-black',
        headingTitle:'Lil Nas X Takes On NYC Half <br> Marathon In Fashionably <br> Unorthodox Footwear',
        headingTitleStyle:'text-black text-lg md:text-3xl',
        string: 'JESSY CARVETH MARCH 19 , 2024',
        stringStyle:'text-black'
    }

    const galleryData = [
        {
            img: Rectangle_4657,
            imageScript:"Rectangle_4657",
            title: "RNNING AND FUN",
            caption:"28Funny Marathon Signs: The Best Running Race sign Ideas We've Even Seen",
            footer: "KATELYM TOCCI MARCH 19,2024",
            fontColor:"text-black"
        },
        {
            img: Rectangle_658,
            imageScript:"Rectangle_658",
            title: "RACE NEWS",
            caption:"Karoline Bjerkeli Grovdal Breadks Third Place Streak At United Airlines NYC Half Marathon",
            footer: "AMY K, WHITSON, MD MARCH 19,2024",
            fontColor:"text-black"
        },
        {   
            img: Rectangle_4659,
            imageScript:"Rectangle_4659",
            title: "RUNNING HOW-TO",
            caption:"Running With Arthristis: You Can Keep Your Running Routine!",
            footer: "KATELYM TOCCI MARCH 19,2024",
            fontColor:"text-black"
        }
    ]
    
    const FashionablyData = {
        bgcolor:"bg-black lg:ml-8",
        image: Snapedit_3,
        imageScript: 'Snapedit_3',
        buttoncontent: "Runner's Stories",
        buttonColor: 'text-white',
        headingTitle:'Lil Nas X Takes On NYC Half Marathon <br>In Fashionably Unorthodox Footwear',
        headingTitleStyle:'text-white text-lg md:text-3xl',
        string: '',
        stringStyle:''
    } 
    const HalfMarathonData = {
        image1: Rectangle_46,
        script1:"Rectangle_46",
        title1:"Karoline Bjerkeli Grevdal Breaks Third Place",
        image2: Rectangle_run_Ready,
        title2: "Karoline Bjerkeli Grevdal Breaks THird Place Streak At United Airlines",
        script2: "Rectangle_run_Ready",
        image3: NYC_Half_Marathon,
        script3:"NYC_Half_Marathon"
    }
    const shoeGalleryData = [ 
        {
            img: Rectangle_658,
            imageScript:"Rectangle_658",
            title: "",
            caption:"The 11 Best Socks For Runners In 2024",
            footer: "",
            fontColor:"text-white"
        }, 
        {
            img: Rectangle_4659,
            imageScript:"Rectangle_4659",
            title: "",
            caption:"Sweatbands are cool again: here's our faves",
            footer: "",
             fontColor:"text-white"
        },
        {
            img: Rectangle_658,
            imageScript:"Rectangle_658",
            title: "",
            caption:"The 11 Best Socks For Runners In 2024",
            footer: "",
             fontColor:"text-white"
        }
    ]
    const shoeOtherGalleryData = [
        {
            title:"Brpoks Hyperion Elite 4",
            img : Shoes1,
            imgScript: "Shoes"
        },
        {
            title:"Altra Lone Peak 9",
            img : Shoes2,
            imgScript:""
        },
        {
            title:"Brpoks Hyperion Elite 4",
            img : Shoes1,
            imgScript: "Shoes"
        },
        {
            title:"Brpoks Hyperion Elite 4",
            img : Shoes1,
            imgScript: "Shoes"
        },
        {
            title:"Brpoks Hyperion Elite 4",
            img : Shoes1,
            imgScript: "Shoes"
        }
    ]
    const stuffGalleryData = [
        {
            img: Rectangle_4657,
            imageScript:"Rectangle_4657",
            title: "",
            caption:"28Funny Marathon Signs: The Best Running Race sign Ideas We've Even Seen",
            footer: "",
            fontColor:"text-black"
        },
        {
            img: Rectangle_658,
            imageScript:"Rectangle_658",
            title: "",
            caption:"The 10 Best Anti Chafing Sticks For Runners In 2024",
            footer: "",
            fontColor:"text-black"
        },
        {   
            img: Rectangle_4659,
            imageScript:"Rectangle_4659",
            title: "",
            caption:"28 Funny Marathon Signs: The Best Running Race Sign Ideas We’ve Even Seen",
            footer: "",
            fontColor:"text-black"
        }
    ]
    const videoDatas =[
        "The 10 Best Anti Chafing Sticks For Runners In 2024",
        "The 11 Best Socks For Runners In 2024",
        "The 10 Best Anti Chafing Sticks For Runners In 2024",
        "The 11 Best Socks For Runners In 2024"
    ]

</script>

<div class="bg-Custom_color_grey">
    <Child>
        <div class="
                p-2
                md:p-4
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
            <HowToTrain {...HowToData}/>
            <div class="w-full
                        mt-8
                        lg:w-1/2
                        lg:mt-0
                        flex
                        flex-col
                        justify-between
                        ">
                    {#each galleryData as item}
                     <Gallery
                     img = {item.img}
                     imageScript = {item.imageScript}
                     title = {item.title}
                     caption = {item.caption}
                     footer = {item.footer}
                     fontColor ={item.fontColor}
                     />
                    {/each}
            </div>
        </div>
        
    </Child>
</div>
<Child>
    <p class="mt-8 text-lg sm:text-xl lg:text-4xl text-center">We Help You Run Your Best</p>
    <div class="flex flex-row justify-around items-center mt-8">
        <div>
            <img src={Training_Plans} alt="Training_Plans">
        </div>
    </div>
</Child>
<Child>
    <div class="bg-gradient-to-b from-Custom_color_yellow to-white ">
        <div class="pt-8
                    mx-2
                    lg:mx-8
                    lg:py-8 
                    text-xl
                    md:text-2xl
                    lg:text-3xl 
                    font-semibold
                     border-b-2 border-black
                    ">Our Editor's Picks
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
</Child>
<div class="border-y-2 border-r-slate-800 w-full" >
    <!-- <Carousel {titles} duration="3000" /> -->
</div>
<div class="my-8 block sm:hidden">
    <div class="flex flex-col justify-center items-center">
        <div>
            <p class="text-xl text-center">Expert Coach Advice By Distancd</p>
        </div>
        <div class="mt-56">
            <Button color="dark" pill class="text-lg w-40 ">Advice</Button><br>
            <Button outline color="dark" pill class="text-lg mt-4 w-40">Training Plans</Button>
        </div>
    </div>
    
</div>
<div class="bg-black w-full pb-8 m-0">
    <Child>
        <div class="my-8
                    lg:py-8 
                    text-xl
                    md:text-2xl
                    lg:text-3xl 
                    font-semibold
                    border-b-2
                    border-white
                    text-white
                    ">Shoes & Gear
        </div>
        <div class="flex flex-col 
                    lg:flex-row 
                    lg:justify-between 
                    lg:items-start
                    w-full ">
            <div class="w-full lg:w-3/4  rounded-lg">
                <div class="flex flex-col 
                            md:flex-row 
                            md:justify-between 
                            md:items-stretch 
                            rounded-2xl
                            bg-white">
                    <div class="w-fit 
                                m-2 
                                md:w-1/2 
                                bg-white ">
                        <img src={ShoesWoman} alt="ShoesWoman" class="size-full">
                    </div>
                    <div class="w-full  
                                md:w-1/2 
                                bg-white 
                                md:py-28 
                                px-10 
                                flex 
                                flex-col 
                                justify-end 
                                items-center
                                md:justify-center 
                                md:items-center">
                        <Button outline color="dark" pill class="text-base w-fit md:text-lg">GPS Reviews</Button>
                        <p class="text-lg
                                  md:text-2xl
                                  xl:text-4xl 
                                  my-4
                                  lg:mt-10
                                  text-center
                                  font-semibold">
                                  COROS ARE TAKING THE FIGHT TO GARMIN WITH THE PACE 3
                        </p>
                    </div>       
                </div>
                <div class="flex flex-col md:flex-row md:justify-between md:items-center mt-8">
                    {#each shoeGalleryData as item}
                        <Gallery img= {item.img}
                                 imageScript= {item.imageScript}
                                 title={item.title}
                                 caption={item.caption}
                                 footer={item.footer}
                                 fontColor={item.fontColor} />
                    {/each}
                </div>
            </div>
            <div class="w-full lg:w-1/4 ml-0 mt-8 lg:mt-0 lg:ml-8 ">
                <img src={Rectangle_4696} alt="Shoes_Gear" class="size-full">
            </div>
        </div>
    </Child>
    <Child>
        <div class="flex flex-row justify-between items-center">
            <div class="my-4
            lg:py-4 
            text-xl
            md:text-2xl
            lg:text-3xl 
            font-semibold
            text-white
            ">Gear our Team is Currently Running IN
            </div>
            <div>
                <a href="/" >See All</a>
            </div>
        </div>
        <div class="flex flex-row justify-between">
            <Carousel>
            {#each shoeOtherGalleryData as item}
               
                    <ShoesGallery img= {item.img} 
                                imgScript={item.imgScript}
                                title ={item.title} />
                
            {/each}
        </Carousel>
        </div>
    </Child>
</div>

<Child >
    <div class="bg-Custom_color_grey flex flex-col md:flex-row md:justify-between md:items-stretch rounded-lg ">
        <div class="bg-white 
                    rounded-lg 
                    w-fit
                    m-2
                    lg:m-8 
                    md:w-5/12 
                    px-10 py-10
                    flex
                    flex-col
                    items-center
                    justify-around
                    ">
            <p class="text-2xl md:text-lg xl:text-4xl text-center font-semibold my-4">The Newsletter That All <br> Runners Need</p>
            <p class="text-center my-4 font-semibold xl:text-xl">
                Don't miss your chance to become part of our running community - subscribe to our newsletter and receive exclusive tips, stories, and offers right to your inbox!
            </p>
            <Input class="my-2 w-4/5 rounded-full font-semibold xl:py-4 xl:text-xl"  placeholder=" Enter your Email"></Input>
            <Button class="my-2 w-4/5 font-semibold xl:text-xl xl:py-4" color="dark" pill>Subscribe</Button>
            <p class="text-center text-xs font-semibold">By subscribing you agree to with our Privacy Policy.</p>
        </div>
        <div class="w-fit hidden md:block md:w-5/12 md:m-4 lg:m-8 xl:py-2">
            <img src={VIDEO} alt="video" class=" size-fit">
        </div>
    </div>
</Child>

<Child>
    <div class="bg-gradient-to-b from-Custom_color_yellow to-white rounded-lg ">
        <div class="pt-8
                    mx-2
                    text-center
                    sm:text-left
                    lg:mx-8
                    lg:py-8 
                    text-xl
                    md:text-2xl
                    lg:text-3xl 
                    font-semibold
                     border-b-2 border-black
                    ">Beginners
        </div>
        <div class="py-8
                    md:p-8
                    lg:py-8 
                    w-full
                    flex 
                    flex-col 
                    justify-start 
                    items-center
                    md:flex-row
                    md:justify-between
                    md:items-stretch"
        >
            <div class="rounded-lg 
                        w-fit 
                        mx-2
                        flex
                        flex-col
                        md:w-1/4
                        lg:w-1/4
                        lg:m-0
                    ">
                <div >
                    <img src={snapedit_17} alt="snapedit_17" class="size-full">
                </div>
                <div class="bg-black text-white text-center ">
                    <p class="m-4 lg:my-8 md:text-xs lg:text-base">Turns Out Getting Into Harvard Is Easier Than Getting Into The NYC Marathon Through The Lottery</p>
                </div>
            </div>
            <div class="flex flex-col items-stretch mt-4 md:mt-0  md:w-3/4 md:ml-4 w-full ">
                <div class="rounded-lg 
                            mx-2
                            flex
                            flex-col
                            md:flex-row
                            md:m-0
                            bg-white
                            ">
                    <div class="m-2 md:w-2/5">
                        <img src={Rectangle_4698} alt="Rectangle_4698" class="size-full">
                    </div>
                    <div class="w-fit mx-2 md:w-3/5 md:py-8 md:px-4" >
                        <p class="text-lg lg:text-3xl mb-8 text-center">Runner’s Knee Recovery Time + Tips To Get Back Running</p>
                        <p class="text-base hidden lg:block text-center">As a UESCA-certified triathlon coach, running coach, and personal trainer, I work with many beginners or avid runners and cyclists who want to try a triathlon race.</p>
                    </div>
                </div>
                <div class="border-b-2 border-black border-t-2 
                            m-2 
                            mt-8
                            py-4 
                            flex 
                            flex-row 
                            justify-around
                            items-start">
                    <div class="flex flex-col 
                                lg:flex-row 
                                lg:justify-around 
                                lg:items-start 
                                w-5/12
                                divide-y-2">
                        <div class="w-full h-1/2 lg:w-1/3 lg:h-auto">
                            <img src={Rectangle_658} alt="Rectangle_658" class="size-full">
                        </div>
                        <div>
                            <p class="text-center text-lg">11 Best Socks For Runners In 2024</p>
                        </div>
                    </div>
                    <div class="flex flex-col lg:flex-row lg:justify-around lg:items-start w-5/12">
                        <div class="w-full h-1/2 lg:w-1/3 lg:h-auto">
                            <img src={Rectangle_4741} alt="Rectangle_658" class="size-full">
                        </div>
                        <div>
                            <p class="text-center text-lg">2Sweatbands are cool again: here’s our faves</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
    </div>
</Child>

<div class=" bg-Custom_color_grey">

    <Child>
        <div class="pt-8
                mx-2
                text-center
                sm:text-left
                lg:py-8 
                text-xl
                md:text-2xl
                lg:text-3xl 
                font-semibold
                    border-b-2 border-black
                ">Some stuff we're proud of
        </div>
        <div class="flex flex-col lg:flex-row lg:justify-between lg: items-stretch mt-8">
            <div class="w-fit lg:w-1/3 flex flex-col items-stretch ">
                {#each stuffGalleryData as item}
                <div class=" mt-10">
                    <Gallery img= {item.img} 
                            imageScript={item.imageScript}
                            title={item.title} 
                            caption={item.caption}
                            footer={item.footer}
                            fontColor={item.fontColor} />
                </div>
                {/each}
            </div>

            <div class="w-fit mt-8 lg:m-0 lg:w-7/12">
                <img src={Group_15602} alt="Group_15602" class="size-full">
            </div>
        </div>
        
    </Child>
</div>

<Child>
    <div class="bg-black rounded-lg">
        <div class="flex flex-row justify-between items-stretch">
            <div class="w-fit mx-2 lg:w-1/2 p-4 lg:p-10 flex flex-col content-between justify-items-center">
                <div class="pt-8
                            mx-2
                            text-center
                            lg:text-start
                            lg:py-8 
                            text-white
                            text-xl
                            lg:text-5xl 
                            font-semibold
                            ">Marathon Handbook Podcast
                </div>
                <div>
                    <p class="text-white text-base text-center lg:text-xl lg:text-start p-4">
                        If you are a runner, there’s a good chance that you can run for quite a number of miles without stopping, which generally should lead you to believe that you are in “good shape“ and able to handle other types of exercise fairly well.
                    </p>
                </div>
                <div class="flex flex-col items-center lg:text-start  lg:flex-row lg:justify-start lg:items-center ">
                    <Button color="purple" class=" w-11/12 my-8  md:w-40 lg:m-8" pill>Listen Episode 1 </Button>
                    <a href="/" class="text-white text-center">view all</a>
                </div>
            </div>
            <div class="hidden lg:block px-10 pt-10 w-1/2">
                <img src={earphone} alt="earphone" class=" mx-auto size-full">
            </div>
        </div>
        <div>
            <div class="pt-4
                        mx-8
                        text-center
                        sm:text-left
                        lg:py-4
                        text-xl
                        md:text-2xl
                        lg:text-3xl 
                        text-white
                        font-semibold
                            border-b-2 border-white
                        ">Other Episodes
            </div>
            <div class="lg:p-8  flex flex-col md:flex-row pb-4">
                {#each videoDatas as item }
                    <div class=" bg-purple-800 text-white rounded-lg py-8 lg:py-16 px-8 mx-2 w-fit mt-4 md:w-1/4">
                        <p class="text-xl">{item}</p>
                        <p>episode 2</p>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</Child>



            
            
            
            



