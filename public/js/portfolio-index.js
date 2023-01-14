(function($, window, document, undefined) {
    var gridContainer = $('#grid-container'),
        filtersContainer = $('#filters-container');
    gridContainer.cubeportfolio({
        defaultFilter: '*',
        animationType: 'slideDelay',
        gapHorizontal: 5,
        gapVertical: 5,
        gridAdjustment: 'responsive',
        caption: 'minimal',
        displayType: 'bottomToTop',
        displayTypeSpeed: 100,
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxShowCounter: true,
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageShowCounter: true,
        singlePageCallback: function(url, element) {},
        singlePageInlineDelegate: '.cbp-singlePageInline',
        singlePageInlinePosition: 'above',
        singlePageInlineShowCounter: true,
        singlePageInlineInFocus: true,
        singlePageInlineCallback: function(url, element) {}
    });
    filtersContainer.on('click', '.cbp-filter-item', function(e) {
        var me = $(this),
            wrap;
        if (!$.data(gridContainer[0], 'cubeportfolio').isAnimating) {
            if (filtersContainer.hasClass('cbp-l-filters-dropdown')) {
                wrap = $('.cbp-l-filters-dropdownWrap');
                wrap.find('.cbp-filter-item').removeClass('cbp-filter-item-active');
                wrap.find('.cbp-l-filters-dropdownHeader').text(me.text());
                me.addClass('cbp-filter-item-active');
            } else {
                me.addClass('cbp-filter-item-active').siblings().removeClass('cbp-filter-item-active');
            }
        }
        gridContainer.cubeportfolio('filter', me.data('filter'), function() {});
    });
    gridContainer.cubeportfolio('showCounter', filtersContainer.find('.cbp-filter-item'));
})(jQuery, window, document);