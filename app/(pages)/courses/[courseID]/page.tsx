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
import { redirect } from 'next/navigation';
import { Megaphone } from 'lucide-react';


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
      <ProductHeadTitle text=" متود قد - دقیق‌ترین و علمی‌ترین روش برای افزایش قد." />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 md:mt-14!">
        <div>
          <CourseImage />
        </div>
        <div className="space-y-5">
          <CourseTitle text=" متود قد - دقیق‌ترین و علمی‌ترین روش برای افزایش قد." />
          <div className="px-3 bg-green-600/15 text-green-500 border border-current/30 max-w-max py-1 5 text-sm rounded-md">
            مناسب برای تمامی سنین
          </div>
          <Price />
          <PaymentButton />
      
          <Description />
          <Comments />

          
        </div>
        
      </div>
      <div className="bg-yellow-900/20 border-2 border-yellow-700/20 rounded-xl p-5  **:text-yellow-500! my-6 text-base leading-relaxed ">
            <div className="flex items-start gap-3 mb-4">
              <Megaphone className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
              <p className="font-bold text-base text-white">
                نکات بسیار مهم قبل و بعد از پرداخت
              </p>
            </div>

            <ul className="mr-5 space-y-3 *:leading-7 text-sm">
              <li>
                مبلغ دقیق دوره <strong className="text-white">۹۹۰,۰۰۰ تومان</strong> می‌باشد. لطفاً این مبلغ را <span className="underline">به صورت کامل و بدون هیچ‌گونه کسری</span> واریز نمایید.
              </li>
              <li>
                در صورت واریز مبلغ کمتر (حتی یک تومان)، سفارش ثبت نشده و دوره به شما تعلق نخواهد گرفت. مسئولیت وارد کردن مبلغ صحیح بر عهده خریدار محترم است.
              </li>
              <li>
                پس از پرداخت موفق، <strong className="text-white">حتماً اسکرین‌شات کامل صفحه پرداخت</strong> (شامل شماره تراکنش، تاریخ، ساعت و مبلغ) به همراه <strong className="text-white">شماره موبایلی که با آن ثبت‌نام کرده‌اید</strong> را به پشتیبانی تلگرام ارسال نمایید:
                <br />
                🆔 <a href="https://t.me/jazabiyatclub_Sup" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-500 font-bold underline">@jazabiyatclub_Sup</a>
              </li>
         
              <li>
                در صورت عدم ارسال رسید معتبر، هیچ‌گونه مسئولیتی بر عهده ما نخواهد بود.
              </li>
            </ul>

            <p className="mt-5 text-sm text-gray-400">
              از دقت و همراهی شما صمیمانه سپاسگزاریم.
            </p>
          </div>
      <BottomBar />
      <DeveloperSign />
    </main>
  );
};

export default page;
