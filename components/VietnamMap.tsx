"use client";

import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polygon,
  Tooltip,
} from "react-leaflet";
import { Card, Tag, Divider, List, Typography } from "antd";
import { EnvironmentOutlined, StarOutlined } from "@ant-design/icons";
import "leaflet/dist/leaflet.css";
import L, { LatLngExpression } from "leaflet";

interface City {
  name: string;
  lat: number;
  lng: number;
  type: "capital" | "major" | "cultural";
  population: string;
  province: string;
  area: string;
  description: string;
}

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)
  ._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const { Title, Text } = Typography;

// Tọa độ các vùng miền Việt Nam (đơn giản hóa)
const regionalBounds: Record<string, LatLngExpression[]> = {
  north: [
    [21.0, 102.0],
    [23.5, 102.0],
    [23.5, 110.0],
    [21.0, 110.0],
    [21.0, 102.0],
  ],
  central: [
    [16.0, 102.0],
    [21.0, 102.0],
    [21.0, 110.0],
    [16.0, 110.0],
    [16.0, 102.0],
  ],
  south: [
    [8.0, 102.0],
    [16.0, 102.0],
    [16.0, 110.0],
    [8.0, 110.0],
    [8.0, 102.0],
  ],
};

const regionalColors = {
  north: "#1890ff",
  central: "#52c41a",
  south: "#fa8c16",
};

const majorCities: City[] = [
  {
    name: "Hà Nội",
    lat: 21.0278,
    lng: 105.8342,
    type: "capital",
    population: "8.4 triệu",
    province: "Hà Nội",
    area: "3.359 km²",
    description:
      "Thủ đô của Việt Nam, trung tâm chính trị, văn hóa và giáo dục",
  },
  {
    name: "Hồ Chí Minh",
    lat: 10.8231,
    lng: 106.6297,
    type: "major",
    population: "9.0 triệu",
    province: "TP. Hồ Chí Minh",
    area: "2.061 km²",
    description: "Thành phố lớn nhất Việt Nam, trung tâm kinh tế và tài chính",
  },
  {
    name: "Đà Nẵng",
    lat: 16.0544,
    lng: 108.2022,
    type: "major",
    population: "1.2 triệu",
    province: "Đà Nẵng",
    area: "1.285 km²",
    description: "Thành phố cảng quan trọng ở miền Trung, trung tâm công nghệ",
  },
  {
    name: "Huế",
    lat: 16.4637,
    lng: 107.5909,
    type: "cultural",
    population: "0.6 triệu",
    province: "Thừa Thiên Huế",
    area: "2.718 km²",
    description: "Cố đô của Việt Nam, di sản văn hóa thế giới UNESCO",
  },
];

const geographicalFeatures = [
  {
    name: "Vịnh Hạ Long",
    lat: 20.9101,
    lng: 107.1839,
    type: "natural",
    description: "Di sản thiên nhiên thế giới với hàng nghìn đảo đá vôi",
  },
  {
    name: "Đèo Hải Vân",
    lat: 16.2,
    lng: 108.1,
    type: "mountain",
    description: "Đèo núi cao phân chia giữa Đà Nẵng và Thừa Thiên Huế",
  },
  {
    name: "Mũi Cà Mau",
    lat: 8.63,
    lng: 104.8,
    type: "cape",
    description: "Điểm cực Nam của đất liền Việt Nam",
  },
];

const vietnamBounds = L.latLngBounds(
  [8.0, 102.0], // southwest
  [24.0, 110.0] // northeast
);

