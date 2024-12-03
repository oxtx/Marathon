<script> 
    import Child from '$lib/customSample/div.svelte';
    import HalfMarathon from '$lib/component/halfMarathon.svelte';
    import HowToTrain from '$lib/component/howToTrain.svelte';
    import Gallery from '$lib/component/gallery.svelte';
    import Gallery4_2 from '$lib/component/gallery4_2.svelte';
    import {Button} from 'flowbite-svelte';
    import MarathonTip from '../../../assests/MarathonTip.png';
    import Group_15602 from '../../../assests/Group_15602.png';
    import Rectangle_4641 from  '../../../assests/Rectangle_4641.png';
    import Rectangle_4658 from '../../../assests/Rectangle_4658.png';
    import Group_15626 from '../../../assests/Group_15626.png';
    import snapedit_2 from '../../../assests/snapedit_2.png';
    import snapedit_legs from '../../../assests/snapedit_legs.png';
    import Fule from '../../../assests/Fule.png';
    import what_to_eat from '../../../assests/what_to_eat.png';
    import title from '../../../assests/title.png';
    import book from '../../../assests/book.png';
    import howto from '../../../assests/Howto.png';
    import run from '../../../assests/run.png';
    import womenRun from '../../../assests/womenRun.png';
    import womenWalk from '../../../assests/womenWalk.png';
    import weekMarathon from '../../../assests/WeekMarrathon.png';
    import Best_Ireland from '../../../assests/Best_Ireland.png';
    import Inspring_half from '../../../assests/image 277.png';
    import Bestmarathon from '../../../assests/image_276.png';
    import Maskgroup from '../../../assests/Maskgroup.png';
    import BlackMan from '../../../assests/blackMan.png';
    import Brand from '../../../assests/brand.png';
    import Firstmarathon from '../../../assests/First.png';
    import Eatimage from '../../../assests/eat.png';
    import Expertimg from '../../../assests/expertippng.png';

    const HalfMarathonData = {
        image1: Rectangle_4641,
        script1:"Rectangle_4641",
        title1:"Walking A Half Marathon: <br>How To + Tranning Guide",
        image2: Rectangle_4658,
        script2: "Rectangle_4658",
        title2: "How To Run A Sub 90 Minute Half <br> Marathon: Guide + Training Plan",
        image3: Group_15626,
        script3:"Group_15626"
    }
    const HowToTrainData = {
        bgcolor:"bg-gradient-to-b from-Custom_color_yellow to-white ",
        image: snapedit_2,
        imageScript: 'snapedit_2',
        buttoncontent: "Runner's Stories",
        buttonColor: 'hidden',
        headingTitle:'How To Nail Your Half Marathon Taper: A Complete Timeline',
        headingTitleStyle:'text-black text-lg md:text-2xl',
        string: "Here's how to nail those final weeks of half marathon prep,<br> so you're primed come race day.",
        stringStyle:'text-black'
    }
    const HowToColoredData = {
        bgcolor:"bg-Custom_color_yellow",
        image: snapedit_2,
        imageScript: 'snapedit_2',
        buttoncontent: "Runner's Stories",
        buttonColor: 'hidden',
        headingTitle:'How To Nail Your Half Marathon Taper: A Complete Timeline',
        headingTitleStyle:'text-black text-lg md:text-2xl',
        string: "Here's how to nail those final weeks of half marathon prep,<br> so you're primed come race day.",
        stringStyle:'text-black'
    }
    const gallery4_2Data = {
        image1: Rectangle_4641,
        script1: "Rectangle_4641",
        title1: "5k To Half Marathon Training Plan + Guide To Start Training Today!",
        image2: Rectangle_4658,
        script2: "Rectangle_4641",
        title2: "How To Run A Sub 90 Minute Half Marathon: Guide + Training Plan",
        image3: Rectangle_4641,
        script3: "Rectangle_4641",
        title3: "Walking A Half Marathon: How To + Training Guide",
        image4: Rectangle_4658,
        script4: "Rectangle_4641",
        title4: "5k To Half Marathon Training Plan + Guide To Start Training Today!",
        fontColor: "text-black"
    }
    const gallery4_2DataAno = {
        image1: Rectangle_4658,
        script1: "Rectangle_4658",
        title1: "5k To Half Marathon Training Plan + Guide To Start Training Today!",
        image2: book,
        script2: "book",
        title2: "How To Run A Sub 90 Minute Half Marathon: Guide + Training Plan",
        image3: what_to_eat,
        script3: "what_to_eat",
        title3: "Walking A Half Marathon: How To + Training Guide",
        image4: Rectangle_4658,
        script4: "Rectangle_4641",
        title4: "5k To Half Marathon Training Plan + Guide To Start Training Today!",
        fontColor: "text-black"
    }
    const gallery4_2DataOth = {
        image1: book,
        script1: "book",
        title1: "5k To Half Marathon Training Plan + Guide To Start Training Today!",
        image2: Rectangle_4641,
        script2: "Rectangle_4641",
        title2: "How To Run A Sub 90 Minute Half Marathon: Guide + Training Plan",
        image3: Rectangle_4658,
        script3: "Rectangle_4658",
        title3: "Walking A Half Marathon: How To + Training Guide",
        image4: womenWalk,
        script4: "womenWalk",
        title4: "Run Walk Marathon Training Guide: Jeff Galloway Method Explained",
        fontColor: "text-white"
    }
    const gallery4_2Datalast = {
        image1: Brand,
        script1: "Brand",
        title1: "Brand",
        image2: Firstmarathon,
        script2: "Firstmarathon",
        title2: "Running A Half Marathon: 7 Expert Tips For Your 1st Half Marathon",
        image3: Rectangle_4658,
        script3: "Rectangle_4658",
        title3: "Walking A Half Marathon: How To + Training Guide",
        image4: what_to_eat,
        script4: "womenWalk",
        title4: "What To Eat Before A Half Marathon, According To Our Running Coach And Nutritionist",
        fontColor: "text-black"
    }
    const HowmanyDaysData = {
        bgcolor:"bg-black ",
        image: snapedit_legs,
        imageScript: 'snapedit_legs',
        buttoncontent: "Runner's Stories",
        buttonColor: 'hidden',
        headingTitle:'How Many Days To Take Off After A Half Marathon + 8 Useful Recovery Tips',
        headingTitleStyle:'text-white text-lg md:text-2xl',
        string: "Here are our expert half marathon tips and free half marathon training plans",
        stringStyle:'text-white'
    }
    const TipData = {
        image1: title,
        script1:"title",
        title1:"How To Prepare For A Half Marathon: 12 Top Tips From Our Expert Coach",
        image2: what_to_eat,
        script2: "what_to_eat",
        title2: "What To Eat Before A Half Marathon, According To Our Running Coach ",
        image3: Fule,
        script3:"Fule"
    }
    const galleryData =[
        {
            img: howto,
            imageScript:"howto",
            title: "",
            caption:"From 10K to Half Marathon: All You Need to Take the Leap",
            footer: "",
            fontColor: "text-white"
        },
        {
            img: run,
            imageScript:"run",
            title: "",
            caption:"How To Train For A Half Marathon: Everything You Need To Run 13.1 Miles",
            footer: "",
            fontColor:"text-white"
        },
        {   
            img: womenRun,
            imageScript:"womenRun",
            title: "",
            caption:"How To Train For A Half Marathon: 8 Expert Tips For First-Timers",
            footer: "",
            fontColor:"text-white"
        }
    ]

