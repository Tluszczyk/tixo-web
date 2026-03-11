import type { ComputedRef, MaybeRef } from 'vue'

type ComponentProps<T> = T extends new(...args: any) => { $props: infer P } ? NonNullable<P>
  : T extends (props: infer P, ...args: any) => any ? P
  : {}

declare module 'nuxt/app' {
  interface NuxtLayouts {
    center: ComponentProps<typeof import("/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/layouts/center.vue").default>,
    default: ComponentProps<typeof import("/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/layouts/default.vue").default>,
    hmf: ComponentProps<typeof import("/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/layouts/hmf.vue").default>,
}
  export type LayoutKey = keyof NuxtLayouts extends never ? string : keyof NuxtLayouts
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}