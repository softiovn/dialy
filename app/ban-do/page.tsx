import BanDoPage from "@/pages/BanDoPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bản đồ Địa lý Việt Nam - Tương tác và Khám phá",
  description:
    "Khám phá bản đồ tương tác của Việt Nam với các đặc điểm địa lý, thành phố và vùng miền.",
};

export default function BanDo() {
  return <BanDoPage />;
}
