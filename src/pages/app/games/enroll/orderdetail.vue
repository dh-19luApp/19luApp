<template>
    <f7-page style="background-color: #f5f5f5">
        <f7-navbar title="订单详情" back-link="Back"></f7-navbar>

      <f7-block style="margin-top: 15px;margin-bottom: 15px;">
        <div style="font-size: 16px;">您的订单在3月28日支付成功</div>
        <div class="item-text" style="font-size: 14px;color: #757575">2018-03-28 13:30:43</div>
      </f7-block>
      <f7-list media-list style="background-color: white;border-bottom: 1px solid #e5e5e5;border-top: 1px solid #e5e5e5;margin-top: 15px;margin-bottom: 15px;">
        <f7-list-item class="order-no-inner">
          <div slot="root-start" style="margin-left: 18px;padding-top: 10px;font-size: 20px;font-weight: bolder;">{{player.username}}</div>
          <div slot="root-start" style="margin-left: 10px;">{{name}}</div>
            <div slot="content" style="margin-bottom: 80px;">

          <f7-button class="col" href="/game/:id"  style="color: #333333" >详情&nbsp;&nbsp;></f7-button>
        </div>
          <div slot="content-start" class="head" v-for="list in listData" :key="list.id" style="margin-top:-10px;">
            <div style="color: gray;" v-for="(priceItemValve,priceItemKey) in list.statistical">
              {{priceItemKey}}：￥{{priceItemValve}}
            </div>
          </div>
          <!--<div slot="content" class="tail" style="margin-top: 12px">
            <div style="color: gray;">X5</div>
            <div style="color: gray;">X5</div>
          </div>-->
        </f7-list-item>
        <f7-list-item>
          <div slot="content" style="padding: 0 16px 6px 0">

            <f7-button class="col" small raised style="background-color: #F5F5F5;color: #333333;border-radius: 8px;" >退款</f7-button>
          </div>
        </f7-list-item>
        <f7-list-item class="order-no-inner">
          <div slot="content-start" class="head">
            <div>微信付款</div>
          </div>
          <div slot="content" class="tail">
            <div style="color: #ff3b30">￥{{totalPrice}}</div>
          </div>
        </f7-list-item>

      </f7-list>
      <f7-block style="margin-top: 25px;background-color: white;padding: 20px 15px;border-bottom: 1px solid #e5e5e5;border-top:1px solid #e5e5e5">
        <div><span style="color: #757575;">订单状态:</span><span style="margin-left: 10px;">已支付</span></div>
        <div><span style="color: #757575">订单编号:</span><span style="margin-left: 10px;">24934829</span></div>
        <div><span style="color: #757575">下单时间:</span><span style="margin-left: 10px;">2018-03-28 13:30:43</span></div>
      </f7-block>
    </f7-page>
</template>

<script>
    import F7Block from "../../../../../node_modules/framework7-vue/src/components/block.vue";
    import F7List from "../../../../../node_modules/framework7-vue/src/components/list.vue";
    import F7ListItem from "../../../../../node_modules/framework7-vue/src/components/list-item.vue";
    import {mapState} from 'vuex'
    export default {
        components: {
              F7ListItem,
              F7List,
              F7Block},
            data() {
                return {
                    listData: [],//列表属性
                }
            },
       //computed:{
         //   ...mapState(('gamedetail'),{
           //     date:state=>state.all.create_at,
             //   num:state=>state.all.order_id,
            //})
        //},
        beforeMount() {
            this.$store.commit('player/setId', this.$f7route.params.id);
            this.$store.dispatch('player/getAllMsg');
            this.axios.get('http://home.19road.com/19lu/api/web/v1/orders/search?feilds=statistical,refund').then(function (response) {
                    this.listData=response.data.data.items;
                }.bind(this)
            ).catch(function (error) {
                console.log(error);
            });

        },
        computed: {
            ...mapState(('player'),{
                player:state=>state.all//选手
            }),
            ...mapState(('gameDetail'),{
                name:state=>state.all.title
            }),
            totalPrice() {
                return this.$store.getters['gameDetail/getTotalPrice'];
            },
        },
        mounted(){
            console.log(this.listPlayer)
        },
    }

</script>
