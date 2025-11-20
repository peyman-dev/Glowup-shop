import { Image } from "antd";
import { Star } from "lucide-react";
import React from "react";

const Comment = ({
  name,
  content,
  img,
}: {
  name: string;
  content: string;
  img: string | string[];
}) => {
  console.log(img);
  return (
    <div className="select-none flex flex-col justify-between bg-zinc-900 w-full h-70 border-2 border-zinc-800 rounded-lg pt-5 pb-3 px-5">
      <div>
        <div className="flex items-center text-yellow-500 gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-4 fill-yellow-500" />
          ))}
        </div>
        <p className="font-medium text-sm mt-2">{name}</p>
      </div>
      <div className="mt-5">
        <p className="text-justify text-sm text-zinc-300 line-clamp-3 font-normal">
          {content}
        </p>
      </div>
      <div className="flex items-start gap-2">
        {Array.isArray(img) ? (
          img.map((src, i) => (
            <Image
              className="size-20! w-20! object-cover! rounded-md"
              preview={{
                mask: (
                  <span className="size-full flex items-center justify-center bg-black/50 rounded-lg font-estedad! text-xs">
                    پیش‌نمایش
                  </span>
                ),
              }}
              key={i}
              src={src}
              alt={name}
            />
          ))
        ) : (
          <Image
            className="size-20! w-20! object-cover! rounded-md"
            preview={{
              mask: (
                <span className="size-full flex items-center justify-center bg-black/50 rounded-lg font-estedad! text-xs">
                  پیش‌نمایش
                </span>
              ),
            }}
            src={img}
            alt={name}
          />
        )}
      </div>
    </div>
  );
};

export default Comment;
