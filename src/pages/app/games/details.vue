
<template>
    <f7-page>
        <f7-navbar :title="data.title" back-link="Back"></f7-navbar>

        <f7-swiper v-if="data.image" pagination next-button prev-button>
            <f7-swiper-slide v-for="(img,index) in JSON.parse(data.image)" :key="index">
                <img :src="img" width="100%">
            </f7-swiper-slide>
        </f7-swiper>
        <f7-list>
            <f7-link href="/game/view/" style="color: #333333;margin-left: 14%;">
                <f7-icon f7="book" size="44px" style="position: relative;margin-left: 20px"></f7-icon>
                <span style="position: absolute;top: 60px;right: -10px;">赛事详情</span>
            </f7-link>
            <f7-link href="/game/enroll/player/" style="color: #333333;margin-left: 20%;">
                <f7-icon f7="person" size="44px" style="position: relative;margin-left: 60px"></f7-icon>
                <span style="position: absolute;top: 60px;right: -10px;">参赛选手</span>
            </f7-link>
            <f7-icon f7="persons" size="44px" style="margin-left: 13%;visibility: hidden;"></f7-icon>
                <f7-link href="/game/enroll/against/" style="padding-left: 10px;color: #333333;visibility: hidden">对阵查询</f7-link>
            <f7-icon f7="list" size="44px" style="margin-left: 13%;visibility: hidden"></f7-icon>
                <f7-link href="#" style="padding-left: 10px;color: #333333;visibility: hidden">成绩查询</f7-link>
        </f7-list>
            <f7-row tag="p" style="padding-top: inherit;margin: 0 20px;" >
                <f7-button class="col" fill href="/game/enroll/select-player/"
                           style="border-radius: 8px;height: 36px;margin: auto;"
                           v-if="data.status==1"
                >我要报名</f7-button>
            </f7-row>
    </f7-page>
</template>

<script>

    export default {
      data(){
        return{

        }
      },
      beforeMount(){
        this.$store.commit('gameDetail/setId',this.$f7route.params.id);
        this.$store.dispatch('gameDetail/getAllMsg');
      },
      computed:{
        data:function () {
          return this.$store.state.gameDetail.all
        }
      },
    }
</script>
