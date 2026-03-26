import React, { useState } from "react";
import {
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  Epic,
  Tabbar,
  TabbarItem,
  View,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import { Icon28NewsfeedOutline, Icon28SearchOutline, Icon28UserOutline } from "@vkontakte/icons";

import Feed    from "./panels/Feed";
import Search  from "./panels/Search";
import Profile from "./panels/Profile";

export default function App() {
  const [activeStory, setActiveStory] = useState("feed");

  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <Epic
            activeStory={activeStory}
            tabbar={
              <Tabbar>
                <TabbarItem
                  onClick={() => setActiveStory("feed")}
                  selected={activeStory === "feed"}
                  data-story="feed"
                  text="Лента"
                >
                  <Icon28NewsfeedOutline />
                </TabbarItem>
                <TabbarItem
                  onClick={() => setActiveStory("search")}
                  selected={activeStory === "search"}
                  data-story="search"
                  text="Поиск"
                >
                  <Icon28SearchOutline />
                </TabbarItem>
                <TabbarItem
                  onClick={() => setActiveStory("profile")}
                  selected={activeStory === "profile"}
                  data-story="profile"
                  text="Профиль"
                >
                  <Icon28UserOutline />
                </TabbarItem>
              </Tabbar>
            }
          >
            {/* Каждый Story — отдельная вкладка */}
            <View id="feed"    activePanel="feed">    <Feed    id="feed"    /></View>
            <View id="search"  activePanel="search">  <Search  id="search"  /></View>
            <View id="profile" activePanel="profile"> <Profile id="profile" /></View>
          </Epic>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}