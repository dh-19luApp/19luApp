
<template>
    <f7-page style="background-color: #f5f5f5">
        <f7-navbar title="标准套餐" back-link="Back"></f7-navbar>
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
                            <!--<f7-card-header>3月30日 周五-&#45;&#45;3月31日周六-->
                                <!--<f7-card-footer>共一碗</f7-card-footer>-->
                            <!--</f7-card-header>-->
                        <!--</f7-card>-->
                        <!--<f7-card>-->
                            <!--<f7-card-header>早餐</f7-card-header>-->

                            <!--<f7-card-footer>鸡蛋|小米粥|饮料  <span style="color:red;"><f7-card-content>房间数量不够</f7-card-content></span></f7-card-footer>-->
                            <!--<span style="color:red;">￥150   </span><f7-card-content>+ 3 -</f7-card-content>-->
                            <!--<f7-card-footer>180减30</f7-card-footer>-->
                        <!--</f7-card>-->
                        <!--<f7-card>-->
                            <!--<f7-card-header>午餐</f7-card-header>-->

                            <!--<f7-card-footer>菜|米饭|饮料   <span style="color:red;"><f7-card-content>房间数量不够</f7-card-content></span></f7-card-footer>-->
                            <!--<span style="color:red;">￥150   </span><f7-card-content>+ 3 -</f7-card-content>-->
                            <!--<f7-card-footer>180减30</f7-card-footer>-->
                        <!--</f7-card>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->

      <f7-list media-list style="background-color: white;border-bottom: 1px solid #e5e5e5;border-top: 1px solid #e5e5e5;margin-top: 10px;">

        <f7-list-item
          href="/game/enroll/hotel/"
          title="早餐"
          subtitle="菜|米饭|饮料"
          v-for="n in 3"
          :key="n"
        >
          <div slot="inner">
            <span class="price">￥150</span>
            <span class="reduce-msg">满190减40</span>
          </div>
          <span slot="after">
            <span class="residue">剩余5间</span>
            <!--
            todo: 加减器
            -->
          </span>
        </f7-list-item>
      </f7-list>
        <f7-row tag="p" style="margin: 20px;">

            <f7-button class="col" raised fill style="border-radius: 8px;font-size: 18px;">确定</f7-button>
        </f7-row>
    </f7-page>
</template>

<script>
    export default {}
</script>
