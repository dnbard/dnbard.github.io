(function(global){
    var $ = window.jQuery;

    if (window.jQuery === undefined){
        throw new Error('jQuery not found');
    }

    function init(parent){
        var startYear = 2008,
            currentYear = new Date().getFullYear(),
            workExperience = currentYear - startYear;

        parent.find('#years').text(workExperience);

        parent.find('._tada').on('mouseenter', function(event){
            $(event.target).addClass('animated tada')
                .css('z-index', 100);
        });

        parent.find('._tada').on('mouseleave', function(event){
            $(event.target).removeClass('animated tada')
                .css('z-index', 0);
        });
    }

    init($('body'));
})(window);
