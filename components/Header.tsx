"use client";

import { Menu } from "antd";
import {
  ReadOutlined,
  ExperimentOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    {
      key: "/",
      icon: <GlobalOutlined />,
      label: "Trang chủ",
    },
    {
      key: "/bai-hoc",
      icon: <ReadOutlined />,
      label: "Bài học",
    },
    {
      key: "/bai-tap",
      icon: <ExperimentOutlined />,
      label: "Bài tập",
    },
    {
      key: "/ban-do",
      icon: <GlobalOutlined />,
      label: "Bản đồ",
    },
  ];

  const handleMenuClick = ({ key }: { key: string }) => {
    router.push(key);
  };

  // Sử dụng nullish coalescing để xử lý pathname có thể là null
  const selectedKey = pathname ?? "/";

  return (
    <header className="bg-white shadow-sm border-b glass-effect">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center cursor-pointer hover-lift p-2 rounded-lg transition-all duration-200"
            onClick={() => router.push("/")}
          >
            <div className="relative">
              <GlobalOutlined className="text-2xl text-blue-600 mr-3" />
              <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
            </div>
            <h1 className="text-xl font-bold text-gray-900 gradient-text">
              Địa Lý Việt Nam
            </h1>
          </div>

          <Menu
            mode="horizontal"
            selectedKeys={[selectedKey]}
            items={menuItems}
            onClick={handleMenuClick}
            className="border-none bg-transparent"
            style={{
              border: "none",
              background: "transparent",
              fontSize: "16px",
              fontWeight: "500",
            }}
          />
        </div>
      </div>
    </header>
  );
}
