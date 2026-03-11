import { executeAsync } from "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/unctx/dist/index.mjs";
import { o as defineNuxtRouteMiddleware, b as useAuthStore, n as navigateTo } from "../server.mjs";
import "vue";
import "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/hookable/dist/index.mjs";
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
import "vue/server-renderer";
import "appwrite";
const auth = defineNuxtRouteMiddleware(async (to) => {
  let __temp, __restore;
  const authStore = useAuthStore();
  if (!authStore.user) {
    [__temp, __restore] = executeAsync(() => authStore.checkAuth()), await __temp, __restore();
  }
  if (!authStore.isLoggedIn) {
    authStore.openLoginModal(to.fullPath);
    return navigateTo("/");
  }
});
export {
  auth as default
};
