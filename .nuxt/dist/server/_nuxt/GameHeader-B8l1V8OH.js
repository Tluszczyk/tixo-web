import { defineComponent, ref, computed, watch, useSSRContext, mergeProps, withCtx, createVNode, nextTick, createTextVNode, unref, toDisplayString } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { g as useThemeStore, h as __nuxt_component_0, _ as _export_sfc, B as BaseButton, t as tablesDB, c as useRouter } from "../server.mjs";
import { Query } from "appwrite";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart, BarChart, ScatterChart } from "echarts/charts";
import { GridComponent, TooltipComponent, LegendComponent, TitleComponent, MarkPointComponent, MarkLineComponent, MarkAreaComponent, DataZoomComponent } from "echarts/components";
import { G as GameStatus } from "./GameStatus-DcfBG9k6.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-C9J5Jg0a.js";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "BaseAnalyticsChart",
  __ssrInlineRender: true,
  props: {
    option: {},
    loading: { type: Boolean },
    selectedTurn: {}
  },
  emits: ["turn-select"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const themeStore = useThemeStore();
    const chartRef = ref(null);
    computed(() => {
      if (!props.option) return props.option;
      const opt = { ...props.option };
      if (opt.series && Array.isArray(opt.series) && opt.series.length > 0) {
        const series = [...opt.series];
        for (let i = 0; i < series.length; i++) {
          const s = { ...series[i] };
          const existingMarkArea = s.markArea || { silent: true, data: [] };
          const markAreaData = [...existingMarkArea.data || []];
          if (props.selectedTurn !== null && props.selectedTurn !== void 0) {
            const turnLabel = (props.selectedTurn + 1).toString();
            markAreaData.push([
              {
                xAxis: turnLabel,
                itemStyle: {
                  color: themeStore.theme === "dark" ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.08)",
                  visualMap: false
                }
              },
              { xAxis: turnLabel }
            ]);
          }
          s.markArea = { ...existingMarkArea, data: markAreaData, z: 100 };
          series[i] = s;
        }
        opt.series = series;
      }
      return opt;
    });
    const syncActions = () => {
      const chart = chartRef.value?.chart;
      if (!chart) return;
      const turn = props.selectedTurn;
      if (turn === null || turn === void 0) {
        chart.dispatchAction({ type: "hideTip" });
        chart.dispatchAction({ type: "downplay", seriesIndex: 0 });
      } else {
        chart.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex: turn
        });
        chart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: turn
        });
      }
    };
    watch([() => props.selectedTurn, () => props.option], () => {
      setTimeout(syncActions, 100);
    }, { deep: true });
    __expose({
      getChart: () => chartRef.value?.chart
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GameAnalytics/BaseAnalyticsChart.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const BaseAnalyticsChart = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-7180fa01"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "GameAnalyticsDashboard",
  __ssrInlineRender: true,
  props: {
    gameId: {},
    winner: {},
    selectedTurn: {},
    analysisStatus: {}
  },
  emits: ["turn-select", "trigger-analysis"],
  setup(__props, { emit: __emit }) {
    use([
      CanvasRenderer,
      LineChart,
      BarChart,
      ScatterChart,
      GridComponent,
      TooltipComponent,
      LegendComponent,
      TitleComponent,
      MarkPointComponent,
      MarkLineComponent,
      MarkAreaComponent,
      DataZoomComponent
    ]);
    const props = __props;
    const emit = __emit;
    const themeStore = useThemeStore();
    const analytics = ref(null);
    const loading = ref(true);
    const error = ref(null);
    const timeSpentPerMove = computed(() => {
      if (!analytics.value || !analytics.value.moveTimestamps) return [];
      const ts = analytics.value.moveTimestamps.map((t) => new Date(t).getTime());
      const durations = [];
      for (let i = 0; i < ts.length; i++) {
        if (i === 0) {
          durations.push(2e3);
        } else {
          const current = ts[i];
          const previous = ts[i - 1];
          if (current !== void 0 && previous !== void 0) {
            durations.push(current - previous);
          } else {
            durations.push(0);
          }
        }
      }
      return durations;
    });
    const formatDuration = (ms) => {
      if (ms < 1e3) return `${ms}ms`;
      return `${(ms / 1e3).toFixed(1)}s`;
    };
    const fetchAnalytics = async () => {
      loading.value = true;
      error.value = null;
      try {
        const response = await tablesDB.listRows({
          databaseId: "tixo",
          tableId: "game-analytics",
          queries: [Query.equal("gameId", props.gameId)]
        });
        if (response.total > 0) {
          analytics.value = response.rows[0];
        } else {
          error.value = "No analytics data found for this game.";
        }
      } catch (err) {
        console.error("Fetch error:", err);
        error.value = "Failed to load analysis.";
      } finally {
        loading.value = false;
      }
    };
    watch(() => props.gameId, fetchAnalytics);
    watch(
      () => props.analysisStatus,
      (newStatus) => {
        if (newStatus === "ANALYSIS_COMPLETE") {
          fetchAnalytics();
        }
      }
    );
    const tooltipConfig = computed(() => ({
      trigger: "axis",
      backgroundColor: themeStore.theme === "dark" ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.8)",
      borderColor: themeStore.theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
      textStyle: { color: themeStore.theme === "dark" ? "#fff" : "#000", fontSize: 10, fontFamily: "monospace" },
      axisPointer: { type: "line", lineStyle: { color: "rgba(99, 102, 241, 0.3)", width: 2 } }
    }));
    const xAxisConfig = (length) => ({
      type: "category",
      data: Array.from({ length }, (_, i) => (i + 1).toString()),
      axisLine: { lineStyle: { color: themeStore.theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" } },
      axisLabel: { color: themeStore.theme === "dark" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)", fontSize: 8 }
    });
    const evalOption = computed(() => {
      if (!analytics.value) return {};
      const rawProbs = analytics.value.winProbabilityX;
      const qualities = analytics.value.moveQualities;
      const probabilities = rawProbs.map((p) => Math.round((p - 0.5) * 200));
      const qualityColors = {
        excellent: "#3b82f6",
        good: "#22c55e",
        inaccuracy: "#f59e0b",
        blunder: "#ef4444"
      };
      const criticalMoments = summary.value?.criticalMoments || [];
      return {
        backgroundColor: "transparent",
        tooltip: tooltipConfig.value,
        grid: { left: "5%", right: "5%", top: "5%", bottom: "5%", containLabel: true },
        xAxis: xAxisConfig(probabilities.length || rawProbs.length),
        yAxis: {
          type: "value",
          min: -100,
          max: 100,
          splitLine: { lineStyle: { color: themeStore.theme === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)" } },
          axisLabel: {
            formatter: (val) => {
              if (val === 100) return "X";
              if (val === -100) return "O";
              if (val === 0) return "—";
              return "";
            },
            color: (val) => {
              if (val === 100) return "#ef4444";
              if (val === -100) return "#3b82f6";
              return themeStore.theme === "dark" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)";
            },
            fontSize: 12,
            fontWeight: "bold"
          }
        },
        series: [
          {
            name: "Evaluation",
            type: "line",
            smooth: true,
            data: probabilities,
            lineStyle: { width: 4 },
            areaStyle: { opacity: 0.15 },
            emphasis: {
              focus: "series",
              itemStyle: { borderWidth: 2, borderColor: themeStore.theme === "dark" ? "#fff" : "#000" }
            },
            symbol: "none",
            markArea: {
              silent: true,
              data: [
                // Free moves highlights
                ...(analytics.value.freeMoves || []).map((turn) => [
                  { xAxis: turn.toString(), itemStyle: { color: themeStore.theme === "dark" ? "rgba(255, 255, 255, 0.02)" : "rgba(0, 0, 0, 0.02)" } },
                  { xAxis: turn.toString() }
                ])
              ]
            },
            markLine: {
              silent: true,
              symbol: "none",
              label: { show: false },
              lineStyle: { type: "dashed", color: themeStore.theme === "dark" ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)", width: 1 },
              data: (analytics.value.boardCaptureTurns || []).map((turn) => ({ xAxis: turn.toString() }))
            },
            markPoint: {
              symbol: "pin",
              symbolSize: 30,
              data: criticalMoments.map((m) => ({
                coord: [m.turn.toString(), probabilities[m.turn - 1]],
                value: `∆${Math.round(m.delta * 100)}%`,
                itemStyle: { color: "#6366f1" }
              })),
              label: { fontSize: 8, fontWeight: "bold", color: "#fff", offset: [0, -2] }
            }
          },
          {
            name: "Quality",
            type: "scatter",
            data: probabilities.map((p, i) => {
              const q = qualities[i];
              const qColor = q ? qualityColors[q] || "transparent" : "transparent";
              return {
                value: p,
                itemStyle: {
                  color: qColor,
                  opacity: q === "excellent" || q === "blunder" ? 1 : 0.6
                }
              };
            }),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            symbolSize: (val, params) => qualities[params.dataIndex] === "blunder" ? 12 : 6
          }
        ]
      };
    });
    const timeOption = computed(() => {
      if (!analytics.value) return {};
      const durations = timeSpentPerMove.value;
      const turns = durations.map((_, i) => (i + 1).toString());
      return {
        backgroundColor: "transparent",
        tooltip: {
          ...tooltipConfig.value,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          formatter: (params) => {
            const actualParam = params.find((p) => p.seriesName === "Time");
            if (!actualParam) return "";
            const turn = actualParam.dataIndex;
            const d = durations[turn];
            if (d === void 0) return "";
            const player = turn % 2 === 0 ? "X" : "O";
            const isCapture = analytics.value?.boardCaptureTurns?.includes(turn + 1);
            const isFreeMove = analytics.value?.freeMoves?.includes(turn + 1);
            let eventsHtml = "";
            if (isCapture) {
              eventsHtml += `
            <div class="text-amber-400 font-black text-[9px] mt-2 flex items-center gap-1.5 uppercase tracking-wider">
              <i class="pi pi-shield text-[10px]"></i> Board Captured
            </div>`;
            }
            if (isFreeMove) {
              eventsHtml += `
            <div class="text-indigo-400 font-black text-[9px] mt-1 flex items-center gap-1.5 uppercase tracking-wider">
              <i class="pi pi-bolt text-[10px]"></i> Free Move
            </div>`;
            }
            return `
          <div class="p-2">
            <div class="text-[10px] text-white opacity-40 uppercase font-black mb-1">Turn ${turn + 1} (${player})</div>
            <div class="text-lg font-black text-indigo-400">${formatDuration(d)}</div>
            ${eventsHtml}
          </div>
        `;
          }
        },
        grid: { left: "5%", right: "5%", top: "5%", bottom: "5%", containLabel: true },
        xAxis: {
          type: "category",
          data: turns,
          axisLine: { lineStyle: { color: themeStore.theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" } },
          axisLabel: {
            color: themeStore.theme === "dark" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)",
            fontSize: 8,
            interval: durations.length > 40 ? 4 : 1
          }
        },
        yAxis: {
          type: "value",
          splitLine: { lineStyle: { color: themeStore.theme === "dark" ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)" } },
          axisLabel: {
            color: themeStore.theme === "dark" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)",
            fontSize: 8,
            formatter: (val) => val >= 1e3 ? `${(val / 1e3).toFixed(0)}s` : `${val}ms`
          },
          axisLine: { show: false }
        },
        series: [
          {
            name: "Time",
            type: "bar",
            data: durations.map((d, i) => ({
              value: d,
              itemStyle: {
                color: i === props.selectedTurn ? i % 2 === 0 ? "#f87171" : "#60a5fa" : i % 2 === 0 ? "rgba(248, 113, 113, 0.2)" : "rgba(96, 165, 250, 0.2)",
                borderRadius: [4, 4, 0, 0],
                borderWidth: i === props.selectedTurn ? 2 : 0,
                borderColor: themeStore.theme === "dark" ? "#fff" : "#000"
              }
            })),
            emphasis: {
              itemStyle: {
                opacity: 1,
                shadowBlur: 10,
                shadowColor: "rgba(99, 102, 241, 0.5)"
              }
            },
            barWidth: "85%"
          }
        ]
      };
    });
    const summary = computed(() => {
      if (!analytics.value) return null;
      const probs = analytics.value.winProbabilityX;
      const shifts = [];
      for (let i = 1; i < probs.length; i++) {
        const current = probs[i];
        const previous = probs[i - 1];
        if (current !== void 0 && previous !== void 0) {
          shifts.push({
            turn: i + 1,
            delta: Math.abs(current - previous),
            recommendation: analytics.value.recommendations[i]
          });
        }
      }
      if (shifts.length === 0 && probs.length > 0 && probs[0] !== void 0) {
        shifts.push({
          turn: 1,
          delta: Math.abs(probs[0] - 0.5),
          recommendation: analytics.value.recommendations[0]
        });
      }
      const criticalMoments = [...shifts].sort((a, b) => b.delta - a.delta).slice(0, 3);
      const tallies = {
        X: { excellent: 0, good: 0, inaccuracy: 0, blunder: 0 },
        O: { excellent: 0, good: 0, inaccuracy: 0, blunder: 0 }
      };
      analytics.value.moveQualities.forEach((q, i) => {
        const player = i % 2 === 0 ? "X" : "O";
        const quality = q;
        if (quality in tallies[player]) {
          tallies[player][quality]++;
        }
      });
      return { criticalMoments, tallies };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col h-full" }, _attrs))} data-v-a004c8c9>`);
      if (error.value && !analytics.value && __props.analysisStatus !== "NOT_ANALYSED") {
        _push(`<div class="h-full flex flex-col items-center justify-center glass rounded-[2.5rem] border-red-500/10 py-20" data-v-a004c8c9><i class="pi pi-exclamation-triangle text-5xl text-red-500/40 mb-6" data-v-a004c8c9></i><p class="text-xs font-black uppercase tracking-[0.3em] text-red-500/40" data-v-a004c8c9>${ssrInterpolate(error.value)}</p></div>`);
      } else {
        _push(`<div class="flex flex-col h-full gap-6 sm:gap-8 animate-in fade-in slide-in-from-bottom-8 duration-1000" data-v-a004c8c9><div class="glass border-glass-border rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between overflow-hidden relative gap-6" data-v-a004c8c9><div class="relative z-10 text-center sm:text-left" data-v-a004c8c9><h2 class="text-2xl sm:text-4xl font-black text-app-text uppercase italic tracking-tighter mb-1" data-v-a004c8c9> Match Concluded<span class="text-indigo-500" data-v-a004c8c9>.</span></h2><p class="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.4em] text-app-text-muted opacity-30" data-v-a004c8c9> Comprehensive Performance Analysis </p></div><div class="flex items-center gap-6 sm:gap-8 relative z-10" data-v-a004c8c9><div class="flex flex-col items-center sm:items-end" data-v-a004c8c9><span class="text-[9px] sm:text-[10px] font-black text-app-text-muted opacity-20 uppercase tracking-widest mb-1" data-v-a004c8c9>Victor</span><span class="text-xl sm:text-2xl font-black text-app-text uppercase" data-v-a004c8c9>${ssrInterpolate(__props.winner === "D" || __props.winner === "TIE" ? "Draw" : __props.winner === "None" ? "Ongoing" : `Player ${__props.winner}`)}</span></div><div class="${ssrRenderClass([
          "w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-[1.5rem] flex items-center justify-center text-3xl sm:text-4xl shadow-2xl transition-transform hover:scale-110 duration-500",
          __props.winner === "X" ? "bg-red-500 shadow-red-500/20 text-white" : __props.winner === "O" ? "bg-blue-500 shadow-blue-500/20 text-white" : "bg-glass-white border border-glass-border text-app-text-muted opacity-40"
        ])}" data-v-a004c8c9>`);
        if (__props.winner === "X") {
          _push(`<span class="marker-x !text-white" data-v-a004c8c9>X</span>`);
        } else if (__props.winner === "O") {
          _push(`<span class="marker-o !text-white" data-v-a004c8c9>O</span>`);
        } else {
          _push(`<i class="pi pi-minus" data-v-a004c8c9></i>`);
        }
        _push(`</div></div><div class="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-500/10 blur-[80px] rounded-full" data-v-a004c8c9></div></div>`);
        if (__props.analysisStatus === "NOT_ANALYSED") {
          _push(`<div class="w-full flex justify-center py-10" data-v-a004c8c9>`);
          _push(ssrRenderComponent(BaseButton, {
            onClick: ($event) => emit("trigger-analysis"),
            variant: "secondary",
            class: "group relative !flex !flex-col !items-center !gap-6 !p-8 sm:!p-12 !rounded-[2.5rem] sm:!rounded-[3.5rem] !glass !border-glass-border hover:border-indigo-500/30 !transition-all duration-700 hover:scale-[1.02] !w-full !max-w-2xl !h-auto shadow-2xl"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl glass flex items-center justify-center border-indigo-500/20 text-indigo-500 shadow-2xl shadow-indigo-500/10 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500" data-v-a004c8c9${_scopeId}><i class="pi pi-bolt text-4xl sm:text-5xl" data-v-a004c8c9${_scopeId}></i></div><div class="space-y-3 text-center" data-v-a004c8c9${_scopeId}><h4 class="text-xl sm:text-2xl font-black text-app-text uppercase italic tracking-tight" data-v-a004c8c9${_scopeId}>Tactical Synthesis</h4><p class="text-[9px] sm:text-[11px] font-black uppercase tracking-[0.3em] text-app-text-muted opacity-20 group-hover:opacity-60 transition-opacity" data-v-a004c8c9${_scopeId}>Request deep evaluation of the fractal engagement</p></div><div class="mt-4 px-6 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[9px] font-black text-indigo-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all" data-v-a004c8c9${_scopeId}> Ready for Processing </div>`);
              } else {
                return [
                  createVNode("div", { class: "w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl glass flex items-center justify-center border-indigo-500/20 text-indigo-500 shadow-2xl shadow-indigo-500/10 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500" }, [
                    createVNode("i", { class: "pi pi-bolt text-4xl sm:text-5xl" })
                  ]),
                  createVNode("div", { class: "space-y-3 text-center" }, [
                    createVNode("h4", { class: "text-xl sm:text-2xl font-black text-app-text uppercase italic tracking-tight" }, "Tactical Synthesis"),
                    createVNode("p", { class: "text-[9px] sm:text-[11px] font-black uppercase tracking-[0.3em] text-app-text-muted opacity-20 group-hover:opacity-60 transition-opacity" }, "Request deep evaluation of the fractal engagement")
                  ]),
                  createVNode("div", { class: "mt-4 px-6 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[9px] font-black text-indigo-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all" }, " Ready for Processing ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.analysisStatus !== "NOT_ANALYSED") {
          _push(`<div class="glass border-glass-border rounded-3xl sm:rounded-[2.5rem] p-4 sm:p-8 h-[400px] sm:h-[600px] shadow-inner relative flex items-center justify-center" data-v-a004c8c9>`);
          if (__props.analysisStatus === "ANALYSIS_IN_PROCESS" || (!analytics.value || !analytics.value.winProbabilityX || analytics.value.winProbabilityX.length === 0)) {
            _push(`<div class="flex flex-col items-center gap-4" data-v-a004c8c9><i class="pi pi-spin pi-spinner text-4xl text-indigo-500" data-v-a004c8c9></i><span class="text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40" data-v-a004c8c9>Calculating Win Probabilities...</span></div>`);
          } else if (analytics.value && analytics.value.winProbabilityX && analytics.value.winProbabilityX.length > 0) {
            _push(ssrRenderComponent(BaseAnalyticsChart, {
              option: evalOption.value,
              "selected-turn": __props.selectedTurn,
              onTurnSelect: ($event) => emit("turn-select", $event)
            }, null, _parent));
          } else {
            _push(`<div class="flex flex-col items-center gap-4 opacity-20" data-v-a004c8c9><i class="pi pi-chart-line text-4xl" data-v-a004c8c9></i><span class="text-[10px] font-black uppercase tracking-widest" data-v-a004c8c9>No evaluation data</span></div>`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (analytics.value && analytics.value.moveTimestamps && analytics.value.moveTimestamps.length > 1) {
          _push(`<div class="glass border-glass-border rounded-[1.5rem] sm:rounded-[2rem] p-6 h-48 sm:h-72 relative overflow-hidden" data-v-a004c8c9><div class="absolute top-4 left-8 text-[10px] font-black uppercase tracking-[0.3em] text-app-text-muted opacity-20 z-10 flex items-center gap-2" data-v-a004c8c9><i class="pi pi-clock text-indigo-500" data-v-a004c8c9></i> Temporal Delta per Move </div>`);
          _push(ssrRenderComponent(BaseAnalyticsChart, {
            option: timeOption.value,
            "selected-turn": __props.selectedTurn,
            onTurnSelect: ($event) => emit("turn-select", $event)
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.analysisStatus === "ANALYSIS_COMPLETE" || __props.analysisStatus === "ANALYSIS_IN_PROCESS") {
          _push(`<div class="glass border-glass-border rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-8 flex flex-col shadow-2xl min-h-[300px] justify-center" data-v-a004c8c9>`);
          if (__props.analysisStatus !== "ANALYSIS_COMPLETE" && (!analytics.value || !analytics.value.moveQualities || analytics.value.moveQualities.length === 0)) {
            _push(`<div class="flex flex-col items-center gap-4 py-12" data-v-a004c8c9><i class="pi pi-spin pi-spinner text-4xl text-indigo-500" data-v-a004c8c9></i><span class="text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40" data-v-a004c8c9>Classifying Move Quality...</span></div>`);
          } else if (summary.value && analytics.value && analytics.value.moveQualities && analytics.value.moveQualities.length > 0) {
            _push(`<!--[--><h4 class="text-[10px] sm:text-xs font-black text-app-text-muted opacity-40 uppercase tracking-[0.3em] border-b border-glass-border pb-4 sm:pb-6 mb-6 sm:mb-8 flex items-center gap-3" data-v-a004c8c9><i class="pi pi-chart-bar text-indigo-500" data-v-a004c8c9></i> Tactical Breakdown </h4><div class="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6" data-v-a004c8c9><!--[-->`);
            ssrRenderList(["excellent", "good", "inaccuracy", "blunder"], (q) => {
              _push(`<div class="p-5 rounded-2xl bg-app-text/5 border border-glass-border group hover:bg-app-text/10 transition-all duration-300" data-v-a004c8c9><span class="text-[10px] font-black uppercase tracking-tight text-app-text-muted opacity-40 group-hover:opacity-100 transition-opacity block mb-4 border-b border-glass-border pb-2" data-v-a004c8c9>${ssrInterpolate(q)}</span><div class="flex items-center justify-around gap-4" data-v-a004c8c9><div class="flex flex-col items-center" data-v-a004c8c9><span class="text-[8px] font-black text-red-400 marker-x uppercase mb-1" data-v-a004c8c9>X</span><span class="${ssrRenderClass([
                "text-2xl font-black leading-none transition-transform group-hover:scale-110 block",
                q === "excellent" ? "text-blue-400" : q === "good" ? "text-green-400" : q === "inaccuracy" ? "text-amber-400" : q === "blunder" ? "text-red-400" : ""
              ])}" data-v-a004c8c9>${ssrInterpolate(summary.value?.tallies.X[q])}</span></div><div class="h-8 w-[1px] bg-glass-border" data-v-a004c8c9></div><div class="flex flex-col items-center" data-v-a004c8c9><span class="text-[8px] font-black text-blue-400 marker-o uppercase mb-1" data-v-a004c8c9>O</span><span class="${ssrRenderClass([
                "text-2xl font-black leading-none transition-transform group-hover:scale-110 block",
                q === "excellent" ? "text-blue-400" : q === "good" ? "text-green-400" : q === "inaccuracy" ? "text-amber-400" : q === "blunder" ? "text-red-400" : ""
              ])}" data-v-a004c8c9>${ssrInterpolate(summary.value?.tallies.O[q])}</span></div></div></div>`);
            });
            _push(`<!--]--></div><div class="mt-6 pt-6 border-t border-glass-border" data-v-a004c8c9><div class="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-indigo-500/5 border border-indigo-500/10" data-v-a004c8c9><i class="pi pi-info-circle text-indigo-400 mt-0.5" data-v-a004c8c9></i><p class="text-[8px] sm:text-[10px] leading-relaxed text-app-text-muted opacity-40 font-bold uppercase tracking-wide" data-v-a004c8c9> Critical Vectors (∆) are significant evaluation shifts identified by Tixo AI. </p></div></div><!--]-->`);
          } else {
            _push(`<div class="flex flex-col items-center gap-4 opacity-20 py-12" data-v-a004c8c9><i class="pi pi-chart-bar text-4xl" data-v-a004c8c9></i><span class="text-[10px] font-black uppercase tracking-widest" data-v-a004c8c9>No tactical data</span></div>`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex flex-col items-center gap-1 opacity-20 pb-4" data-v-a004c8c9><span class="text-[8px] font-black text-app-text-muted uppercase tracking-[0.3em]" data-v-a004c8c9>Game Session Key</span><span class="text-[9px] mono text-app-text-muted truncate max-w-full px-4" data-v-a004c8c9>${ssrInterpolate(__props.gameId)}</span></div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GameAnalytics/GameAnalyticsDashboard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const GameAnalyticsDashboard = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-a004c8c9"]]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var Player = /* @__PURE__ */ ((Player2) => {
  Player2[Player2["X"] = 1] = "X";
  Player2[Player2["O"] = -1] = "O";
  Player2[Player2["None"] = 0] = "None";
  return Player2;
})(Player || {});
const WIN_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Cols
  [0, 4, 8],
  [2, 4, 6]
  // Diagonals
];
class GameState {
  constructor() {
    __publicField(this, "board");
    __publicField(this, "macroBoard");
    __publicField(this, "activeMacroBoard");
    __publicField(this, "lastMove");
    __publicField(this, "lastPlayer");
    this.board = new Int8Array(81);
    this.macroBoard = new Int8Array(9);
    this.activeMacroBoard = -1;
    this.lastMove = -1;
    this.lastPlayer = 0;
  }
  /**
   * Creates a deep copy of the current game state.
   */
  clone() {
    const clone = new GameState();
    clone.board = new Int8Array(this.board);
    clone.macroBoard = new Int8Array(this.macroBoard);
    clone.activeMacroBoard = this.activeMacroBoard;
    clone.lastMove = this.lastMove;
    clone.lastPlayer = this.lastPlayer;
    return clone;
  }
  /**
   * Returns an array of legal move indices (0-80).
   */
  getLegalMoves() {
    const moves = [];
    if (this.checkWin() !== null) return moves;
    if (this.activeMacroBoard !== -1 && this.macroBoard[this.activeMacroBoard] === 0) {
      const m = this.activeMacroBoard;
      for (let i = 0; i < 9; i++) {
        if (this.board[m * 9 + i] === 0) {
          moves.push(m * 9 + i);
        }
      }
    }
    if (moves.length === 0) {
      for (let m = 0; m < 9; m++) {
        if (this.macroBoard[m] === 0) {
          for (let i = 0; i < 9; i++) {
            if (this.board[m * 9 + i] === 0) {
              moves.push(m * 9 + i);
            }
          }
        }
      }
    }
    return moves;
  }
  /**
   * Applies a move to the game state.
   * @param move The index of the square (0-80)
   * @param player The player making the move
   */
  makeMove(move, player) {
    this.board[move] = player;
    this.lastMove = move;
    this.lastPlayer = player;
    const m = Math.floor(move / 9);
    const localMove = move % 9;
    if (this.macroBoard[m] === 0) {
      let won = false;
      for (const [a, b, c] of WIN_LINES) {
        if (this.board[m * 9 + a] === player && this.board[m * 9 + b] === player && this.board[m * 9 + c] === player) {
          this.macroBoard[m] = player;
          won = true;
          break;
        }
      }
      if (!won) {
        let full = true;
        for (let i = 0; i < 9; i++) {
          if (this.board[m * 9 + i] === 0) {
            full = false;
            break;
          }
        }
        if (full) {
          this.macroBoard[m] = 2;
        }
      }
    }
    if (this.macroBoard[localMove] !== 0) {
      this.activeMacroBoard = -1;
    } else {
      this.activeMacroBoard = localMove;
    }
  }
  /**
   * Checks for a game-over condition.
   * @returns The winning Player, Player.None for a draw, or null if the game is still ongoing.
   */
  checkWin() {
    for (const p of [
      1,
      -1
      /* O */
    ]) {
      const macroP = p;
      for (const [a, b, c] of WIN_LINES) {
        if (this.macroBoard[a] === macroP && this.macroBoard[b] === macroP && this.macroBoard[c] === macroP) {
          return p;
        }
      }
    }
    let full = true;
    for (let i = 0; i < 9; i++) {
      if (this.macroBoard[i] === 0) {
        full = false;
        break;
      }
    }
    if (full) return 0;
    return null;
  }
}
function evaluateBoard(state, weights, maximizingPlayer = 1) {
  const f = new Float64Array(10);
  const p = maximizingPlayer;
  const opp = p === 1 ? -1 : 1;
  for (let m = 0; m < 9; m++) {
    const owner = state.macroBoard[m];
    if (owner === p) {
      f[0] = (f[0] ?? 0) + 1;
      if (m === 4) f[1] = (f[1] ?? 0) + 1;
      else if (m === 0 || m === 2 || m === 6 || m === 8) f[1] = (f[1] ?? 0) + 0.5;
    } else if (owner === opp) {
      f[0] = (f[0] ?? 0) - 1;
      if (m === 4) f[1] = (f[1] ?? 0) - 1;
      else if (m === 0 || m === 2 || m === 6 || m === 8) f[1] = (f[1] ?? 0) - 0.5;
    }
  }
  for (let m = 0; m < 9; m++) {
    const centerIdx = m * 9 + 4;
    if (state.board[centerIdx] === p) f[2] = (f[2] ?? 0) + 1;
    else if (state.board[centerIdx] === opp) f[2] = (f[2] ?? 0) - 1;
  }
  const countLines = (arr, offset, player) => {
    let twos = 0;
    let threats = 0;
    for (const [a, b, c] of WIN_LINES) {
      let pCnt = 0, eCnt = 0;
      const valA = arr[offset + a];
      const valB = arr[offset + b];
      const valC = arr[offset + c];
      if (valA === player) pCnt++;
      else if (valA === 0) eCnt++;
      if (valB === player) pCnt++;
      else if (valB === 0) eCnt++;
      if (valC === player) pCnt++;
      else if (valC === 0) eCnt++;
      if (pCnt === 2 && eCnt === 1) twos++;
      if (pCnt === 1 && eCnt === 2) threats++;
    }
    return { twos, threats };
  };
  let maxTwos = countLines(state.macroBoard, 0, p).twos;
  let minTwos = countLines(state.macroBoard, 0, opp).twos;
  let maxThreats = 0;
  let minThreats = 0;
  for (let m = 0; m < 9; m++) {
    if (state.macroBoard[m] === 0) {
      const pStats = countLines(state.board, m * 9, p);
      const oStats = countLines(state.board, m * 9, opp);
      maxTwos += pStats.twos;
      minTwos += oStats.twos;
      maxThreats += pStats.threats;
      minThreats += oStats.threats;
    }
  }
  f[3] = maxTwos - minTwos;
  f[8] = maxThreats - minThreats;
  if (state.activeMacroBoard === -1 && state.lastPlayer !== 0) {
    if (state.lastPlayer === p)
      f[4] = -1;
    else if (state.lastPlayer === opp) f[4] = 1;
  }
  if (state.lastMove !== -1) {
    const lm = state.lastMove;
    const m = Math.floor(lm / 9);
    const local = lm % 9;
    const lp = state.lastPlayer;
    let blocked = 0;
    for (const line of WIN_LINES) {
      if (line.includes(local)) {
        let oppCnt = 0, selfCnt = 0;
        for (let j = 0; j < 3; j++) {
          const val = state.board[m * 9 + (line[j] ?? 0)];
          if (val === -lp) oppCnt++;
          else if (val === lp) selfCnt++;
        }
        if (oppCnt === 2 && selfCnt === 1) blocked++;
      }
    }
    if (lp === p) f[5] = blocked;
    else if (lp === opp) f[5] = -blocked;
  }
  if (state.activeMacroBoard !== -1) {
    const target = state.activeMacroBoard;
    let pieceScore = 0;
    for (let i = 0; i < 9; i++) {
      const val = state.board[target * 9 + i];
      if (val === p) pieceScore += 1;
      else if (val === opp) pieceScore -= 1;
    }
    f[6] = pieceScore;
  } else {
    f[6] = 0;
  }
  const centerOwner = state.board[40];
  if (centerOwner === p) f[7] = 1;
  else if (centerOwner === opp) f[7] = -1;
  f[9] = 0;
  let score = 0;
  for (let i = 0; i < 10; i++) {
    score += (weights[i] ?? 0) * (f[i] ?? 0);
  }
  return score;
}
function minimax(state, depth, alpha, beta, maximizingPlayer, weights, currentPlayer) {
  const win = state.checkWin();
  if (win !== null) {
    if (win === maximizingPlayer) return 1e4 + depth;
    if (win === (maximizingPlayer === 1 ? -1 : 1)) return -1e4 - depth;
    return 0;
  }
  if (depth === 0) {
    return evaluateBoard(state, weights, maximizingPlayer);
  }
  const moves = state.getLegalMoves();
  if (moves.length === 0) {
    return evaluateBoard(state, weights, maximizingPlayer);
  }
  if (currentPlayer === maximizingPlayer) {
    let maxEval = -Infinity;
    for (const move of moves) {
      const childState = state.clone();
      childState.makeMove(move, currentPlayer);
      const ev = minimax(
        childState,
        depth - 1,
        alpha,
        beta,
        maximizingPlayer,
        weights,
        currentPlayer === 1 ? -1 : 1
        /* X */
      );
      maxEval = Math.max(maxEval, ev);
      alpha = Math.max(alpha, ev);
      if (beta <= alpha) break;
    }
    return maxEval;
  } else {
    let minEval = Infinity;
    for (const move of moves) {
      const childState = state.clone();
      childState.makeMove(move, currentPlayer);
      const ev = minimax(
        childState,
        depth - 1,
        alpha,
        beta,
        maximizingPlayer,
        weights,
        currentPlayer === 1 ? -1 : 1
        /* X */
      );
      minEval = Math.min(minEval, ev);
      beta = Math.min(beta, ev);
      if (beta <= alpha) break;
    }
    return minEval;
  }
}
const AI_MODELS = {
  M5: {
    name: "M5",
    depth: 6,
    errorRate: 0,
    weights: [
      1.0722847064602274,
      1.4099713598070003,
      -0.009565251809416253,
      0.2679157953837268,
      0.09227479044701148,
      0.541491870400754,
      -0.4631768174001959,
      0.2625262833174409,
      -0.751406896310592,
      -0.6551348804123012
    ]
  },
  M4: {
    name: "M4",
    depth: 5,
    errorRate: 0,
    weights: [
      1.0722847064602274,
      1.4099713598070003,
      -0.009565251809416253,
      0.2679157953837268,
      0.09227479044701148,
      0.541491870400754,
      -0.4631768174001959,
      0.2625262833174409,
      -0.751406896310592,
      -0.6551348804123012
    ]
  },
  M3: {
    name: "M3",
    depth: 4,
    errorRate: 0,
    weights: [
      1.0722847064602274,
      1.4099713598070003,
      -0.009565251809416253,
      0.2679157953837268,
      0.09227479044701148,
      0.541491870400754,
      -0.4631768174001959,
      0.2625262833174409,
      -0.751406896310592,
      -0.6551348804123012
    ]
  },
  M2: {
    name: "M2",
    depth: 3,
    errorRate: 0,
    weights: [
      1.0722847064602274,
      1.4099713598070003,
      -0.009565251809416253,
      0.2679157953837268,
      0.09227479044701148,
      0.541491870400754,
      -0.4631768174001959,
      0.2625262833174409,
      -0.751406896310592,
      -0.6551348804123012
    ]
  },
  M1: {
    name: "M1",
    depth: 2,
    errorRate: 0,
    weights: [
      1.0722847064602274,
      1.4099713598070003,
      -0.009565251809416253,
      0.2679157953837268,
      0.09227479044701148,
      0.541491870400754,
      -0.4631768174001959,
      0.2625262833174409,
      -0.751406896310592,
      -0.6551348804123012
    ]
  }
};
function getBestMove(state, depth, weights, player, errorRate = 0) {
  const moves = state.getLegalMoves();
  if (moves.length === 0) return -1;
  const firstMove = moves[0];
  if (moves.length === 1 && firstMove !== void 0) return firstMove;
  if (Math.random() < errorRate) {
    return moves[Math.floor(Math.random() * moves.length)];
  }
  let bestMoves = [];
  let bestValue = -Infinity;
  let alpha = -Infinity;
  const beta = Infinity;
  for (const move of moves) {
    const childState = state.clone();
    childState.makeMove(move, player);
    const moveValue = minimax(
      childState,
      depth - 1,
      alpha,
      beta,
      player,
      weights,
      player === 1 ? -1 : 1
      /* X */
    );
    if (moveValue > bestValue) {
      bestValue = moveValue;
      bestMoves = [move];
    } else if (moveValue === bestValue) {
      bestMoves.push(move);
    }
    alpha = Math.max(alpha, bestValue);
  }
  if (bestMoves.length > 0) {
    return bestMoves[Math.floor(Math.random() * bestMoves.length)];
  }
  return moves[0] ?? -1;
}
const coordToIndex = (coord) => {
  const col = coord.charCodeAt(0) - 65;
  const row = parseInt(coord.substring(1)) - 1;
  return row * 9 + col;
};
const indexToCoord = (index) => {
  const x = index % 9;
  const y = Math.floor(index / 9);
  const col = String.fromCharCode(65 + x);
  const row = y + 1;
  return `${col}${row}`;
};
const getSmallBoard = (board, sbIdx) => {
  const sbRow = Math.floor(sbIdx / 3);
  const sbCol = sbIdx % 3;
  let res = "";
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const row = sbRow * 3 + r;
      const col = sbCol * 3 + c;
      res += board[row * 9 + col];
    }
  }
  return res;
};
const check3x3Winner = (board) => {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (const pattern of winPatterns) {
    const [p1, p2, p3] = pattern;
    if (board[p1] !== "." && board[p1] === board[p2] && board[p1] === board[p3]) {
      return board[p1] ?? null;
    }
  }
  if (!board.includes(".")) return "D";
  return null;
};
const rebuildGameState = (history) => {
  const state = new GameState();
  let player = Player.X;
  for (const move of history) {
    const col = move.charCodeAt(0) - 65;
    const row = parseInt(move.substring(1)) - 1;
    const sbIdx = Math.floor(row / 3) * 3 + Math.floor(col / 3);
    const cellIdx = row % 3 * 3 + col % 3;
    const idx = sbIdx * 9 + cellIdx;
    state.makeMove(idx, player);
    player = player === Player.X ? Player.O : Player.X;
  }
  return state;
};
const isCellAvailable = (index, board, availableMovesStr) => {
  if (!availableMovesStr) return true;
  if (board[index] !== ".") return false;
  const coord = indexToCoord(index);
  const moves = availableMovesStr;
  if (moves.startsWith("ALL_AVAILABLE_EXCEPT_TILES:")) {
    const parts = moves.split(":");
    const exceptTiles = parts[1] ? parts[1].split(",").filter(Boolean) : [];
    const exceptCells = parts[3] ? parts[3].split(",").filter(Boolean) : [];
    const cx = index % 9;
    const cy = Math.floor(index / 9);
    const tx = Math.floor(cx / 3) * 3;
    const ty = Math.floor(cy / 3) * 3;
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
    const cx = index % 9;
    const cy = Math.floor(index / 9);
    const isInTile = cx >= tx && cx < tx + 3 && cy >= ty && cy < ty + 3;
    return isInTile && !except.includes(coord);
  }
  return true;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "MatchTimeline",
  __ssrInlineRender: true,
  props: {
    moveHistory: {},
    selectedHistoryIndex: {},
    isOnDevice: { type: Boolean }
  },
  emits: ["select-move"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const containerRef = ref(null);
    const moveRefs = ref([]);
    watch(
      () => props.selectedHistoryIndex,
      async (newIdx) => {
        if (newIdx !== null && moveRefs.value[newIdx] && containerRef.value) {
          await nextTick();
          const container = containerRef.value;
          const element = moveRefs.value[newIdx];
          const containerRect = container.getBoundingClientRect();
          const elementRect = element.getBoundingClientRect();
          const top = container.scrollTop + (elementRect.top - containerRect.top) - container.clientHeight / 2 + element.clientHeight / 2;
          const left = container.scrollLeft + (elementRect.left - containerRect.left) - container.clientWidth / 2 + element.clientWidth / 2;
          container.scrollTo({
            top,
            left,
            behavior: "smooth"
          });
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "w-full lg:w-32 flex flex-col items-center border-b lg:border-b-0 lg:border-r border-glass-border bg-glass-white lg:bg-transparent overflow-hidden shrink-0 lg:sticky lg:top-0" }, _attrs))} data-v-8be43e94><div class="w-full px-4 py-2 border-b border-glass-border flex items-center justify-between lg:hidden" data-v-8be43e94><span class="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em]" data-v-8be43e94>Match Timeline</span><span class="text-[9px] font-bold text-app-text-muted opacity-40 uppercase mono" data-v-8be43e94>${ssrInterpolate(__props.moveHistory.length)} MOVES</span></div><div class="flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto custom-scrollbar w-full p-4 lg:py-6 lg:h-[75vh] relative" data-v-8be43e94><!--[-->`);
      ssrRenderList(__props.moveHistory, (move, idx) => {
        _push(`<div class="history-item flex flex-col items-center gap-2 cursor-pointer group shrink-0 min-w-[50px] lg:min-w-0" data-v-8be43e94><span class="${ssrRenderClass([
          __props.selectedHistoryIndex === idx ? "text-app-text" : "text-app-text-muted opacity-40 group-hover:text-app-text-muted opacity-70",
          "text-[10px] font-black transition-colors mono"
        ])}" data-v-8be43e94>${ssrInterpolate((idx + 1).toString().padStart(2, "0"))}</span><div class="${ssrRenderClass([
          "relative flex items-center justify-center transition-all duration-300 h-10 w-10 lg:w-16 lg:h-16 rounded-xl border",
          __props.selectedHistoryIndex === idx ? "bg-app-text/20 border-app-text/60 ring-4 ring-app-text/10 scale-110" : "bg-glass-white border-glass-border hover:border-indigo-500/30 hover:bg-glass-white"
        ])}" data-v-8be43e94><span class="${ssrRenderClass([
          "text-sm lg:text-lg font-black transition-all duration-300",
          __props.isOnDevice ? idx % 2 === 0 ? "text-red-400 marker-x" : "text-blue-400 marker-o" : idx % 2 === 0 ? "text-blue-400 marker-o" : "text-red-400 marker-x",
          __props.selectedHistoryIndex === idx ? "scale-125" : "scale-100 group-hover:scale-110"
        ])}" data-v-8be43e94>${ssrInterpolate(move)}</span>`);
        if (__props.selectedHistoryIndex === idx) {
          _push(`<div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-app-text rounded-full shadow-[0_0_8px_var(--text-primary)]" data-v-8be43e94></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></aside>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Game/MatchTimeline.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const MatchTimeline = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-8be43e94"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "GameStatusHUD",
  __ssrInlineRender: true,
  props: {
    gameStatus: {},
    isPlayerInGame: { type: Boolean },
    isMyTurn: { type: Boolean },
    isAITurn: { type: Boolean },
    currentPlayer: {},
    selectedCell: {},
    selectedHistoryIndex: {},
    joining: { type: Boolean },
    abandoning: { type: Boolean },
    moveHistoryCount: {}
  },
  emits: ["clear-history", "clear-selection", "submit-move", "join-match", "abandon-match"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center gap-6 w-full" }, _attrs))}><div class="flex items-center justify-center h-24 w-full relative">`);
      if (__props.selectedHistoryIndex !== null) {
        _push(`<div class="flex flex-col items-center"><span class="text-[10px] uppercase font-black tracking-[0.3em] text-app-text-muted opacity-60 mb-2">History View</span><div class="flex items-center gap-6"><span class="text-2xl font-black text-app-text">Move ${ssrInterpolate(__props.selectedHistoryIndex + 1)}</span><div class="h-8 w-[1px] bg-glass-border"></div>`);
        _push(ssrRenderComponent(BaseButton, {
          onClick: ($event) => emit("clear-history"),
          variant: "ghost",
          size: "sm",
          class: "lg:hidden text-app-text-muted opacity-40 hover:opacity-100"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Return to Live `);
            } else {
              return [
                createTextVNode(" Return to Live ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else if (__props.selectedCell !== null) {
        _push(`<div class="flex items-center gap-6">`);
        _push(ssrRenderComponent(BaseButton, {
          onClick: ($event) => emit("clear-selection"),
          variant: "ghost",
          size: "sm",
          class: "lg:hidden text-app-text-muted opacity-40 hover:opacity-100"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Cancel `);
            } else {
              return [
                createTextVNode(" Cancel ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(BaseButton, {
          onClick: ($event) => emit("submit-move"),
          variant: "primary",
          size: "lg",
          class: "lg:hidden px-12"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Submit Move `);
            } else {
              return [
                createTextVNode(" Submit Move ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else if (__props.gameStatus === unref(GameStatus).IN_PROGRESS) {
        _push(`<div class="flex items-center gap-12"><div class="flex flex-col items-center"><span class="text-[10px] uppercase font-black tracking-[0.3em] text-app-text-muted opacity-20 mb-2">${ssrInterpolate(__props.isAITurn ? "AI is thinking..." : __props.isMyTurn ? "Your Turn" : "Opponent Turn")}</span><div class="flex items-center gap-6"><span class="${ssrRenderClass(["text-4xl font-black", __props.currentPlayer === "X" ? "marker-x" : "marker-o"])}">${ssrInterpolate(__props.currentPlayer)}</span><div class="h-8 w-[1px] bg-glass-border"></div><span class="text-xl font-light mono text-app-text-muted opacity-40 italic flex items-center">`);
        if (__props.isAITurn) {
          _push(`<i class="pi pi-spin pi-spinner mr-3 text-purple-500"></i>`);
        } else {
          _push(`<!---->`);
        }
        _push(` ${ssrInterpolate(__props.isAITurn ? "Computing..." : "Waiting...")}</span></div></div></div>`);
      } else if (__props.gameStatus === unref(GameStatus).WAITING_FOR_OPPONENT) {
        _push(`<div class="flex flex-col items-center">`);
        if (!__props.isPlayerInGame) {
          _push(ssrRenderComponent(BaseButton, {
            onClick: ($event) => emit("join-match"),
            disabled: __props.joining,
            loading: __props.joining,
            variant: "primary",
            size: "lg",
            class: "px-12"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Join Match `);
              } else {
                return [
                  createTextVNode(" Join Match ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<div class="flex flex-col items-center"><span class="text-[10px] uppercase font-black tracking-[0.3em] text-app-text-muted opacity-20 mb-2">Match Status</span><div class="flex items-center gap-6"><i class="pi pi-spin pi-spinner text-indigo-500"></i><span class="text-xl font-light mono text-app-text-muted opacity-40 italic">Waiting for opponent...</span></div></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.isPlayerInGame && (__props.gameStatus === unref(GameStatus).IN_PROGRESS || __props.gameStatus === unref(GameStatus).WAITING_FOR_OPPONENT) && __props.selectedHistoryIndex === null) {
        _push(`<div class="lg:hidden flex justify-center w-full">`);
        _push(ssrRenderComponent(BaseButton, {
          onClick: ($event) => emit("abandon-match"),
          disabled: __props.abandoning,
          variant: "ghost",
          size: "sm",
          class: "text-red-500/60 hover:text-red-500",
          "icon-left": "pi pi-flag-fill"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(__props.moveHistoryCount < 2 ? "Cancel Operation" : "Request Resignation")}`);
            } else {
              return [
                createTextVNode(toDisplayString(__props.moveHistoryCount < 2 ? "Cancel Operation" : "Request Resignation"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Game/GameStatusHUD.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "GameOverModal",
  __ssrInlineRender: true,
  props: {
    show: { type: Boolean },
    matchResult: {}
  },
  emits: ["close", "create-new"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const router = useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonBaseButton = BaseButton;
      if (__props.show) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-void/90 backdrop-blur-md" }, _attrs))}><div class="relative w-full max-w-lg glass border-glass-border rounded-3xl p-8 shadow-2xl overflow-hidden group"><div class="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/20 blur-3xl rounded-full"></div><div class="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-600/20 blur-3xl rounded-full"></div>`);
        _push(ssrRenderComponent(_component_CommonBaseButton, {
          onClick: ($event) => emit("close"),
          variant: "ghost",
          size: "sm",
          class: "absolute top-4 right-4 !w-10 !h-10 !p-0 text-app-text-muted hover:text-app-text hover:bg-glass-white rounded-lg transition-all z-10"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="pi pi-times text-sm"${_scopeId}></i>`);
            } else {
              return [
                createVNode("i", { class: "pi pi-times text-sm" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="relative z-10 flex flex-col items-center text-center"><div class="${ssrRenderClass([
          "w-24 h-24 rounded-3xl flex items-center justify-center mb-6 shadow-2xl",
          __props.matchResult === "WIN" ? "bg-green-500 shadow-green-500/20" : __props.matchResult === "LOSS" ? "bg-red-500 shadow-red-500/20" : __props.matchResult === "CANCELLED" ? "bg-slate-500 shadow-slate-500/20" : "bg-blue-500 shadow-blue-500/20"
        ])}"><i class="${ssrRenderClass([
          "text-5xl text-white",
          __props.matchResult === "WIN" ? "pi pi-trophy" : __props.matchResult === "LOSS" ? "pi pi-times-circle" : __props.matchResult === "CANCELLED" ? "pi pi-ban" : "pi pi-arrows-h"
        ])}"></i></div><h2 class="text-4xl font-black text-app-text mb-2 tracking-tight">${ssrInterpolate(__props.matchResult === "WIN" ? "YOU WON!" : __props.matchResult === "LOSS" ? "YOU LOST!" : __props.matchResult === "CANCELLED" ? "MATCH CANCELLED" : "IT'S A DRAW!")}</h2><p class="text-app-text-muted opacity-60 font-medium mb-10 max-w-[280px]">${ssrInterpolate(__props.matchResult === "WIN" ? "Exceptional performance! You have conquered the grid." : __props.matchResult === "LOSS" ? "A valiant effort! Analyze the moves and try again." : __props.matchResult === "CANCELLED" ? "The match was ended before enough moves were made to determine a winner." : "A perfectly balanced match. Neither side would yield.")}</p><div class="w-full space-y-3">`);
        _push(ssrRenderComponent(_component_CommonBaseButton, {
          onClick: ($event) => emit("create-new"),
          variant: "primary",
          size: "lg",
          block: "",
          "icon-left": "pi pi-plus-circle",
          animate: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Create New Game `);
            } else {
              return [
                createTextVNode(" Create New Game ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_CommonBaseButton, {
          onClick: ($event) => emit("close"),
          variant: "secondary",
          size: "lg",
          block: "",
          "icon-left": "pi pi-eye"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` View Board `);
            } else {
              return [
                createTextVNode(" View Board ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_CommonBaseButton, {
          onClick: ($event) => unref(router).push("/"),
          variant: "secondary",
          size: "lg",
          block: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Back to Main Page `);
            } else {
              return [
                createTextVNode(" Back to Main Page ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Game/GameOverModal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AbandonMatchModal",
  __ssrInlineRender: true,
  props: {
    show: { type: Boolean },
    game: {},
    abandoning: { type: Boolean }
  },
  emits: ["close", "confirm"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonBaseButton = BaseButton;
      if (__props.show) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 z-[110] flex items-center justify-center p-4 bg-void/80 backdrop-blur-sm" }, _attrs))}><div class="relative w-full max-w-sm glass border-glass-border rounded-3xl p-6 shadow-2xl"><div class="flex flex-col items-center text-center space-y-4"><div class="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20"><i class="pi pi-exclamation-triangle text-2xl"></i></div><div><h3 class="text-xl font-bold text-app-text">${ssrInterpolate((__props.game?.moveHistory || []).length < 2 ? "Cancel Match?" : "Abandon Match?")}</h3><p class="text-sm text-app-text-muted opacity-60 mt-1">${ssrInterpolate((__props.game?.moveHistory || []).length < 2 || __props.game?.status === unref(GameStatus).WAITING_FOR_OPPONENT ? "This will cancel the match." : "This will count as a loss. Are you sure?")}</p></div><div class="grid grid-cols-2 gap-3 w-full pt-2">`);
        _push(ssrRenderComponent(_component_CommonBaseButton, {
          onClick: ($event) => emit("close"),
          disabled: __props.abandoning,
          variant: "secondary",
          size: "md",
          class: "!rounded-xl"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` No, stay `);
            } else {
              return [
                createTextVNode(" No, stay ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_CommonBaseButton, {
          onClick: ($event) => emit("confirm"),
          disabled: __props.abandoning,
          variant: "danger",
          size: "md",
          loading: __props.abandoning,
          class: "!rounded-xl"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate((__props.game?.moveHistory || []).length < 2 ? "Cancel" : "Abandon")}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString((__props.game?.moveHistory || []).length < 2 ? "Cancel" : "Abandon"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Game/AbandonMatchModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GameHeader",
  __ssrInlineRender: true,
  props: {
    game: {},
    xPlayer: {},
    oPlayer: {}
  },
  emits: ["back"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const getStatusColor = (status) => {
      switch (status) {
        case GameStatus.IN_PROGRESS:
          return "bg-green-500/10 text-green-500 border-green-500/20";
        case GameStatus.FINISHED:
          return "bg-blue-500/10 text-blue-500 border-blue-500/20";
        case GameStatus.WAITING_FOR_OPPONENT:
          return "bg-amber-500/10 text-amber-500 border-amber-500/20";
        case GameStatus.CANCELLED:
          return "bg-red-500/10 text-red-500 border-red-500/20";
        default:
          return "bg-slate-500/10 text-slate-500 border-slate-500/20";
      }
    };
    const formatStatus = (status) => {
      if (status === GameStatus.IN_PROGRESS) return "LIVE MATCH";
      return status.replace(/_/g, " ");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonBaseButton = BaseButton;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center space-x-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_CommonBaseButton, {
        onClick: ($event) => emit("back"),
        variant: "ghost",
        size: "sm",
        "aria-label": "Go back",
        "icon-left": "pi pi-arrow-left",
        class: "!p-2 !rounded-lg"
      }, null, _parent));
      if (__props.game) {
        _push(`<div class="hidden lg:flex flex-col"><div class="flex items-center gap-2"><span class="text-sm font-bold text-app-text flex items-center gap-1.5"><span class="marker-x text-xs">X</span>`);
        if (!__props.game.requestedOpponentId?.startsWith("AI_X") && __props.xPlayer?.$id) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/users/${__props.xPlayer.$id}`,
            class: "hover:text-indigo-400 transition-colors"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(__props.xPlayer?.name || (__props.game.xPlayerId ? __props.game.xPlayerId.substring(0, 10) : "Pending"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(__props.xPlayer?.name || (__props.game.xPlayerId ? __props.game.xPlayerId.substring(0, 10) : "Pending")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<span>${ssrInterpolate(__props.game.requestedOpponentId?.startsWith("AI_X") ? "Tixo AI" : "Pending")}</span>`);
        }
        if (__props.xPlayer?.rating && !__props.game.requestedOpponentId?.startsWith("AI_X")) {
          _push(`<span class="text-[10px] mono text-indigo-400 font-black">(${ssrInterpolate(__props.xPlayer.rating)})</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="mx-1 text-app-text-muted opacity-20 font-black text-[10px] uppercase">vs</span><span class="marker-o text-xs">O</span>`);
        if (!__props.game.requestedOpponentId?.startsWith("AI_O") && !__props.game.isOnDevice && __props.oPlayer?.$id) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/users/${__props.oPlayer.$id}`,
            class: "hover:text-indigo-400 transition-colors"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(__props.oPlayer?.name || (__props.game.oPlayerId ? __props.game.oPlayerId.substring(0, 10) : "Waiting..."))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(__props.oPlayer?.name || (__props.game.oPlayerId ? __props.game.oPlayerId.substring(0, 10) : "Waiting...")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<span>${ssrInterpolate(__props.game.requestedOpponentId?.startsWith("AI_O") ? "Tixo AI" : __props.game.isOnDevice && !__props.game.requestedOpponentId?.startsWith("AI_X") ? __props.oPlayer?.name || "Local Player" : "Waiting...")}</span>`);
        }
        if (__props.oPlayer?.rating && !__props.game.requestedOpponentId?.startsWith("AI_O")) {
          _push(`<span class="text-[10px] mono text-indigo-400 font-black">(${ssrInterpolate(__props.oPlayer.rating)})</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span></div><div class="flex items-center mt-0.5 space-x-2"><span class="${ssrRenderClass([getStatusColor(__props.game.status), "text-[9px] px-1.5 py-0.5 rounded-md border font-black tracking-widest uppercase"])}">${ssrInterpolate(formatStatus(__props.game.status))}</span>`);
        if (__props.game.isOnDevice) {
          _push(`<span class="bg-amber-500/10 text-amber-500 border-amber-500/20 text-[9px] px-1.5 py-0.5 rounded-md border font-black tracking-widest uppercase"> ON-DEVICE </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Game/GameHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  AI_MODELS as A,
  GameAnalyticsDashboard as G,
  MatchTimeline as M,
  Player as P,
  _sfc_main$3 as _,
  check3x3Winner as a,
  _sfc_main$1 as b,
  coordToIndex as c,
  _sfc_main$2 as d,
  _sfc_main as e,
  getBestMove as f,
  getSmallBoard as g,
  isCellAvailable as i,
  rebuildGameState as r
};
