<template>
  <f7-page style="background-color: #f5f5f5">
    <f7-navbar title="选择住宿" back-link="Back"></f7-navbar>

    <!--<f7-card>-->
    <!--<f7-link href="/game/enroll/hotel/">-->
    <!--<f7-card-header>大床房3天</f7-card-header>-->

    <!--<f7-card-footer>大床|部分有窗|有wife   <span style="color:red;"><f7-card-content>剩余5间</f7-card-content></span></f7-card-footer>-->
    <!--<span style="color:red;">￥450   </span><f7-card-content>+ 0 -</f7-card-content>-->
    <!--<f7-card-footer>180减30</f7-card-footer>-->
    <!--</f7-link>-->
    <!--</f7-card>-->

    <!--<f7-card>-->
    <!--<f7-link href="/game/enroll/hotel/">-->
    <!--<f7-card-header>标准房3天</f7-card-header>-->

    <!--<f7-card-footer>小床|部分有窗|早餐   <span style="color:red;"><f7-card-content>房间数量不够</f7-card-content></span></f7-card-footer>-->
    <!--<span style="color:red;">￥420   </span><f7-card-content>+ 3 -</f7-card-content>-->
    <!--<f7-card-footer>180减30</f7-card-footer>-->
    <!--</f7-link>-->
    <!--</f7-card>-->

    <!--<f7-card>-->
    <!--<f7-link href="/game/enroll/hotel/">-->
    <!--<f7-card-header>大床房3天</f7-card-header>-->

    <!--<f7-card-footer>大床|部分有窗|有wife   <span style="color:red;"><f7-card-content>剩余5间</f7-card-content></span></f7-card-footer>-->
    <!--<span style="color:red;">￥450   </span><f7-card-content>+ 0 -</f7-card-content>-->
    <!--<f7-card-footer>180减30</f7-card-footer>-->
    <!--</f7-link>-->
    <!--</f7-card>-->

    <!--<f7-card>-->
    <!--<f7-link href="/game/enroll/hotel/">-->
    <!--<f7-card-header>大床房3天</f7-card-header>-->

    <!--<f7-card-footer>大床|部分有窗|有wife   <span style="color:red;"><f7-card-content>剩余5间</f7-card-content></span></f7-card-footer>-->
    <!--<span style="color:red;">￥450   </span><f7-card-content>+ 0 -</f7-card-content>-->
    <!--<f7-card-footer>180减30</f7-card-footer>-->
    <!--</f7-link>-->
    <!--</f7-card>-->
    <div style="margin-top:10px;margin-left: 20px;">
      一档酒店标间(两床)
    </div>

    <f7-list media-list style="background-color: white;border-bottom: 1px solid #e5e5e5;border-top: 1px solid #e5e5e5;margin-top: 10px;position: relative;">
      <f7-list-item>
        <!--<f7-input type="text" placeholder="Select date" readonly id="calendar-disabled"></f7-input>
        <div style="margin-top: -20px">
          3月30日 <span style="color: gray;">周五</span>-3月31日 <span style="color: gray;">周六</span>
        </div>-->
        <div style="position: absolute;">
          <input type="date">
        </div>

        <div style="position: absolute;top: 20px;right: 60%">-</div>
        <div style="position: absolute;top: 15px;right: 0%">
          <input type="date">
        </div>
        <!--<div slot="after" style="position: absolute;top:35px;right:5%;">
          <a href=""> 共一晚 ></a>
        </div>-->

       <!-- <div class="content-block-title">Range Picker</div>
        <div class="list-block">
          <ul>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-input">
                    <input type="text" placeholder="Select date range" readonly id="calendar-range">
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>-->
      </f7-list-item>
      <f7-list-item
        v-for="(serverListItem,index) in serverList"
        :key="index"
        :title="serverListItem.goods_name"
        :subtitle="serverListItem.goods_desc"
      >
        <div slot="inner">
          <span class="price">￥{{serverListItem.price}}</span>
          <span class="reduce-msg"></span>
        </div>
        <div slot="after" class="input-number-slot">
            <span class="residue">剩余{{serverListItem.goods_number}}间</span>
          <!--<el-input-number v-model="num7" size="mini" @change="handler" :min="1" :max="10"></el-input-number>-->
          <inline-x-number
            v-model.number="serverListNumber[index].purchaseNum"
            :min="0"
            :max="serverListItem.goods_number"
            button-style="round"
          ></inline-x-number>
        </div>
      </f7-list-item>
    </f7-list>
    <f7-row tag="p" style="margin:20px;">
      <f7-button @click="commitPurchase" class="col" raised fill style="border-radius: 8px;">结算</f7-button>
    </f7-row>
  </f7-page>
</template>

<script>
  import F7List from "../../../../../node_modules/framework7-vue/src/components/list.vue";
  export default {
      components: {
          F7List
      },
      data() {
          return {
              num7: 0,
              serverList: []
          }
      },
      computed: {
          serverListNumber() {
              return this.serverList.map((value) => {
                  return {detail: value, purchaseNum: 0}
              })
          }
      },
      methods: {
          commitPurchase() {
              //提交已选服务 采用了 map结构
              let commitData = new Map();
              this.serverListNumber.forEach((value) => {
                  commitData.set(value.detail.goods_id, value)
              });
              this.$store.commit('gameDetail/addServer', {id: this.$store.state.player.id, data: {server: commitData}});
              this.$f7router.back();
          }

      },
      updated() {

      },
      beforeMount() {
          this.axios.get('http://home.19road.com/19lu/api/web/v1/services/search', {
              cat_id: this.$f7route.params.id
          }).then((response) => {
              this.serverList = response.data.data.items
          })
      },


  }
</script>
