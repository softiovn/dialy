import HomePage from "@/pages/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Địa Lý Việt Nam - Học tập và Khám phá",
  description:
    "Nền tảng học tập địa lý Việt Nam với bài học, bài tập và bản đồ tương tác.",
};

export default function Home() {
  return <HomePage />;
}
