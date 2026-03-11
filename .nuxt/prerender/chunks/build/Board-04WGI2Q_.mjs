import { defineComponent, ref, computed, mergeProps, useSSRContext } from 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "BoardCell",
  __ssrInlineRender: true,
  props: {
    cell: {},
    cellIndex: {},
    tileIndex: {},
    absoluteIndex: {},
    size: {},
    isSelected: { type: Boolean },
    isHighlighted: { type: Boolean },
    isRecommended: { type: Boolean },
    isAvailable: { type: Boolean },
    readonly: { type: Boolean }
  },
  emits: ["click", "mouseenter", "mouseleave"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const cellClasses = computed(() => {
      switch (props.size) {
        case "sm":
          return "text-[8px] lg:text-[10px]";
        case "md":
          return "text-lg lg:text-xl";
        default:
          return "text-lg lg:text-3xl";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex items-center justify-center aspect-square rounded-md lg:rounded-lg bg-cell-bg border border-cell-border font-black transition-all cursor-pointer select-none active:scale-90 overflow-hidden outline-none touch-manipulation relative", [
          cellClasses.value,
          {
            "bg-indigo-500/30 border-indigo-500/50 ring-2 ring-indigo-500/40 scale-95": __props.isSelected,
            "historical-move-highlight z-20 scale-110": __props.isHighlighted,
            "recommended-move-highlight z-20 scale-110": __props.isRecommended,
            "available-cell hover:bg-yellow-500/20 hover:border-yellow-500/60 hover:ring-2 hover:ring-yellow-500/30": __props.isAvailable,
            "hover:bg-app-text/10 hover:border-app-text/20": !__props.isAvailable && !__props.readonly
          }
        ]],
        style: { "-webkit-tap-highlight-color": "transparent" }
      }, _attrs))} data-v-67c53ab7>`);
      if (__props.cell === "X") {
        _push(`<span class="marker-x leading-none flex items-center justify-center" data-v-67c53ab7>X</span>`);
      } else if (__props.cell === "O") {
        _push(`<span class="marker-o leading-none flex items-center justify-center" data-v-67c53ab7>O</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BoardCell.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const BoardCell = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-67c53ab7"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BoardTile",
  __ssrInlineRender: true,
  props: {
    tileIndex: {},
    tileArr: {},
    size: {},
    isSelected: { type: Function },
    isHighlighted: { type: Function },
    isRecommended: { type: Function },
    isAvailable: { type: Function },
    isTargetHighlight: { type: Boolean },
    isTileActive: { type: Boolean },
    tileWinner: {},
    readonly: { type: Boolean },
    getAbsoluteIndex: { type: Function }
  },
  emits: ["cell-click", "cell-mouseenter", "cell-mouseleave"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["small-board transition-all duration-200 rounded-lg lg:rounded-2xl relative overflow-hidden aspect-square grid grid-cols-3 grid-rows-3 gap-0.5 lg:gap-1 p-0.5 lg:p-1.5", [
          __props.isTargetHighlight ? "target-highlight ring-4 ring-yellow-400/80 z-30" : __props.isTileActive ? "active ring-2 ring-indigo-500/50" : "opacity-80",
          __props.tileWinner === "X" ? "won-x" : __props.tileWinner === "O" ? "won-o" : __props.tileWinner === "D" || __props.tileWinner === "TIE" ? "won-draw" : "glass"
        ]]
      }, _attrs))} data-v-f14b0cd2><!--[-->`);
      ssrRenderList(__props.tileArr, (cell, j) => {
        _push(ssrRenderComponent(BoardCell, {
          key: j,
          cell,
          "cell-index": j,
          "tile-index": __props.tileIndex,
          "absolute-index": __props.getAbsoluteIndex(__props.tileIndex, j),
          size: __props.size,
          "is-selected": __props.isSelected(j),
          "is-highlighted": __props.isHighlighted(j),
          "is-recommended": __props.isRecommended(j),
          "is-available": __props.isAvailable(j),
          readonly: __props.readonly,
          onClick: ($event) => emit("cell-click", $event),
          onMouseenter: ($event) => emit("cell-mouseenter", __props.tileIndex, j),
          onMouseleave: ($event) => emit("cell-mouseleave")
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BoardTile.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BoardTile = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f14b0cd2"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Board",
  __ssrInlineRender: true,
  props: {
    board: {},
    tileWinners: {},
    size: {},
    selectedCell: {},
    highlightedCell: {},
    recommendedCell: {},
    currentPlayer: {},
    readonly: { type: Boolean },
    availableMoves: {}
  },
  emits: ["cell-click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const hoveredX = ref(null);
    const hoveredY = ref(null);
    const handleCellMouseEnter = (tileIndex, cellIndex) => {
      const absIdx = getAbsoluteIndex(tileIndex, cellIndex);
      hoveredX.value = absIdx % 9;
      hoveredY.value = Math.floor(absIdx / 9);
    };
    const handleCellMouseLeave = () => {
      hoveredX.value = null;
      hoveredY.value = null;
    };
    const containerSizeClasses = computed(() => {
      switch (props.size) {
        case "sm":
          return "max-w-[180px]";
        case "md":
          return "max-w-[500px]";
        default:
          return "max-w-[min(90vw,85vh)] w-full";
      }
    });
    const targetTileIndex = computed(() => {
      if (props.selectedCell === null || props.selectedCell === void 0) return null;
      const x = props.selectedCell % 9;
      const y = Math.floor(props.selectedCell / 9);
      const cx = x % 3;
      const cy = y % 3;
      return cy * 3 + cx;
    });
    const isTargetHighlight = (tileIndex) => {
      if (targetTileIndex.value === null) return false;
      const targetIsUnavailable = deserializedTileWinners.value[targetTileIndex.value] !== ".";
      if (!targetIsUnavailable) {
        return tileIndex === targetTileIndex.value;
      }
      return deserializedTileWinners.value[tileIndex] === ".";
    };
    const isTileActive = (tileIndex) => {
      if (props.readonly) return true;
      if (deserializedTileWinners.value[tileIndex] !== ".") return false;
      if (!props.availableMoves) return true;
      const tx = tileIndex % 3 * 3;
      const ty = Math.floor(tileIndex / 3) * 3;
      const tileCoord = `${String.fromCharCode(65 + tx)}${ty + 1}`;
      if (props.availableMoves.startsWith("AVAILABLE_IN_TILE:")) {
        return props.availableMoves.includes(tileCoord);
      }
      return true;
    };
    const isCellAvailable = (tileIndex, cellIndex) => {
      if (props.readonly) return false;
      if (!props.availableMoves) return true;
      if (deserializedTileWinners.value[tileIndex] !== ".") return false;
      const index = getAbsoluteIndex(tileIndex, cellIndex);
      if (props.board && props.board[index] !== ".") return false;
      const x = index % 9;
      const y = Math.floor(index / 9);
      const col = String.fromCharCode(65 + x);
      const row = y + 1;
      const coord = `${col}${row}`;
      const moves = props.availableMoves || "";
      if (moves.startsWith("ALL_AVAILABLE_EXCEPT_TILES:")) {
        const parts = moves.split(":");
        const exceptTiles = parts[1] ? parts[1].split(",").filter(Boolean) : [];
        const exceptCells = parts[3] ? parts[3].split(",").filter(Boolean) : [];
        const tx = Math.floor(x / 3) * 3;
        const ty = Math.floor(y / 3) * 3;
        const tileCoord = `${String.fromCharCode(65 + tx)}${ty + 1}`;
        if (exceptTiles.includes(tileCoord)) return false;
        return !exceptCells.includes(coord);
      } else if (moves.startsWith("ALL_AVAILABLE_EXCEPT:")) {
        const parts = moves.split(":");
        const except = parts[1] ? parts[1].split(",").filter(Boolean) : [];
        return !except.includes(coord);
      } else if (moves.startsWith("AVAILABLE_IN_TILE:")) {
        const parts = moves.split(":");
        const tileCoord = parts[1];
        if (!tileCoord) return true;
        const except = parts[3] ? parts[3].split(",").filter(Boolean) : [];
        const tx = tileCoord.charCodeAt(0) - 65;
        const ty = parseInt(tileCoord.substring(1)) - 1;
        const isInTile = x >= tx && x < tx + 3 && y >= ty && y < ty + 3;
        return isInTile && !except.includes(coord);
      }
      return true;
    };
    const deserializedBoard = computed(() => {
      let b = props.board || ".".repeat(81);
      if (b.length < 81) b = b.padEnd(81, ".");
      const tiles = [];
      for (let ty = 0; ty < 3; ty++) {
        for (let tx = 0; tx < 3; tx++) {
          const tile = [];
          for (let cy = 0; cy < 3; cy++) {
            for (let cx = 0; cx < 3; cx++) {
              const x = tx * 3 + cx;
              const y = ty * 3 + cy;
              tile.push(b[y * 9 + x]);
            }
          }
          tiles.push(tile);
        }
      }
      return tiles;
    });
    const deserializedTileWinners = computed(() => {
      let tw = props.tileWinners || ".".repeat(9);
      if (tw.length < 9) tw = tw.padEnd(9, ".");
      return tw.split("");
    });
    const getAbsoluteIndex = (tileIndex, cellIndex) => {
      const tx = tileIndex % 3;
      const ty = Math.floor(tileIndex / 3);
      const cx = cellIndex % 3;
      const cy = Math.floor(cellIndex / 3);
      const x = tx * 3 + cx;
      const y = ty * 3 + cy;
      return y * 9 + x;
    };
    const onCellClick = (absoluteIndex) => {
      if (props.readonly) return;
      emit("cell-click", absoluteIndex);
    };
    const horizontalLabels = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
    const verticalLabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [
          "board-container w-full relative group mx-auto",
          containerSizeClasses.value
        ]
      }, _attrs))}><div class="relative"><div class="absolute -top-6 lg:-top-12 left-0 right-0 grid grid-cols-3 gap-2 lg:gap-4 px-2 lg:px-6 pointer-events-none h-6 lg:h-12"><!--[-->`);
      ssrRenderList(3, (t) => {
        _push(`<div class="grid grid-cols-3 gap-0.5 lg:gap-1 px-0.5 lg:px-1.5"><!--[-->`);
        ssrRenderList(3, (c) => {
          _push(`<span class="${ssrRenderClass([
            "text-[10px] lg:text-base font-black font-mono text-center uppercase flex items-end justify-center pb-1 transition-all duration-200",
            hoveredX.value === (t - 1) * 3 + (c - 1) ? "text-indigo-400 scale-125" : "text-app-text-muted"
          ])}">${ssrInterpolate(horizontalLabels[(t - 1) * 3 + (c - 1)])}</span>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div><div class="absolute -left-6 lg:-left-12 top-0 bottom-0 grid grid-rows-3 gap-2 lg:gap-4 py-2 lg:py-6 pointer-events-none w-6 lg:w-12"><!--[-->`);
      ssrRenderList(3, (t) => {
        _push(`<div class="grid grid-rows-3 gap-0.5 lg:gap-1 py-0.5 lg:py-1.5"><!--[-->`);
        ssrRenderList(3, (c) => {
          _push(`<span class="${ssrRenderClass([
            "text-[10px] lg:text-base font-black font-mono flex items-center justify-end pr-1 transition-all duration-200",
            hoveredY.value === (t - 1) * 3 + (c - 1) ? "text-indigo-400 scale-125" : "text-app-text-muted"
          ])}">${ssrInterpolate(verticalLabels[(t - 1) * 3 + (c - 1)])}</span>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div><div class="main-grid aspect-square glass rounded-xl lg:rounded-2xl shadow-2xl relative z-10 grid grid-cols-3 grid-rows-3 gap-2 lg:gap-4 p-2 lg:p-4 transition-all duration-300"><!--[-->`);
      ssrRenderList(deserializedBoard.value, (tileArr, i) => {
        _push(ssrRenderComponent(BoardTile, {
          key: i,
          "tile-index": i,
          "tile-arr": tileArr,
          size: __props.size || "md",
          "is-target-highlight": isTargetHighlight(i),
          "is-tile-active": isTileActive(i),
          "tile-winner": deserializedTileWinners.value[i],
          readonly: !!__props.readonly,
          "get-absolute-index": getAbsoluteIndex,
          "is-selected": (j) => __props.selectedCell === getAbsoluteIndex(i, j),
          "is-highlighted": (j) => __props.highlightedCell === getAbsoluteIndex(i, j),
          "is-recommended": (j) => __props.recommendedCell === getAbsoluteIndex(i, j),
          "is-available": (j) => isCellAvailable(i, j),
          onCellClick,
          onCellMouseenter: handleCellMouseEnter,
          onCellMouseleave: handleCellMouseLeave
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Board.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
