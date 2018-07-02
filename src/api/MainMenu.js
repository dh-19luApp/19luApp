
var _items=[];

import axios from 'axios'

export default {
    getItems (cb) {
        axios({
            url:'http://19lu-api.hayzon.com/v1/menus/toolbar',
            method: 'get',
        })
            .then( (response) => {
                _items = response.data.data;
                setTimeout(() => cb(_items), 100);
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    clearCount(name) {
        let item = _items.find(item => item.name == name);
        if (item) {
            item.count = 0;
        } else {
            _items[0].count = 0;
        }
    }
}
