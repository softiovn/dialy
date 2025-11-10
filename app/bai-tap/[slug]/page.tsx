import { notFound } from "next/navigation";
import { Card, Button, Row, Col, List } from "antd";
import { ArrowLeftOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { practices } from "@/data/lessons";
import Link from "next/link";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: PageProps) {
  const practice = practices.find((p) => p.slug === params.slug);

  if (!practice) {
    return {
      title: "Bài tập không tìm thấy - Địa lý Việt Nam",
      description: "Bài tập bạn đang tìm kiếm không tồn tại.",
    };
  }

  return {
    title: `${practice.title} - Bài tập Địa lý Việt Nam`,
    description: practice.description,
  };
}

export default function BaiTapDetailPage({ params }: PageProps) {
  const practice = practices.find((p) => p.slug === params.slug);

  if (!practice) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navigation */}
      <div className="mb-6">
        <Link href="/bai-tap">
          <Button icon={<ArrowLeftOutlined />} type="text">
            Quay lại danh sách
          </Button>
        </Link>
      </div>

      <Card>
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {practice.title}
          </h1>
          <p className="text-lg text-gray-600">{practice.description}</p>
        </div>

        <Row gutter={24}>
          <Col span={16}>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Thông tin bài tập</h2>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Số câu hỏi:</strong> {practice.questions.length}
                </p>
                <p>
                  <strong>Loại bài tập:</strong>{" "}
                  {practice.type === "quiz"
                    ? "Trắc nghiệm"
                    : practice.type === "map"
                    ? "Bản đồ tương tác"
                    : "Ghép nối"}
                </p>
                <p>
                  <strong>Thời gian ước tính:</strong>{" "}
                  {practice.questions.length * 2} phút
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Hướng dẫn</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Đọc kỹ câu hỏi trước khi trả lời</li>
                <li>Bài tập có tính thời gian</li>
                <li>Bạn có thể xem lại đáp án sau khi hoàn thành</li>
                <li>Hãy cố gắng hết sức!</li>
              </ul>
            </div>
          </Col>

          <Col span={8}>
            <Card title="Bắt đầu bài tập" className="text-center">
              <PlayCircleOutlined className="text-6xl text-blue-600 mb-4" />
              <p className="text-gray-600 mb-6">
                Sẵn sàng để kiểm tra kiến thức của bạn?
              </p>
              <Button type="primary" size="large" className="w-full">
                Bắt đầu làm bài
              </Button>
            </Card>
          </Col>
        </Row>

        {/* Xem trước câu hỏi */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Xem trước câu hỏi</h2>
          <List
            dataSource={practice.questions.slice(0, 3)}
            renderItem={(question, index) => (
              <List.Item>
                <div className="w-full">
                  <p className="font-medium mb-2">
                    Câu {index + 1}: {question.question}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {question.options.map((option, optIndex) => (
                      <div
                        key={optIndex}
                        className={`p-2 rounded border ${
                          optIndex === question.correctAnswer
                            ? "border-green-500 bg-green-50"
                            : "border-gray-200"
                        }`}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                </div>
              </List.Item>
            )}
          />
        </div>
      </Card>
    </div>
  );
}
