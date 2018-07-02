<template>
    <f7-page>
        <f7-navbar>
            <f7-searchbar style="border-radius: 8px;margin:15px;height:40px;"
                    cancel-link="Cancel"
                    placeholder="输入姓名搜索"
                    :clear-button="true"
            ></f7-searchbar>
            <f7-nav-right>
                <f7-link open-panel="right" href="/friends/">取消</f7-link>
            </f7-nav-right>
        </f7-navbar>

    </f7-page>
</template>

<script>
    export default {}
</script>