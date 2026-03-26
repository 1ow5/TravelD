import React, { useEffect, useState } from "react";
import {
  Panel,
  PanelHeader,
  Group,
  Avatar,
  RichCell,
  Spinner,
} from "@vkontakte/vkui";
import vkBridge from "@vkontakte/vk-bridge";

export default function Profile({ id }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    vkBridge
      .send("VKWebAppGetUserInfo")
      .then((data) => setUser(data))
      .catch(console.error);
  }, []);

  return (
    <Panel id={id}>
      <PanelHeader>Профиль</PanelHeader>
      <Group>
        {user ? (
          <RichCell
            before={<Avatar size={72} src={user.photo_200} />}
            caption={`ID: ${user.id}`}
          >
            {user.first_name} {user.last_name}
          </RichCell>
        ) : (
          <Spinner size="large" style={{ margin: "20px auto" }} />
        )}
      </Group>
      {/* Здесь: сохранённые отели, история просмотров и т.д. */}
    </Panel>
  );
}