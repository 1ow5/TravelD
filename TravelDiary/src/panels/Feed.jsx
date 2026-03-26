import React from "react";
import {
  Panel,
  PanelHeader,
  Search,
  Group,
  Header,
  ScrollView,
} from "@vkontakte/vkui";
import { Icon24Filter } from "@vkontakte/icons";

import AvatarRow from "../components/AvatarRow";
import PostCard  from "../components/PostCard";

// Моковые данные постов
const MOCK_POSTS = [
  {
    id: 1,
    author: { name: "Игорь Синяк", avatar: null, initials: "ИС" },
    text: "Ребята, привет! Делюсь с вами моими топ любимых отелей. Смотрите, я был в Сириусе отеле в Кыштыме, мне та…",
    hotels: [
      { id: 11, title: "Алоха", desc: "бла бла бда лалащфывша", image: "/images/hotel1.jpg" },
    ],
  },
  {
    id: 2,
    author: { name: "Илья Треш", avatar: null, initials: "ИТ" },
    text: "Ребята, привет! Делюсь с вами моими заметками…",
    hotels: [
      { id: 21, title: "Отдых",  desc: "бла бла лалащфывша", image: "/images/hotel2.jpg" },
      { id: 22, title: "Алоха",  desc: "бла бла лалащфывша", image: "/images/hotel3.jpg" },
    ],
  },
];

export default function Feed({ id }) {
  return (
    <Panel id={id}>
      {/* Шапка без заголовка — по макету пустая */}
      <PanelHeader separator={false} />

      {/* Строка поиска с кнопкой фильтра */}
      <Group>
        <Search
          placeholder="Отель"
          after={<Icon24Filter />}
        />
      </Group>

      {/* Горизонтальный ряд аватаров / сторисов */}
      <Group>
        <ScrollView orientation="horizontal">
          <AvatarRow />
        </ScrollView>
      </Group>

      {/* Лента постов */}
      <Group header={<Header mode="secondary">Рекомендации</Header>}>
        {MOCK_POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Group>
    </Panel>
  );
}