import { a as useSeoMeta, c as useRouter, e as __nuxt_component_0, f as auth } from "../server.mjs";
import { U as UserDashboard } from "./UserDashboard-MP_eHgW8.js";
import { defineComponent, ref, mergeProps, withCtx, openBlock, createBlock, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { g as games } from "./games-B7zgyYbT.js";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import { TitleComponent, TooltipComponent, GridComponent, VisualMapComponent } from "echarts/components";
import "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/hookable/dist/index.mjs";
import "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/unctx/dist/index.mjs";
import "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/h3/dist/index.mjs";
import "pinia";
import "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/defu/dist/defu.mjs";
import "vue-router";
import "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/ufo/dist/index.mjs";
import "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/klona/dist/index.mjs";
import "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@unhead/vue/dist/index.mjs";
import "@primeuix/utils/eventbus";
import "@primeuix/styled";
import "@primeuix/utils";
import "@primeuix/utils/object";
import "@primeuix/styles/base";
import "@primeuix/utils/dom";
import "./GameListItem-BiqWjvUL.js";
import "./nuxt-link-C9J5Jg0a.js";
import "./GameStatus-DcfBG9k6.js";
import "vue-echarts";
const itemsPerPage = 10;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    use([
      CanvasRenderer,
      LineChart,
      TitleComponent,
      TooltipComponent,
      GridComponent,
      VisualMapComponent
    ]);
    useSeoMeta({
      title: "Commander Profile",
      description: "View your tactical records, victory statistics, and match chronicles in Tixo.",
      ogTitle: "Commander Profile | Tixo",
      ogDescription: "View your tactical records, victory statistics, and match chronicles in Tixo."
    });
    const router = useRouter();
    const currentUser = ref(null);
    const userDetails = ref(null);
    const userGames = ref([]);
    const totalGames = ref(0);
    const ratingHistory = ref([]);
    const loading = ref(true);
    const currentPage = ref(1);
    const handleLogout = async () => {
      const success = await auth.logout();
      if (success) {
        router.push("/login");
      }
    };
    const fetchUserGames = async () => {
      if (!currentUser.value) return;
      try {
        const response = await games.listGames(
          itemsPerPage,
          (currentPage.value - 1) * itemsPerPage,
          { playerId: currentUser.value.$id }
        );
        userGames.value = response.games;
        totalGames.value = response.total;
      } catch (e) {
        console.error("Failed to fetch user games", e);
      }
    };
    const handlePageChange = async (newPage) => {
      currentPage.value = newPage;
      await fetchUserGames();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_UserDashboard = UserDashboard;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "default" }, _attrs), {
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
          if (_push2) {
            if (loading.value) {
              _push2(`<div class="flex flex-col items-center justify-center min-h-[60vh]"${_scopeId}><i class="pi pi-spin pi-spinner text-4xl text-indigo-500 mb-4"${_scopeId}></i><p class="text-app-text-muted opacity-40 font-bold uppercase tracking-widest text-[10px]"${_scopeId}>Syncing Data</p></div>`);
            } else {
              _push2(`<div class="animate-in fade-in slide-in-from-bottom-4 duration-1000"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UserDashboard, {
                user: currentUser.value,
                "user-details": userDetails.value,
                "user-games": userGames.value,
                "total-games": totalGames.value,
                "rating-history": ratingHistory.value,
                "is-own-profile": true,
                "current-page": currentPage.value,
                "items-per-page": itemsPerPage,
                onLogout: handleLogout,
                onPageChange: handlePageChange
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
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
                class: "animate-in fade-in slide-in-from-bottom-4 duration-1000"
              }, [
                createVNode(_component_UserDashboard, {
                  user: currentUser.value,
                  "user-details": userDetails.value,
                  "user-games": userGames.value,
                  "total-games": totalGames.value,
                  "rating-history": ratingHistory.value,
                  "is-own-profile": true,
                  "current-page": currentPage.value,
                  "items-per-page": itemsPerPage,
                  onLogout: handleLogout,
                  onPageChange: handlePageChange
                }, null, 8, ["user", "user-details", "user-games", "total-games", "rating-history", "current-page"])
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