</script>


<div class="bg-black p-4">
    <nav class="flex flex-row justify-center">
        <a href="/" class=" text-slate-400 hover:text-white mx-4">5k</a>
        <a href="/" class=" text-slate-400 hover:text-white mx-4">10k</a>
        <a href="/" class=" text-slate-400 hover:text-white mx-4">Half Marathon</a>
        <a href="/" class=" text-slate-400 hover:text-white mx-4">Marathon</a>
        <a href="/" class=" text-slate-400 hover:text-white mx-4">Ultra</a>
    </nav>
</div>

<Child>
    <div class="grid 
                grid-cols-12 
                lg:grid-cols-12 
                gap-4 
                p-2
                lg:p-4 
                content-stretch">
        <div class="col-span-12
                    lg:col-span-7
                    bg-black 
                    lg:p-4 
                    text-white 
                    rounded-lg">
            <div class="grid grid-row-2 gap-4 content-stretch" >
                <div class="row-span-1 
                            flex 
                            flex-col 
                            justify-between
                            items-center  
                            px-8 pt-8
                            ">
                    <p class="text-xl lg:text-4xl text-center my-2">How To Train For A Half Marathon: Resources, Tips, And Expert Advice</p>
                    <p class=" leading-5 lg:leading-8 text-sm lg:text-lg text-center my-2">Welcome to our half marathon hub: here you can find all our guides, free-to-download training plans, tips, and strategies for your next half marathon – we cover all ability levels!</p>
                    <Button pill class="bg-Header_button_orange text-white my-4">Free Half Marathon Training Plans</Button>
                </div>
                <div class="row-span-1 m-2">
                    <div>
                        <img src={MarathonTip} alt="MarathonTip" class="w-full rounded-lg" >
                    </div>
                </div>
            </div>
        </div>
            
        <div class="col-span-12 lg:col-span-5 ">
            
            <div class="flex flex-col items-stretch content-between border-t-2 border-black ">
                <div class="pt-4 divide-y-2  divide-black">
                    <div class="pb-4">
                        <p class="text-lg font-semibold mb-2">The 11 Best Socks For Runners In 2024</p>
                        <p>Amy K. Whitson, MD  March 19, 2024</p>
                    </div>
                    <div class="pt-2 pb-4">
                        <p class="text-lg font-semibold mb-2">The 11 Best Socks For Runners In 2024</p>
                        <p>Amy K. Whitson, MD  March 19, 2024</p>
                    </div>
                    <div class="pt-2 pb-4">
                        <p class="text-lg font-semibold mb-2">The 11 Best Socks For Runners In 2024</p>
                        <p>Amy K. Whitson, MD  March 19, 2024</p>
                    </div>
                </div>
                <div class="pt-12 border-t-2 border-black">
                    <img src={Group_15602} alt="Group_15602">
                </div>
            </div>
        </div>
    </div>
