"use client";

import { Card, Row, Col, Statistic, Timeline } from "antd";
import {
  UserOutlined,
  BookOutlined,
  TrophyOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import LessonCard from "@/components/LessonCard";
import { lessons } from "@/data/lessons";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Khám phá Địa lý Việt Nam
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Học tập và thực hành kiến thức Địa lý Việt Nam qua các bài giảng sinh
          động và bài tập tương tác trên bản đồ
        </p>
      </div>

      {/* Thống kê */}
      <Row gutter={16} className="mb-12">
        <Col span={6}>
          <Statistic
            title="Bài học"
            value={lessons.length}
            prefix={<BookOutlined />}
          />
        </Col>
        <Col span={6}>
          <Statistic title="Học viên" value={1234} prefix={<UserOutlined />} />
        </Col>
        <Col span={6}>
          <Statistic
            title="Bài tập hoàn thành"
            value={5678}
            prefix={<TrophyOutlined />}
          />
        </Col>
        <Col span={6}>
          <Statistic
            title="Giờ học"
            value={245}
            prefix={<ClockCircleOutlined />}
          />
        </Col>
      </Row>

      {/* Bài học nổi bật */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Bài học mới nhất</h2>
          <Link href="/bai-hoc">
            <span className="text-blue-600 hover:text-blue-800">
              Xem tất cả →
            </span>
          </Link>
        </div>
        <Row gutter={[16, 16]}>
          {lessons.slice(0, 3).map((lesson) => (
            <Col key={lesson.id} xs={24} sm={12} lg={8}>
              <LessonCard lesson={lesson} />
            </Col>
          ))}
        </Row>
      </div>

      {/* Lộ trình học */}
      <Row gutter={16}>
        <Col span={16}>
          <Card title="Lộ trình học tập" bordered={false}>
            <Timeline
              items={[
                {
                  color: "green",
                  children: "Bài 1: Tổng quan địa hình Việt Nam",
                },
                {
                  color: "green",
                  children: "Bài 2: Khí hậu và thời tiết",
                },
                {
                  color: "blue",
                  children: "Bài 3: Hệ thống sông ngòi",
                },
                {
                  color: "gray",
                  children: "Bài 4: Tài nguyên thiên nhiên",
                },
                {
                  color: "gray",
                  children: "Bài 5: Dân cư và phân bố dân số",
                },
              ]}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Thông báo" bordered={false}>
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="font-semibold">Bài tập mới</p>
                <p className="text-sm text-gray-600">
                  Bài tập nhận diện tỉnh thành trên bản đồ
                </p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <p className="font-semibold">Bài học mới</p>
                <p className="text-sm text-gray-600">
                  Địa hình vùng Tây Nguyên
                </p>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
