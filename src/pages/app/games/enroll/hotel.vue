
<template>
    <f7-page style="background-color: #f5f5f5">
        <f7-navbar title="汉庭酒店" back-link="Back"></f7-navbar>
        <!--<div class="page-content">-->
            <!--<div class="content-block-title ng-binding"></div>-->
            <!--<div class="card ft-detail-header-img">-->
                <!--<div style="background-image:url(http://resizing.flixster.com/2pEmb9X8xxhFUTfWpL_GuZXajPE=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/19/07/11190716_ori.jpg)" valign="bottom" class="card-header color-white no-border ng-binding">哈宁酒店（大悦城）</div>-->
                <!--<div class="card-content">-->
                    <!--<div class="card-content-inner">-->
                        <!--<p class="color-gray ng-binding">2015年装修</p>-->
                        <!--<p class="ng-binding">-->
                        <!--</p>-->
                        <!--<f7-card>-->
                            <!--<f7-card-header>朝阳区红军南麓号好1啊1去</f7-card-header>-->
                        <!--</f7-card>-->
                        <!--<f7-card>-->
                            <!--<f7-card-header>3月30日 周五-&#45;&#45;3月31日周六-->
                                <!--<f7-card-footer>共一碗</f7-card-footer>-->
                            <!--</f7-card-header>-->
                        <!--</f7-card>-->
                        <!--<f7-card>-->
                            <!--<f7-card-header>标准房3天</f7-card-header>-->

                            <!--<f7-card-footer>小床|部分有窗|早餐   <span style="color:red;"><f7-card-content>房间数量不够</f7-card-content></span></f7-card-footer>-->
                            <!--<span style="color:red;">￥420   </span><f7-card-content>+ 3 -</f7-card-content>-->
                            <!--<f7-card-footer>180减30</f7-card-footer>-->
                        <!--</f7-card>-->
                        <!--<f7-card>-->
                            <!--<f7-card-header>标准房3天</f7-card-header>-->

                            <!--<f7-card-footer>小床|部分有窗|早餐   <span style="color:red;"><f7-card-content>房间数量不够</f7-card-content></span></f7-card-footer>-->
                            <!--<span style="color:red;">￥420   </span><f7-card-content>+ 3 -</f7-card-content>-->
                            <!--<f7-card-footer>180减30</f7-card-footer>-->
                        <!--</f7-card>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
      <f7-swiper pagination next-button prev-button>
        <f7-swiper-slide v-for="n in 3" :key="n">
          <img src="../../../../../static/182343705850.jpg" width="100%">
        </f7-swiper-slide>
      </f7-swiper>
      <f7-list media-list>
        <f7-list-item
          title="朝阳区红军南麓号好1啊1去"
          text="2015年装修"
        >
        </f7-list-item>
        <f7-list-item
          link
          title="3月30日周五--3月31日周六"
        >
          <div slot="after">
            <span style="color: #2196f3">共一碗</span>
          </div>
        </f7-list-item>
        <f7-list-item
          title="早餐"
          subtitle="菜|米饭|饮料"
          v-for="n in 3"
          :key="n"
        >
          <div slot="inner">
            <span class="price">￥150</span>
            <span class="reduce-msg">满190减40</span>
          </div>
          <div slot="after" class="input-number-slot input-number-slot-h">
            <span class="residue">剩余5间</span>
            <el-input-number size="mini"></el-input-number>
          </div>
        </f7-list-item>
      </f7-list>
        <f7-row tag="p">

            <f7-button class="col" raised fill>确定</f7-button>
        </f7-row>
    </f7-page>
</template>

<script>
    export default {}
</script>
