<script setup lang="ts">
import CenterLayout from '@/layouts/CenterLayout.vue';
import { auth, LoginStatus } from '@/api/authentication'
import router from '@/router'
import { onMounted, ref } from "vue";

// Importing PrimeVue components (they need to be used in template)
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import Message from 'primevue/message';

const email = ref('');
const password = ref('');
const loading = ref(false);
const errorMessage = ref('');

onMounted(async () => {
  const ok = await auth.authenticate();
  if (ok) {
    await router.push('/');
  }
})

async function handleSubmit() {
  loading.value = true;
  errorMessage.value = '';

  try {
    const status = await auth.login(email.value, password.value);
    if (status == LoginStatus.OK) {
      await router.push('/');
    } else {
      errorMessage.value = 'Invalid email or password';
    }
  } catch {
    errorMessage.value = 'An error occurred during login';
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <CenterLayout>
    <div class="w-full max-w-md p-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl relative overflow-hidden">
      <!-- Decorative background element -->
      <div class="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl"></div>

      <div class="flex flex-col items-center mb-8 relative z-10">
        <div class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-lg shadow-blue-900/20">
          TT
        </div>
        <h1 class="text-3xl font-bold text-white tracking-tight">Welcome Back</h1>
        <p class="text-slate-400 mt-2 font-medium">Log in to your tixo account</p>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-6 relative z-10">
        <div v-if="errorMessage" class="mb-4">
           <Message severity="error" variant="simple">{{ errorMessage }}</Message>
        </div>

        <div class="flex flex-col space-y-2">
          <label for="email" class="text-sm font-semibold text-slate-300 ml-1">Email Address</label>
          <InputText
            v-model="email"
            id="email"
            type="email"
            placeholder="name@example.com"
            class="w-full !bg-slate-800 !border-slate-700 !text-slate-200 focus:!border-blue-500 transition-colors"
            required
          />
        </div>

        <div class="flex flex-col space-y-2">
          <label for="password" class="text-sm font-semibold text-slate-300 ml-1">Password</label>
          <Password
            v-model="password"
            id="password"
            placeholder="••••••••"
            :feedback="false"
            toggleMask
            class="w-full"
            inputClass="w-full !bg-slate-800 !border-slate-700 !text-slate-200 focus:!border-blue-500 transition-colors"
            required
          />
        </div>

        <div class="flex items-center justify-between text-xs px-1">
          <div class="flex items-center space-x-2">
            <input type="checkbox" id="remember" class="rounded border-slate-700 bg-slate-800 text-blue-500">
            <label for="remember" class="text-slate-400 cursor-pointer">Remember me</label>
          </div>
          <a href="#" class="text-blue-500 hover:text-blue-400 font-semibold transition-colors">Forgot password?</a>
        </div>

        <Button
          type="submit"
          label="Sign In"
          :loading="loading"
          class="w-full !bg-blue-600 hover:!bg-blue-500 !border-none !py-3 !rounded-xl !font-bold !text-lg shadow-lg shadow-blue-900/20 transition-all active:scale-[0.98]"
        />
      </form>

      <div class="mt-8 pt-6 border-t border-slate-800 text-center relative z-10">
        <p class="text-slate-400 text-sm">
          Don't have an account?
          <a href="#" class="text-blue-500 hover:text-blue-400 font-semibold transition-colors">Create one now</a>
        </p>
      </div>
    </div>
  </CenterLayout>
</template>

<style scoped>
/* Override PrimeVue styles if necessary */
:deep(.p-inputtext) {
  padding: 0.75rem 1rem;
}
</style>
