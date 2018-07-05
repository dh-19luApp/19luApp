<template>
  <f7-page name="games" style="background-color: #f5f5f5;">
    <f7-navbar title="赛事">
      <f7-nav-right>
        <f7-link href="/game/enroll/title-search/">
          <f7-icon f7="search"></f7-icon>
        </f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-list media-list style="list-style-type:none;margin-top: 10px;">
      <div v-for="item in listData" :key="item.id" style="margin-bottom: 20px;">
        <f7-link :href="'/game/details/'+item.id" style="width: 100%">
          <f7-list-item style="border:1px solid #EEEEEE;border-radius:15px;width: 96%;margin: auto;background-color: white">
            <div class="item-title-row">
              <div class="item-title" style="float: left;color: #333333">{{item.title}}</div>
              <f7-button active
                         :color="item.status != 1 ? 'gray' : ''"
                         style="border-radius: 8px" small>{{getStatus(item.status)}}</f7-button>
            </div>
            <div class="item-text">
              <p class="color-333">
                <f7-icon f7="time" size="15px" style="margin-bottom:3px;margin-left:1px"></f7-icon>
                <span style="padding-left: 5px;color: #757575">{{item.game_start_time+'至'+item.game_end_time}}</span>
              </p>
            </div>
            <div class="item-text">
              <p class="color-333">
                <f7-icon f7="home" size="15px" style="margin-bottom:3px;margin-left:1px;"></f7-icon>
                <span style="padding-left: 5px;color: #757575">{{
                  item.provinces+item.city+item.area+item.venue
                  }}</span>
              </p>
            </div>
          </f7-list-item>
        </f7-link>
      </div>
    </f7-list>
    <toolbar/>
  </f7-page>
</template>
<script>
  import Toolbar from '../../components/toolbar.vue';

  export default {
    components: {
      toolbar: Toolbar
    },
    data() {
      return {
        listData: [],//列表属性
      }
    },
    methods:{
      getStatus(status){
        switch (status){
          case 0:return'未开始';
          case 1:return'报名中';
          case 2:return'已结束';
        }
      }
    },
    beforeMount() {
      this.axios.get('http://home.19road.com/19lu/api/web/v1/games').then(function (response) {
          this.listData=response.data.data.items;
        }.bind(this)
      ).catch(function (error) {
          console.log(error);
        });

    },
  }
</script>
