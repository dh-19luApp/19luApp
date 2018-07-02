<template>
    <f7-page>
        <f7-navbar title="参赛选手" back-link="Back"></f7-navbar>

        <f7-list media-list>
            <f7-list-item
                    v-for="listItem in  listData"
                    :key="listItem.id"
                    :title="listItem.username"
                    :text="listItem.level"
                    :media="listItem.photo"
            ></f7-list-item>
        </f7-list>

    </f7-page>
</template>

<script>
    export default {
      computed:{

      },
      data(){
          return{
            listData:[]
          }
      },
      beforeMount(){
        this.axios.get('http://19lu-api.hayzon.com/v1/signups/search?fields=player&eventid='+this.$f7route.params.id).then(
          (response)=>{
            this.listData=response.data.data.items;
          }
        ).catch()
      }
    }
</script>
