<template>
    <f7-page style="background-color: #f5f5f5;">
        <f7-navbar title="添加地址" back-link="Back"></f7-navbar>

        <f7-list form style="background-color: white;border-bottom: 1px solid #e5e5e5;border-top:1px solid #e5e5e5;">
            <li>
                <div class="item-content">
                    <div class="item-inner">
                        <div class="item-title label">联系人</div>
                        <div class="item-input" style="margin-right:15%; ">
                            <input type="text" placeholder="联系人" class="">
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="item-content">
                    <div class="item-inner">
                        <div class="item-title label">联系电话</div>
                        <div class="item-input" style="margin-right:15%; ">
                            <input type="text" placeholder="联系电话" class="">
                        </div>
                    </div>
                </div>
            </li>

            <li>
                <div class="item-content">
                    <div class="item-inner">
                        <div class="item-title label">所在地区</div>
                        <div class="item-input" style="margin-right:8%;width: 200px; ">
                            <select>
                                <option>请选择</option>
                                <option>北京</option>
                                <option>上海</option>
                            </select>
                        </div>
                    </div>
                </div>
            </li>

            <li>
                <div class="item-content">
                    <div class="item-inner">
                        <div class="item-title label">详细地址</div>
                        <div class="item-input" style="margin-right:15%; ">
                            <input type="text" placeholder="请输入详细地址信息" class="">
                        </div>
                    </div>
                </div>
            </li>

        </f7-list>
        <f7-button active style="border-radius: 8px;margin: 20px;">保存</f7-button>
    </f7-page>
</template>

<script>
    export default {}
</script>