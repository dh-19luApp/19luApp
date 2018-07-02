<template>
    <f7-page>
        <f7-navbar title="赛事详情" back-link="Back">
            <!--<f7-link href="/game/enroll/form/">报名</f7-link>-->

        </f7-navbar>
        <div class="card ft-detail-header-img" style="border:1px solid #EEEEEE;border-radius:15px;width: 96%;margin: 15px auto;background-color: #f5f5f5">
            <div class="card-content">
                <div class="card-content-inner">
                    <p class="color-gray ng-binding"><f7-icon f7="time" size="15px" style="margin-bottom:3px;"></f7-icon><span style="padding-left: 8px">比赛时间：{{date}}</span></p>
                    <p class="color-gray ng-binding"><f7-icon f7="home" size="15px" style="margin-bottom:3px;"></f7-icon><span style="padding-left: 8px">比赛地点：{{site}}</span></p>
                </div>
            </div>
        </div>


        <div class="card ft-detail-header-img" style="border:1px solid #EEEEEE;border-radius:15px;width: 96%;margin: auto;">
            <div valign="bottom" class="card-header color-white no-border ng-binding">赛事详情</div>
            <div class="card-content">
                <div class="card-content-inner">
                    <p class="color-gray ng-binding">{{content}}</p>
                    <!--<p class="color-gray ng-binding">二、主办单位:深圳市棋类协会</p>-->
                    <!--<p class="color-gray ng-binding">三、主办单位:深圳市棋类协会</p>-->
                </div>
            </div>
        </div>
        <!--<f7-row tag="p">-->
            <!--<f7-button class="col" raised fill>个人报名</f7-button>-->

        <!--</f7-row>-->
        <!--<f7-link href="/game/enroll/colony/">团体报名</f7-link>-->
    </f7-page>
</template>

<script>

    import {mapState} from 'vuex'
    export default {
      computed:{
        ...mapState(('gameDetail'),{
          date:state =>
            state.all.game_start_time + '至' + state.all.game_end_time,
          site:state =>
            state.all.provinces + state.all.city + state.all.area + state.all.venue,
          content:state =>
            state.all.content
        })
      },
    }
</script>
