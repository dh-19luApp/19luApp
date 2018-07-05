<template>
  <f7-page>
    <f7-navbar title="选择选手" back-link="Back">
      <f7-nav-right>
        <f7-link href="/my/player-info/:id">
          <f7-icon f7="add_round"></f7-icon>
        </f7-link>
      </f7-nav-right>
    </f7-navbar>
    <!--<div class="from-group-title" style="margin: 1px 0;">-->
    <!--<div class="colony-block-title content-block-title ng-binding">公开组</div>-->
    <!--</div>-->
    <!--<f7-list media-list style="margin-top: 10px;">-->
    <!--<f7-list-item-->
    <!--link=""-->
    <!--checkbox-->
    <!--v-for="lists in listPlayer"-->
    <!--:key="lists.id"-->
    <!--:title="lists.player.username"-->
    <!--:text="lists.player.level"-->
    <!--:media="lists.player.photo"-->
    <!--&gt;-->

    <!--</f7-list-item>-->

    <!--</f7-list>-->


    <!--<div class="from-group-title" style="padding-top: 0px;">-->
    <!--<div class="colony-block-title content-block-title ng-binding">公开组</div>-->
    <!--</div>-->
    <f7-list media-list style="margin-top: 10px;">
      <f7-list-item
        checkbox
        v-for="lists in listPlayer"
        :key="lists.id"
        v-if="lists.player"
        :title="lists.player.username"
        :text="lists.player.level"
        :media="lists.player.photo"
        @click="setSelectedPlayers(lists.player)"
      >
      </f7-list-item>
    </f7-list>
    <f7-row tag="p" style="margin: 20px;">

      <f7-button class="col" raised fill
                 style="border-radius: 8px;"
                 @click="commitSelectedPlayers"
                 :href="nextUrl"
      >确定
      </f7-button>
      <!--href="/game/enroll/form/"-->
    </f7-row>
  </f7-page>
</template>

<script>
  import {AlertModule} from 'vux'
  export default {
    data() {
      return {
        listPlayer: [
          {
            player:{
              username:'',
              level:'',
              photo:''
            }
          }
        ],
        selectedPlayers: new Set(),//已选选手set
        selectedPlayersLength: 0 ,
        nextUrl:''
      }
    },
    watch:{
      selectedPlayersLength(val){
        if(val>0){
          this.nextUrl='/game/enroll/form/';
        }else {
          this.nextUrl='';
        }
      }
    },
    beforeMount() {
      this.axios.get('http://home.19road.com/19lu/api/web/v1/relations/search').then((response)=>{
          this.listPlayer=response.data.data.items
        }).catch(function (error) {
        console.log(error);
      });
    },
    methods: {
      setSelectedPlayers(player) {
        if (this.selectedPlayers.has(player)) {
            this.selectedPlayers.delete(player);
        } else {
          this.selectedPlayers.add(player);
        }
        this.selectedPlayersLength=this.selectedPlayers.size;
      },
      commitSelectedPlayers() {
        if (this.selectedPlayers.size > 0) {
          this.$store.commit('gameDetail/setSelectedPlayer', this.selectedPlayers);
        }else {
          AlertModule.show({
            title:'请添加选手',
          });
        }
      },
    },
    updated() {

    }
  }
</script>
