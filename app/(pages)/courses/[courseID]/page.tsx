import ProductHeadTitle from "@/app/_components/templates/product/product-head-title";
import Price from "@/app/_components/templates/product/hero-section/price";
import PaymentButton from "@/app/_components/templates/product/hero-section/payment-button";
import CourseTitle from "@/app/_components/templates/product/hero-section/course-title";
import CourseImage from "@/app/_components/templates/product/hero-section/course-image";
import Description from "@/app/_components/templates/product/hero-section/description";
import Comments from "@/app/_components/templates/product/hero-section/commnts";
import BottomBar from "@/app/_components/templates/product/bottom-bar";
import DeveloperSign from "@/app/_components/common/developer-sign";
import { Metadata } from "next";
import { redirect } from "next/navigation";
export const metadata: Metadata = {
  title: "متود قد - دقیق‌ترین و علمی‌ترین روش برای افزایش قد.",
  description: "پتانسیل رشد قدی خودت رو به نهایت ژنتیک بدنیت برسون",
  keywords: "افزایش قد",
  authors: [{ name: "Peyman Ahmadi" }],
  creator: "Peyman Ahmadi",
  publisher: "Peyman Ahmadi",
  // OpenGraph for social sharing
  openGraph: {
    title: "متود قد - دقیق‌ترین و علمی‌ترین روش برای افزایش قد.",
    description: "پتانسیل رشد قدی خودت رو به نهایت ژنتیک بدنیت برسون",
    images: "/assets/server/product.png",
    url: "https://glowup-shop.vercel.app/courses/method-grow-taller",
    type: "website",
  },
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "متود قد - دقیق‌ترین و علمی‌ترین روش برای افزایش قد.",
    description: "Check out my Next.js app!",
    images: ["/assets/server/product.png"],
  },
  // Other meta tags
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
  icons: {
    icon: "/assets/server/product.png",
  },
};
const page = async ({
  params,
}: {
  params: Promise<{
    courseID: string;
  }>;
}) => {
  const { courseID } = await params;

  if (courseID !== "method-grow-taller") {
    return redirect("/courses/method-grow-taller");
  }

  return (
    <main id="product-page" className="py-8 space-y-5 md:space-y-10 container">
      <ProductHeadTitle text="متود قد - دقیق‌ترین و علمی‌ترین روش برای افزایش قد." />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 md:mt-14!">
        <div>
          <CourseImage />
        </div>
        <div className="space-y-5">
          <CourseTitle text="متود قد - دقیق‌ترین و علمی‌ترین روش برای افزایش قد." />
          <Price />
          <PaymentButton />
          <Description />
          <Comments />
        </div>
      </div>

      <BottomBar />
      <DeveloperSign />
    </main>
  );
};

export default page;
