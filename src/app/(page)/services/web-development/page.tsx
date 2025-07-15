import HeroSection from "@/components/web-developement/HeroSection"
import ImageSideDetail from "@/components/web-developement/ImageSideDetail"
// import PricePlan from "@/components/web-developement/PricePlan"
import Services from "@/components/web-developement/Services"
import WorkExperiances from "@/components/web-developement/WorkExperiances"


const Page = () => {

    return (
        <div className='w-full space-y-16 mb-20'>
            <HeroSection />
            <Services />
            <ImageSideDetail />
            <WorkExperiances />
            {/* <PricePlan /> */}

        </div>
    )
}

export default Page

