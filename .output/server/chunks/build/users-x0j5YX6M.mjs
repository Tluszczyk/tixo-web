import { l as functions, H as HandleAppwriteErrors } from './server.mjs';
import { ExecutionMethod } from 'appwrite';
import { ref } from 'vue';

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : /* @__PURE__ */ Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __decoratorStart = (base) => {
  var _a;
  return [, , , __create((_a = void 0 ) != null ? _a : null)];
};
var __decoratorStrings = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError("Function expected") : fn;
var __decoratorContext = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError("Already initialized") : fns.push(__expectFn(fn || null)) });
var __decoratorMetadata = (array, target) => __defNormalProp(target, __knownSymbol("metadata"), array[3]);
var __runInitializers = (array, flags, self, value) => {
  for (var i = 0, fns = array[flags >> 1], n = fns && fns.length; i < n; i++) fns[i].call(self) ;
  return value;
};
var __decorateElement = (array, flags, name, decorators, target, extra) => {
  var it, done, ctx, access, k = flags & 7, s = false, p = false;
  var j = 2 , key = __decoratorStrings[k + 5];
  var extraInitializers = array[j] || (array[j] = []);
  var desc = ((target = target.prototype), __getOwnPropDesc(target , name));
  for (var i = decorators.length - 1; i >= 0; i--) {
    ctx = __decoratorContext(k, name, done = {}, array[3], extraInitializers);
    {
      ctx.static = s, ctx.private = p, access = ctx.access = { has: (x) => name in x };
      access.get = (x) => x[name];
    }
    it = (0, decorators[i])(desc[key]  , ctx), done._ = 1;
    __expectFn(it) && (desc[key] = it );
  }
  return desc && __defProp(target, name, desc), target;
};
var _getUser_dec, _listBots_dec, _fetchUsersByIds_dec, _listUsers_dec, _init;
const userCache = ref({});
const pendingRequests = /* @__PURE__ */ new Map();
_listUsers_dec = [HandleAppwriteErrors({}, [])], _fetchUsersByIds_dec = [HandleAppwriteErrors({}, [])], _listBots_dec = [HandleAppwriteErrors({}, [])], _getUser_dec = [HandleAppwriteErrors({}, null)];
class UserService {
  constructor() {
    __runInitializers(_init, 5, this);
  }
  async listUsers(search) {
    const xpath = search ? `/users/list?id=${encodeURIComponent(search)}` : "/users/list";
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
        return userList;
      } catch (e) {
        console.error("Failed to parse listUsers response", e);
        return [];
      }
    }
    return [];
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
_init = __decoratorStart();
__decorateElement(_init, 1, "listUsers", _listUsers_dec, UserService);
__decorateElement(_init, 1, "fetchUsersByIds", _fetchUsersByIds_dec, UserService);
__decorateElement(_init, 1, "listBots", _listBots_dec, UserService);
__decorateElement(_init, 1, "getUser", _getUser_dec, UserService);
__decoratorMetadata(_init, UserService);
const users = new UserService();

export { users as u };
//# sourceMappingURL=users-x0j5YX6M.mjs.map
