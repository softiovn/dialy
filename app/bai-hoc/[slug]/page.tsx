import { notFound } from "next/navigation";
import { Card, Tag, Button, Row, Col } from "antd";
import {
  ClockCircleOutlined,
  PlayCircleOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { lessons } from "@/data/lessons";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Metadata } from "next";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: PageProps): Metadata {
  const lesson = lessons.find((l) => l.slug === params.slug);

  if (!lesson) {
    return {
      title: "Bài học không tìm thấy - Địa lý Việt Nam",
      description: "Bài học bạn đang tìm kiếm không tồn tại.",
    };
  }

  return {
    title: `${lesson.title} - Học Địa lý Việt Nam`,
    description: lesson.description,
  };
}

export default function BaiHocDetailPage({ params }: PageProps) {
  const lesson = lessons.find((l) => l.slug === params.slug);

  if (!lesson) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Navigation */}
      <div className="mb-6">
        <Link href="/bai-hoc">
          <Button icon={<ArrowLeftOutlined />} type="text">
            Quay lại danh sách
          </Button>
        </Link>
      </div>

      <Row gutter={24}>
        <Col span={16}>
          {/* Bài học */}
          <Card>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-900">
                  {lesson.title}
                </h1>
                <Tag color={lesson.level === "beginner" ? "green" : "orange"}>
                  {lesson.level === "beginner" ? "Cơ bản" : "Trung cấp"}
                </Tag>
              </div>

              <div className="flex items-center text-gray-600 mb-4">
                <ClockCircleOutlined className="mr-2" />
                <span>{lesson.duration}</span>
              </div>

              <p className="text-lg text-gray-700 mb-6">{lesson.description}</p>
            </div>

            {/* Nội dung bài học */}
            <div className="prose max-w-none">
              <ReactMarkdown>{lesson.content}</ReactMarkdown>
            </div>

            {/* Video (nếu có) */}
            {lesson.videoUrl && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Video bài học</h3>
                <div className="aspect-w-16 aspect-h-9">
                  <video controls className="w-full rounded-lg">
                    <source src={lesson.videoUrl} type="video/mp4" />
                    Trình duyệt của bạn không hỗ trợ video.
                  </video>
                </div>
              </div>
            )}
          </Card>
        </Col>

        <Col span={8}>
          {/* Thông tin bài học */}
          <Card title="Thông tin bài học" className="mb-6">
            <div className="space-y-4">
              <div>
                <strong>Thời lượng:</strong>
                <p>{lesson.duration}</p>
              </div>
              <div>
                <strong>Cấp độ:</strong>
                <p>
                  {lesson.level === "beginner"
                    ? "Cơ bản"
                    : lesson.level === "intermediate"
                    ? "Trung cấp"
                    : "Nâng cao"}
                </p>
              </div>
              <div>
                <strong>Trạng thái:</strong>
                <Tag color="green">Chưa hoàn thành</Tag>
              </div>
            </div>
          </Card>

          {/* Bài tập liên quan */}
          <Card title="Bài tập liên quan">
            <div className="space-y-3">
              <div className="p-3 border rounded-lg hover:border-blue-500 cursor-pointer">
                <p className="font-semibold">Bài tập nhận diện địa hình</p>
                <p className="text-sm text-gray-600">5 câu hỏi • 15 phút</p>
              </div>
              <div className="p-3 border rounded-lg hover:border-blue-500 cursor-pointer">
                <p className="font-semibold">Xác định vị trí trên bản đồ</p>
                <p className="text-sm text-gray-600">3 câu hỏi • 10 phút</p>
              </div>
            </div>

            <Link href="/bai-tap">
              <Button
                type="primary"
                block
                className="mt-4"
                icon={<PlayCircleOutlined />}
              >
                Làm bài tập ngay
              </Button>
            </Link>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
