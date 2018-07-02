<template>
    <f7-page>
        <f7-navbar>
            <f7-searchbar
                    cancel-link="Cancel"
                    placeholder="输入赛事名称查询"
                    :clear-button="true"
            ></f7-searchbar>
            <f7-nav-right>
                <f7-link open-panel="right" href="/game/enroll/against/">取消</f7-link>
            </f7-nav-right>
        </f7-navbar>
    </f7-page>
</template>

<script>
    export default {}
</script>