import React, { useState } from "react";
import {
  Panel,
  PanelHeader,
  Search,
  Group,
  Placeholder,
} from "@vkontakte/vkui";
import { Icon56SearchOutline } from "@vkontakte/icons";

export default function SearchPanel({ id }) {
  const [query, setQuery] = useState("");

  return (
    <Panel id={id}>
      <PanelHeader>Поиск</PanelHeader>
      <Group>
        <Search
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Введите название отеля"
        />
      </Group>
      {!query && (
        <Placeholder icon={<Icon56SearchOutline />}>
          Начните вводить название отеля
        </Placeholder>
      )}
      {/* Здесь будет список результатов поиска */}
    </Panel>
  );
}