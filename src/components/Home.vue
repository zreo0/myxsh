<template>
  <div class="home-container">
    <h1>Welcome,{{user}}</h1>

    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
      <Row type="flex">
        <i-col :span="spanLeft" class="layout-menu-left">
          <Menu :activeName="getCurPage" theme="dark" width="auto" ref="menu" @on-select="switchPage">
            <div class="layout-logo-left"></div>
              <Menu-item name="index">
                <Icon type="ios-navigate" :size="iconSize"></Icon>
                <span class="layout-text">总览</span>
              </Menu-item>
              <Menu-item name="activity">
                <Icon type="ios-keypad" :size="iconSize"></Icon>
                <span class="layout-text">活动</span>
              </Menu-item>
              <Menu-item name="task">
                <Icon type="ios-analytics" :size="iconSize"></Icon>
                <span class="layout-text">任务</span>
              </Menu-item>
          </Menu>
        </i-col>
        <i-col :span="spanRight">
          <div class="layout-header">
            <i-button type="text" @click.native="toggleClick">
              <Icon type="navicon" size="32"></Icon>
            </i-button>
          </div>
          <div class="layout-content">
            <div class="layout-content-main">
              <router-view></router-view>
            </div>
          </div>
        </i-col>
      </Row>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'hello',
  components: {
  },
  created: function() {
    // 恢复
    document.documentElement.style.overflowY = 'scroll';
    console.log(111);
  },
  data () {
    return {
      // user: this.$store.state.user
      spanLeft: 5,
      spanRight: 19,
      curPageName: 'index'
    }
  },
  computed: mapState({
    user: function(state) {
      if (state.user == '') {
        this.$store.dispatch('setUser');
      }
      return state.user;
    },
    iconSize() {
      return this.spanLeft === 5 ? 14 : 24;
    },
    getCurPage() {
      return this.curPageName;
    }
  }),
  methods: {
    toggleClick() {
      if (this.spanLeft === 5) {
        this.spanLeft = 2;
        this.spanRight = 22;
      } else {
        this.spanLeft = 5;
        this.spanRight = 19;
      }
    },
    switchPage(key) {
      this.curPageName = key;
      // 切换页面
      var pageLocation = '/home/' + key;
      this.$router.push(pageLocation);
    }
  }
}
</script>

<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-breadcrumb{
    padding: 10px 15px 0;
  }
  .layout-content{
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .layout-content-main{
    padding: 10px;
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
  .layout-menu-left{
    background: #464c5b;
  }
  .layout-header{
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
  .layout-ceiling-main a{
    color: #9ba7b5;
  }
  .layout-hide-text .layout-text{
    display: none;
  }
  .ivu-col{
    transition: width .2s ease-in-out;
  }
</style>
