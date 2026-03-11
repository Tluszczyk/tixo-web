import { a as useSeoMeta, c as useRouter, e as __nuxt_component_0, f as auth } from './server.mjs';
import { U as UserDashboard } from './UserDashboard-MP_eHgW8.mjs';
import { defineComponent, ref, mergeProps, withCtx, openBlock, createBlock, createVNode, createTextVNode, useSSRContext } from 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/vue/server-renderer/index.mjs';
import { g as games } from './games-B7zgyYbT.mjs';
import { use } from 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/echarts/core.js';
import { CanvasRenderer } from 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/echarts/renderers.js';
import { LineChart } from 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/echarts/charts.js';
import { TitleComponent, TooltipComponent, GridComponent, VisualMapComponent } from 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/echarts/components.js';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/h3/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/ufo/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/destr/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/hookable/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/node-mock-http/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/unstorage/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/ohash/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/klona/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/defu/dist/defu.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/scule/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/unctx/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/radix3/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/consola/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primevue/core/base/style/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primevue/core/basecomponent/style/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/autocomplete/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/utils/dist/object/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/cascadeselect/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/checkbox/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/checkboxgroup/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/colorpicker/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/datepicker/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/floatlabel/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/iconfield/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/iftalabel/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/inputchips/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/inputgroup/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/inputnumber/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/inputotp/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/inputtext/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/knob/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/listbox/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/multiselect/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/password/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/radiobutton/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/radiobuttongroup/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/rating/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/select/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/selectbutton/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/slider/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/textarea/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/togglebutton/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/toggleswitch/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/treeselect/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/button/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/buttongroup/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/speeddial/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/splitbutton/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/datatable/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/dataview/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/orderlist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/organizationchart/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/paginator/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/picklist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/tree/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/treetable/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/timeline/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/virtualscroller/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/accordion/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/card/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/divider/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/fieldset/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/panel/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/scrollpanel/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/splitter/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/stepper/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/tabview/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/tabs/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/toolbar/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/confirmdialog/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/confirmpopup/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/dialog/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/drawer/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/popover/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/fileupload/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/breadcrumb/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/contextmenu/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/dock/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/menu/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/menubar/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/megamenu/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/panelmenu/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/steps/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/tabmenu/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/tieredmenu/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/message/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/inlinemessage/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/toast/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/carousel/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/galleria/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/image/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/imagecompare/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/avatar/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/badge/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/blockui/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/chip/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/inplace/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/metergroup/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/overlaybadge/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/scrolltop/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/skeleton/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/progressbar/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/progressspinner/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/tag/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/terminal/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primevue/forms/form/style/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primevue/forms/formfield/style/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/tooltip/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/ripple/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styled/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/pathe/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/fast-xml-parser/src/fxp.js';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/pinia/dist/pinia.prod.cjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/vue-router/vue-router.node.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/utils/dist/eventbus/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/utils/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/base/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/utils/dist/dom/index.mjs';
import '../_/renderer.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/unhead/dist/server.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/devalue/index.js';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/unhead/dist/plugins.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/unhead/dist/utils.mjs';
import './GameListItem-BiqWjvUL.mjs';
import './nuxt-link-C9J5Jg0a.mjs';
import './GameStatus-DcfBG9k6.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/vue-echarts/dist/index.js';

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
