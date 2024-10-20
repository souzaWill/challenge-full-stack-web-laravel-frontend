<template>
    <div>
      <v-img 
        class="mx-auto my-6" 
        max-width="228"
        src="https://maisaedu.com.br/hubfs/site-grupo-a/logo-mais-a-educacao.svg">
      </v-img>
  
      <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
        <div class="text-subtitle-1 text-medium-emphasis">
          {{ $t('Email') }}
        </div>
  
        <v-text-field density="compact" :placeholder="$t('Email')" prepend-inner-icon="mdi-email-outline"
          variant="outlined"></v-text-field>
  
        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          {{ $t('Password') }}
        </div>
  
        <v-text-field 
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" 
          :type="visible ? 'text' : 'password'"
          density="compact" 
          :placeholder="$t('Enter your password')"
          prepend-inner-icon="mdi-lock-outline" 
          variant="outlined"
          @click:append-inner="toggleVisible">
        </v-text-field>
  
        <v-btn @click="handleLogin" block class="mb-8" color="blue" size="large" variant="tonal">
          {{ $t('Log in') }}

        </v-btn>
  
      </v-card>
    </div>
  </template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';


export default defineComponent({
  setup() {
    const username = ref<string>('');
    const password = ref<string>('');
    const visible = ref<boolean>(false);
    const router = useRouter();
    
    const handleLogin = async () => {
      router.push({ name: '/' }); 
    };

    const toggleVisible = () => {
      visible.value = !visible.value
    }

    return {
      username,
      password,
      visible,
      handleLogin,
      toggleVisible,
    };
  },
});
</script>