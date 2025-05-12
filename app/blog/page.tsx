import BannerSection from "@/components/Blog/Banner/page";
import FeaturedReads from "@/components/Blog/FeaturedReads/page";
import ManufacturingBlog from "@/components/Blog/ManufacturingBlog/page";
import Trustedby2 from "@/components/Blog/TrustedbyBlog/page";
import WeDesign from "@/components/Blog/WeDesign/page";
import ContactUs from "@/components/ContactUs";

const BlogPage = ()=>{
    return(
        <>
        <BannerSection />
        <WeDesign />
        <FeaturedReads />
        <Trustedby2 />
        <ManufacturingBlog  />
        <ContactUs />
        </>
    )
}
export default BlogPage;