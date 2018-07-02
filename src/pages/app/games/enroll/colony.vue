<template>
    <f7-page>
        <f7-navbar title="团体报名" back-link="Back"></f7-navbar>
        <!--<f7-card>-->
            <!--<f7-link href="/game/enroll/team/">-->
                <!--<f7-card-header>选择团体<f7-card-footer>无</f7-card-footer></f7-card-header>-->
            <!--</f7-link>-->
            <!--<f7-card-footer>提示：如果没有报名的团队，请到个人中心-我的团队中创建</f7-card-footer>-->

        <!--</f7-card>-->
        <!--<f7-block>组别一</f7-block>-->
        <!--<f7-link href="/game/enroll/player/">选择选手</f7-link>-->
        <!--<f7-card>-->
            <!--<f7-card-header>张三-->
                <!--<f7-row tag="p">-->

                    <!--<f7-button class="col" >选择附加服务</f7-button>-->
                <!--</f7-row>-->
            <!--</f7-card-header>-->
            <!--<f7-card-content>报名费：200元</f7-card-content>-->

        <!--</f7-card>-->
      <f7-list>
        <f7-list-item link="/game/enroll/team/" title="选择团体"></f7-list-item>
      </f7-list>
      <p class="colony-sub-title">提示：如果没有报名的团队，请到 <a> 个人中心-我的团队 </a> 中创建</p>
      <div class="from-group-title">
        <div class="colony-block-title content-block-title ng-binding">组别一
          <f7-button href="/game/enroll/player/"  class="btn-100">选择选手</f7-button>
        </div>
      </div>
      <f7-list media-list class="margin-top-6">
        <f7-list-item
          link="/game/enroll/form/1"
          title="夏明"
          text="报名费: ￥200.00"
          after="选择附加服务"
          media="http://lorempixel.com/160/160/people/1"
        >
        </f7-list-item>
        <f7-list-item
          link="/game/enroll/form/2"
          title="夏明"
          text="报名费: ￥200.00"
          after="选择附加服务"
          media="http://lorempixel.com/160/160/people/1"
        >
        </f7-list-item>
      </f7-list>

    </f7-page>
</template>

<script>
    export default {}
</script>
