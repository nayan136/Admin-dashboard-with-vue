<template>
  <div id="app">
    <Header></Header>
    <div class="wrapper ">
        <div class="columns">
          <aside class="column is-2 aside">
            <Sidebar/>
          </aside>
          <main class="column main">
            <Breadcrumb/>
            <router-view/>
          </main>
        </div>
    </div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
  
  </div>
</template>

<style lang="scss">
</style>

<script>
import Header from './components/layout/Header.vue'
import Sidebar from './components/layout/Sidebar.vue'
import Breadcrumb from './components/layout/Breadcrumb.vue'
export default {
  components:{
    Header,
    Sidebar,
    Breadcrumb
  }
}
</script>

