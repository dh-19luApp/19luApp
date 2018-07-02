<template>
    <f7-page>

        <f7-navbar title="分组管理" back-link="Back">
            <f7-nav-right>
                <f7-link open-panel="right" href="/friends/group/:id">完成</f7-link>
            </f7-nav-right>
        </f7-navbar>
        <f7-list form>

            <f7-list-item>
                <f7-label>分组名称</f7-label>
                <f7-input type="text" placeholder="分组名称"/>
            </f7-list-item>

        </f7-list>

    </f7-page>
</template>

<script>
    export default {}
</script>