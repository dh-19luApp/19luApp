<template>
    <f7-page>
        <f7-navbar title="动态详情" back-link="Back">
        </f7-navbar>

        <f7-list style="margin-top: -20px;">
            <div class="page-content">
                <div class="content-block-title ng-binding" style="margin-left: 10px;">这一年，习近平引领“一带一路”建设行稳致远</div>
                <div class="card ft-detail-header-img">
                    <div style="background-image:url(https://loremflickr.com/1000/700/nature?lock=5);width: 100%;height: 150px;" valign="bottom" class="card-header color-white no-border ng-binding"></div>
                    <div class="card-content">
                        <div class="card-content-inner">
                            <p class="color-gray ng-binding">Release on May 8th, 2015</p>
                            <p class="ng-binding" style="margin-bottom: 30px;">From the Academy Award winning director of A SEPARATION comes this gripping mystery set among a group of old friends on a holiday retreat. With the return of their close friend Ahmad from Germany, a group of former college pals decide to reunite for a weekend outing by the Caspian Sea. The fun starts right away as they quickly catch on to the plan of lively Sepideh, who has brought along Elly, her daughter's kindergarten teacher, in hopes of setting her up with recently divorced Ahmad. But seemingly trivial lies, which start accumulating from the moment the group arrives at the seashore, suddenly swing round and come back full force when one afternoon Elly suddenly vanishes. Her mysterious disappearance sets in motion a series of deceptions and revelations that threaten to shatter everything they hold dear. (C) Cinema Guild</p>
                        </div>
                    </div>
                </div>
            </div>
        </f7-list>
    </f7-page>
</template>

<script>
    import F7Toolbar from "framework7-vue/src/components/toolbar";
    export default {
        name: "view",
        components: {F7Toolbar}
    }
</script>

<style scoped>

</style>