export default function VietnamMap() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  const getMarkerIcon = (type: string) => {
    const iconUrl =
      type === "capital"
        ? "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png"
        : type === "cultural"
        ? "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png"
        : "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png";

    return new L.Icon({
      iconUrl,
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });
  };

  const getFeatureIcon = (type: string) => {
    const color =
      type === "natural"
        ? "green"
        : type === "mountain"
        ? "orange"
        : type === "cape"
        ? "gray"
        : "blue";

    const iconUrl = `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`;

    return new L.Icon({
      iconUrl,
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      iconSize: [20, 35],
      iconAnchor: [10, 35],
      popupAnchor: [1, -34],
      shadowSize: [35, 35],
    });
  };

  const handleRegionClick = (region: string) => {
    setSelectedRegion(region);
    setSelectedCity(null);
  };

  const regionInfo = {
    north: {
      name: "Miền Bắc",
      provinces: 25,
      area: "115.000 km²",
      population: "32 triệu",
      features: [
        "Đồng bằng sông Hồng",
        "Vùng núi Tây Bắc",
        "Vùng núi Đông Bắc",
      ],
      description: "Vùng có khí hậu cận nhiệt đới ẩm với 4 mùa rõ rệt",
    },
    central: {
      name: "Miền Trung",
      provinces: 19,
      area: "95.000 km²",
      population: "20 triệu",
      features: ["Dải Trường Sơn", "Đồng bằng duyên hải", "Tây Nguyên"],
      description:
        "Vùng có địa hình hẹp ngang, chịu ảnh hưởng của gió Lào và bão",
    },
    south: {
      name: "Miền Nam",
      provinces: 19,
      area: "65.000 km²",
      population: "35 triệu",
      features: ["Đồng bằng sông Cửu Long", "Đông Nam Bộ"],
      description: "Vùng có khí hậu nhiệt đới xavan với 2 mùa mưa nắng rõ rệt",
    },
  };

  return (
    <div className="h-full w-full">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-full">
        {/* Bản đồ - Chiếm 3/4 màn hình */}
        <div className="lg:col-span-3 h-96 lg:h-full">
          <MapContainer
            center={[16.0, 106.0]}
            zoom={6}
            style={{ height: "100%", width: "100%" }}
            maxBounds={vietnamBounds}
            maxBoundsViscosity={1.0}
            className="rounded-lg shadow-lg"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {/* Vẽ các vùng miền */}
            {Object.entries(regionalBounds).map(([region, bounds]) => (
              <Polygon
                key={region}
                positions={bounds}
                pathOptions={{
                  fillColor:
                    regionalColors[region as keyof typeof regionalColors],
                  fillOpacity: selectedRegion === region ? 0.3 : 0.1,
                  color: regionalColors[region as keyof typeof regionalColors],
                  weight: 2,
                  opacity: 0.8,
                }}
                eventHandlers={{
                  click: () => handleRegionClick(region),
                }}
              >
                <Tooltip permanent direction="center">
                  {regionInfo[region as keyof typeof regionInfo].name}
                </Tooltip>
              </Polygon>
            ))}

            {/* Thành phố */}
            {majorCities.map((city) => (
              <Marker
                key={city.name}
                position={[city.lat, city.lng]}
                icon={getMarkerIcon(city.type)}
                eventHandlers={{
                  click: () => setSelectedCity(city),
                }}
              >
                <Popup>
                  <div className="min-w-[200px]">
                    <div className="flex items-center justify-between mb-2">
                      <Title level={5} className="mb-0">
                        {city.name}
                      </Title>
                      <Tag
                        color={
                          city.type === "capital"
                            ? "red"
                            : city.type === "cultural"
                            ? "purple"
                            : "blue"
                        }
                      >
                        {city.type === "capital"
                          ? "Thủ đô"
                          : city.type === "cultural"
                          ? "Di sản"
                          : "Thành phố"}
                      </Tag>
                    </div>
                    <Divider className="my-2" />
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <Text strong>Dân số:</Text>
                        <Text>{city.population}</Text>
                      </div>
                      <div className="flex justify-between">
                        <Text strong>Diện tích:</Text>
                        <Text>{city.area}</Text>
                      </div>
                      <div className="mt-2">
                        <Text type="secondary">{city.description}</Text>
                      </div>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}

            {/* Đặc điểm địa lý */}
            {geographicalFeatures.map((feature) => (
              <Marker
                key={feature.name}
                position={[feature.lat, feature.lng]}
                icon={getFeatureIcon(feature.type)}
              >
                <Popup>
                  <div className="min-w-[200px]">
                    <div className="flex items-center justify-between mb-2">
                      <Title level={5} className="mb-0">
                        {feature.name}
                      </Title>
                      <Tag color="green">Địa danh</Tag>
                    </div>
                    <Text type="secondary">{feature.description}</Text>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Thông tin chi tiết - Chiếm 1/4 màn hình */}
        <div className="lg:col-span-1 space-y-4 overflow-y-auto">
          {selectedRegion ? (
            <Card
              title={
                <div className="flex items-center">
                  <EnvironmentOutlined className="mr-2" />
                  {regionInfo[selectedRegion as keyof typeof regionInfo].name}
                </div>
              }
              className="h-full"
            >
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-center p-2 bg-blue-50 rounded">
                    <div className="font-semibold">Tỉnh thành</div>
                    <div className="text-lg">
                      {
                        regionInfo[selectedRegion as keyof typeof regionInfo]
                          .provinces
                      }
                    </div>
                  </div>
                  <div className="text-center p-2 bg-green-50 rounded">
                    <div className="font-semibold">Diện tích</div>
                    <div className="text-lg">
                      {
                        regionInfo[selectedRegion as keyof typeof regionInfo]
                          .area
                      }
                    </div>
                  </div>
                  <div className="text-center p-2 bg-orange-50 rounded">
                    <div className="font-semibold">Dân số</div>
                    <div className="text-lg">
                      {
                        regionInfo[selectedRegion as keyof typeof regionInfo]
                          .population
                      }
                    </div>
                  </div>
                </div>

                <div>
                  <Text strong>Đặc điểm nổi bật:</Text>
                  <List
                    size="small"
                    dataSource={
                      regionInfo[selectedRegion as keyof typeof regionInfo]
                        .features
                    }
                    renderItem={(item) => (
                      <List.Item>
                        <StarOutlined className="text-yellow-500 mr-2" />
                        {item}
                      </List.Item>
                    )}
                  />
                </div>

                <div>
                  <Text strong>Mô tả:</Text>
                  <Text type="secondary">
                    {
                      regionInfo[selectedRegion as keyof typeof regionInfo]
                        .description
                    }
                  </Text>
                </div>

                <button
                  onClick={() => setSelectedRegion(null)}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded transition-colors"
                >
                  ← Quay lại bản đồ tổng quan
                </button>
              </div>
            </Card>
          ) : selectedCity ? (
            <Card
              title={
                <div className="flex items-center">
                  <EnvironmentOutlined className="mr-2" />
                  {selectedCity.name}
                </div>
              }
              className="h-full"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Tag color={selectedCity.type === "capital" ? "red" : "blue"}>
                    {selectedCity.type === "capital" ? "Thủ đô" : "Thành phố"}
                  </Tag>
                  <Text type="secondary">{selectedCity.province}</Text>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-center p-2 bg-blue-50 rounded">
                    <div className="font-semibold">Dân số</div>
                    <div>{selectedCity.population}</div>
                  </div>
                  <div className="text-center p-2 bg-green-50 rounded">
                    <div className="font-semibold">Diện tích</div>
                    <div>{selectedCity.area}</div>
                  </div>
                </div>

                <div>
                  <Text strong>Mô tả:</Text>
                  <Text type="secondary">{selectedCity.description}</Text>
                </div>

                <button
                  onClick={() => setSelectedCity(null)}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded transition-colors"
                >
                  ← Quay lại bản đồ tổng quan
                </button>
              </div>
            </Card>
          ) : (
            <Card
              title={
                <div className="flex items-center">
                  <EnvironmentOutlined className="mr-2" />
                  Thông tin địa lý Việt Nam
                </div>
              }
              className="h-full"
            >
              <div className="space-y-4">
                <div className="text-center p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg">
                  <Title level={3} className="text-white mb-2">
                    Việt Nam
                  </Title>
                  <Text className="text-blue-100">Đất nước hình chữ S</Text>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <Text strong>Diện tích:</Text>
                    <Text>331.212 km²</Text>
                  </div>
                  <div className="flex justify-between">
                    <Text strong>Đường bờ biển:</Text>
                    <Text>3.260 km</Text>
                  </div>
                  <div className="flex justify-between">
                    <Text strong>Điểm cao nhất:</Text>
                    <Text>Fansipan (3.147m)</Text>
                  </div>
                  <div className="flex justify-between">
                    <Text strong>Số tỉnh thành:</Text>
                    <Text>63</Text>
                  </div>
                </div>

                <Divider />

                <div>
                  <Text strong>Ba vùng địa lý chính:</Text>
                  <List
                    size="small"
                    dataSource={[
                      { name: "Miền Bắc", color: "blue", key: "north" },
                      { name: "Miền Trung", color: "green", key: "central" },
                      { name: "Miền Nam", color: "orange", key: "south" },
                    ]}
                    renderItem={(item) => (
                      <List.Item
                        className="cursor-pointer hover:bg-gray-50 rounded p-2"
                        onClick={() => handleRegionClick(item.key)}
                      >
                        <div className="flex items-center">
                          <div
                            className="w-3 h-3 rounded-full mr-2"
                            style={{
                              backgroundColor:
                                regionalColors[
                                  item.key as keyof typeof regionalColors
                                ],
                            }}
                          />
                          {item.name}
                        </div>
                      </List.Item>
                    )}
                  />
                </div>

                <Divider />

                <div>
                  <Text strong>Thành phố chính:</Text>
                  <List
                    size="small"
                    dataSource={majorCities.slice(0, 3)}
                    renderItem={(city) => (
                      <List.Item
                        className="cursor-pointer hover:bg-gray-50 rounded p-2"
                        onClick={() => setSelectedCity(city)}
                      >
                        <div className="flex items-center justify-between w-full">
                          <Text>{city.name}</Text>
                          <Tag color={city.type === "capital" ? "red" : "blue"}>
                            {city.type === "capital" ? "Thủ đô" : "TP"}
                          </Tag>
                        </div>
                      </List.Item>
                    )}
                  />
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
