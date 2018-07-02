<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Left Panel -->
    <f7-panel left reveal theme-dark>
      <f7-view url="/panel-left/"></f7-view>
    </f7-panel>

    <!-- Right Panel -->
    <f7-panel right cover theme-dark>
      <f7-view url="/panel-right/"></f7-view>
    </f7-panel>

    <!-- Main View -->

    <f7-views>
      <f7-view id="main-view" url="/" toolbar-through :dynamic-navbar="true" main></f7-view>
    </f7-views>

    <!-- Popup -->
    <f7-popup id="popup">
      <f7-view>
        <f7-page>
          <f7-navbar title="Popup">
            <f7-nav-right>
              <f7-link popup-close>Close</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-block>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</f7-block>
        </f7-page>
      </f7-view>
    </f7-popup>

    <!-- Login Screen -->
    <f7-login-screen id="login-screen">
      <f7-view>
        <login-form></login-form>
      </f7-view>
    </f7-login-screen>

  </div>
</template>

<script>
  import LoginForm from './pages/app/auth/login.vue';
export default {
    components:{
        'login-form': LoginForm,
    },
    mounted(){
      this.$store.dispatch('user/login',{phone:'180',pwd:'123456'})
    }
}
</script>
