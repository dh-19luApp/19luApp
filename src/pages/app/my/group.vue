<template>
    <f7-page>

        <f7-navbar title="分组管理" back-link="Back">
            <f7-nav-right>
                <f7-link open-panel="right" href="">完成</f7-link>
            </f7-nav-right>
        </f7-navbar>
        <f7-link style="margin-left: 20px;margin-top:10px;" color="blue" href="/my/add-group/:id">
            <f7-icon f7="add_round"  color="gray" style="margin-left: -2px"></f7-icon>
            <span style="font-size:16px;margin-left: 20px">添加分组</span>
        </f7-link>

        <f7-list style="margin-top:10px;">

            <f7-list-item
              v-for="groupItem in groupList" :key="groupItem.id"
              :title="groupItem.battery_name" >
                <div slot="media">
                    <f7-icon f7="delete_round_fill" color="red"></f7-icon>
                </div>
            </f7-list-item>

        </f7-list>



    </f7-page>
</template>

<script>
    export default {
      data(){
        return{
          groupList:[]
        }
      },
      beforeMount(){
        this.axios.get('http://19lu-api.hayzon.com/v1/playergroups/search').then(
          (response)=>{
            this.groupList=response.data.data.items
          }
        )
      },
    }
</script>
