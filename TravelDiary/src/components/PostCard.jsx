import React, { useState } from "react";
import {
  Avatar,
  Card,
  RichCell,
  Text,
  Link,
  HorizontalScroll,
} from "@vkontakte/vkui";
import HotelCard from "./HotelCard";

export default function PostCard({ post }) {
  const [expanded, setExpanded] = useState(false);
  const { author, text, hotels } = post;

  const SHORT_LIMIT = 100;
  const isLong = text.length > SHORT_LIMIT;
  const displayText = expanded || !isLong ? text : text.slice(0, SHORT_LIMIT) + "…";

  return (
    <Card mode="shadow" style={{ marginBottom: 12 }}>
      {/* Автор */}
      <RichCell
        before={
          <Avatar size={36} style={{ background: "#4a5e3a" }}>
            <span style={{ color: "#fff", fontSize: 12, fontWeight: 600 }}>
              {author.initials}
            </span>
          </Avatar>
        }
        disabled
      >
        {author.name}
      </RichCell>

      {/* Текст поста с «Далее» */}
      <div style={{ padding: "0 16px 8px" }}>
        <Text>{displayText}</Text>
        {isLong && !expanded && (
          <Link onClick={() => setExpanded(true)}>Далее</Link>
        )}
      </div>

      {/* Карточки отелей (горизонтальный скролл если > 1) */}
      {hotels.length === 1 ? (
        <div style={{ padding: "0 16px 16px" }}>
          <HotelCard hotel={hotels[0]} />
        </div>
      ) : (
        <HorizontalScroll>
          <div style={{ display: "flex", gap: 12, padding: "0 16px 16px" }}>
            {hotels.map((h) => (
              <HotelCard key={h.id} hotel={h} />
            ))}
          </div>
        </HorizontalScroll>
      )}
    </Card>
  );
}