"use client";

import { Card, Row, Col, Tag, Button } from "antd";
import { PlayCircleOutlined, ExperimentOutlined } from "@ant-design/icons";
import { practices } from "@/data/lessons";
import Link from "next/link";

export default function BaiTapPage() {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "quiz":
        return "blue";
      case "map":
        return "green";
      case "matching":
        return "orange";
      default:
        return "gray";
    }
  };

  const getTypeText = (type: string) => {
    switch (type) {
      case "quiz":
        return "Trắc nghiệm";
      case "map":
        return "Bản đồ";
      case "matching":
        return "Ghép nối";
      default:
        return type;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <ExperimentOutlined className="text-4xl text-blue-600 mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Bài tập thực hành
        </h1>
        <p className="text-lg text-gray-600">
          Rèn luyện kiến thức qua các bài tập tương tác và trắc nghiệm
        </p>
      </div>

      <Row gutter={[16, 16]}>
        {practices.map((practice) => (
          <Col key={practice.id} xs={24} sm={12} lg={8}>
            <Card
              hoverable
              cover={
                <div className="h-48 bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                  <ExperimentOutlined className="text-white text-6xl opacity-80" />
                </div>
              }
              actions={[
                <Link key="practice" href={`/bai-tap/${practice.slug}`}>
                  <Button type="primary" icon={<PlayCircleOutlined />}>
                    Làm bài
                  </Button>
                </Link>,
              ]}
            >
              <Card.Meta
                title={practice.title}
                description={
                  <div className="space-y-2">
                    <p className="text-gray-600">{practice.description}</p>
                    <div className="flex justify-between items-center">
                      <Tag color={getTypeColor(practice.type)}>
                        {getTypeText(practice.type)}
                      </Tag>
                      <span className="text-gray-500">
                        {practice.questions.length} câu
                      </span>
                    </div>
                  </div>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
