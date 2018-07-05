<template>
    <f7-page>

        <f7-navbar title="分组管理" back-link="Back">
            <f7-nav-right>
                <f7-link open-panel="right" @click="submitMsg">完成</f7-link>
              <!--href="/my/group/:id"-->
            </f7-nav-right>
        </f7-navbar>
        <f7-list form id="form">
            <li>
                <div class="item-content">
                    <div class="item-inner">
                        <div class="item-title label">分组名称</div>
                        <div class="item-input" style="margin-right:15%; ">
                            <input type="text" placeholder="请输入分组名称" :value="groupName" @input="groupName = $event.target.value" name="groupName">
                        </div>
                    </div>
                </div>
            </li>
        </f7-list>
    </f7-page>
</template>

<script>
    export default {
      data(){
        return{
          groupName:' '
        }
      },
      methods:{
        submitMsg(){
          this.axios.post('http://home.19road.com/19lu/api/web/v1/playergroups',{
            battery_name:this.groupName
          }).then((response)=>{
              if(response.data.code=='200'){
                this.$f7.router.back();
              }
            }
          ).catch()
        },
      }
    }
</script>
