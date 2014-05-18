$(document).ready((function() {
    var left = document.id("frame-left");
    var leftSize= $('#frame-left').offset;

    
    (function() {
    var nag = document.id("frame-left"), nagSize = nag.getSize().y, nagTop = nag.getPosition().y; 
    if (Browser.ie6) {
        // degrade ie6
        nag.addClass("absolute");
        return;
    }
    
           
    var totalScroll = window.getScrollSize().y, footerSize = document.id("new-container").getSize().y;
    totalScroll -= footerSize;

    window.addEvent("scroll", function() {
        var scroll = this.getScroll().y;

        if (scroll + nagSize + nagTop >= totalScroll) {
            
            nag.addClass("absolute").setStyles({
                top: totalScroll - nagSize - 20
            });
        }
        else if(nag.hasClass("absolute")) {
            // back to fixed.
            nag.removeClass("absolute").setStyles({
                top: nagTop
            });
        }
    });
    
})();

})());

 