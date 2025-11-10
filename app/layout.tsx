import { Work_Sans } from "next/font/google";
import { ConfigProvider } from "antd";
import viVN from "antd/locale/vi_VN";
import Header from "@/components/Header";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-work-sans",
});

export const metadata = {
  title: "Học Địa Lý Việt Nam",
  description: "Trang web học tập Địa lý Việt Nam trực tuyến",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={workSans.variable}>
      <body className={workSans.className}>
        <ConfigProvider locale={viVN}>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main>{children}</main>
          </div>
        </ConfigProvider>
      </body>
    </html>
  );
}
