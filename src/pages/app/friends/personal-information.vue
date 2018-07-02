<template>
    <f7-page>

        <f7-navbar title="TA的信息" back-link="Back"></f7-navbar>
        <f7-list media-list style="margin-top: 0px;margin-bottom: 20px;">
            <f7-list-item
                    :media="playerData.photo"
            >
                <div slot="content" style="padding: 0 16px 6px 0">

                    <f7-button class="col" small raised style="background-color:#d5d5d5;color: #333333;border-radius: 8px;color: white" >已关注</f7-button>
                </div>
                <div slot="title">
                    <span style="font-weight:bolder;font-size: 20px;">{{playerData.username}}</span>
                    <span style="margin-left: 20px">{{playerData.level}}</span>
                </div>
                <div slot="subtitle" style="font-size: 12px;margin-top: 10px">
                    <!--<span style="border: 1px solid orange;background-color: orange;color: white;border-radius: 3px">{{}}</span>-->
                    <span style="border: 1px solid orange;background-color: orange;color: white;border-radius: 3px">{{playerData.province+' '+playerData.city}}</span>
                    <!--<span style="border: 1px solid orange;background-color: orange;color: white;border-radius: 3px">狮子座</span>-->
                </div>
            </f7-list-item>
        </f7-list>
        <f7-list tabbar  style="margin-bottom: 10px;margin-top: 10px;">
            <f7-row class="p cus-p">
                <f7-link tab-link="#tab1" class="tab-link-active" style="margin-left: 20%;color:black">已报名</f7-link>
                <f7-link tab-link="#tab2" style="margin-right: 20%;color:black">已参赛</f7-link>
            </f7-row>
        </f7-list>
        <div style="border-top: 1px solid #e5e5e5;margin-top:15px;margin-bottom: 10px;"></div>
        <div class="tabs">
            <div class="page-content tab tab-active" id="tab1" style="padding-top: 0px">
                <f7-list media-list style="list-style-type:none;margin-top: 10px;">
                    <div style="margin-bottom: 20px;">
                            <f7-list-item style="border:1px solid #EEEEEE;border-radius:15px;width: 96%;margin: auto;background-color: white">
                                <div class="item-title-row">
                                    <div class="item-title" style="float: left;color: #333333">【北京】 2018‘百千万工程’海淀区围棋段位赛</div>
                                </div>
                                <div class="item-text">
                                    <p class="color-333">
                                        <f7-icon f7="time" size="15px" style="margin-bottom:3px;margin-left:1px"></f7-icon>
                                        <span style="padding-left: 5px;color: #757575">2018年4月29日至20118年4月30日</span>
                                    </p>
                                </div>
                                <div class="item-text">
                                    <p class="color-333">
                                        <f7-icon f7="home" size="15px" style="margin-bottom:3px;margin-left:1px"></f7-icon>
                                        <span style="padding-left: 5px;color: #757575">北京市海淀区培黎职业学校</span>
                                    </p>
                                </div>
                            </f7-list-item>
                    </div>
                        <div style="margin-bottom: 20px;">
                        <f7-list-item style="border:1px solid #EEEEEE;border-radius:15px;width: 96%;margin: auto;background-color: white">
                            <div class="item-title-row">
                                <div class="item-title" style="float: left;color: #333333">【北京】 2018‘百千万工程’海淀区围棋段位赛</div>
                            </div>
                            <div class="item-text">
                                <p class="color-333">
                                    <f7-icon f7="time" size="15px" style="margin-bottom:3px;margin-left:1px"></f7-icon>
                                    <span style="padding-left: 5px;color: #757575">2018年4月29日至20118年4月30日</span>
                                </p>
                            </div>
                            <div class="item-text">
                                <p class="color-333">
                                    <f7-icon f7="home" size="15px" style="margin-bottom:3px;margin-left:1px"></f7-icon>
                                    <span style="padding-left: 5px;color: #757575">北京市海淀区培黎职业学校</span>
                                </p>
                            </div>
                        </f7-list-item>
                    </div>
                </f7-list>
            </div>

            <!-- Tab 2 -->
            <div class="page-content tab" id="tab2" style="padding-top: 0px">
                <f7-list media-list style="list-style-type:none;margin-top: 10px;">
                    <div style="margin-bottom: 20px;">
                        <f7-list-item style="border:1px solid #EEEEEE;border-radius:15px;width: 96%;margin: auto;background-color: white">
                            <div class="item-title-row">
                                <div class="item-title" style="float: left;color: #333333">【北京】 2018‘百千万工程’海淀区围棋段位赛</div>
                            </div>
                            <div class="item-text">
                                <p class="color-333">
                                    <f7-icon f7="time" size="15px" style="margin-bottom:3px;margin-left:1px"></f7-icon>
                                    <span style="padding-left: 5px;color: #757575">2018年4月29日至20118年4月30日</span>
                                </p>
                            </div>
                            <div class="item-text">
                                <p class="color-333">
                                    <f7-icon f7="home" size="15px" style="margin-bottom:3px;margin-left:1px"></f7-icon>
                                    <span style="padding-left: 5px;color: #757575">北京市海淀区培黎职业学校</span>
                                </p>
                            </div>
                        </f7-list-item>
                    </div>
                </f7-list>
            </div>
            </div>



    </f7-page>
</template>

<script>
    export default {
      mounted(){
        this.$store.commit('player/setId',this.$f7route.params.id);
        this.$store.dispatch('player/getAllMsg');
      },
      computed:{
        playerData(){
          return this.$store.state.player.all;
        }
      }
    }
</script>
