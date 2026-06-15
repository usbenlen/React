/** @format */

import CommentIcon from "@/shared/icons/comment.svg?react";

type Props = {
  count: number;
};

export default function Reviews({ count }: Props) {
  return (
    <div className="flex items-center gap-1 text-gray-500 text-[12px] font-medium">
      <CommentIcon className="w-4.5 h-4.5" />
      <span>{count}</span>
    </div>
  );
}
