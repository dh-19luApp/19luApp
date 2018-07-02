<template>
    <f7-page no-navbar name="events">
        <f7-navbar title="赛事动态"></f7-navbar>
        <f7-toolbar tabbar>
            <f7-link tab-link="#tab1">赛事动态</f7-link>
            <f7-link tab-link="#tab2">赛事新闻</f7-link>

        </f7-toolbar>
        <div class="tabs">
            <div class="page-content tab tab-active" id="tab1" style="padding-top: 0px">
                <f7-list media-list class="margin-top-6">
                    <f7-list-item>
                        <a href="/events/view/:id">
                            <div class="text" style="color: black;">这一年，习近平引领“一带一路”建设行稳致远</div>
                            <div class="image" >
                                <img src="https://loremflickr.com/1000/700/nature?lock=5" style="width: 30%;height: 120px;">
                                <img src="https://loremflickr.com/1000/700/nature?lock=5" style="width: 30%;height: 120px;">
                                <img src="https://loremflickr.com/1000/700/nature?lock=5" style="width: 30%;height: 120px;">
                            </div>
                        </a>
                    </f7-list-item>
                    <f7-list-item>
                        <a href="/events/view/:id">
                            <div class="text" style="color: black;">这一年，习近平引领“一带一路”建设行稳致远这一年，习近平引领“一带一路”建设行稳致远</div>
                            <div class="image" >
                                <img src="https://loremflickr.com/1000/700/nature?lock=5" style="width: 30%;height: 120px;">
                                <img src="https://loremflickr.com/1000/700/nature?lock=5" style="width: 30%;height: 120px;">
                                <img src="https://loremflickr.com/1000/700/nature?lock=5" style="width: 30%;height: 120px;">
                            </div>
                        </a>
                    </f7-list-item>
                </f7-list>
            </div>

                                <!-- Tab 2 -->
            <div class="page-content tab" id="tab2" style="padding-top: 0px">
                <f7-list media-list class="margin-top-6">
                    <f7-list-item>
                        <a href="/events/view/:id">
                            <div class="text" style="color: black;">这一年，习近平引领“一带一路”建设行稳致远这一年，习近平引领“一带一路”建设行稳致远</div>
                            <div class="image" >
                                <img src="https://loremflickr.com/1000/700/nature?lock=5" style="width: 100%;height: 120px;">
                            </div>
                        </a>
                    </f7-list-item>
                </f7-list>
            </div>
        </div>
        <toolbar />
    </f7-page>
</template>
<script>
    import Toolbar from '../../components/toolbar.vue';
    export default {
        components:{
            toolbar:Toolbar
        },
    }

</script>