<template>
  <f7-page style="background-color: #f5f5f5">

    <f7-navbar title="订单详情" back-link="Back"></f7-navbar>
    <f7-block style="margin-top: 15px;margin-bottom:15px;">
      <div style="font-size: 16px">你的订单在3月29日支付成功</div>
      <div class="item-text" style="font-size: 14px;color: #757575">2018-03-28 13:30:43</div>
    </f7-block>

    <f7-list media-list
             style="background-color:white;border-bottom:1px solid #e5e5e5;border-top:1px solid #e5e5e5;margin-top:15px;margin-bottom:15px; ">
      <f7-list-item class="order-no-inner">
        <f7-link slot="root-start" href="/game/:id"
                 style="margin-left:20px;padding-top:10px;font-size:20px;font-weight: bolder;color: #000;">赛事名称：赛事名称 >
        </f7-link>
        <div slot="root-start" style="margin-left:20px;margin-top: 10px;">姓名：张三</div>
        <div slot="content-start" class="head" style="margin-top:-10px;">
          <div style="color:gray;">赛事组别：儿童组</div>
          <div style="color:gray;">参赛类型：个人</div>
          <div style="color:gray;">审核状态：尚未审核</div>
          <div style="color:gray;">报名费：￥300</div>
          <div style="color:gray;">住宿费：￥1000</div>
          <div style="color:gray;">餐饮费：￥800</div>
        </div>
      </f7-list-item>

      <f7-list-item>
        <div slot="content" style="padding:0 16px 6px 0">
          <f7-button class="col" small raised style="background-color: #f5f5f5;color:#333333;border-radius: 8px;">退款
          </f7-button>
        </div>
      </f7-list-item>
      <f7-list-item class="order-no-inner">
        <div slot="content-start" class="head">
          <div>微信付款</div>
        </div>
        <div slot="content" class="tail">
          <div style="color: #ff3b30">￥200</div>
        </div>
      </f7-list-item>
    </f7-list>

    <f7-block
      style="margin-top: 25px;background-color: white;padding: 20px 15px;border-bottom: 1px solid #e5e5e5;border-top:1px solid #e5e5e5">
      <div><span style="color: #757575;">订单状态:</span><span style="margin-left: 10px;">已支付</span></div>
      <div><span style="color: #757575">订单编号:</span><span style="margin-left: 10px;">24934829</span></div>
      <div><span style="color: #757575">下单时间:</span><span style="margin-left: 10px;">2018-03-28 13:30:43</span></div>
    </f7-block>

  </f7-page>
</template>

<script>

  export default {
    components: {},
    mounted(){
      this.$store.dispatch('order/getAllMsg',{id:this.$f7route.params.id});
    }
  }
</script>
