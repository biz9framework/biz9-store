/*
Copyright 2016 Certified CoderZ
Author: Brandon Poole Sr. (biz9framework@gmail.com)
License GNU General Public License v3.0
Description: BiZ9 Framework: Store - Test
*/
const async = require('async');
const assert = require('node:assert');
const {Log} = require("biz9-utility");
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
                //-- BLANK START --//
                //let parent = Data_Logic.get(Project_Table.PRODUCT,0,{data:{field_1:'value_'+Num.get_id(),field_2:'value_'+Num.get_id()}});
                //-- BLANK END --//
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

