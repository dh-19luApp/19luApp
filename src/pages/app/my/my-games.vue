<template>
    <f7-page style="background-color: #f5f5f5;">
        <f7-navbar title="我的比赛" back-link="Back"></f7-navbar>

        <!--<f7-toolbar tabbar>-->
            <!--<f7-link tab-link="#all_order">全部</f7-link>-->
            <!--<f7-link tab-link="#not_pay">我参赛的</f7-link>-->
            <!--<f7-link tab-link="#yes_pay">我关注的</f7-link>-->
        <!--</f7-toolbar>-->


        <div class="tabs">
            <div class="page-content tab tab-active" id="all_order" style="padding-top: 0px">
                <f7-list media-list style="list-style-type:none">
                  <div v-for="listItem in listData" @click="getGameData(listItem.id)">
                    <f7-link :href="'/game/:'+listItem.id" style="width: 100%;">
                      <f7-list-item style="border:1px solid #EEEEEE;border-radius:15px;width: 96%;margin:10px auto;background-color: white">
                        <div class="item-title-row">
                          <div class="item-title" style="float: left;color: black;">参赛名称:{{listItem.title}}</div>
                          <f7-button active small
                                     :color="listItem.status != 1 ? 'gray' : ''"
                                     style="border-radius: 8px">{{getStatus(listItem.status)}}</f7-button>
                        </div>
                        <div class="item-text" style="color: #333333">比赛地点:{{listItem.provinces+listItem.city+listItem.area+listItem.venue}}</div>
                        <div class="item-text" style="color: #333333">比赛时间:{{listItem.game_start_time+'至'+listItem.game_end_time}}</div>
                        <div class="item-text" style="padding-bottom: 10px;color: #333333">提示：{{listItem.content}}</div>
                        <a :href="'/my/game-player/:'+listItem.id" class="item-link" style="border-top: 1px solid #e5e5e5;padding-top: 10px;">

                          <div class="item-text" style="float: left;color: #333333">参赛人员：{{listItem.player}}</div>
                          <div class="item-text" style="float: right">更多></div>

                        </a>
                      </f7-list-item>
                    </f7-link>
                  </div>
                </f7-list>
            </div>

            <div class="page-content tab" id="not_pay" style="padding-top: 0px">
                <f7-list media-list style="list-style-type:none">
                    <f7-link href="/game/:id" style="width: 100%;">
                        <f7-list-item style="border:1px solid #EEEEEE;border-radius:15px;width: 96%;margin:10px auto;background-color: white">
                            <div class="item-title-row">
                                <div class="item-title" style="float: left;color: black;">参赛名称：XXXXXX杯比赛</div>
                                <f7-button active small color="#2196f3" style="border-radius: 8px">进行中</f7-button>
                            </div>
                            <div class="item-text" style="color: #333333">比赛地点：</div>
                            <div class="item-text" style="color: #333333">比赛时间：</div>
                            <div class="item-text" style="padding-bottom: 10px;color: #333333">提示：</div>
                            <a href="/my/game-player/:id" class="item-link" style="border-top: 1px solid #e5e5e5;padding-top: 10px;">

                                <div class="item-text" style="float: left;color: #333333">参赛人员：小王，小明，小李，小张</div>
                                <div class="item-text" style="float: right">更多></div>

                            </a>
                        </f7-list-item>
                    </f7-link>
                    <f7-link href="/game/:id" style="width: 100%">
                        <f7-list-item style="border:1px solid #EEEEEE;border-radius:15px;width: 96%;margin:10px auto;background-color: white">
                            <div class="item-title-row">
                                <div class="item-title" style="float: left;color: black;">参赛名称：XXXXXX杯比赛</div>
                                <f7-button active small color="#2196f3" style="border-radius: 8px">进行中</f7-button>
                            </div>
                            <div class="item-text" style="color: #333333">比赛地点：</div>
                            <div class="item-text" style="color: #333333">比赛时间：</div>
                            <div class="item-text" style="padding-bottom: 10px;color: #333333">提示：</div>
                            <a href="/my/game-player/:id" class="item-link" style="border-top: 1px solid #e5e5e5;padding-top: 10px">

                                <div class="item-text" style="float: left;color: #333333">参赛人员：小王，小明，小李，小张</div>
                                <div class="item-text" style="float: right">更多></div>

                            </a>
                        </f7-list-item>
                    </f7-link>
                </f7-list>
            </div>

            <div class="page-content tab" id="yes_pay" style="padding-top: 0px">
                <f7-list media-list style="list-style-type:none">
                <f7-link href="/game/:id" style="width: 100%">
                    <f7-list-item style="border:1px solid #EEEEEE;border-radius:15px;width: 96%;margin:10px auto;background-color: white">
                        <div class="item-title-row">
                            <div class="item-title" style="float: left;color: black;">参赛名称：XXXXXX杯比赛</div>
                            <f7-button style="color:#b5b5b5">已结束</f7-button>
                        </div>
                        <div class="item-text" style="color: #333333">比赛地点：</div>
                        <div class="item-text" style="color: #333333">比赛时间：</div>
                        <div class="item-text" style="padding-bottom: 10px;color: #333333">提示：</div>
                        <a  class="item-link" style="border-top: 1px solid #e5e5e5;padding-top: 10px">
                            <div class="item-text" style="float: left;color: #333333">参赛人员：小王，小明，小李，小张</div>
                            <div class="item-text" style="float: right">更多></div>
                        </a>
                    </f7-list-item>
                </f7-link>
                </f7-list>
            </div>
        </div>
    </f7-page>
</template>

<script>
    export default {
      data(){
        return{
          listData:[],//列表
        }
      },
      computed:{
        gameList:()=>{

        }
      },
      methods:{
        getStatus(status){
          switch (status){
            case '0':return'未开始';
            case '1':return'报名中';
            case '2':return'已结束';
          }
        },
        getGameData(id){
          console.log(id);
          this.$store.commit('gameDetail/setId',id);
          this.$store.dispatch('gameDetail/getAllMsg');
        }
      },
      beforeMount(){
        console.log(this.$store.state.user.token);
        this.axios.get('http://home.19road.com/19lu/api/web/v1/signups/1?fields=mygame').then((response)=>{
          this.listData=response.data.data.mygame;
        }).catch((error)=>{

        })
      }
    }
</script>
