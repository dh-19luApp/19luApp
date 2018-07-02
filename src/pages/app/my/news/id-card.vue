<template>
    <f7-page style="background-color: #f5f5f5">
        <f7-navbar title="证件信息" back-link="Back"></f7-navbar>

        <f7-list form style="background-color: white;border-bottom: 1px solid #e5e5e5;border-top:1px solid #e5e5e5">
            <li>
                <div class="item-content">
                    <div class="item-inner">
                        <div class="item-title label">证件类型</div>
                        <div class="item-input" style="margin-right:8%;width: 200px; ">
                            <select :value="card">
                                <option value="请选择" >请选择</option>
                                <option value="身份证" >身份证</option>
                                <option value="护照" >护照</option>
                            </select>
                        </div>
                    </div>
                </div>
            </li>

            <f7-list-item link="" title="证件照片" :media="image"></f7-list-item>
            <li>
                <div class="item-content">
                    <div class="item-inner">
                        <div class="item-title label">证件号</div>
                        <div class="item-input" style="margin-right:15%; ">
                            <input type="text" :value="num">
                        </div>
                    </div>
                </div>
            </li>
        </f7-list>
        <f7-button active style="border-radius: 8px;margin:20px;">保存</f7-button>
    </f7-page>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        computed:{
            ...mapState(('player'),{
                card:state =>
                    state.all.card_type,
                image:state =>
                    state.all.level_img,
                num:state =>
                    state.all.id_card

            })
        },

    }
</script>