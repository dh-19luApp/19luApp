<template>
    <f7-page>
        <f7-navbar>
            <f7-searchbar style="border-radius: 8px;margin:15px;height:40px;"
                          cancel-link="Cancel"
                          placeholder="输入赛事名称搜索"
                          :clear-button="true"
            ></f7-searchbar>

            <f7-nav-right>
                <f7-link open-panel="right" href="/games/">取消</f7-link>
            </f7-nav-right>
        </f7-navbar>

        <div v-for="item in listData" :key="item.id">
            {{item.title}}</div>

    </f7-page>
</template>

<script>
    export default {
        data(){
            return{
                listData:[],
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