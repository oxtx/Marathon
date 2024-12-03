<script>
    import Child from '$lib/customSample/div.svelte';
    import HowToTrain from '$lib/component/howToTrain.svelte';
    import HomePageHalfMarathon from '$lib/component/homePageHalfMarathon.svelte';
    import Rectangle_4641 from  "../assests/Rectangle_4641.png";
    import Rectangle_4658 from "../assests/Rectangle_4658.png";
    import Group_15626 from "../assests/Group_15626.png";
    import snapedit_2 from "../assests/snapedit_2.png";
   
    const HomePageHalfMarathonData = {
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
        bgcolor:"bg-black lg:ml-4",
        image: snapedit_2,
        imageScript: 'snapedit_2',
        buttoncontent: "Runner's Stories",
        buttonColor: 'text-white',
        headingTitle:'How To Train For A Half Marathon : <br> Resources, Tips, And Expert Advice',
        headingTitleStyle:'text-white text-lg md:text-2xl',
        string: 'JESSY CARVETH MARCH 19 , 2024',
        stringStyle:'text-white'
    }
    

</script>
<Child>
    <div class="bg-gradient-to-b from-Header_button_orange to-white ">
        <div class="mx-6
                    py-4
                    lg:py-8 
                    text-xl
                    md:text-2xl
                    lg:text-3xl 
                    font-semibold
                    border-b-2 border-black
                    ">Boston Marathon 2024</div>
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
            <HomePageHalfMarathon {...HomePageHalfMarathonData} />
            <HowToTrain {...HowToTrainData} />
           
        </div>
        
    </div>
</Child>