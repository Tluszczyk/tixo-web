import { l as functions, k as tablesDB, H as HandleAppwriteErrors } from './server.mjs';

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
var _analyzeGame_dec, _abandonGame_dec, _submitMove_dec, _getGame_dec, _listGames_dec, _joinGame_dec, _createGame_dec, _init;
_createGame_dec = [HandleAppwriteErrors({}, null)], _joinGame_dec = [HandleAppwriteErrors({}, false)], _listGames_dec = [HandleAppwriteErrors({}, [])], _getGame_dec = [HandleAppwriteErrors({}, null)], _submitMove_dec = [HandleAppwriteErrors({}, null)], _abandonGame_dec = [HandleAppwriteErrors({}, false)], _analyzeGame_dec = [HandleAppwriteErrors({}, false)];
class GamesService {
  constructor() {
    __runInitializers(_init, 5, this);
  }
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
  async listGames() {
    const rowList = await tablesDB.listRows({
      databaseId: "tixo",
      tableId: "games"
    });
    return rowList.rows;
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
        const response = JSON.parse(execution.responseBody);
        return !!response.success;
      } catch (e) {
        console.error("Failed to parse abandonGame response", e);
        return false;
      }
    }
    return false;
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
_init = __decoratorStart();
__decorateElement(_init, 1, "createGame", _createGame_dec, GamesService);
__decorateElement(_init, 1, "joinGame", _joinGame_dec, GamesService);
__decorateElement(_init, 1, "listGames", _listGames_dec, GamesService);
__decorateElement(_init, 1, "getGame", _getGame_dec, GamesService);
__decorateElement(_init, 1, "submitMove", _submitMove_dec, GamesService);
__decorateElement(_init, 1, "abandonGame", _abandonGame_dec, GamesService);
__decorateElement(_init, 1, "analyzeGame", _analyzeGame_dec, GamesService);
__decoratorMetadata(_init, GamesService);
const games = new GamesService();

export { games as g };
//# sourceMappingURL=games-BVE3tVOm.mjs.map
