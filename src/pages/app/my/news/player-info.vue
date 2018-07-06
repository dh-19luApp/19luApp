<template>
    <f7-page style="background-color:#f5f5f5;">
        <f7-navbar title="选手信息" back-link="Back"></f7-navbar>
        <div class="from-group-title" style="margin-bottom: -30px;margin-top:-10px;">
            <div class="colony-block-title content-block-title ng-binding">基本资料
            </div>
        </div>
        <f7-list form style="background-color:white;border-bottom:1px solid #e5e5e5;border-top: 1px solid #e5e5e5">

            <li>
                <div class="item-content">
                    <div class="item-inner">
                        <div class="item-title label">姓名</div>
                        <div class="item-input" style="margin-right:15%; ">
                            <input type="text" :value="data.username">
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="item-content">
                    <div class="item-inner">
                        <div class="item-title label">性别</div>
                        <div class="item-input" style="margin-right:8%;width: 200px; ">
                            <select>
                                <option>男</option>
                                <option>女</option>
                            </select>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="item-content">
                    <div class="item-inner">
                        <div class="item-title label">出生日期</div>
                        <div class="item-input" style="margin-right: 23%">
                            <input type="date" :value="data.birthday" >
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="item-content">
                    <div class="item-inner">
                        <div class="item-title label">就读学校</div>
                        <div class="item-input" style="margin-right:15%; ">
                            <input type="text" :value="data.school">
                        </div>
                    </div>
                </div>
            </li>
            <f7-list-item link="/my/news/id-card/:id" title="上传身份照片"></f7-list-item>
            <f7-list-item link="/my/news/about/:id" title="上传一寸免冠照"></f7-list-item>
            <f7-list-item link="/my/news/level-info/:id" title="段位信息"></f7-list-item>
            <f7-list-item link="/my/news/apply-card/:id" title="参赛证编号"></f7-list-item>
            <f7-list-item link="/my/news/set-address/:id" title="证书邮寄地址"></f7-list-item>
            <li>
                <div class="item-content">
                    <div class="item-inner">
                        <div class="item-title label">培训机构</div>
                        <div class="item-input" style="margin-right:15%; ">
                            <input type="text" :value="data.agency">
                        </div>
                    </div>
                </div>
            </li>
        </f7-list>

        <f7-button active style="border-radius: 8px;margin: 20px;" @click="confirmShow=true">保存</f7-button>
        <comfirm
                v-model="confirmShow"
                :title="'保存成功！'"
                @on-confirm="loginOut"
        >
        </comfirm>
    </f7-page>
</template>

<script>
    export default {
        data(){
            return{
                confirmShow:false
            }
        },
        beforeMount(){
            this.$store.commit('player/setId',this.$f7route.params.id);
            this.$store.dispatch('player/getAllMsg');
        },
        computed:{
            data:function () {
                return this.$store.state.player.all
            }
        },
        methods:{
            loginOut(){
                console.log('保存成功')
            }
        }
    }
</script>