</Child>

<Child>
    <div class="pt-8
                    mx-2
                    lg:mx-4
                    lg:py-8 
                    text-xl
                    md:text-2xl
                    lg:text-3xl 
                    font-semibold
                     border-b-2 border-black
                    ">Half Marathon Tips And Advice
    </div>
    <div class="p-4
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
        <HalfMarathon {...HalfMarathonData}/>
        <HowToTrain {...HowToTrainData} />
    </div>
    <Gallery4_2 {...gallery4_2Data} />
    <div class="p-4
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
            <HowToTrain {...HowmanyDaysData} />
            <div class="w-full 
                    lg:w-1/2
                    flex
                    flex-col 
                    justify-between
                    mt-8
                    lg:mt-0
                    ">
                <div class="flex flex-row justify-between items-start w-fit lg:ml-4">
                    <div class="w-1/2  flex flex-col ">
                        <img src={TipData.image1} class="size-full " alt={TipData.script1}>
                        <p class="text-center 
                                text-xs 
                                font-semibold
                                md:text-sm
                                lg:text-base
                                my-6
                                ">
                                {@html TipData.title1}
                        </p>
                    </div>
                    <div class="w-1/2 ml-2 md:ml-4 flex flex-col ">
                        <img src={TipData.image2} alt={TipData.script2} class="size-full">
                        <p class="text-center 
                                text-xs
                                font-semibold
                                md:text-sm
                                lg:text-base
                                my-6  
                                ">
                                {@html TipData.title2}
                        </p>
                    </div>
                </div>
                <div class="pt-4 w-full md:ml-4 ">
                    <img src={TipData.image3} alt={TipData.script3} class="size-full">
                </div>
            </div>
    </div>
    <Gallery4_2 {...gallery4_2DataAno} />
</Child>

