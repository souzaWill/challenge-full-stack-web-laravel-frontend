<template>
    <v-app>
      <AppBar @toggle-drawer="drawer = !drawer" />
  
      <v-navigation-drawer app v-model="drawer" color="primary lighten-4">
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index" link @click="navigate(item.route)">
            <v-list-item>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <v-main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-main>
  
    </v-app>
  </template>
  
  <script setup>
    import AppBar from '@/components/layout/AppBar.vue';
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    
    const drawer = ref(true);
    const router = useRouter();

    const items = [
        { title: 'Home', route: '/' },
        { title: 'Students', route: '/students' },
    ];
    
    const navigate = (route) => {
        router.push(route);
    };
  </script>