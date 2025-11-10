"use client";

import { Row, Col, Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import LessonCard from "@/components/LessonCard";
import { lessons } from "@/data/lessons";

const { Search } = Input;
const { Option } = Select;

export default function BaiHocPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Bài học Địa lý
        </h1>
        <p className="text-lg text-gray-600">
          Khám phá kiến thức Địa lý Việt Nam qua các bài học chi tiết và sinh
          động
        </p>
      </div>

      {/* Bộ lọc và tìm kiếm */}
      <div className="mb-8">
        <Row gutter={16} align="middle">
          <Col span={12}>
            <Search
              placeholder="Tìm kiếm bài học..."
              enterButton={<SearchOutlined />}
              size="large"
            />
          </Col>
          <Col span={6}>
            <Select placeholder="Cấp độ" size="large" style={{ width: "100%" }}>
              <Option value="all">Tất cả</Option>
              <Option value="beginner">Cơ bản</Option>
              <Option value="intermediate">Trung cấp</Option>
              <Option value="advanced">Nâng cao</Option>
            </Select>
          </Col>
          <Col span={6}>
            <Select
              placeholder="Sắp xếp"
              size="large"
              style={{ width: "100%" }}
            >
              <Option value="newest">Mới nhất</Option>
              <Option value="popular">Phổ biến</Option>
              <Option value="duration">Thời lượng</Option>
            </Select>
          </Col>
        </Row>
      </div>

      {/* Danh sách bài học */}
      <Row gutter={[16, 16]}>
        {lessons.map((lesson) => (
          <Col key={lesson.id} xs={24} sm={12} lg={8}>
            <LessonCard lesson={lesson} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
