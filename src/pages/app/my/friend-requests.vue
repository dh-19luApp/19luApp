<template>
    <f7-page>
        <f7-navbar title="好友申请" back-link="Back"></f7-navbar>

        <f7-list media-list style="margin-top: 0px;">
            <f7-list-item

                    title="倪坤"
                    text="5段"
                    media="http://lorempixel.com/160/160/people/1"
            ></f7-list-item>
        </f7-list>

        <f7-list form style="margin-top: -32px;">
            <f7-list contacts>


                    <f7-list-item title="设置备注与分组" group-title></f7-list-item>
                <li>
                    <div class="item-content">
                        <div class="item-inner">
                            <div class="item-title label">备注</div>
                            <div class="item-input">
                                <input type="text" style="margin-right: 90px;"  placeholder="李伟妈妈">
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="item-content">
                        <div class="item-inner">
                            <div class="item-title select">分组</div>
                            <div class="item-input">
                            <f7-input type="select" style="margin-right:205px;">
                                <option value="">好友</option>
                                <option value="2">围棋5段</option>
                            </f7-input>
                            </div>
                        </div>
                    </div>
                </li>
            </f7-list>
            <f7-list contacts hidden>
                <f7-list-item title="申请权限" group-title></f7-list-item>
                <f7-list-item>
                    <f7-label>关注选手动态</f7-label>
                    <f7-input type="select">
                        <option value="" >请选择</option>
                        <option value="1">好友</option>
                        <option value="2">围棋5段</option>
                    </f7-input>
                </f7-list-item>
                <f7-list-item>
                    <f7-label>修改基本信息</f7-label>
                    <f7-input type="select">
                        <option value="" selected>请选择</option>
                        <option value="1">好友</option>
                        <option value="2">围棋5段</option>
                    </f7-input>
                </f7-list-item>
                <f7-list-item>
                    <f7-label>上传段位证书</f7-label>
                    <f7-input type="select">
                        <option value="" selected>请选择</option>
                        <option value="1">好友</option>
                        <option value="2">围棋5段</option>
                    </f7-input>
                </f7-list-item>
                <f7-list-item>
                    <f7-label>委托比赛报名</f7-label>
                    <f7-input type="select">
                        <option value="" selected>请选择</option>
                        <option value="1">好友</option>
                        <option value="2">围棋5段</option>
                    </f7-input>
                </f7-list-item>
            </f7-list>
        </f7-list>

        <f7-button active style="margin: 20px;border-radius: 8px">通过</f7-button>

        <f7-button active fill style="margin: 20px;border-radius: 8px;background-color: white;border: 1px solid gray;color:black;">忽略</f7-button>
    </f7-page>
</template>

<script>
    export default {}
</script>