<!-- HMF stands for header-main-footer -->

<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col w-full h-full bg-slate-950 min-h-screen">
    <header class="w-full flex justify-between items-center px-8 py-4 bg-slate-900 border-b border-slate-800 shrink-0 sticky top-0 z-50 backdrop-blur-md bg-slate-900/80">
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-900/20">TT</div>
        <span class="text-xl font-bold tracking-tight text-white hidden sm:block">tixo</span>
      </div>

      <div class="flex-1 max-w-2xl mx-12 hidden md:block">
        <slot name="header-middle" />
      </div>

      <div class="flex items-center space-x-4">
        <slot name="header" />
      </div>
    </header>

    <main class="w-full flex-1 flex flex-col items-center overflow-y-auto">
      <div class="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <slot name="main" />
      </div>
    </main>

    <footer class="w-full bg-slate-900 border-t border-slate-800 py-12 shrink-0">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div class="flex flex-col items-center md:items-start">
          <div class="flex items-center space-x-2 mb-2">
            <div class="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-[10px] font-bold">TT</div>
            <span class="text-sm font-bold text-slate-200">tixo Platform</span>
          </div>
          <p class="text-xs text-slate-500 font-medium tracking-wide uppercase">&copy; 2026 tixo Inc. All rights reserved.</p>
        </div>

        <div class="flex items-center space-x-8">
           <a href="#" class="text-xs font-semibold text-slate-400 hover:text-white transition-colors">Documentation</a>
           <a href="#" class="text-xs font-semibold text-slate-400 hover:text-white transition-colors">Terms of Service</a>
           <a href="#" class="text-xs font-semibold text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
        </div>

        <slot name="footer" />
      </div>
    </footer>
  </div>
</template>

<style scoped lang="css">
</style>
