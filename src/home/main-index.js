require(['jquery', 'add', 'template'], function($, add, template){
    console.log(add(1,2));
    var html = template('home-tpl');
    $('.home').html(html);
})