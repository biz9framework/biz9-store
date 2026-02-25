/*
Copyright 2016 Certified CoderZ
Author: Brandon Poole Sr. (biz9framework@gmail.com)
License GNU General Public License v3.0
Description: BiZ9 Framework: Store
*/
const {Scriptz}=require("biz9-scriptz");
const {Log,Str,Num,Obj}=require("biz9-utility");
const {Data_Logic,Data_Field} = require("/home/think1/www/doqbox/biz9-framework/biz9-data-logic/source");
class Store_Table {
    //cart
    static CART="cart_biz";
    static CART_ITEM="cart_item_biz";
    static CART_SUB_ITEM="cart_sub_item_biz";
    //order
    static ORDER_PAYMENT = 'order_payment_biz';
    static ORDER="order_biz";
    static ORDER_ITEM="order_item_biz";
    static ORDER_SUB_ITEM="order_sub_item_biz";
    static ORDER_PAYMENT="order_payment_biz";
    //product
    static PRODUCT = 'product_biz';
}
class Store_Field {
    //cart
    static CART_NUMBER = 'cart_number';
    static CART_ID = 'cart_id';
    static CART_ITEM_ID = 'cart_item_id';
    //order
    static ORDER_NUMBER = 'order_number';
    static ORDER_ID = 'order_id';
    static ORDER_ITEM_ID = 'order_item_id';
    //other
    static GRAND_TOTAL = 'grand_total';
}
class Store_Title {
    //cart
    static CART='Cart';
    static CART_ITEMS='Cart Items';
    static CART_SUB_ITEMS='Cart Sub Items';
    static CART_ITEMS='Cart Items';
    static CART_SUB_ITEMS='Cart Sub Items';
    //order
    static ORDER='Order';
    static ORDER_ITEMS='Order Items';
    static ORDER_SUB_ITEMS='order Sub Items';
    static ORDER_STATUS_NEW="New";
    static ORDER_STATUS_OPEN="Open";
    static ORDER_STATUS_COMPLETE="Complete";
    static ORDER_STATUS_RETURNED="Returned";
    static ORDER_STATUS_ON_HOLD="On Hold";
    static ORDER_STATUS_CANCELLED="Cancelled";
    //product
    static PRODUCT="Product";
}
class Store_Type {
    //cart
    static CART_SUB_TYPE_STANDARD = 'standard';
    static CART_SUB_TYPE_SHIPPING = 'shipping';
    static CART_SUB_TYPE_COUPON = 'coupon';
    static CART_SUB_TYPE_GIFT_CARD = 'gift_card';
    //order
    static ORDER_STATUS_NEW="new";
    static ORDER_STATUS_OPEN="open";
    static ORDER_STATUS_COMPLETE="complete";
    static ORDER_STATUS_RETURNED="returned";
    static ORDER_STATUS_ON_HOLD="on_hold";
    static ORDER_STATUS_CANCELLED="cancelled";
}
class Store_Logic {
    //cart -- start
    static get_cart = (user_id,option) => {
        // - option - //
        // - cart_code = 'CA'
        option = !Obj.check_is_empty(option) ? option : {};
        let cart_code = option.cart_code ? option.cart_code+"-" : "";
        return Data_Logic.get(Store_Table.CART,0,{data:{user_id:user_id,cart_number:cart_code + Num.get_id(99999),grand_total:0,cart_items:[]}});
    };
    static get_cart_item = (parent_table,parent_id,quanity,cost) =>{
        return Data_Logic.get(Store_Table.CART_ITEM,0,{data:{parent_table:parent_table,parent_id:parent_id,quanity:quanity?quanity:0,cost:cost?cost:0,cart_sub_items:[]}});
    };
    static get_cart_sub_item = (cart_item_id,type,parent_table,parent_id,quanity,cost) =>{
        return Data_Logic.get(Store_Table.CART_SUB_ITEM,0,{data:{type:type,cart_item_id:cart_item_id,quanity:quanity,cost:cost,parent_table:parent_table,parent_id:parent_id}});
    };
    static get_cart_sub_items = () =>{
        return [
            {title:Str.get_title(Title.CART_SUB_TYPE_STANDARD),label:Str.get_title(Title.CART_SUB_TYPE_STANDARD),type:Title.CART_SUB_TYPE_STANDARD},
            {title:Str.get_title(Title.CART_SUB_TYPE_SHIPPING),label:Str.get_title(Title.CART_SUB_TYPE_SHIPPING),type:Title.CART_SUB_TYPE_SHIPPING},
            {title:Str.get_title(Title.CART_SUB_TYPE_COUPON),label:Str.get_title(Title.CART_SUB_TYPE_COUPON),type:Title.CART_SUB_TYPE_COUPON},
            {title:Str.get_title(Title.CART_SUB_TYPE_GIFT_CARD),label:Str.get_title(Title.CART_SUB_TYPE_GIFT_CARD),type:Title.CART_SUB_TYPE_GIFT_CARD}
        ];
    };
    static get_cart_total = (cart) => {
        let grand_total = 0;
        cart.cart_items.forEach(cart_item => {
            cart_item.sub_total = 0;
            if(!isNaN(cart_item.cost)){
                cart_item.sub_total = (cart_item.sub_total + cart_item.cost) * cart_item.quanity;
                grand_total = grand_total + cart_item.sub_total;
            }
            cart_item.cart_sub_items.forEach(cart_sub_item => {
                cart_sub_item.sub_total = 0;
                if(!isNaN(cart_sub_item.cost)){
                    cart_sub_item.sub_total = (cart_sub_item.sub_total + cart_sub_item.cost) * cart_sub_item.quanity;
                    grand_total = grand_total + cart_sub_item.sub_total;
                }
            });
        });
        cart.grand_total = grand_total;
        return cart;
    };
    //cart -- end
    //order -- start
    static get_order = (cart,option) => {
        option = option?option:{};
        let order_code = option.order_code ? option.order_code+"-" : "";
        let order = Data_Logic.get(Store_Table.ORDER,0,{data:{
            order_number:order_code + Num.get_id(99999),
            user_id:cart.user_id,
            cart_number:cart.cart_number,
            grand_total:cart.grand_total,
            status:Store_Type.ORDER_STATUS_NEW,
            order_items:[]
        }});
        for(const key in cart) {
            if(!Obj.check_is_array(cart[key]) && Obj.check_is_object(cart[key])
                && key != Data_Field.ID && key != Data_Field.TABLE
                && key != Data_Field.SOURCE && key != Data_Field.SOURCE_ID
                && key != Data_Field.DATE_CREATE && key != Data_Field.DATE_SAVE)
            {
                order[key] = cart[key];
            }
        }
        cart.cart_items.forEach(cart_item => {
            let order_item = Data_Logic.get(Store_Table.ORDER_ITEM,0,{data:{
                order_number:order.order_number,
                parent_table:cart_item.parent_table,
                parent_id:cart_item.parent_id,
                user_id:order.user_id,
                quanity:cart_item.quanity?cart_item.quanity:0,
                cost:cart_item.cost?cart_item.cost:0,
                order_sub_items:[]
            }});
            for(const key in cart_item){
                if(!Obj.check_is_array(cart_item[key]) && Obj.check_is_object(cart_item[key])
                    && key != Data_Field.ID && key != Data_Field.TABLE
                    && key != Data_Field.SOURCE && key != Data_Field.SOURCE_ID
                    && key != Data_Field.DATE_CREATE && key != Data_Field.DATE_SAVE){
                    order_item[key] = cart_item[key]
                }
            }
            cart_item.cart_sub_items.forEach(cart_sub_item => {
                let order_sub_item = Data_Logic.get(Store_Table.ORDER_SUB_ITEM,0,{data:{
                    type:cart_sub_item.type,
                    cart_item_id:cart_sub_item.cart_item_id,
                    quanity:cart_sub_item.quanity,
                    cost:cart_sub_item.cost
                }});
                for(const key in cart_sub_item){
                    if(!Obj.check_is_array(order_sub_item[key]) && Obj.check_is_object(order_sub_item[key])
                        && key != Data_Field.ID && key != Data_Field.TABLE
                        && key != Data_Field.SOURCE && key != Data_Field.SOURCE_ID
                        && key != Data_Field.DATE_CREATE && key != Data_Field.DATE_SAVE){
                        order_sub_item[key] = cart_sub_item[key]
                    }
                }
                order_item.order_sub_items.push(order_sub_item);
            });
            order.order_items.push(order_item);
        });
        return order;
    };
    static get_order_statuses(){
        return [
            {value:Title.ORDER_STATUS_NEW,label:Title.ORDER_STATUS_NEW,title:Title.ORDER_STATUS_NEW},
            {value:Title.ORDER_STATUS_OPEN,label:Title.ORDER_STATUS_OPEN,title:Title.ORDER_STATUS_OPEN},
            {value:Title.ORDER_STATUS_COMPLETE,label:Title.ORDER_STATUS_COMPLETE,title:Title.ORDER_STATUS_COMPLETE},
            {value:Title.ORDER_STATUS_RETURNED,label:Title.ORDER_STATUS_RETURNED,title:Title.ORDER_STATUS_RETURNED},
            {value:Title.ORDER_STATUS_ON_HOLD,label:Title.ORDER_STATUS_ON_HOLD,title:Title.ORDER_STATUS_ON_HOLD},
            {value:Title.ORDER_STATUS_CANCELLED,label:Title.ORDER_STATUS_CANCELLED,title:Title.ORDER_STATUS_CANCELLED},
        ];
    };
    static get_order_total = (order) => {
        let grand_total = 0;
        order.order_items.forEach(order_item => {
            order_item.sub_total = 0;
            if(!isNaN(order_item.cost)){
                order_item.sub_total = (order_item.sub_total + order_item.cost) * order_item.quanity;
                grand_total = grand_total + order_item.sub_total;
            }
            order_item.order_sub_items.forEach(order_sub_item => {
                order_sub_item.sub_total = 0;
                if(!isNaN(order_sub_item.cost)){
                    order_sub_item.sub_total = (order_sub_item.sub_total + order_sub_item.cost) * order_sub_item.quanity;
                    grand_total = grand_total + order_sub_item.sub_total;
                }
            });
        });
        order.grand_total = grand_total;
        return order;
    };
    static get_order_payment = (order_number,payment_method_type,payment_amount) => {
        return Data_Logic.get(Store_Table.ORDER_PAYMENT,0,{data:
            {
                order_number:order_number,
                payment_method_type:payment_method_type,
                payment_amount:payment_amount,
                transaction_id:Title.ORDER_TRANSACTION_ID + Num.get_id(99999)
            }});
    };
    //order -- end
   //stock -- start
    static get_stocks = () => {
        const stocks=
            [
                { value: "0", label: "Out of Stock" },
                { value: "1", label: "Only 1 Left" },
                { value: "2", label: "Less Than 3 Left" },
                { value: "3", label: "Availble" }
            ];
        return stocks;
    };
    static get_stock_by_value = (stock_val) => {
        switch(stock_val)
        {
            case "0":
                return 'Out of Stock';
                break;
            case "1":
                return 'Only 1 Left';
                break;
            case "2":
                return 'Less Than 3 Left';
                break;
            case "3":
                return 'Availble';
                break;
            default:
                return 'Availble';
                break;
        }
    };
    //stock -- end
    //product -- start
    static get_test_cost(){
        return String(Num.get_id(999)) + "." + String(Num.get_id(99));
    }
    static get_test_product = (option) =>{
        option = !Obj.check_is_empty(option) ? option : {title:'Product'};
        let data = Data_Logic.get(Store_Table.PRODUCT,0,option);
        data.cost = Store_Logic.get_test_cost();
        data.old_cost = Store_Logic.get_test_cost();
        data.category = "Category "+String(Num.get_id());
        data.type = "Type "+String(Num.get_id());
        data.sub_type = "Sub Type "+String(Num.get_id());
        data.stock = String(Num.get_id(3-1));
        data.tag = "Tag "+ Num.get_id() + ", Tag "+Num.get_id() + ", Tag "+ Num.get_id();
        return data;
    };
    //product -- end
}
module.exports = {
    Store_Field,
    Store_Title,
    Store_Table,
    Store_Type,
    Store_Logic,
};
