<template>
  <f7-page style="background-color: #F5F5F5">
    <f7-navbar title="选择服务" back-link="Back"></f7-navbar>

    <f7-list media-list
             style="background-color: white;border-bottom: 1px solid #e5e5e5;margin-top: 0px;margin-bottom: -15px">

      <f7-list-item
        :link="'/my/news/player-info/'+player.id"
        :title="player.username"
        :text="player.level"
        :media="player.photo"
      ></f7-list-item>
      <f7-list-item
        title="选择报名方式"
        after="个人报名"
        @click="applyWayAction=true"
      ></f7-list-item>
      <f7-list-item link
                    title="选择组别"
                    :after="selectedGroup.group_name"
                    @click="groupAction=true"
      ></f7-list-item>
    </f7-list>
    <div v-for="(serverItem,index) in server" :key="index">
      <!--cat_id-->
      <div class="from-group-title" style="margin-bottom: -10px;">
        <div class="colony-block-title content-block-title ng-binding">
          {{serverItem.classify.cat_name}}
        </div>
      </div>
      <f7-list class="margin-top-6-g"
               style="background-color: white;border-bottom: 1px solid #e5e5e5;border-top: 1px solid #e5e5e5;margin-bottom: -15px;">
        <f7-list-item
          v-for="(selectedItem,selectedIndex) in selectedServer"
          :key="selectedIndex"
          v-if="(selectedItem.detail.cat_id==serverItem.cat_id) && (selectedItem.purchaseNum > 0)"
          :title="selectedItem.detail.goods_name"
          :after="'￥'+parseInt(selectedItem.detail.price)+'x'+selectedItem.purchaseNum"
        ></f7-list-item>
        <f7-list-item
          :link="'/game/enroll/live/'+serverItem.cat_id"
          title="选择服务"
        ></f7-list-item>
      </f7-list>
    </div>
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
        总计:<span class="price">￥{{totalPrice}}</span>
      </div>
    </div>
    <f7-row tag="p" style="margin: 20px">
      <f7-button class="col" raised fill href="/game/enroll/form/" style="border-radius: 8px;" @click="exit">取消报名</f7-button>
      <f7-button class="col" raised fill href="/game/enroll/apply/" style="border-radius: 8px;">确定</f7-button>
    </f7-row>
    <!--报名方式-->
    <f7-actions :opened="applyWayAction" class="cus-action">
      <f7-actions-group>
        <f7-actions-button
          @click="applyActionItemClick"
        > 个人报名
        </f7-actions-button>
        <f7-actions-button
                @click="applyActionItemClick"
        > 团队报名
        </f7-actions-button>
      </f7-actions-group>
      <f7-actions-group>
        <f7-actions-button color="red"
                           bold
                           @click="applyWayAction=false"
        >取消
        </f7-actions-button>
      </f7-actions-group>
    </f7-actions>

    <!--选择组别-->
    <f7-actions :opened="groupAction" class="cus-action">
      <f7-actions-group>
        <f7-actions-button
          v-for="groupItem in group"
          :key="groupItem.id"
          @click="groupActionItemClick(groupItem)"
        > {{groupItem.group_name}}
        </f7-actions-button>
      </f7-actions-group>
      <f7-actions-group>
        <f7-actions-button color="red"
                           bold
                           @click="groupAction=false"
        >取消
        </f7-actions-button>
      </f7-actions-group>
    </f7-actions>
  </f7-page>
</template>
<script>

  import F7Block from "framework7-vue/src/components/block";
  import F7List from "../../../../../node_modules/framework7-vue/src/components/list.vue";
  import {mapState} from 'vuex'

  export default {
    components: {
      F7List,
      F7Block
    },
    data() {
      return {
        applyWayAction: false,
        groupAction: false,
      }
    },


    methods: {
      applyActionItemClick() {
        this.applyWayAction = false;

      },
      groupActionItemClick(data) {
        //选择组别
        this.groupAction = false;
        this.selectedGroup=data;
      },
      exit(){
        //console.log(this.$store.state.gameDetail.selectedPlayer)
        // console.log(this.selectedServer)
      }
    },
    beforeMount() {
      this.$store.commit('player/setId', this.$f7route.params.id);
      this.$store.dispatch('player/getAllMsg');
    },
    computed: {
      ...mapState(('gameDetail'),{
        group:state=>state.group,//组别
        server:state=>state.server,//服务
      }),
      ...mapState(('player'),{
        player:state=>state.all//选手
      }),
      selectedGroup:{
        //判断已选择 组别
        get (){
          let data='';
          this.$store.state.gameDetail.selectedPlayer.forEach((value)=>{
            if(value.id==this.$f7route.params.id){
              if(value.group){
                data=value.group
              }else {
                data={group_name:'请选择'}
              }
            }
          });
          return data
        },
        set (value){
          this.$store.commit('gameDetail/addGroup', {id:this.$f7route.params.id,data:{group:value}});
        }
      },
      selectedServer(){
        let res='';
        this.$store.state.gameDetail.selectedPlayer.forEach((value)=>{
          if(value.id==this.$f7route.params.id){
            if(value.server){
              res = [...value.server.values()]
            }else {
              res = []
            }
          }
        });
        return res
      },
      totalPrice(){
        let price=0;
        if(this.selectedServer.length>0){
          this.selectedServer.forEach((value)=>{
            price+=parseInt(value.detail.price)*parseInt(value.purchaseNum)
          })
        }
        price+=this.$store.getters['gameDetail/getApplyPrice'](this.$f7route.params.id).price;
        return price
      }
    },
    mounted(){

    },
  }
</script>
