import { defineComponent, ref, computed, mergeProps, withCtx, createBlock, openBlock, createVNode, toDisplayString, createTextVNode, unref, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { D as DashboardLayout } from './DashboardLayout-Cyy2dxQQ.mjs';
import { _ as _sfc_main$1 } from './GameListItem-YCnEV8Lc.mjs';
import { u as useRouter, h as auth } from './server.mjs';
import './GameStatus-DcfBG9k6.mjs';
import './users-x0j5YX6M.mjs';
import 'appwrite';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@primevue/core/base/style';
import '@primevue/core/basecomponent/style';
import '@primeuix/styles/autocomplete';
import '@primeuix/utils/object';
import '@primeuix/styles/cascadeselect';
import '@primeuix/styles/checkbox';
import '@primeuix/styles/checkboxgroup';
import '@primeuix/styles/colorpicker';
import '@primeuix/styles/datepicker';
import '@primeuix/styles/floatlabel';
import '@primeuix/styles/iconfield';
import '@primeuix/styles/iftalabel';
import '@primeuix/styles/inputchips';
import '@primeuix/styles/inputgroup';
import '@primeuix/styles/inputnumber';
import '@primeuix/styles/inputotp';
import '@primeuix/styles/inputtext';
import '@primeuix/styles/knob';
import '@primeuix/styles/listbox';
import '@primeuix/styles/multiselect';
import '@primeuix/styles/password';
import '@primeuix/styles/radiobutton';
import '@primeuix/styles/radiobuttongroup';
import '@primeuix/styles/rating';
import '@primeuix/styles/select';
import '@primeuix/styles/selectbutton';
import '@primeuix/styles/slider';
import '@primeuix/styles/textarea';
import '@primeuix/styles/togglebutton';
import '@primeuix/styles/toggleswitch';
import '@primeuix/styles/treeselect';
import '@primeuix/styles/button';
import '@primeuix/styles/buttongroup';
import '@primeuix/styles/speeddial';
import '@primeuix/styles/splitbutton';
import '@primeuix/styles/datatable';
import '@primeuix/styles/dataview';
import '@primeuix/styles/orderlist';
import '@primeuix/styles/organizationchart';
import '@primeuix/styles/paginator';
import '@primeuix/styles/picklist';
import '@primeuix/styles/tree';
import '@primeuix/styles/treetable';
import '@primeuix/styles/timeline';
import '@primeuix/styles/virtualscroller';
import '@primeuix/styles/accordion';
import '@primeuix/styles/card';
import '@primeuix/styles/divider';
import '@primeuix/styles/fieldset';
import '@primeuix/styles/panel';
import '@primeuix/styles/scrollpanel';
import '@primeuix/styles/splitter';
import '@primeuix/styles/stepper';
import '@primeuix/styles/tabview';
import '@primeuix/styles/tabs';
import '@primeuix/styles/toolbar';
import '@primeuix/styles/confirmdialog';
import '@primeuix/styles/confirmpopup';
import '@primeuix/styles/dialog';
import '@primeuix/styles/drawer';
import '@primeuix/styles/popover';
import '@primeuix/styles/fileupload';
import '@primeuix/styles/breadcrumb';
import '@primeuix/styles/contextmenu';
import '@primeuix/styles/dock';
import '@primeuix/styles/menu';
import '@primeuix/styles/menubar';
import '@primeuix/styles/megamenu';
import '@primeuix/styles/panelmenu';
import '@primeuix/styles/steps';
import '@primeuix/styles/tabmenu';
import '@primeuix/styles/tieredmenu';
import '@primeuix/styles/message';
import '@primeuix/styles/inlinemessage';
import '@primeuix/styles/toast';
import '@primeuix/styles/carousel';
import '@primeuix/styles/galleria';
import '@primeuix/styles/image';
import '@primeuix/styles/imagecompare';
import '@primeuix/styles/avatar';
import '@primeuix/styles/badge';
import '@primeuix/styles/blockui';
import '@primeuix/styles/chip';
import '@primeuix/styles/inplace';
import '@primeuix/styles/metergroup';
import '@primeuix/styles/overlaybadge';
import '@primeuix/styles/scrolltop';
import '@primeuix/styles/skeleton';
import '@primeuix/styles/progressbar';
import '@primeuix/styles/progressspinner';
import '@primeuix/styles/tag';
import '@primeuix/styles/terminal';
import '@primevue/forms/form/style';
import '@primevue/forms/formfield/style';
import '@primeuix/styles/tooltip';
import '@primeuix/styles/ripple';
import '@primeuix/styled';
import 'node:url';
import 'pinia';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '@primeuix/styles/base';
import '@primeuix/utils/dom';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const currentUser = ref(null);
    const userDetails = ref(null);
    const allGames = ref([]);
    const loading = ref(true);
    const userGames = computed(() => {
      if (!currentUser.value) return [];
      return allGames.value.filter(
        (g) => {
          var _a, _b, _c;
          return g.xPlayerId === ((_a = currentUser.value) == null ? void 0 : _a.$id) || g.oPlayerId === ((_b = currentUser.value) == null ? void 0 : _b.$id) || g.creatorId === ((_c = currentUser.value) == null ? void 0 : _c.$id);
        }
      ).sort((a, b) => new Date(b.$createdAt).getTime() - new Date(a.$createdAt).getTime());
    });
    const stats = computed(() => {
      if (!currentUser.value) return { total: 0, wins: 0, losses: 0, ties: 0 };
      const myGames = userGames.value.filter((g) => g.status === "FINISHED");
      let wins = 0, losses = 0, ties = 0;
      myGames.forEach((g) => {
        var _a;
        if (g.winner === "D" || g.winner === "TIE") ties++;
        else {
          const mySymbol = g.xPlayerId === ((_a = currentUser.value) == null ? void 0 : _a.$id) ? "X" : "O";
          if (g.winner === mySymbol) wins++;
          else losses++;
        }
      });
      return { total: userGames.value.length, wins, losses, ties };
    });
    const handleLogout = async () => {
      const success = await auth.logout();
      if (success) {
        router.push("/login");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contents" }, _attrs))}>`);
      _push(ssrRenderComponent(DashboardLayout, null, {
        "header-left": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-4"${_scopeId}><div class="text-2xl font-black tracking-tighter uppercase italic"${_scopeId}> Profile<span class="text-indigo-500"${_scopeId}>.</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-4" }, [
                createVNode("div", { class: "text-2xl font-black tracking-tighter uppercase italic" }, [
                  createTextVNode(" Profile"),
                  createVNode("span", { class: "text-indigo-500" }, ".")
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
          if (_push2) {
            if (loading.value) {
              _push2(`<div class="flex flex-col items-center justify-center min-h-[60vh]"${_scopeId}><i class="pi pi-spin pi-spinner text-4xl text-indigo-500 mb-4"${_scopeId}></i><p class="text-app-text-muted opacity-40 font-bold uppercase tracking-widest text-[10px]"${_scopeId}>Syncing Data</p></div>`);
            } else {
              _push2(`<div class="space-y-12 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000"${_scopeId}><section class="grid grid-cols-1 lg:grid-cols-3 gap-8"${_scopeId}><div class="lg:col-span-1 glass border-glass-border rounded-4xl p-10 flex flex-col items-center text-center space-y-8"${_scopeId}><div class="w-32 h-32 rounded-[2.5rem] glass flex items-center justify-center border-indigo-500/30 shadow-2xl shadow-indigo-500/10"${_scopeId}><i class="pi pi-user text-5xl text-indigo-500"${_scopeId}></i></div><div class="space-y-2"${_scopeId}><h2 class="text-3xl font-black text-app-text tracking-tight leading-none"${_scopeId}>${ssrInterpolate(((_a = currentUser.value) == null ? void 0 : _a.name) || "Player")}</h2><p class="text-app-text-muted opacity-30 text-xs font-bold uppercase tracking-[0.2em]"${_scopeId}>${ssrInterpolate((_b = currentUser.value) == null ? void 0 : _b.email)}</p></div><div class="w-full space-y-3"${_scopeId}><div class="flex items-center justify-between p-4 rounded-2xl glass border-indigo-500/10 bg-indigo-500/5"${_scopeId}><span class="text-[10px] font-black text-indigo-400 uppercase tracking-widest"${_scopeId}>Glicko-2 Rating</span><span class="text-xl font-black text-app-text mono"${_scopeId}>${ssrInterpolate(((_c = userDetails.value) == null ? void 0 : _c.rating) || 1500)}</span></div><div class="flex items-center justify-between p-4 rounded-2xl glass border-glass-border"${_scopeId}><span class="text-[10px] font-black text-app-text-muted opacity-20 uppercase tracking-widest"${_scopeId}>Joined</span><span class="text-xs font-bold text-app-text-muted opacity-60"${_scopeId}>${ssrInterpolate(new Date(((_d = currentUser.value) == null ? void 0 : _d.registration) || "").toLocaleDateString())}</span></div><div class="flex items-center justify-between p-4 rounded-2xl glass border-glass-border"${_scopeId}><span class="text-[10px] font-black text-app-text-muted opacity-20 uppercase tracking-widest"${_scopeId}>ID</span><span class="text-[10px] mono text-app-text-muted opacity-30 truncate ml-4"${_scopeId}>${ssrInterpolate((_e = currentUser.value) == null ? void 0 : _e.$id)}</span></div></div><button class="w-full py-4 rounded-xl glass border-red-500/20 text-[10px] font-bold uppercase tracking-[0.2em] text-red-400 hover:bg-red-500/10 transition-all flex items-center justify-center gap-3"${_scopeId}><i class="pi pi-sign-out"${_scopeId}></i><span${_scopeId}>Resign Session</span></button></div><div class="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-6"${_scopeId}><div class="col-span-2 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[2rem] p-10 text-white relative overflow-hidden group shadow-2xl shadow-indigo-500/20"${_scopeId}><div class="absolute -right-8 -bottom-8 text-white opacity-10 text-9xl rotate-12 group-hover:scale-110 transition-transform duration-1000"${_scopeId}><i class="pi pi-bolt"${_scopeId}></i></div><h4 class="text-[11px] font-black uppercase tracking-[0.3em] mb-4 relative z-10 text-white opacity-60"${_scopeId}> Total Encounters </h4><p class="text-7xl font-black relative z-10 tracking-tighter"${_scopeId}>${ssrInterpolate(stats.value.total)}</p><div class="mt-8 flex items-center gap-2 relative z-10"${_scopeId}><div class="h-1 w-12 bg-white rounded-full"${_scopeId}></div><span class="text-[10px] font-black uppercase tracking-widest text-white opacity-40"${_scopeId}>Active Records</span></div></div><div class="glass border-glass-border rounded-[2rem] p-8 flex flex-col justify-between group hover:border-green-500/30 transition-all duration-500"${_scopeId}><div class="w-12 h-12 rounded-2xl glass border-green-500/20 flex items-center justify-center text-green-500 mb-4 group-hover:scale-110 transition-transform"${_scopeId}><i class="pi pi-trophy text-xl"${_scopeId}></i></div><div${_scopeId}><p class="text-4xl font-black text-app-text tracking-tighter"${_scopeId}>${ssrInterpolate(stats.value.wins)}</p><p class="text-[10px] font-black text-app-text-muted opacity-20 uppercase tracking-[0.2em]"${_scopeId}> Victories </p></div></div><div class="glass border-glass-border rounded-[2rem] p-8 flex flex-col justify-between group hover:border-red-500/30 transition-all duration-500"${_scopeId}><div class="w-12 h-12 rounded-2xl glass border-red-500/20 flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 transition-transform"${_scopeId}><i class="pi pi-times text-xl"${_scopeId}></i></div><div${_scopeId}><p class="text-4xl font-black text-app-text tracking-tighter"${_scopeId}>${ssrInterpolate(stats.value.losses)}</p><p class="text-[10px] font-black text-app-text-muted opacity-20 uppercase tracking-[0.2em]"${_scopeId}> Defeats </p></div></div><div class="md:col-span-4 glass border-glass-border rounded-[2.5rem] p-10 flex items-center justify-between overflow-hidden relative group"${_scopeId}><div class="flex items-center gap-8 relative z-10"${_scopeId}><div class="w-20 h-20 rounded-3xl glass border-indigo-500/20 flex items-center justify-center text-indigo-500 shadow-2xl shadow-indigo-500/10"${_scopeId}><i class="pi pi-percentage text-3xl"${_scopeId}></i></div><div${_scopeId}><h4 class="text-2xl font-black text-app-text tracking-tight"${_scopeId}>Tactical Precision</h4><p class="text-[10px] font-black uppercase tracking-[0.2em] text-app-text-muted opacity-20 mt-1"${_scopeId}> Weighted Win Rate </p></div></div><div class="text-right relative z-10"${_scopeId}><p class="text-7xl font-black text-app-text tracking-tighter"${_scopeId}>${ssrInterpolate(stats.value.total > 0 ? Math.round(stats.value.wins / (stats.value.wins + stats.value.losses || 1) * 100) : 0)}<span class="text-3xl text-app-text-muted opacity-20"${_scopeId}>%</span></p></div></div></div></section><section class="space-y-8"${_scopeId}><div class="flex items-center justify-between px-2"${_scopeId}><div class="flex items-center gap-4"${_scopeId}><h3 class="text-2xl font-black text-app-text tracking-tight uppercase italic"${_scopeId}> Chronicles<span class="text-indigo-500"${_scopeId}>.</span></h3><div class="h-4 w-[1px] bg-glass-border"${_scopeId}></div><span class="text-[10px] font-black uppercase tracking-[0.3em] text-app-text-muted opacity-20"${_scopeId}>${ssrInterpolate(userGames.value.length)} Matches</span></div></div>`);
              if (userGames.value.length === 0) {
                _push2(`<div class="glass border-glass-border rounded-[2.5rem] p-20 flex flex-col items-center text-center space-y-6"${_scopeId}><div class="w-24 h-24 rounded-full glass border-glass-border flex items-center justify-center text-app-text-muted opacity-10"${_scopeId}><i class="pi pi-table text-5xl"${_scopeId}></i></div><div class="space-y-2"${_scopeId}><h4 class="text-xl font-black text-app-text"${_scopeId}>The board is silent.</h4><p class="text-app-text-muted opacity-20 text-[10px] font-black uppercase tracking-[0.2em] max-w-xs leading-relaxed"${_scopeId}> Your tactical history is waiting to be written. </p></div><button class="px-10 py-4 glass border-indigo-500/30 text-indigo-400 font-black uppercase tracking-[0.2em] text-[10px] rounded-xl hover:bg-indigo-500 hover:text-white transition-all"${_scopeId}> Initiate Match </button></div>`);
              } else {
                _push2(`<div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId}><!--[-->`);
                ssrRenderList(userGames.value, (game) => {
                  _push2(ssrRenderComponent(_sfc_main$1, {
                    key: game.$id,
                    game,
                    "current-user": currentUser.value
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]--></div>`);
              }
              _push2(`</section></div>`);
            }
          } else {
            return [
              loading.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex flex-col items-center justify-center min-h-[60vh]"
              }, [
                createVNode("i", { class: "pi pi-spin pi-spinner text-4xl text-indigo-500 mb-4" }),
                createVNode("p", { class: "text-app-text-muted opacity-40 font-bold uppercase tracking-widest text-[10px]" }, "Syncing Data")
              ])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "space-y-12 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000"
              }, [
                createVNode("section", { class: "grid grid-cols-1 lg:grid-cols-3 gap-8" }, [
                  createVNode("div", { class: "lg:col-span-1 glass border-glass-border rounded-4xl p-10 flex flex-col items-center text-center space-y-8" }, [
                    createVNode("div", { class: "w-32 h-32 rounded-[2.5rem] glass flex items-center justify-center border-indigo-500/30 shadow-2xl shadow-indigo-500/10" }, [
                      createVNode("i", { class: "pi pi-user text-5xl text-indigo-500" })
                    ]),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode("h2", { class: "text-3xl font-black text-app-text tracking-tight leading-none" }, toDisplayString(((_f = currentUser.value) == null ? void 0 : _f.name) || "Player"), 1),
                      createVNode("p", { class: "text-app-text-muted opacity-30 text-xs font-bold uppercase tracking-[0.2em]" }, toDisplayString((_g = currentUser.value) == null ? void 0 : _g.email), 1)
                    ]),
                    createVNode("div", { class: "w-full space-y-3" }, [
                      createVNode("div", { class: "flex items-center justify-between p-4 rounded-2xl glass border-indigo-500/10 bg-indigo-500/5" }, [
                        createVNode("span", { class: "text-[10px] font-black text-indigo-400 uppercase tracking-widest" }, "Glicko-2 Rating"),
                        createVNode("span", { class: "text-xl font-black text-app-text mono" }, toDisplayString(((_h = userDetails.value) == null ? void 0 : _h.rating) || 1500), 1)
                      ]),
                      createVNode("div", { class: "flex items-center justify-between p-4 rounded-2xl glass border-glass-border" }, [
                        createVNode("span", { class: "text-[10px] font-black text-app-text-muted opacity-20 uppercase tracking-widest" }, "Joined"),
                        createVNode("span", { class: "text-xs font-bold text-app-text-muted opacity-60" }, toDisplayString(new Date(((_i = currentUser.value) == null ? void 0 : _i.registration) || "").toLocaleDateString()), 1)
                      ]),
                      createVNode("div", { class: "flex items-center justify-between p-4 rounded-2xl glass border-glass-border" }, [
                        createVNode("span", { class: "text-[10px] font-black text-app-text-muted opacity-20 uppercase tracking-widest" }, "ID"),
                        createVNode("span", { class: "text-[10px] mono text-app-text-muted opacity-30 truncate ml-4" }, toDisplayString((_j = currentUser.value) == null ? void 0 : _j.$id), 1)
                      ])
                    ]),
                    createVNode("button", {
                      onClick: handleLogout,
                      class: "w-full py-4 rounded-xl glass border-red-500/20 text-[10px] font-bold uppercase tracking-[0.2em] text-red-400 hover:bg-red-500/10 transition-all flex items-center justify-center gap-3"
                    }, [
                      createVNode("i", { class: "pi pi-sign-out" }),
                      createVNode("span", null, "Resign Session")
                    ])
                  ]),
                  createVNode("div", { class: "lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-6" }, [
                    createVNode("div", { class: "col-span-2 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[2rem] p-10 text-white relative overflow-hidden group shadow-2xl shadow-indigo-500/20" }, [
                      createVNode("div", { class: "absolute -right-8 -bottom-8 text-white opacity-10 text-9xl rotate-12 group-hover:scale-110 transition-transform duration-1000" }, [
                        createVNode("i", { class: "pi pi-bolt" })
                      ]),
                      createVNode("h4", { class: "text-[11px] font-black uppercase tracking-[0.3em] mb-4 relative z-10 text-white opacity-60" }, " Total Encounters "),
                      createVNode("p", { class: "text-7xl font-black relative z-10 tracking-tighter" }, toDisplayString(stats.value.total), 1),
                      createVNode("div", { class: "mt-8 flex items-center gap-2 relative z-10" }, [
                        createVNode("div", { class: "h-1 w-12 bg-white rounded-full" }),
                        createVNode("span", { class: "text-[10px] font-black uppercase tracking-widest text-white opacity-40" }, "Active Records")
                      ])
                    ]),
                    createVNode("div", { class: "glass border-glass-border rounded-[2rem] p-8 flex flex-col justify-between group hover:border-green-500/30 transition-all duration-500" }, [
                      createVNode("div", { class: "w-12 h-12 rounded-2xl glass border-green-500/20 flex items-center justify-center text-green-500 mb-4 group-hover:scale-110 transition-transform" }, [
                        createVNode("i", { class: "pi pi-trophy text-xl" })
                      ]),
                      createVNode("div", null, [
                        createVNode("p", { class: "text-4xl font-black text-app-text tracking-tighter" }, toDisplayString(stats.value.wins), 1),
                        createVNode("p", { class: "text-[10px] font-black text-app-text-muted opacity-20 uppercase tracking-[0.2em]" }, " Victories ")
                      ])
                    ]),
                    createVNode("div", { class: "glass border-glass-border rounded-[2rem] p-8 flex flex-col justify-between group hover:border-red-500/30 transition-all duration-500" }, [
                      createVNode("div", { class: "w-12 h-12 rounded-2xl glass border-red-500/20 flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 transition-transform" }, [
                        createVNode("i", { class: "pi pi-times text-xl" })
                      ]),
                      createVNode("div", null, [
                        createVNode("p", { class: "text-4xl font-black text-app-text tracking-tighter" }, toDisplayString(stats.value.losses), 1),
                        createVNode("p", { class: "text-[10px] font-black text-app-text-muted opacity-20 uppercase tracking-[0.2em]" }, " Defeats ")
                      ])
                    ]),
                    createVNode("div", { class: "md:col-span-4 glass border-glass-border rounded-[2.5rem] p-10 flex items-center justify-between overflow-hidden relative group" }, [
                      createVNode("div", { class: "flex items-center gap-8 relative z-10" }, [
                        createVNode("div", { class: "w-20 h-20 rounded-3xl glass border-indigo-500/20 flex items-center justify-center text-indigo-500 shadow-2xl shadow-indigo-500/10" }, [
                          createVNode("i", { class: "pi pi-percentage text-3xl" })
                        ]),
                        createVNode("div", null, [
                          createVNode("h4", { class: "text-2xl font-black text-app-text tracking-tight" }, "Tactical Precision"),
                          createVNode("p", { class: "text-[10px] font-black uppercase tracking-[0.2em] text-app-text-muted opacity-20 mt-1" }, " Weighted Win Rate ")
                        ])
                      ]),
                      createVNode("div", { class: "text-right relative z-10" }, [
                        createVNode("p", { class: "text-7xl font-black text-app-text tracking-tighter" }, [
                          createTextVNode(toDisplayString(stats.value.total > 0 ? Math.round(stats.value.wins / (stats.value.wins + stats.value.losses || 1) * 100) : 0), 1),
                          createVNode("span", { class: "text-3xl text-app-text-muted opacity-20" }, "%")
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("section", { class: "space-y-8" }, [
                  createVNode("div", { class: "flex items-center justify-between px-2" }, [
                    createVNode("div", { class: "flex items-center gap-4" }, [
                      createVNode("h3", { class: "text-2xl font-black text-app-text tracking-tight uppercase italic" }, [
                        createTextVNode(" Chronicles"),
                        createVNode("span", { class: "text-indigo-500" }, ".")
                      ]),
                      createVNode("div", { class: "h-4 w-[1px] bg-glass-border" }),
                      createVNode("span", { class: "text-[10px] font-black uppercase tracking-[0.3em] text-app-text-muted opacity-20" }, toDisplayString(userGames.value.length) + " Matches", 1)
                    ])
                  ]),
                  userGames.value.length === 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "glass border-glass-border rounded-[2.5rem] p-20 flex flex-col items-center text-center space-y-6"
                  }, [
                    createVNode("div", { class: "w-24 h-24 rounded-full glass border-glass-border flex items-center justify-center text-app-text-muted opacity-10" }, [
                      createVNode("i", { class: "pi pi-table text-5xl" })
                    ]),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode("h4", { class: "text-xl font-black text-app-text" }, "The board is silent."),
                      createVNode("p", { class: "text-app-text-muted opacity-20 text-[10px] font-black uppercase tracking-[0.2em] max-w-xs leading-relaxed" }, " Your tactical history is waiting to be written. ")
                    ]),
                    createVNode("button", {
                      onClick: ($event) => unref(router).push("/"),
                      class: "px-10 py-4 glass border-indigo-500/30 text-indigo-400 font-black uppercase tracking-[0.2em] text-[10px] rounded-xl hover:bg-indigo-500 hover:text-white transition-all"
                    }, " Initiate Match ", 8, ["onClick"])
                  ])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "grid grid-cols-1 md:grid-cols-2 gap-6"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(userGames.value, (game) => {
                      return openBlock(), createBlock(_sfc_main$1, {
                        key: game.$id,
                        game,
                        "current-user": currentUser.value
                      }, null, 8, ["game", "current-user"]);
                    }), 128))
                  ]))
                ])
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=profile-rd7wjbGZ.mjs.map
