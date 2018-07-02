<template>
    <f7-page no-navbar name="my" style="background: #F5F5F5">
        <f7-navbar  title="我的" sliding></f7-navbar>
            <f7-list media-list style="margin-top: 0px;margin-bottom: 20px; background: white;border-bottom:1px solid #E5E5E5">
                <f7-list-item
                        link="/my/my-detail/:id"
                        media="http://lorempixel.com/160/160/people/1"
                >
                    <div slot="title">
                        <span style="font-weight:bolder;font-size: 20px;">你好</span>
                    </div>
                    <div slot="text" style="margin-top: 6px;">点击查看个人信息</div>
                </f7-list-item>
            </f7-list>

            <f7-row style="background: white;border-top:1px solid #E5E5E5;border-bottom:1px solid #E5E5E5">
                <f7-col width="50">
                    <a href="/my/my-players/:id">
                        <p style="text-align: center;color: black">111</p>
                        <p style="text-align: center;color: black">我的选手</p>
                    </a>
                </f7-col>
                <f7-col width="50">
                    <a href="/my/my-attention/:id">
                        <p style="text-align: center;color: black">111</p>
                        <p style="text-align: center;color: black">我关注的</p>
                    </a>
                </f7-col>
                <f7-col width="33" hidden>
                    <a href="/my/attention-my/:id">
                        <p style="text-align: center;color: black"><span style="color: red">2</span>/5</p>
                        <p style="text-align: center;color: black">关注我的</p>
                    </a>
                </f7-col>
            </f7-row>

            <f7-list style="background: white;margin: 20px 0px;border-top:1px solid #E5E5E5;border-bottom:1px solid #E5E5E5">
                <f7-list-item link="/my/my-game/:id" title="我的比赛"></f7-list-item>
                <f7-list-item link="/my/my-order/:id" title="我的订单"></f7-list-item>
            </f7-list>

            <f7-list style="background: white;margin: 20px 0px;border-top:1px solid #E5E5E5;border-bottom:1px solid #E5E5E5">
                <!--<f7-list-item link="/my/apply-card/:id" title="申请参赛证"></f7-list-item>-->
                <f7-list-item link="/my/update-phone/:id" title="修改绑定手机号"></f7-list-item>
                <f7-list-item link="/reset/" title="重置密码"></f7-list-item>
            </f7-list>

            <f7-list style="margin: 20px 0px;background-color: white;border-bottom: 1px solid #e5e5e5;border-top:1px solid #e5e5e5">
                <f7-list-item @click="confirmShow=true">退出登录</f7-list-item>
            </f7-list>
        <toolbar />
        <comfirm
          v-model="confirmShow"
          :title="'确认退出？'"
          @on-confirm="loginOut"
        >
        </comfirm>
    </f7-page>
</template>
<script>
    import Toolbar from '../../components/toolbar.vue';
    import F7ListItem from "framework7-vue/src/components/list-item";

    export default {
        components:{
            F7ListItem,
            toolbar:Toolbar
        },
      data(){
          return{
            confirmShow:false
          }
      },
      methods:{
        loginOut(){
          console.log('退出')
        }
      },
      beforeMount(){
        this.axios.get('http://19lu-api.hayzon.com/v1/players').then((response)=>{
          console.log(response.data);
        })
      }
    }
</script>
