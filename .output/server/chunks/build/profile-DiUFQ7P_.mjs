import { a as useSeoMeta, c as useRouter, e as __nuxt_component_0, f as auth } from './server.mjs';
import { U as UserDashboard } from './UserDashboard-CP70_vQK.mjs';
import { defineComponent, ref, mergeProps, withCtx, openBlock, createBlock, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { g as games } from './games-aIlt4Osa.mjs';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart } from 'echarts/charts';
import { TitleComponent, TooltipComponent, GridComponent, VisualMapComponent } from 'echarts/components';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'consola';
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
import 'fast-xml-parser';
import 'pinia';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '@primeuix/styles/base';
import '@primeuix/utils/dom';
import 'appwrite';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './GameListItem-yyLTPBCw.mjs';
import './nuxt-link-C9J5Jg0a.mjs';
import './GameStatus-DcfBG9k6.mjs';
import 'vue-echarts';

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

export { _sfc_main as default };
