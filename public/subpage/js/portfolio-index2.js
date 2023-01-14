(function($,window,document,undefined){var gridContainer=$('#grid-container'),filtersContainer=$('#filters-container');gridContainer.cubeportfolio({defaultFilter:'*',animationType:'flipOut',gapHorizontal:45,gapVertical:30,gridAdjustment:'responsive',caption:'zoom',displayType:'lazyLoading',displayTypeSpeed:100,lightboxDelegate:'.cbp-lightbox',lightboxGallery:true,lightboxTitleSrc:'data-title',lightboxShowCounter:true,singlePageDelegate:'.cbp-singlePage',singlePageDeeplinking:true,singlePageStickyNavigation:true,singlePageShowCounter:true,singlePageCallback:function(url,element){var t=this;$.ajax({url:url,type:'GET',dataType:'html',timeout:5000}).done(function(result){t.updateSinglePage(result);}).fail(function(){t.updateSinglePage("Error! Please refresh the page!");});},singlePageInlineDelegate:'.cbp-singlePageInline',singlePageInlinePosition:'above',singlePageInlineShowCounter:true,singlePageInlineInFocus:true,singlePageInlineCallback:function(url,element){}});filtersContainer.on('click','.cbp-filter-item',function(e){var me=$(this),wrap;if(!$.data(gridContainer[0],'cubeportfolio').isAnimating){if(filtersContainer.hasClass('cbp-l-filters-dropdown')){wrap=$('.cbp-l-filters-dropdownWrap');wrap.find('.cbp-filter-item').removeClass('cbp-filter-item-active');wrap.find('.cbp-l-filters-dropdownHeader').text(me.text());me.addClass('cbp-filter-item-active');}else{me.addClass('cbp-filter-item-active').siblings().removeClass('cbp-filter-item-active');}}
gridContainer.cubeportfolio('filter',me.data('filter'),function(){});});gridContainer.cubeportfolio('showCounter',filtersContainer.find('.cbp-filter-item'));$('.cbp-l-loadMore-button-link').on('click',function(e){e.preventDefault();var clicks,me=$(this),oMsg;if(me.hasClass('cbp-l-loadMore-button-stop'))return;clicks=$.data(this,'numberOfClicks');clicks=(clicks)?++clicks:1;$.data(this,'numberOfClicks',clicks);oMsg=me.text();me.text('LOADING...');$.ajax({url:me.attr('href'),type:'GET',dataType:'HTML'}).done(function(result){var items,itemsNext;items=$(result).filter(function(){return $(this).is('div'+'.cbp-loadMore-block'+ clicks);});gridContainer.cubeportfolio('appendItems',items.html(),function(){me.text(oMsg);itemsNext=$(result).filter(function(){return $(this).is('div'+'.cbp-loadMore-block'+(clicks+ 1));});if(itemsNext.length===0){me.text('NO MORE WORKS');me.addClass('cbp-l-loadMore-button-stop');}});}).fail(function(){});});})(jQuery,window,document);