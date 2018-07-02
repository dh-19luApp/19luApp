<template>
    <f7-page style="background-color: #f5f5f5">
        <f7-navbar title="关注我的" back-link="Back"></f7-navbar>
        <f7-toolbar theme="red" tabbar >
            <f7-link tab-link="#attention_my" >关注我的</f7-link>
            <f7-link tab-link="#friend_requests"><p style="height: 30px">好友申请<span class="badge bg-red" style="position: relative;left: 5px;top: -5px;line-height: 1;">5</span></p>
            </f7-link>
        </f7-toolbar>
        <!-- Tabs -->
        <div class="tabs">
            <!-- First tab, active -->
            <div class="page-content tab tab-active" id="attention_my" style="padding-top: 0px">
                <f7-list media-list class="margin-top-6">
                    <f7-list-item
                            media="<img src='http://lorempixel.com/160/160/people/1'/>"
                    >
                        <div slot="media" style="margin-left: 10px;">Media</div>
                        <span slot="after">1221</span>
                    </f7-list-item>
                </f7-list>
            </div>
            <!-- Second tab -->
            <div class="page-content tab" id="friend_requests" style="padding-top: 0px;">
                <div class="from-group-title" style="padding-top:5px;">
                    <div class="content-block-title ng-binding" style="color: gray">一天前</div>
                </div>
                <f7-list media-list class="margin-top-6" style="margin-bottom: 10px;background-color: white;border-bottom: 1px solid #e5e5e5;border-top:1px solid #e5e5e5">
                    <f7-list-item
                            title="aaa"
                            text="我是abc"
                            media="http://lorempixel.com/160/160/people/1"
                    >
                        <div slot="content" class="tail">
                            <f7-link href="/my/friend-requests/:id" style="border: 1px solid gray;width: 50px;height: 34px;color: gray;border-radius: 8px">查看</f7-link>
                        </div>
                    </f7-list-item>
                    <f7-list-item
                            title="aaa"
                            text="我是abc"
                            media="http://lorempixel.com/160/160/people/1"
                    >
                        <div slot="content" class="tail">
                            <f7-link href="/my/friend-requests/:id" style="border: 1px solid gray;width: 50px;height: 34px;color: gray;border-radius: 8px">查看</f7-link>
                        </div>
                    </f7-list-item>
                    <f7-list-item
                            title="aaa"
                            text="我是abc"
                            media="http://lorempixel.com/160/160/people/1"
                    >
                        <div slot="content" class="tail">
                            <f7-link href="/my/friend-requests/:id" style="border: 1px solid gray;width: 50px;height: 34px;color: gray;border-radius: 8px">查看</f7-link>
                        </div>
                    </f7-list-item>
                </f7-list>
                <div class="from-group-title" style="padding-top: 5px;">
                    <div class="content-block-title ng-binding" style="color: gray">三天前</div>
                </div>
                <f7-list media-list class="margin-top-6" style="background-color: white;border-bottom: 1px solid #e5e5e5;border-top:1px solid #e5e5e5">
                    <f7-list-item
                            title="aaa"
                            text="我是abc"
                            media="http://lorempixel.com/160/160/people/1"
                    >
                        <div slot="content" class="tail">
                            <f7-link href="/my/friend-requests/:id" style="border: 1px solid gray;width: 50px;height: 34px;color: gray;border-radius: 8px">查看</f7-link>
                        </div>
                    </f7-list-item>
                    <f7-list-item
                            title="aaa"
                            text="我是abc"
                            media="http://lorempixel.com/160/160/people/1"
                    >
                        <div slot="content" class="tail">
                            <f7-link href="/my/friend-requests/:id" style="border: 1px solid gray;width: 50px;height: 34px;color: gray;border-radius: 8px">查看</f7-link>
                        </div>
                    </f7-list-item>
                    <f7-list-item
                            title="aaa"
                            text="我是abc"
                            media="http://lorempixel.com/160/160/people/1"
                    >
                        <div slot="content" class="tail">
                            <f7-link href="/my/friend-requests/:id" style="border: 1px solid gray;width: 50px;height: 34px;color: gray;border-radius: 8px">查看</f7-link>
                        </div>
                    </f7-list-item>
                </f7-list>
            </div>
        </div>


    </f7-page>
</template>

<script>
    export default {
    }
</script>