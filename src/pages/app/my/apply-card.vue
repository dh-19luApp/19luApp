<template>
    <f7-page style="background-color: #f5f5f5">
        <f7-navbar title="申请参赛证" back-link="Back"></f7-navbar>

            <f7-list form style="background-color: white;border-bottom: 1px solid #e5e5e5;border-top:1px solid #e5e5e5;">
                <li>
                    <div class="item-content">
                        <div class="item-inner">
                            <div class="item-title label">收货地址</div>
                            <div class="item-input" style="margin-right:15%; ">
                                <input type="text" placeholder="收货地址" class="">
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="item-content">
                        <div class="item-inner">
                            <div class="item-title label">联系方式</div>
                            <div class="item-input" style="margin-right:15%; ">
                                <input type="text" placeholder="联系方式" class="">
                            </div>
                        </div>
                    </div>
                </li>

            </f7-list>

            <f7-button active style="border-radius: 8px;margin: 20px;">确定</f7-button>

    </f7-page>
</template>

<script>
    export default {}
</script>