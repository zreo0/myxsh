<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <p>
      <router-link to="/page1/helloWorld">Go to page1</router-link>
      <router-link to="/page2">Go to page2</router-link>
      <router-link to="/page1/aha/profile">Go to page1-profile</router-link>
      <router-link to="/page1/ahaha/posts">Go to page1-post</router-link>
      <button v-on:click="goNext">Next</button>
      <button v-on:click="goForward">Forward</button>
    </p> -->
    <transition name="fade" mode="out-in" >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data (){
    return {

    }
  },
  methods: {
    goNext() {
      this.$router.push({path: '/page1/:id', params: {id: 12}});
    },
    goForward() {
      this.$router.go(1);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Microsoft YaHei';
  
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
.fade-enter-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
</style>
