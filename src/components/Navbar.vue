<template>
  <q-header bordered class="bg-white">
    <q-toolbar>
      <q-toolbar-title v-if="$q.screen.gt.sm" style="text-transform: none;" class="text-bold title q-pa-x-sm-lg">
        <router-link to="/" style="text-decoration: none; color: #0664F6">Find-Mate.kz</router-link>
      </q-toolbar-title>
      <q-btn color="white" to="/add-post" label="Добавить Пост" text-color="black" flat no-caps/>
      <q-btn color="white" to="/contact" label="Связаться с нами" text-color="black" flat no-caps/>
      <q-btn color="white" to="/login" label="Логин" text-color="secondary" class="text-bold" flat no-caps/>
      <q-btn color="white" to="/login" label="Выйти" text-color="secondary" class="text-bold" flat no-caps/>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.title{
  color: $secondary;
  text-transform: uppercase;
}
</style>