<div class="bg-black">
    <Child>
        <div class="pt-8
                    mx-2
                    lg:mx-4
                    lg:py-8 
                    text-xl
                    md:text-2xl
                    lg:text-3xl 
                    font-semibold
                     border-b-2 border-white
                     text-white
                    ">Half Marathon Training Guide
        </div>
        <div class="flex flex-col lg:flex-row lg:justify-between lg: items-stretch my-6 lg:mx-2">
            <div class="w-fit lg:w-1/3 flex flex-col items-stretch mx-4 lg:mx-0">
                {#each galleryData as item}
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
            <div class="w-fit mt-8 mx-4 lg:m-0 lg:w-7/12 ">
                <img src={weekMarathon} alt="weekMarathon" class="size-full">
            </div>
        </div>
        <Gallery4_2 {...gallery4_2DataOth} />

    </Child>
</div>

<Child>
    <div class="pt-8
                mx-2
                lg:mx-4
                lg:py-8 
                text-xl
                md:text-2xl
                lg:text-3xl 
                font-semibold
                border-b-2 border-black
                text-black
                ">Half Marathon Around The World
    </div>
    <div class="py-8
                md:p-4
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
                    md:w-2/5
                    lg:m-0
        ">
            <div >
                <img src={Best_Ireland} alt="Best_Ireland" class="size-full">
            </div>
       </div>
        <div class="flex flex-col mt-4 md:mt-0  md:w-3/5 md:ml-4 w-full ">
            <div class="rounded-lg 
                        m-2
                        flex
                        flex-col
                        md:flex-row
                        md:m-0
                        md:justify-between
                        md:items-center
                        bg-orange-500
                        text-white
            ">
                <div class="m-2 lg:m-4 lg:w-2/5 ">
                    <img src={Maskgroup} alt="Bridge" class="size-full">
                </div>
                <div class="my-4 w-fit md:my-0 lg:w-3/5 mx-2" >
                    <p class="text-lg lg:text-3xl mb-4 text-center">The 12 Best Half Marathons In The USA + 9 Honorable Mentions</p>
                    <p class="text-base text-center">Choose your next bucket list marathon from our favorites!.</p>
                </div>
            </div>
            <div class="border-b-2 border-black border-t-2 
                        m-2 
                        mt-8
                        py-4 
                        flex 
                        flex-row 
                        divide-x-2
                        justify-between
                        items-start">
                <div class="w-1/2
                            flex flex-col 
                            mr-2
                            lg:flex-row 
                            lg:justify-around 
                            lg:items-stretch 
                            ">
                    <div >
                        <img src={Inspring_half} alt="Inspring_half" class="size-full">
                    </div>
                    <div class="pl-2 pr-6">
                        <p class="text-base">4 Inspiring Half Marathons In Scotland For Your Bucket List</p>
                    </div>
                </div>
                <div class="w-1/2
                            flex 
                            flex-col
                            lg:flex-row 
                            lg:justify-around 
                            lg:items-start
                            ml-2">
                    <div class="">
                        <img src={Bestmarathon} alt="Rectangle_658" class="size-full">
                    </div>
                    <div class="pl-2 pr-6">
                        <p class="text-base">The 8 Best Half Marathons In The UK Right Now</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <Gallery4_2 {...gallery4_2DataOth} />
    <div class=" rounded-lg bg-purple-600 flex flex-row justify-between items-center text-white" >
        <div class="w-full lg:w-5/12 p-12">
            <p class="text-3xl font-semibold my-4">Check Out Our Half Marathon Masterclass</p>
            <p class="text-base font-semibold mb-8">Let me guide you step-by-step through your half marathon training journey with the Half Marathon Masterclass!</p>
            <div class="flex flex-row items-center">
                <svg width="61" height="40" viewBox="0 0 61 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.986816" width="61" height="38.026" rx="10" fill="white"/>
                    <path d="M39.7186 19.0797C40.313 19.4754 40.313 20.3487 39.7186 20.7444L26.5232 29.5304C25.8586 29.9729 24.969 29.4965 24.969 28.698L24.969 11.1261C24.969 10.3277 25.8586 9.85124 26.5232 10.2937L39.7186 19.0797Z" fill="#8518D3"/>
                    </svg>
                <p class="mx-3">View Video</p>
            </div>
        </div> 
        <div class="hidden lg:block">
            <img src={BlackMan} alt="dd">
        </div>
    </div>
</Child>

<Child>
    <div class="pt-8
                    mx-2
                    lg:mx-4
                    lg:py-8 
                    text-xl
                    md:text-2xl
                    lg:text-3xl 
                    font-semibold
                     border-b-2 border-black
                    ">Furtherr Useful  Guides And Advice
    </div>
    <div class="p-4
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
        <HalfMarathon {...HalfMarathonData}/>
        <HowToTrain {...HowToColoredData} />
    </div>
    <Gallery4_2 {...gallery4_2Datalast} />
    <div class="p-4
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
            <HowToTrain {...HowmanyDaysData} />
            <div class="w-full 
                    lg:w-1/2
                    flex
                    flex-col 
                    justify-between
                    mt-8
                    lg:mt-0
                    ">
                <div class="flex flex-row justify-between items-start w-fit lg:ml-4">
                    <div class="w-1/2  flex flex-col">
                        <img src={Expertimg}  alt="expertimage" class="size-full">
                        <p class="text-center 
                                text-xs 
                                font-semibold
                                md:text-sm
                                lg:text-base
                                my-6
                                ">
                                How To Train For A Half Marathon: 9 Expert Tips For A Successful Race
                        </p>
                    </div>
                    <div class="w-1/2 ml-2 md:ml-4 flex flex-col ">
                        <img src={Eatimage} alt="Eatimage" class="size-full">
                        <p class="text-center 
                                text-xs
                                font-semibold
                                md:text-sm
                                lg:text-base
                                my-6  
                                ">
                                Half Marathon Nutrition: What To Eat When Training For A Half Marathon                        </p>
                    </div>
                </div>
                <div class="pt-4 w-full md:ml-4" style="position: relative;">
                    <img src={TipData.image3} alt={TipData.script3} class="size-full">
                </div>
                <!-- <div class="pt-20 pb-8 px-12 text-white text-lg" style="position: relative; top: -100%">
                    <p>Do I Need To Fuel During A Half Marathon? Fueling Strategy Explained</p>
                </div> -->
            </div>
    </div>
</Child>





