<template>
  <f7-page style="background-color: #f5f5f5">
    <f7-navbar title="确认支付" back-link="Back">
      <f7-nav-right>
        <f7-link href="/game/enroll/success/">支付结果</f7-link>
      </f7-nav-right>
    </f7-navbar>

    <f7-list media-list style="background-color: white;border-bottom: 1px solid #e5e5e5;border-top:1px solid #e5e5e5;margin-top: 10px;">
      <f7-list-item class="order-no-inner" v-if="listPlayer"
                    v-for="lists in listPlayer" :key="lists.id" style="border-bottom: 1px solid #e5e5e5;width: 100%;">
        <div slot="content-start" class="head">
          <div style="font-size: 20px;font-weight: bolder;">{{lists.username}}</div>
          <div style="color: gray;">报名费： ￥{{getApplyPrice(lists.id)}}</div>
          <!--<div style="color: gray;">其&nbsp;&nbsp;&nbsp;&nbsp;他： ￥{{getServerPrice(lists.id)}}</div>-->
          <div style="color: gray" v-if="lists.server" v-for="serverItem in getServerList(lists.server)">
            <div style="display: block" v-if="serverItem.purchaseNum>0">
              {{serverItem.detail.goods_name+':￥'+parseInt(serverItem.detail.price)*parseInt(serverItem.purchaseNum)}}
            </div>
          </div>
        </div>
      </f7-list-item>
    </f7-list>
    <!--<f7-biock>共计：<span style="color: #ff3b30">￥3000</span></f7-biock>-->
    <div class="from-group-title" style="margin-top: -20px;">
      <div class="total-price">
        总计:<span class="price">￥{{totalPrice}}</span>
      </div>
    </div>
    <f7-row style="position: relative;">
      <f7-col hidden>
        <f7-button small style="border-radius: 8px;border: 1px solid gray;color:black;font-size: 12px;position: absolute;right:51%;">好友支付</f7-button>
      </f7-col>
      <f7-col width="25" hidden>
        <f7-button style="border-radius: 8px;border: 1px solid gray;color:black">线下付款</f7-button>
      </f7-col>
      <f7-col>
        <f7-button small style="border-radius: 8px;border: 1px solid gray;color:black;font-size: 12px;position: absolute;right:27%;">好友代付</f7-button>
      </f7-col>
      <f7-col>
        <f7-button small style="border-radius: 8px;border: 1px solid red;color:red;font-size: 12px;position: absolute;">微信支付</f7-button>
      </f7-col>
    </f7-row>
  </f7-page>
</template>

<script>
  import F7NavRight from "../../../../../node_modules/framework7-vue/src/components/nav-right.vue";
  import F7List from "../../../../../node_modules/framework7-vue/src/components/list.vue";
  import F7ListItem from "../../../../../node_modules/framework7-vue/src/components/list-item.vue";
  import {mapState} from 'vuex'

  export default {
      data(){
          return{
            listPlayer:''
          }
      },
      methods:{
          getServerPrice(id){
              return this.$store.getters['gameDetail/getServerPrice'](id)
              console.log(getSereverPrice(id));
          },
          getApplyPrice(id){
              return this.$store.getters['gameDetail/getApplyPrice'](id).price
              console.log(getApplyPrice(id));
          },
          getServerList(map){
              if(map){
                  return [...map.values()];
              }else{
                  return [];
              }
          }
      },
      computed: {
          ...mapState(('order'),{
              orderData: state=>state.all
          }),
          totalPrice() {
              return this.$store.getters['gameDetail/getTotalPrice'];
          },
      },
      mounted(){
          this.$store.dispatch('order/getAllMsg',{id:this.$f7route.params.id})
      },
      components: {
            F7ListItem,
            F7List,
            F7NavRight
      },

  }


</script>
