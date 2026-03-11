import { i as functions, t as tablesDB } from "../server.mjs";
import { ExecutionMethod } from "appwrite";
import { ref } from "vue";
const userCache = ref({});
const pendingRequests = /* @__PURE__ */ new Map();
class UserService {
  async listUsers(search, limit = 25, offset = 0) {
    let xpath = search ? `/users/list?id=${encodeURIComponent(search)}` : "/users/list";
    xpath += xpath.includes("?") ? `&limit=${limit}&offset=${offset}` : `?limit=${limit}&offset=${offset}`;
    const execution = await functions.createExecution({
      functionId: "app-handler",
      xpath,
      method: ExecutionMethod.GET
    });
    if (execution.status === "completed") {
      try {
        const response = JSON.parse(execution.responseBody);
        const userList = response.users || [];
        userList.forEach((u) => {
          userCache.value[u.$id] = u;
        });
        return { users: userList, total: response.total || userList.length };
      } catch (e) {
        console.error("Failed to parse listUsers response", e);
        return { users: [], total: 0 };
      }
    }
    return { users: [], total: 0 };
  }
  async fetchUsersByIds(ids) {
    if (ids.length === 0) return [];
    const missingIds = ids.filter((id) => !userCache.value[id]);
    if (missingIds.length === 0) {
      return ids.map((id) => userCache.value[id]).filter((u) => !!u);
    }
    const execution = await functions.createExecution({
      functionId: "app-handler",
      xpath: "/users/list",
      method: ExecutionMethod.POST,
      body: JSON.stringify({ ids: missingIds })
    });
    if (execution.status === "completed") {
      try {
        const response = JSON.parse(execution.responseBody);
        const userList = response.users || [];
        userList.forEach((u) => {
          userCache.value[u.$id] = u;
        });
        return ids.map((id) => userCache.value[id]).filter((u) => !!u);
      } catch (e) {
        console.error("Failed to parse fetchUsersByIds response", e);
        return [];
      }
    }
    return [];
  }
  async listBots() {
    const execution = await functions.createExecution({
      functionId: "app-handler",
      xpath: "/users/bots",
      method: ExecutionMethod.GET
    });
    if (execution.status === "completed") {
      try {
        const response = JSON.parse(execution.responseBody);
        const bots = response.bots || [];
        bots.forEach((u) => {
          userCache.value[u.$id] = u;
        });
        return bots;
      } catch (e) {
        console.error("Failed to parse listBots response", e);
        return [];
      }
    }
    return [];
  }
  async getUser(userId) {
    if (userCache.value[userId]) return userCache.value[userId];
    if (pendingRequests.has(userId)) {
      return pendingRequests.get(userId);
    }
    const requestPromise = (async () => {
      try {
        const execution = await functions.createExecution({
          functionId: "app-handler",
          xpath: `/users/details?id=${userId}`,
          method: ExecutionMethod.GET,
          body: JSON.stringify({ id: userId })
        });
        if (execution.status === "completed") {
          const response = JSON.parse(execution.responseBody);
          if (response.user) {
            userCache.value[userId] = response.user;
            return response.user;
          }
        }
        return null;
      } catch (e) {
        console.error("Failed to fetch user details", e);
        return null;
      } finally {
        pendingRequests.delete(userId);
      }
    })();
    pendingRequests.set(userId, requestPromise);
    return requestPromise;
  }
  getUserFromCache(userId) {
    return userCache.value[userId] || null;
  }
}
const users = new UserService();
class GamesService {
  async createGame(symbol, isOnDevice = false, requestedOpponentId = null) {
    const body = { symbol, isOnDevice, requestedOpponentId };
    const execution = await functions.createExecution({
      functionId: "app-handler",
      body: JSON.stringify(body),
      xpath: "/games/create",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (execution.status === "completed") {
      try {
        const response = JSON.parse(execution.responseBody);
        return response.gameId || response.$id || null;
      } catch (e) {
        console.error("Failed to parse createGame response", e);
        return null;
      }
    }
    return null;
  }
  async joinGame(gameId) {
    const body = { gameId };
    const execution = await functions.createExecution({
      functionId: "app-handler",
      body: JSON.stringify(body),
      xpath: "/games/join",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (execution.status === "completed") {
      try {
        const response = JSON.parse(execution.responseBody);
        return !!response.success;
      } catch (e) {
        console.error("Failed to parse joinGame response", e);
        return false;
      }
    }
    return false;
  }
  async listGames(limit = 25, offset = 0, filters = {}) {
    const params = new URLSearchParams();
    params.append("limit", limit.toString());
    params.append("offset", offset.toString());
    if (filters.status) params.append("status", filters.status);
    if (filters.playerId) params.append("playerId", filters.playerId);
    if (filters.creatorId) params.append("creatorId", filters.creatorId);
    if (filters.isOnDevice !== void 0) params.append("isOnDevice", filters.isOnDevice.toString());
    const execution = await functions.createExecution({
      functionId: "app-handler",
      xpath: `/games/list?${params.toString()}`,
      method: ExecutionMethod.GET
    });
    if (execution.status === "completed") {
      try {
        const response = JSON.parse(execution.responseBody);
        return {
          games: response.games || [],
          total: response.total || (response.games || []).length
        };
      } catch (e) {
        console.error("Failed to parse listGames response", e);
        return { games: [], total: 0 };
      }
    }
    return { games: [], total: 0 };
  }
  async getGame(gameId) {
    return await tablesDB.getRow({
      databaseId: "tixo",
      tableId: "games",
      rowId: gameId
    });
  }
  async submitMove(gameId, x, y) {
    const body = { gameId, move: { x, y } };
    const execution = await functions.createExecution({
      functionId: "app-handler",
      body: JSON.stringify(body),
      xpath: "/games/move",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (execution.status === "completed") {
      try {
        return JSON.parse(execution.responseBody);
      } catch (e) {
        console.error("Failed to parse submitMove response", e);
        return null;
      }
    }
    return null;
  }
  async abandonGame(gameId) {
    const body = { gameId };
    const execution = await functions.createExecution({
      functionId: "app-handler",
      body: JSON.stringify(body),
      xpath: "/games/abandon",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (execution.status === "completed") {
      try {
        return JSON.parse(execution.responseBody);
      } catch (e) {
        console.error("Failed to parse abandonGame response", e);
        return null;
      }
    }
    return null;
  }
  async cancelGame(gameId) {
    return await this.abandonGame(gameId);
  }
  async analyzeGame(gameId, modelName = "neural") {
    const body = { gameId, modelName };
    const execution = await functions.createExecution({
      functionId: "ai-handler",
      body: JSON.stringify(body),
      xpath: "/ai/analysis",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (execution.status === "completed") {
      try {
        const response = JSON.parse(execution.responseBody);
        return !!response.success;
      } catch (e) {
        console.error("Failed to parse analyzeGame response", e);
        return false;
      }
    }
    return false;
  }
}
const games = new GamesService();
export {
  games as g,
  users as u
};
