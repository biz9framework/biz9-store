/*
Copyright 2016 Certified CoderZ
Author: Brandon Poole Sr. (biz9framework@gmail.com)
License GNU General Public License v3.0
Description: BiZ9 Framework: Store - Test
*/
const async = require('async');
const assert = require('node:assert');
const {Log} = require("biz9-utility");
const {Data_Logic} = require("/home/think1/www/doqbox/biz9-framework/biz9-data-logic/source");
const {User_Logic} = require("/home/think1/www/doqbox/biz9-framework/biz9-user/source");
const {Store_Logic,Store_Type} = require("./index");

/*
 * availble tests
- connect
*/
/* --- TEST CONFIG START --- */
const APP_ID = 'test-stage-feb17';
/* --- TEST CONFIG END --- */

/* --- DATA CONFIG END --- */
//9_connect - 9_test_connect
describe('connect', function(){ this.timeout(25000);
    it("_connect", function(done){
        let error=null;
        let database = {};
        let data = {};
        async.series([
            async function(call){
                //-->
                let print_test = true;
                //-->
                //cart -- start
                let user = User_Logic.get_test({generate_id:true});
                let cart = Store_Logic.get_cart(user.id);
                let product_1 = Store_Logic.get_test_product({generate_id:true});
                let cart_item_1 = Store_Logic.get_cart_item(product_1.table,product_1.id,1,Store_Logic.get_test_cost());
                let product_sub_1 = Store_Logic.get_test_product({generate_id:true});
                let cart_sub_item_1 = Store_Logic.get_cart_sub_item(cart_item_1.id,Store_Type.CART_SUB_TYPE_STANDARD,product_1.table,product_1.id,1,Store_Logic.get_test_cost());
                cart_item_1.cart_sub_items.push(cart_sub_item_1);
                cart.cart_items.push(cart_item_1);
                Log.w('22_cart',cart);
                Log.w('22_cart_total',Store_Logic.get_cart_total(cart));
                Log.w('33_get_order',Store_Logic.get_order(cart));
                //cart -- end
                //
                //---
                if(print_test){;
                    Log.w('99_biz_data',biz_data);
                }
            },
        ],
            function(error, result){
                console.log('CONNECT-DONE');
                done();
            });
    });
});

