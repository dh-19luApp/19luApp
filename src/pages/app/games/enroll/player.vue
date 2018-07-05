<template>
    <f7-page>
        <f7-navbar title="参赛选手" back-link="Back"></f7-navbar>
        <f7-list-item v-for="(item,index) in groupList" :key="item.id" style="list-style-type: none;margin-top: 20px;">
            <f7-accordion-item style="width: 100%;">
                <f7-accordion-toggle style="margin: 10px;">
                    {{item.group_name}}
                    <!--<span style="float: right">3</span>-->
                </f7-accordion-toggle>
                <f7-accordion-content>
                    <f7-list media-list class="no-padding">
                        <f7-list-item
                                v-if="playerList[index]"
                                v-for="playerItem in playerList[index]"
                                swipeout
                                :key="playerItem.id"
                                :title="playerItem.username"
                                :text="playerItem.level"
                                :media="playerItem.photo"
                        >
                        </f7-list-item>
                    </f7-list>
                </f7-accordion-content>
            </f7-accordion-item>
        </f7-list-item>
    </f7-page>
</template>

<script>
    export default {
        data(){
            return{
                groupList:[],//分组
                playerList:[]//所有选手
            }
        },
        beforeMount(){
            this.axios.get('http://home.19road.com/19lu/api/web/v1/groups/search').then(
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
                            self.axios.get('http://home.19road.com/19lu/api/web/v1/players/1?fields=myplayer',{
                                id:id
                            }).then((response)=>{
                                resolve(response.data.data.myplayer)
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
