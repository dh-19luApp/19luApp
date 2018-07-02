<template>
    <f7-page style="background-color: #f5f5f5">
        <f7-navbar title="添加关注" back-link="Back">
            <f7-nav-right>
                <f7-link open-panel="right" href="">发送</f7-link>
            </f7-nav-right>
        </f7-navbar>

        <f7-list media-list style="margin-top:0px;margin-bottom: 0px;">
            <f7-list-item
                    title="倪坤"
                    text="围棋5段"
                    media="http://lorempixel.com/88/88/fashion/4"
            ></f7-list-item>
        </f7-list>



            <f7-list contacts style="margin-top: 0px;margin-bottom: 0px;">
                <f7-list-item title="填写验证信息" group-title></f7-list-item>
                <f7-list-item style="background-color: white;border: 1px solid #e5e5e5;">
                    <f7-input type="textarea" placeholder="验证信息"></f7-input>
                </f7-list-item>
            </f7-list>

            <f7-list contacts style="margin-top: 0px;">
                <f7-list-item title="设置备注与分组" group-title></f7-list-item>
                <f7-list-item style="background-color: white;border-top: 1px solid #e5e5e5;">
                    <div class="item-content">

                            <div class="item-title label">备注</div>
                            <div class="item-input" >
                                <input type="text" placeholder="备注姓名" style="margin-left: 20px;">

                        </div>
                    </div>
                </f7-list-item>


                <f7-list-item link="/friends/group/:id" style="background-color: white;border: 1px solid #e5e5e5;">
                    <span style="margin:10px 15px;">分组</span>
                </f7-list-item>
            </f7-list>



    </f7-page>
</template>

<script>
    export default {}
</script>