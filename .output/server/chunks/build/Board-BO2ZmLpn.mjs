import { defineComponent, ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

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
    const hoveredX = ref(null);
    const hoveredY = ref(null);
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
      const index = getAbsoluteIndex(tileIndex, cellIndex);
      if (props.board && props.board[index] !== ".") return false;
      const x = index % 9;
      const y = Math.floor(index / 9);
      const col = String.fromCharCode(65 + x);
      const row = y + 1;
      const coord = `${col}${row}`;
      const moves = props.availableMoves || "";
      if (moves.startsWith("ALL_AVAILABLE_EXCEPT:")) {
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
    const getAbsoluteIndex = (tileIndex, cellIndex) => {
      const tx = tileIndex % 3;
      const ty = Math.floor(tileIndex / 3);
      const cx = cellIndex % 3;
      const cy = Math.floor(cellIndex / 3);
      const x = tx * 3 + cx;
      const y = ty * 3 + cy;
      return y * 9 + x;
    };
    const horizontalLabels = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
    const verticalLabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [
          "board-container w-full relative group mx-auto pt-8 lg:pt-14 pl-8 lg:pl-14",
          containerSizeClasses.value
        ]
      }, _attrs))} data-v-59ec6c4e><div class="relative" data-v-59ec6c4e><div class="absolute -top-6 lg:-top-12 left-0 right-0 grid grid-cols-3 gap-2 lg:gap-4 px-2 lg:px-6 pointer-events-none h-6 lg:h-12" data-v-59ec6c4e><!--[-->`);
      ssrRenderList(3, (t) => {
        _push(`<div class="grid grid-cols-3 gap-0.5 lg:gap-1 px-0.5 lg:px-1.5" data-v-59ec6c4e><!--[-->`);
        ssrRenderList(3, (c) => {
          _push(`<span class="${ssrRenderClass([
            "text-[10px] lg:text-base font-black font-mono text-center uppercase flex items-end justify-center pb-1 transition-all duration-200",
            hoveredX.value === (t - 1) * 3 + (c - 1) ? "text-indigo-400 scale-125" : "text-app-text-muted"
          ])}" data-v-59ec6c4e>${ssrInterpolate(horizontalLabels[(t - 1) * 3 + (c - 1)])}</span>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div><div class="absolute -left-6 lg:-left-12 top-0 bottom-0 grid grid-rows-3 gap-2 lg:gap-4 py-2 lg:py-6 pointer-events-none w-6 lg:w-12" data-v-59ec6c4e><!--[-->`);
      ssrRenderList(3, (t) => {
        _push(`<div class="grid grid-rows-3 gap-0.5 lg:gap-1 py-0.5 lg:py-1.5" data-v-59ec6c4e><!--[-->`);
        ssrRenderList(3, (c) => {
          _push(`<span class="${ssrRenderClass([
            "text-[10px] lg:text-base font-black font-mono flex items-center justify-end pr-1 transition-all duration-200",
            hoveredY.value === (t - 1) * 3 + (c - 1) ? "text-indigo-400 scale-125" : "text-app-text-muted"
          ])}" data-v-59ec6c4e>${ssrInterpolate(verticalLabels[(t - 1) * 3 + (c - 1)])}</span>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div><div class="main-grid aspect-square glass rounded-[1.5rem] lg:rounded-[2rem] shadow-2xl relative z-10 grid grid-cols-3 grid-rows-3 gap-2 lg:gap-4 p-2 lg:p-6 transition-all duration-300" data-v-59ec6c4e><!--[-->`);
      ssrRenderList(deserializedBoard.value, (tileArr, i) => {
        _push(`<div class="${ssrRenderClass([[
          isTargetHighlight(i) ? "target-highlight ring-4 ring-yellow-400/80 z-30" : isTileActive(i) ? "active ring-2 ring-indigo-500/50" : "opacity-80",
          deserializedTileWinners.value[i] === "X" ? "won-x" : deserializedTileWinners.value[i] === "O" ? "won-o" : deserializedTileWinners.value[i] === "D" ? "won-draw" : "glass"
        ], "small-board transition-all duration-200 relative overflow-hidden aspect-square grid grid-cols-3 grid-rows-3 gap-0.5 lg:gap-1 p-0.5 lg:p-1.5"])}" data-v-59ec6c4e><!--[-->`);
        ssrRenderList(tileArr, (cell, j) => {
          _push(`<div style="${ssrRenderStyle({ "-webkit-tap-highlight-color": "transparent" })}" class="${ssrRenderClass([[
            cellClasses.value,
            {
              "bg-indigo-500/30 border-indigo-500/50 ring-2 ring-indigo-500/40 scale-95": __props.selectedCell === getAbsoluteIndex(i, j),
              "historical-move-highlight z-20 scale-110": __props.highlightedCell === getAbsoluteIndex(i, j),
              "recommended-move-highlight z-20 scale-110": __props.recommendedCell === getAbsoluteIndex(i, j),
              "available-cell hover:bg-yellow-500/20 hover:border-yellow-500/60 hover:ring-2 hover:ring-yellow-500/30": isCellAvailable(i, j),
              "hover:bg-app-text/10 hover:border-app-text/20": !isCellAvailable(i, j) && !__props.readonly
            }
          ], "flex items-center justify-center aspect-square rounded-md lg:rounded-lg bg-cell-bg border border-cell-border font-black transition-all cursor-pointer select-none active:scale-90 overflow-hidden outline-none touch-manipulation"])}" data-v-59ec6c4e>`);
          if (cell === "X") {
            _push(`<span class="marker-x leading-none flex items-center justify-center" data-v-59ec6c4e>X</span>`);
          } else if (cell === "O") {
            _push(`<span class="marker-o leading-none flex items-center justify-center" data-v-59ec6c4e>O</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
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
const Board = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-59ec6c4e"]]);

export { Board as B };
