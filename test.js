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
const {Store_Logic} = require("./index");

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
                Log.w('11_user',user);
                let cart = Store_Logic.get_cart(user.id);
                Log.w('22_cart',cart);
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

