<template>
    <f7-page style="background-color: #f5f5f5">
        <f7-navbar title="选择报名方式" back-link="Back"></f7-navbar>
        <!--<div class="card ft-detail-header-img">-->
            <!--<div valign="bottom" class="card-header color-white no-border ng-binding"></div>-->
                <!--<div class="card-content">-->
                    <!--<div class="card-content-inner">-->
                        <!--<p class="color-gray ng-binding">个人报名</p>-->
                            <!--<p class="color-gray ng-binding">-->
                                <!--<f7-link href="/game/enroll/team/">团体报名</f7-link>-->
                            <!--</p>-->

                    <!--</div>-->
                <!--</div>-->
        <!--</div>-->
      <f7-list style="background-color: white;border-bottom: 1px solid #e5e5e5;border-top: 1px solid #e5e5e5;margin-top: 10px;">
        <f7-list-item
          title="个人报名"
          link="/game/enroll/personal/"
        >
        </f7-list-item>
        <f7-list-item
          title="团体报名"
          link="/game/enroll/team/"
        >
        </f7-list-item>
      </f7-list>
    </f7-page>
</template>

<script>
    import F7ListItem from "../../../../../node_modules/framework7-vue/src/components/list-item.vue";

    export default {components: {F7ListItem}}
</script>
