import BaiHocPage from "@/pages/BaiHocPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bài học Địa lý Việt Nam - Học tập chi tiết",
  description:
    "Khám phá các bài học địa lý Việt Nam với nội dung chi tiết, hình ảnh và bản đồ tương tác.",
};

export default function BaiHoc() {
  return <BaiHocPage />;
}
