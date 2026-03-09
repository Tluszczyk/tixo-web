<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success' | 'info'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  iconLeft?: string
  iconRight?: string
  loading?: boolean
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  block?: boolean
  animate?: boolean
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  loading: false,
  disabled: false,
  type: 'button',
  block: false,
  animate: false
})
</script>

<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="[
      'base-button',
      `base-button--${variant}`,
      `base-button--${size}`,
      {
        'base-button--loading': loading,
        'base-button--block': block,
        'base-button--animate': animate
      }
    ]"
    v-bind="$attrs"
  >
    <div class="base-button__content">
      <slot name="left">
        <i v-if="iconLeft" :class="[iconLeft, 'base-button__icon']"></i>
      </slot>
      
      <span v-if="$slots.default" class="base-button__text">
        <slot></slot>
      </span>
      
      <slot name="right">
        <i v-if="iconRight" :class="[iconRight, 'base-button__icon']"></i>
      </slot>
    </div>
    
    <div v-if="loading" class="base-button__loader">
      <i class="pi pi-spin pi-spinner"></i>
    </div>
  </button>
</template>

<style scoped>
@reference "../../assets/index.css";

.base-button {
  @apply relative overflow-hidden transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 flex items-center justify-center;
  border: 1px solid transparent;
}

.base-button--block {
  @apply w-full;
}

/* Gradient Border Effect */
.base-button::before {
  content: "";
  @apply absolute inset-0 opacity-0 transition-opacity duration-300;
  border-radius: inherit;
  padding: 1px; /* Border thickness */
  background: linear-gradient(
    90deg,
    transparent,
    var(--highlight-color, rgba(99, 102, 241, 0.8)),
    transparent
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  background-size: 200% auto;
  background-position: -100% center;
  z-index: 10;
}

.base-button:hover:not(:disabled)::before,
.base-button--animate:not(:disabled)::before {
  @apply opacity-100;
  animation: border-highlight 2s linear infinite;
}

@keyframes border-highlight {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}

.base-button__content {
  @apply relative z-20 flex items-center justify-center gap-2 h-full w-full;
}

.base-button__icon {
  @apply text-[1.2em];
}

/* Variants */
.base-button--primary {
  @apply bg-app-text text-void font-black;
  --highlight-color: rgba(255, 255, 255, 0.6);
}

.base-button--secondary {
  @apply bg-glass-white backdrop-blur-xl border border-glass-border text-app-text-muted hover:text-app-text shadow-lg;
  --highlight-color: rgba(99, 102, 241, 0.8);
}

.base-button--ghost {
  @apply bg-transparent border-transparent text-app-text-muted hover:text-app-text hover:bg-glass-white;
  --highlight-color: rgba(255, 255, 255, 0.3);
}

.base-button--danger {
  @apply border-red-500/20 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white hover:border-red-500;
  --highlight-color: rgba(239, 68, 68, 0.8);
}

.base-button--info {
  @apply border-blue-500/20 bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white hover:border-blue-500;
  --highlight-color: rgba(59, 130, 246, 0.8);
}

.base-button--success {
  @apply border-green-500/20 bg-green-500/10 text-green-400 hover:bg-green-500 hover:text-white hover:border-green-500;
  --highlight-color: rgba(34, 197, 94, 0.8);
}

/* Sizes */
.base-button--sm {
  @apply px-4 py-2 rounded-lg text-[9px] uppercase font-black tracking-widest h-9;
}

.base-button--md {
  @apply px-6 py-3 rounded-xl text-[10px] uppercase font-black tracking-[0.2em] h-12;
}

.base-button--lg {
  @apply px-10 py-4 rounded-2xl text-[11px] uppercase font-black tracking-[0.3em] h-14;
}

.base-button--xl {
  @apply px-12 py-5 rounded-[1.5rem] text-[12px] uppercase font-black tracking-[0.4em] h-16;
}

/* Loading state */
.base-button--loading .base-button__content {
  @apply opacity-0;
}

.base-button__loader {
  @apply absolute inset-0 flex items-center justify-center text-lg z-30;
}
</style>
