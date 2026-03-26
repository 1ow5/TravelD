import { useEffect, useState } from "react";
import vkBridge from "@vkontakte/vk-bridge";

export function useVKUser() {
  const [user, setUser]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    vkBridge
      .send("VKWebAppGetUserInfo")
      .then((data) => setUser(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { user, loading, error };
}