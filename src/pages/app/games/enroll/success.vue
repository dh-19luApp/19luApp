<template>
    <f7-page>
        <f7-navbar title="支付成功" back-link="Back">
        </f7-navbar>
        <div style="border-bottom: 1px solid #e5e5e5;">
            <div style="margin: 20px 20px;">实付金额:
                <span style="font-size: 24px;font-weight: bolder;color: red;margin-left:40px;">￥{{totalPrice}}</span>
                <span style="color: red;font-size: 20px;">.00</span>
            </div>
        </div>
        <f7-row tag="p" style="margin-left: auto;">
            <f7-button href="/game/enroll/look-order/:id" class="col" style="color: #333333;position: absolute;left:30px">查看订单
            </f7-button>
            <span style="color:#d5d5d5;font-size: 30px;font-weight: lighter;position: relative;margin:-8px auto">|</span>
            <f7-button class="col" href="/games/" style="color: #333333;position: absolute;right:30px">返回首页</f7-button>
        </f7-row>
    </f7-page>
</template>

<script>
    import F7NavRight from "../../../../../node_modules/framework7-vue/src/components/nav-right.vue";

    export default {
        components: {F7NavRight},
        computed: {
            totalPrice() {
                return this.$store.getters['gameDetail/getTotalPrice'];
            },
        },
    }
</script>
