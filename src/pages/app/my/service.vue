<template>
    <f7-page style="background-color: #F5F5F5">
        <f7-navbar title="选择服务" back-link="Back"></f7-navbar>

            <div class="from-group-title" style="margin-bottom: -10px;">
                <div class="colony-block-title content-block-title ng-binding">
                    住宿
                </div>
            </div>
            <f7-list class="margin-top-6-g"
                     style="background-color: white;border-bottom: 1px solid #e5e5e5;border-top: 1px solid #e5e5e5;margin-bottom: -15px;">
                <f7-list-item
                        title="大床房"
                        after="￥500/3天"
                ></f7-list-item>
            </f7-list>
        <div class="from-group-title" style="margin-bottom: -10px;">
            <div class="colony-block-title content-block-title ng-binding">
                餐饮
            </div>
        </div>
        <f7-list class="margin-top-6-g"
                 style="background-color: white;border-bottom: 1px solid #e5e5e5;border-top: 1px solid #e5e5e5;margin-bottom: -15px;">
            <f7-list-item
                    title="标准餐"
                    after="￥200/3天"
            ></f7-list-item>
        </f7-list>
        <!--<div class="from-group-title" style="margin-bottom: -10px;">-->
        <!--<div class="colony-block-title content-block-title ng-binding">餐饮-->
        <!--</div>-->
        <!--</div>-->
        <!--<f7-list class="margin-top-6-g"-->
        <!--style="background-color: white;border-bottom: 1px solid #e5e5e5;border-top: 1px solid #e5e5e5;">-->
        <!--<f7-list-item-->
        <!--link="/game/enroll/foods/"-->
        <!--title="标准餐"-->
        <!--after="￥200/3天"-->
        <!--&gt;</f7-list-item>-->
        <!--</f7-list>-->
        <div class="from-group-title">
            <div class="total-price">
                总计:<span class="price">￥300</span>
            </div>
        </div>
        <f7-row tag="p" style="margin: 20px">
            <f7-button class="col" raised fill href="/game/enroll/form/" style="border-radius: 8px;">取消报名</f7-button>
            <f7-button class="col" raised fill href="/game/enroll/form/" style="border-radius: 8px;">确定</f7-button>
        </f7-row>

    </f7-page>
</template>
<script>


    export default {
        components: {
        },
    }
</script>
