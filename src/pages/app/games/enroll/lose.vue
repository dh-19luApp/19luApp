<template>
    <f7-page>
        <f7-navbar title="订单详情" back-link="Back"></f7-navbar>
        <f7-card>
            <f7-card-header>张三  <f7-card-content>报名费：200元</f7-card-content></f7-card-header>

            <f7-card-footer>大床房￥150 <f7-card-content>*5</f7-card-content></f7-card-footer>
            <f7-card-footer>餐饮费￥20 <f7-card-content>*5</f7-card-content></f7-card-footer>
            <f7-row tag="p">
                <f7-button class="col" raised fill>取消订单</f7-button>
                <f7-button class="col" raised fill>线下支付</f7-button>
                <f7-button class="col" raised fill>好友支付</f7-button>
                <f7-button class="col" raised fill>微信付款</f7-button>
            </f7-row>
        </f7-card>
        <f7-card>
            <f7-card-header>需付款  <f7-card-content>￥300</f7-card-content></f7-card-header>
        </f7-card>
        <f7-card>
            <f7-card-footer>订单状态：  <f7-card-content>已支付</f7-card-content></f7-card-footer>

            <f7-card-footer>订单编号 <f7-card-content>2493489</f7-card-content></f7-card-footer>
            <f7-card-footer>下单时间： <f7-card-content>2018-03-28 13:30:43</f7-card-content></f7-card-footer>

        </f7-card>
        <f7-block style="margin-top: 15px;margin-bottom: 15px;">
            <div style="font-size: 16px;">您的订单在3月28日未支付成功</div>
            <div class="item-text" style="font-size: 14px;color: #757575">2018-03-28 13:30:43</div>
        </f7-block>
        <f7-list media-list style="background-color: white;border-bottom: 1px solid #e5e5e5;margin-top: 15px;margin-bottom: 15px;">
            <f7-list-item class="order-no-inner" v-for="n in 1" :key="n">
                <div slot="content-start" class="head">
                    <div style="font-size: 20px;font-weight: bolder;">张三</div>
                    <div>大床房￥150</div>
                    <div>餐饮费￥20</div>
                </div>
                <div slot="content" class="tail">
                    <div>报名费：200元</div>
                    <div>X5</div>
                    <div>X5</div>
                </div>
            </f7-list-item>
            <f7-list-item>
                <f7-row tag="p">
                    <f7-button class="col" raised style="border-radius: 8px;" >取消订单</f7-button>
                    <f7-button class="col" raised style="border-radius: 8px;">线下支付</f7-button>
                    <f7-button class="col" raised style="border-radius: 8px;">好友支付</f7-button>
                    <f7-button class="col" raised color="red" style="border-radius: 8px;">微信付款</f7-button>
                </f7-row>
            </f7-list-item>
            <f7-list-item class="order-no-inner">
                <div slot="content-start" class="head">
                    <div>未付款</div>
                </div>
                <div slot="content" class="tail">
                    <div style="color: #ff3b30">￥200</div>
                </div>
            </f7-list-item>

        </f7-list>
        <f7-block style="margin-top: 15px;">
            <div><span style="color: #757575;">订单状态:</span><span style="margin-left: 10px;">未支付</span></div>
            <div><span style="color: #757575">订单编号:</span><span style="margin-left: 10px;">2493489</span></div>
            <div><span style="color: #757575">下单时间:</span><span style="margin-left: 10px;">2018-03-28 13:30:43</span></div>
        </f7-block>
    </f7-page>
</template>

<script>
    export default {}
</script>
