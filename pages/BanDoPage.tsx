"use client";

import { Card, Row, Col, List, Tag, Spin } from "antd";
import { EnvironmentOutlined, StarOutlined } from "@ant-design/icons";
import dynamic from "next/dynamic";
const VietnamMap = dynamic(() => import("@/components/VietnamMap"), {
  ssr: false,
  loading: () => (
    <div className="h-96 flex items-center justify-center">
      <Spin size="large" tip="Đang tải bản đồ..." />
    </div>
  ),
});

const geographicalFeatures = [
  {
    title: "Dãy Hoàng Liên Sơn",
    description: "Dãy núi cao nhất Việt Nam với đỉnh Fansipan (3.147m)",
    type: "núi",
  },
  {
    title: "Đồng bằng sông Hồng",
    description: "Vùng đồng bằng châu thổ rộng khoảng 15.000 km²",
    type: "đồng bằng",
  },
  {
    title: "Đồng bằng sông Cửu Long",
    description: "Vùng đồng bằng lớn nhất Việt Nam, diện tích ~40.000 km²",
    type: "đồng bằng",
  },
  {
    title: "Dải Trường Sơn",
    description: "Dãy núi dọc theo biên giới Việt-Lào, dài ~1.100 km",
    type: "núi",
  },
];

export default function BanDoPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Bản đồ Địa lý Việt Nam
        </h1>
        <p className="text-lg text-gray-600">
          Khám phá các đặc điểm địa lý, thành phố và vùng miền trên bản đồ tương
          tác
        </p>
      </div>

      <Row gutter={24}>
        <Col span={16}>
          <Card
            title={
              <div className="flex items-center">
                <EnvironmentOutlined className="mr-2" />
                Bản đồ tương tác Việt Nam
              </div>
            }
            bordered={false}
          >
            <VietnamMap />
          </Card>
        </Col>

        <Col span={8}>
          <Card
            title={
              <div className="flex items-center">
                <StarOutlined className="mr-2" />
                Đặc điểm địa lý nổi bật
              </div>
            }
            bordered={false}
          >
            <List
              dataSource={geographicalFeatures}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={
                      <div className="flex items-center justify-between">
                        <span>{item.title}</span>
                        <Tag color={item.type === "núi" ? "blue" : "green"}>
                          {item.type}
                        </Tag>
                      </div>
                    }
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </Card>

          <Card title="Thông tin địa lý" className="mt-6">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Diện tích:</span>
                <strong>331.212 km²</strong>
              </div>
              <div className="flex justify-between">
                <span>Đường bờ biển:</span>
                <strong>3.260 km</strong>
              </div>
              <div className="flex justify-between">
                <span>Điểm cao nhất:</span>
                <strong>Fansipan (3.147m)</strong>
              </div>
              <div className="flex justify-between">
                <span>Điểm thấp nhất:</span>
                <strong>Mực nước biển</strong>
              </div>
              <div className="flex justify-between">
                <span>Số tỉnh thành:</span>
                <strong>63</strong>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
