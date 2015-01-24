asyncTest('Ajax GET test', function(){
    expect(2);

    easyAjax.ajax({
        method: 'GET',
        url: '/test/test-get-response.html',
        success: function(status, response){
            equal(status, 200);
            equal(response.result, 'Ajax GET test success!');
            start();
        }
    });
})
asyncTest('Ajax GET test with params', function(){
    expect(2);

    easyAjax.ajax({
        method: 'GET',
        url: '/cgi-bin/get.py',
        params: {
            A: 'testA',
            B: 'testB' 
        },
        success: function(status, response){
            equal(status, 200);
            equal(response.result, 'GETtestAtestB');
            start();
        }
    });
})
asyncTest('Ajax POST test with params', function(){
    expect(2);

    easyAjax.ajax({
        method: 'POST',
        url: '/cgi-bin/post.py',
        params: {
            A: 'testA',
            B: 'testB' 
        },
        success: function(status, response){
            equal(status, 200);
            equal(response.result, 'POSTtestAtestB');
            start();
        }
    });
})
