<template>
  <f7-page style="background: #F5F5F5">
    <f7-navbar title="比赛报名" back-link="Back">
    </f7-navbar>
    <div class="card ft-detail-header-img"
         style="border:1px solid #EEEEEE;border-radius:15px;width: 96%;margin:15px auto;">
      <div valign="bottom" class=" color-white no-border ng-binding"></div>
      <div class="card-content">
        <div class="card-content-inner">
          <p class="color-gray ng-binding" style="color:gray">
            <f7-icon f7="time" size="15px" style="margin-bottom:3px;"></f7-icon>
            <span style="padding-left: 8px;">比赛时间：{{date}}</span></p>
          <p class="color-gray ng-binding" style="color:gray">
            <f7-icon f7="home" size="15px" style="margin-bottom:3px;"></f7-icon>
            <span style="padding-left: 8px;">比赛地点：{{site}}</span></p>
        </div>
      </div>
    </div>
    <div class="form-body">
      <!--<div class="from-group-title" style="padding-top:5px;">
        <div class="content-block-title ng-binding">公开组</div>
        <div class="content-block-title ng-binding" style="color:gray">小计￥3827.00</div>
      </div>-->
      <!--<f7-list media-list-->
      <!--style="background-color: white;border-bottom: 1px solid #e5e5e5;border-top: 1px solid #e5e5e5;margin-bottom:10px;">-->
      <!--<f7-list-item v-for="lists in listPlayer" :key="lists.id"-->
      <!--:link="'/game/enroll/form/'+lists.id"-->
      <!--:title="lists.player.username"-->
      <!--text="『报名费』 ￥200.00"-->
      <!--after="未支付:￥1000"-->
      <!--:media="lists.player.photo">-->
      <!--<span style="color:gray;font-size: 14px">『其他』 ￥800</span>-->
      <!--</f7-list-item>-->
      <!--</f7-list>-->


      <div class="from-group-title" style="padding: 5px 0;" v-for="groupClass in selectedGroup">
        <div v-if="judgeGroupItemShow(groupClass)">
          <div style="padding: 5px 16px">
            <div class="content-block-title ng-binding">{{groupClass.name}}</div>
            <div class="content-block-title ng-binding" style="color:gray;display: none">小计￥3827.00</div>
          </div>
          <f7-list media-list
                   style="background-color: white;border-bottom: 1px solid #e5e5e5;border-top: 1px solid #e5e5e5;margin-bottom: 0"
          >
            <f7-list-item
              v-if="listPlayer && judgeListItemShow(groupClass.id,lists)"
              v-for="lists in listPlayer"
              :key="lists.id"
              :link="'/game/enroll/form/'+lists.id"
              :title="lists.username"
              :text="'报名费： ￥'+getApplyPrice(lists.id)"
              :after="'未支付：￥'+(getApplyPrice(lists.id)+getServerPrice(lists.id))"
              :media="lists.photo"
            >
              <!--<span style="color:gray;font-size: 14px">-->
              <!--其&nbsp;&nbsp;&nbsp;&nbsp;他：-->
              <!--￥{{getServerPrice(lists.id)}}</span>-->
              <span style="color:gray;font-size: 14px"
                    v-if="lists.server"
                    v-for="serverItem in getServerList(lists.server)"
              >
            <span v-if="serverItem.purchaseNum>0" style="display: block">
              {{serverItem.detail.goods_name+':￥'
              +parseInt(serverItem.detail.price)*parseInt(serverItem.purchaseNum)}}
            </span>
          </span>
            </f7-list-item>
          </f7-list>
        </div>
      </div>
      <div class="from-group-title" v-if="totalPrice>0">
        <div class="total-price">
          总计:<span class="price">￥{{totalPrice}}</span>
        </div>
      </div>

      <f7-row tag="p" style="margin: 20px">
        <f7-button class="col" raised fill href="/game/enroll/select-player/" style="border-radius: 8px;">增加报名
        </f7-button>
        <f7-button class="col" raised fill @click="sendOrderMsg" style="border-radius: 8px;">确定</f7-button>
        <!--href="/game/enroll/order/"-->
      </f7-row>
    </div>
  </f7-page>
</template>

<script>
  import {mapState} from 'vuex'
  import {AlertModule} from 'vux'

  export default {
    data() {
      return {
        // listPlayer: [],
      }
    },
    methods: {
      getServerPrice(id) {
        return this.$store.getters['gameDetail/getServerPrice'](id)
      },
      getApplyPrice(id) {
        return this.$store.getters['gameDetail/getApplyPrice'](id).price;
      },
      getServerList(map) {
        if (map) {
          return [...map.values()];
        } else {
          return [];
        }
      },
      sendOrderMsg() {
        //this.$f7router.navigate('/game/enroll/order/'+'4152991210748');//写死的订单号 方便测试 直接跳转到订单页
        let sendFlag = true;//判断提交与否的标志量
        let data = {
          eventid: this.$store.state.gameDetail.all.id,
          player: []
        };
        for(let player of [...this.$store.state.gameDetail.selectedPlayer]){
          if (player.group) {
            //判断有没有选择组别
            var playerItem = {
              playerid: player.id,
              groupid: player.group.id,
              goods: [],
            };
          } else {
            //alert(player.username + '没有报名');
            AlertModule.show({
              title:'提示信息',
              content:player.username + '没有报名',
            });
            sendFlag = false;
            break ;
          }
          if (player.server) {
            //判断有没有添加服务
            [...player.server.values()].forEach((server) => {
              if (server.purchaseNum > 0) {
                let serverItem = {
                  goodsid: server.detail.goods_id,
                  num: server.purchaseNum
                };
                playerItem.goods.push(serverItem);
              }
            });
          }
          data.player.push(playerItem);
        };
        if (sendFlag) {
          this.axios.post('http://home.19road.com/19lu/api/web/v1/orders/addorder', {
            data: data
          }).then((response) => {
            console.log(response.data);
            this.$f7router.navigate('/game/enroll/order/'+response.data.data);
          });
        }
      },
      judgeListItemShow(groupId, item) {
        if (item.group) {
          if (groupId == item.group.id) {
            return true;
          }
        } else if (groupId == 'blankId') {
          return true;
        }
      },
      judgeGroupItemShow(groupClass){
        if(groupClass.id == 'blankId'){
          if(this.selectedGroup.length==1){
            return true;
          }else if(this.selectedGroup.length-1==this.selectedGroupTrueLength){
            if(this.groupHasSelected==this.listPlayer.length){
              return false;
            }else {
              return true;
            }
          }
        }else {
          return true;
        }
      }
    },
    beforeMount() {

    },
    computed: {
      ...mapState(('gameDetail'), {
        date: state =>
          state.all.game_start_time + '至' + state.all.game_end_time,
        site: state =>
          state.all.provinces + state.all.city + state.all.area + state.all.venue,
        listPlayer: state => [...state.selectedPlayer],
      }),
      totalPrice() {
        return this.$store.getters['gameDetail/getTotalPrice'];
      },
      selectedGroup() {
        return this.$store.getters['gameDetail/getSelectedGroup'].values;
      },
      selectedGroupTrueLength(){
        return this.$store.getters['gameDetail/getSelectedGroup'].trueLength;
      },
      groupHasSelected(){
        return this.$store.getters['gameDetail/getSelectedGroup'].hasSelected;
      }
    },
    mounted() {

    }
  }
</script>
