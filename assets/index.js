var PageRenderer = (function(){
    var pages = {};

    return {
        add: function(page){
            pages[page.getId()] = page;
        },
        get: function(pageId){
            return pages[pageId];
        },
        render: function(pageId){
            var page = pages[pageId];
            page.render('target');
        }
    }
})();

(function(){
    
    var p1 = function(){
        this.getId = function(){
            return 'p1';
        }
        this.render = function(target){
            console.log('render', target);
        }
    }

    PageRenderer.add(new p1());

    

})();


$(document).ready(function() {

    $('.nav-link').click(function(event){
        $('.nav-link').removeClass('active');
        $(event.target).addClass('active');

        PageRenderer.render('p1');

    });

    
});