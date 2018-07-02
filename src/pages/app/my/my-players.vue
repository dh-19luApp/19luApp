<template>
    <f7-page>
        <f7-navbar title="我的选手" back-link="Back">
            <f7-nav-right>
                <f7-link href="/my/player-info/:id">
                    <f7-icon f7="add_round"></f7-icon>
                </f7-link>
            </f7-nav-right>
        </f7-navbar>

        <f7-list media-list>
            <f7-list-item
                    v-for="listItem in listData"
                    :key="listItem.id"
                    swipeout
                    :title="listItem.nickname"
                    :text="listItem.level"
                    :media="listItem.photo"
            >
                <f7-swipeout-actions>
                    <f7-swipeout-button close color="gray" :href="'/my/transfer-auth/:'+listItem.id" style="visibility:hidden">移交监护权</f7-swipeout-button>
                    <f7-swipeout-button close color="blue" :href="'/my/news/player-info/'+listItem.id">修改资料</f7-swipeout-button>
                    <f7-swipeout-button color="red" href="">删除选手</f7-swipeout-button>
                </f7-swipeout-actions>
            </f7-list-item>
        </f7-list>

    </f7-page>
</template>

<script>
    export default {
      data(){
        return{
          listData:[]
        }
      },

        beforeMount() {
            this.axios.get('http://19lu-api.hayzon.com/v1/players/1?fields=myplayer').then(function (response) {
                    this.listData=response.data.data.myplayer;
                }.bind(this)
            ).catch(function (error) {
                console.log(error);
            });

        },
    }
</script>
