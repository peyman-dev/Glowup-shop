import { Star } from "lucide-react";
import React from "react";

const Comment = () => {
  return (
    <div className="select-none bg-zinc-900 w-full h-60 border-2 border-zinc-800 rounded-lg  p-5">
      <div className="flex items-center text-yellow-500 gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-4 fill-yellow-500"/>
        ))}
      </div>
      <p className="font-medium text-sm mt-2">
        پیمان احمدی
      </p>
      <div className="mt-5">
        <p className="text-justify text-sm text-zinc-300 line-clamp-4 font-normal">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
        </p>
      </div>
    </div>
  );
};

export default Comment;
