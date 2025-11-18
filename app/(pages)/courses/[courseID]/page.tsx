import ProductHeadTitle from "@/app/_components/templates/product/product-head-title";
import Price from "@/app/_components/templates/product/hero-section/price";
import PaymentButton from "@/app/_components/templates/product/hero-section/payment-button";
import CourseTitle from "@/app/_components/templates/product/hero-section/course-title";
import CourseImage from "@/app/_components/templates/product/hero-section/course-image";
import Description from "@/app/_components/templates/product/hero-section/description";
import Comments from "@/app/_components/templates/product/hero-section/commnts";
import BottomBar from "@/app/_components/templates/product/bottom-bar";
import DeveloperSign from "@/app/_components/common/developer-sign";

const page = async ({
  params,
}: {
  params: Promise<{
    courseID: string;
  }>;
}) => {
  const { courseID } = await params;

  return <main id="product-page"
  className="py-8 space-y-5 md:space-y-10 container"
  >
    <ProductHeadTitle 
      text="متودقد - دقیق‌ترین و علمی‌ترین روش برای افزایش قد."
    />


    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 md:mt-14!">
      <div>
        <CourseImage />
      </div>
      <div className="space-y-5">
        <CourseTitle 
          text="متودقد - دقیق‌ترین و علمی‌ترین روش برای افزایش قد."
        />
        <Price />
        <PaymentButton />
        <Description />
        <Comments />
      </div>
    </div>

    <BottomBar />
    <DeveloperSign />
  </main>;
};

export default page;
