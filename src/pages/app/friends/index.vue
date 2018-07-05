<template>
    <f7-page name="friends">
        <f7-navbar  title="好友" sliding>
            <f7-nav-right>
                <f7-link href="/friends/search/:id">
                    <f7-icon f7="search"></f7-icon>
                </f7-link>
            </f7-nav-right>
        </f7-navbar>



        <f7-list-item style="list-style-type: none;">
            <f7-accordion-item style="width: 100%">
                <f7-accordion-toggle style="margin: 10px">
                    我关注的选手
                </f7-accordion-toggle>
                <f7-accordion-content>
                    <f7-list media-list class="no-padding"  v-for="(item,index) in 1" :key="item.id">
                        <f7-list-item
                                v-for="playerItem in playerList[index]"
                                swipeout
                                :link="'/friends/personal-information/'+playerItem.id"
                                :key="playerItem.player.id"
                                :title="playerItem.player.username"
                                :text="playerItem.player.level"
                                :media="playerItem.player.photo"
                        >
                            <f7-swipeout-actions>
                                <f7-swipeout-button color="gray" :href="'/friends/personal-details/'+playerItem.id">查看管理者</f7-swipeout-button>
                                <f7-swipeout-button close color="blue" :href="'/my/news/player-info/'+playerItem.id">修改资料</f7-swipeout-button>
                                <f7-swipeout-button color="red" href="">删除选手</f7-swipeout-button>
                            </f7-swipeout-actions>
                        </f7-list-item>
                    </f7-list>
                </f7-accordion-content>
            </f7-accordion-item>
        </f7-list-item>


        <f7-list-item v-for="(item,index) in groupList" :key="item.id" style="list-style-type: none;">
            <f7-accordion-item style="width: 100%;">
                <f7-accordion-toggle style="margin: 10px;">
                    {{item.battery_name}}
                </f7-accordion-toggle>
                <f7-accordion-content>
                    <f7-list media-list class="no-padding">
                        <f7-list-item
                                v-if="playerList[index]"
                                v-for="playerItem in playerList[index]"
                                :link="'/friends/personal-information/'+playerItem.id"
                                swipeout
                                :key="playerItem.player.id"
                                :title="playerItem.player.username"
                                :text="playerItem.player.level"
                                :media="playerItem.player.photo"
                        >
                            <f7-swipeout-actions>
                                <f7-swipeout-button color="gray" :href="'/friends/personal-details/'+playerItem.id">查看管理者</f7-swipeout-button>
                                <f7-swipeout-button close color="blue" :href="'/my/news/player-info/'+playerItem.id">修改资料</f7-swipeout-button>
                                <f7-swipeout-button color="red" href="">删除选手</f7-swipeout-button>
                            </f7-swipeout-actions>
                        </f7-list-item>
                    </f7-list>
                </f7-accordion-content>
            </f7-accordion-item>
        </f7-list-item>


        <toolbar />
    </f7-page>
</template>

<script>
    import Toolbar from '../../components/toolbar.vue';
    export default {
        components:{
            toolbar:Toolbar
        },
        data(){
            return{
                groupList:[],//分组
                playerList:[]//所有选手
            }
        },
        beforeMount(){
            this.axios.get('http://home.19road.com/19lu/api/web/v1/playergroups/search').then(
                (response)=>{
                    this.groupList=response.data.data.items
                }
            )
        },
        watch:{
            groupList(){
                var self = this;
                var getPlayerMsg=function (id) {
                    return new Promise(function (resolve,reject) {
                            self.axios.get('http://home.19road.com/19lu/api/web/v1/relateds/search',{
                                battery_id:id
                            }).then((response)=>{
                                resolve(response.data.data.items)
                            }).catch((error)=>{
                                reject(error)
                            })
                        }
                    )
                };
                var gen = function* () {
                    for(const item of self.groupList){
                        yield getPlayerMsg(item.id)
                    }
                };
                var g= gen();
                function next(data) {
                    var res = g.next(data)
                    if(res.done) return res.value;
                    res.value.then(function (data) {
                        self.playerList.push(data)
                        next(data)
                    });
                }
                next()
            }
        },
        updated(){
//        console.log(this.playerList)
        }
    }
</script>