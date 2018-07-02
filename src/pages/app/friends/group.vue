<template>
    <f7-page style="background-color: #f5f5f5">

        <f7-navbar title="分配分组" back-link="Back">
            <f7-nav-right>
                <f7-link open-panel="right" href="/friends/add-attention/:id">完成</f7-link>
            </f7-nav-right>
        </f7-navbar>
        <f7-list style="background-color: white;border: 1px solid #e5e5e5;">
            <f7-list-item
                    link="/friends/add-group/:id"
                    title="分组"
            >
                关注的选手
            </f7-list-item>
        </f7-list>
        <f7-list form style="background-color: white;border:1px solid #e5e5e5">
            <f7-list-item radio name="my-radio" value="1" title="我关注的选手" checked></f7-list-item>
            <f7-list-item radio name="my-radio" value="2" title="2段选手"></f7-list-item>
            <f7-list-item radio name="my-radio" value="3" title="5段选手"></f7-list-item>
        </f7-list>



    </f7-page>
</template>

<script>
    export default {}
</script>