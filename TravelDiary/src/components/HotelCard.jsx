import React from "react";
import { Card, Text, Caption } from "@vkontakte/vkui";

export default function HotelCard({ hotel }) {
  return (
    <Card
      mode="shadow"
      style={{
        width: 180,
        minWidth: 180,
        borderRadius: 16,
        overflow: "hidden",
        background: "#3d5229",
        cursor: "pointer",
        position: "relative",
      }}
    >
      {/* Фото отеля */}
      <div
        style={{
          height: 120,
          background: hotel.image
            ? `url(${hotel.image}) center/cover no-repeat`
            : "#5a7a3a",
        }}
      />

      {/* Подпись */}
      <div style={{ padding: "8px 12px 40px" }}>
        <Text style={{ color: "#fff", fontWeight: 700 }}>{hotel.title}</Text>
        <Caption style={{ color: "rgba(255,255,255,0.7)" }}>{hotel.desc}</Caption>
      </div>

      {/* Жёлтая кнопка-аватар внизу справа — «перейти» */}
      <div
        style={{
          position: "absolute",
          bottom: 10,
          right: 10,
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: "#e2a610",
        }}
      />
    </Card>
  );
}