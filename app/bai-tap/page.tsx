import BaiTapPage from "@/pages/BaiTapPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bài tập Địa lý Việt Nam - Luyện tập và Kiểm tra",
  description:
    "Thực hành các bài tập địa lý Việt Nam với đa dạng câu hỏi và kiểm tra kiến thức của bạn.",
};

export default function BaiTap() {
  return <BaiTapPage />;
}
