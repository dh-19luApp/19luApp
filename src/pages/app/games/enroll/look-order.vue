<template>
    <f7-page style="background-color: #f5f5f5">
        <f7-navbar title="查看订单" back-link="Back">
        </f7-navbar>
        <f7-list media-list style="background-color: white;border-bottom: 1px solid #e5e5e5;border-top:1px solid #e5e5e5;margin-top: 10px;">
            <f7-list-item class="order-no-inner"
                          v-if="listPlayer"
                          v-for="lists in listPlayer"
                          :key="lists.id"
                          :link="'/game/enroll/orderdetail/'+lists.id"
                          style="border-bottom: 1px solid #e5e5e5;color: #333333;list-style-type: none;">
               <!-- <div slot="root-start" style="margin-left: 20px;padding-top: 10px;font-size: 20px;font-weight: bolder;">{{lists.username}}</div>-->
                <!--<div slot="content-start" class="head" v-for="list in listData" :key="list.id" style="margin-top:-10px;">
                    <div style="color: #757575" v-for="(priceItemValve,priceItemKey) in list.statistical">{{priceItemKey}}：￥{{priceItemValve}}</div>
                </div>-->
                <!--<div slot="content" class="tail" style="margin-top: 12px">
                    <div style="color: #757575">X5</div>
                    <div style="color: #757575">X5</div>
                </div>-->
                <div slot="content-start" class="head">
                    <div style="font-size: 20px;font-weight: bolder;">{{lists.username}}</div>
                    <div style="color: gray;">报名费： ￥{{getApplyPrice(lists.id)}}</div>
                    <div style="color: gray" v-if="lists.server" v-for="serverItem in getServerList(lists.server)">
                        <div style="display: block" v-if="serverItem.purchaseNum>0">
                            {{serverItem.detail.goods_name+':￥'+parseInt(serverItem.detail.price)*parseInt(serverItem.purchaseNum)}}
                        </div>
                    </div>
                </div>
            </f7-list-item>
        </f7-list>
        <!--<f7-biock>共计：<span style="color: #ff3b30">￥3000</span></f7-biock>-->
        <div class="from-group-title">
            <div class="total-price">
                总计:<span class="price">￥{{totalPrice}}</span>
            </div>
        </div>
    </f7-page>
</template>

<script>
    import F7NavRight from "../../../../../node_modules/framework7-vue/src/components/nav-right.vue";
    import F7List from "../../../../../node_modules/framework7-vue/src/components/list.vue";
    import F7ListItem from "../../../../../node_modules/framework7-vue/src/components/list-item.vue";
    import {mapState} from 'vuex'

    export default {
        components: {
            F7ListItem,
            F7List,
            F7NavRight
        },
        data(){
            return{
                //listData:[]
            }
        },
        methods:{
            getServerPrice(id){
                return this.$store.getters['gameDetail/getServerPrice'](id)
            },
            getApplyPrice(id){
                return this.$store.getters['gameDetail/getApplyPrice'](id).price
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
            ...mapState(('gameDetail'),{
                listPlayer: state=>[...state.selectedPlayer],
                server:state=>state.server//服务
            }),
            totalPrice() {
                return this.$store.getters['gameDetail/getTotalPrice'];
            },
        },
        mounted(){
            console.log(this.listPlayer)
        },
        beforeMount() {
            //this.axios.get('http://19lu-api.hayzon.com/v1/orders/search?feilds=statistical,refund').then(function (response) {
                    //this.listData=response.data.data.items;
                //}.bind(this)
            //).catch(function (error) {
               // console.log(error);
            //});

        },
    }
</script>
