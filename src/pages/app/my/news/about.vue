<template>
  <f7-page>
    <f7-navbar title="一寸免冠照" back-link="Back"></f7-navbar>
    <f7-list>
      <f7-list-item :media="photos"></f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        computed:{
            ...mapState(('player'),{
                photos:state =>
                    state.all.photo,

            })
        },
    }
</script>