<template>
    <f7-page style="background-color: #f5f5f5">
        <f7-navbar title="我的订单" back-link="Back"></f7-navbar>

        <f7-toolbar tabbar>
            <f7-link tab-link="#all_order">全部订单</f7-link>
            <f7-link tab-link="#not_pay">未支付</f7-link>
            <f7-link tab-link="#yes_pay">已支付</f7-link>
        </f7-toolbar>

        <div class="tabs">
          <!--全部-->
            <div class="page-content tab tab-active" id="all_order" style="padding-top: 0px">
                <f7-list media-list class="margin-top-6">
                    <f7-list-item style="background-color: white;border-top:1px solid #e5e5e5;border-bottom: 5px solid #e5e5e5;" v-for="list in listData"
                                  :key="list.id">
                        <div class="item-title-row">
                            <div class="item-title" style="float: left;color:#333333;">赛事名称：赛事名称</div>
                            <f7-button color="#2196f3">{{getStatus(list.status)}}</f7-button>
                        </div>
                        <a :href="'/my/order-details/'+list.id" class="item-link">

                            <div class="item-text">姓名：张三</div>

                            <div class="item-text">赛事组别：5级组(12年12月12日前)(￥200)</div>
                            <div class="item-text" v-for="(priceItemValve,priceItemKey) in list.statistical">{{priceItemKey}}：￥{{priceItemValve}}</div>
                            <div style="border-bottom: 1px solid #e5e5e5;margin-top: 20px"></div>
                            <div class="item-text" style="float: right"><p style="font-weight:bold;">合计：<span style="color: red;">￥{{list.price}}</span></p></div>
                        </a>
                        <f7-row style="position: relative;margin-bottom: 20px;">
                            <f7-col>
                                <f7-button small style="border-radius: 8px;border: 1px solid gray;color:black;font-size: 12px;position: absolute;right:51%;">好友支付</f7-button>
                            </f7-col>
                            <f7-col width="25" hidden>
                                <f7-button style="border-radius: 8px;border: 1px solid gray;color:black">线下付款</f7-button>
                            </f7-col>
                            <f7-col>
                                <f7-button small style="border-radius: 8px;border: 1px solid gray;color:black;font-size: 12px;position: absolute;right:26%;">好友代付</f7-button>
                            </f7-col>
                            <f7-col>
                                <f7-button small style="border-radius: 8px;border: 1px solid red;color:red;font-size: 12px;position: absolute;">微信支付</f7-button>
                            </f7-col>
                        </f7-row>
                    </f7-list-item>
                </f7-list>
            </div>
            <!-- 未支付 -->
            <div class="page-content tab" id="not_pay" style="padding-top: 0px">
              <f7-list media-list class="margin-top-6">
                <f7-list-item style="background-color: white;border-top:1px solid #e5e5e5;border-bottom: 5px solid #e5e5e5;" v-for="list in listData"
                              :key="list.id"
                              v-if="list.status==0"
                >
                  <div class="item-title-row">
                    <div class="item-title" style="float: left;color:#333333;">赛事名称：赛事名称</div>
                    <f7-button color="#2196f3">{{getStatus(list.status)}}</f7-button>
                  </div>
                  <a :href="'/my/order-details/'+list.id" class="item-link">

                    <div class="item-text">姓名：张三</div>

                    <div class="item-text">赛事组别：5级组(12年12月12日前)(￥200)</div>
                    <div class="item-text" v-for="(priceItemValve,priceItemKey) in list.statistical">{{priceItemKey}}：￥{{priceItemValve}}</div>
                    <div style="border-bottom: 1px solid #e5e5e5;margin-top: 20px"></div>
                    <div class="item-text" style="float: right"><p style="font-weight:bold;">合计：<span style="color: red;">￥{{list.price}}</span></p></div>
                  </a>
                  <f7-row style="position: relative;margin-bottom: 20px;">
                    <f7-col>
                      <f7-button small style="border-radius: 8px;border: 1px solid gray;color:black;font-size: 12px;position: absolute;right:51%;">好友支付</f7-button>
                    </f7-col>
                    <f7-col width="25" hidden>
                      <f7-button style="border-radius: 8px;border: 1px solid gray;color:black">线下付款</f7-button>
                    </f7-col>
                    <f7-col>
                      <f7-button small style="border-radius: 8px;border: 1px solid gray;color:black;font-size: 12px;position: absolute;right:26%;">好友代付</f7-button>
                    </f7-col>
                    <f7-col>
                      <f7-button small style="border-radius: 8px;border: 1px solid red;color:red;font-size: 12px;position: absolute;">微信支付</f7-button>
                    </f7-col>
                  </f7-row>
                </f7-list-item>
              </f7-list>
            </div>
              <!--已支付-->
            <div class="page-content tab" id="yes_pay" style="padding-top: 0px">
              <f7-list media-list class="margin-top-6">
                <f7-list-item style="background-color: white;border-top:1px solid #e5e5e5;border-bottom: 5px solid #e5e5e5;" v-for="list in listData"
                              v-if="list.status==1"
                              :key="list.id">
                  <div class="item-title-row">
                    <div class="item-title" style="float: left;color:#333333;">赛事名称：赛事名称</div>
                    <f7-button color="#2196f3">{{getStatus(list.status)}}</f7-button>
                  </div>
                  <a :href="'/my/order-details/'+list.id" class="item-link">

                    <div class="item-text">姓名：张三</div>

                    <div class="item-text">赛事组别：5级组(12年12月12日前)(￥200)</div>
                    <div class="item-text" v-for="(priceItemValve,priceItemKey) in list.statistical">{{priceItemKey}}：￥{{priceItemValve}}</div>
                    <div style="border-bottom: 1px solid #e5e5e5;margin-top: 20px"></div>
                    <div class="item-text" style="float: right"><p style="font-weight:bold;">合计：<span style="color: red;">￥{{list.price}}</span></p></div>
                  </a>
                  <f7-row style="position: relative;margin-bottom: 20px;">
                    <f7-col>
                      <f7-button small style="border-radius: 8px;border: 1px solid gray;color:black;font-size: 12px;position: absolute;right:51%;">好友支付</f7-button>
                    </f7-col>
                    <f7-col width="25" hidden>
                      <f7-button style="border-radius: 8px;border: 1px solid gray;color:black">线下付款</f7-button>
                    </f7-col>
                    <f7-col>
                      <f7-button small style="border-radius: 8px;border: 1px solid gray;color:black;font-size: 12px;position: absolute;right:26%;">好友代付</f7-button>
                    </f7-col>
                    <f7-col>
                      <f7-button small style="border-radius: 8px;border: 1px solid red;color:red;font-size: 12px;position: absolute;">微信支付</f7-button>
                    </f7-col>
                  </f7-row>
                </f7-list-item>
              </f7-list>
            </div>
        </div>


    </f7-page>
</template>

<script>
    import {mapState} from 'vuex'
        export default {
            data(){
                return{
                    listData:[],
                }
            },
            methods:{
                getStatus(status){
                    switch (status){
                        case 0:return'未支付';
                        case 1:return'已支付';
                    }
                }
            },
            beforeMount() {
                this.axios.get('http://19lu-api.hayzon.com/v1/orders/search?feilds=statistical,refund').then(function (response) {
                        this.listData=response.data.data.items;
                    }.bind(this)
                ).catch(function (error) {
                    console.log(error);
                });
            },
            computed:{
                ...mapState(('gameDetail'), {
                    listPlayer: state=>[...state.selectedPlayer]
                })
            },

    }
</script>
