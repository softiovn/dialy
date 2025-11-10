import { Card, Tag, Button } from "antd";
import { ClockCircleOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { Lesson } from "@/types";
import Link from "next/link";

interface LessonCardProps {
  lesson: Lesson;
}

export default function LessonCard({ lesson }: LessonCardProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "beginner":
        return "green";
      case "intermediate":
        return "orange";
      case "advanced":
        return "red";
      default:
        return "blue";
    }
  };

  return (
    <Card
      hoverable
      cover={
        <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
          <PlayCircleOutlined className="text-white text-6xl opacity-80" />
        </div>
      }
      actions={[
        <Link key="learn" href={`/bai-hoc/${lesson.slug}`}>
          <Button type="primary" icon={<PlayCircleOutlined />}>
            Học ngay
          </Button>
        </Link>,
      ]}
    >
      <Card.Meta
        title={lesson.title}
        description={
          <div className="space-y-2">
            <p className="text-gray-600">{lesson.description}</p>
            <div className="flex justify-between items-center">
              <Tag color={getLevelColor(lesson.level)}>
                {lesson.level === "beginner"
                  ? "Cơ bản"
                  : lesson.level === "intermediate"
                  ? "Trung cấp"
                  : "Nâng cao"}
              </Tag>
              <div className="flex items-center text-gray-500">
                <ClockCircleOutlined className="mr-1" />
                <span>{lesson.duration}</span>
              </div>
            </div>
          </div>
        }
      />
    </Card>
  );
}
