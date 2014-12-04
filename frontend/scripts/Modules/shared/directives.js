angular.module('app.directives', []).directive('imgHolder', [
    function () {
        return {
            restrict: 'A',
            link: function (scope, ele, attrs) {
                return Holder.run({
                    images: ele[0]
                });
            }
        };
    }
]).directive('customBackground', function () {
    return {
        restrict: "A",
        controller: [
            '$scope', '$element', '$location', function ($scope, $element, $location) {
                var addBg, path;
                path = function () {
                    return $location.path();
                };
                addBg = function (path) {
                    $element.removeClass('body-home body-special body-tasks body-lock');
                    if(path == '/') {
                        return $element.addClass('body-home');
                    }
                    else if(path == '/404' || path == '/500' || path == '/login' || path == '/forgot' || path.indexOf('/redefine') > -1) {
                        return $element.addClass('body-special');
                    }
                    else if(path == '/locked') {
                        return $element.addClass('body-special body-lock');
                    }
                    else if(path == '/tasks') {
                        return $element.addClass('body-tasks');

                    }



                    /*switch (path) {
                        case '/':
                            return $element.addClass('body-home');
                        case '/404':
                        case '/500':
                        case '/login':
                        case '/forgot':
                        case '/redefine':
                            return $element.addClass('body-special');
                        case '/lock-screen':
                        case '/tasks':
                    }*/
                };
                addBg($location.path());
                return $scope.$watch(path, function (newVal, oldVal) {
                    if (newVal === oldVal) {
                        return;
                    }
                    return addBg($location.path());
                });
            }
        ]
    };
}).directive('uiColorSwitch', [
    function () {
        return {
            restrict: 'A',
            link: function (scope, ele, attrs) {
                return ele.find('.color-option').on('click', function (event) {
                    var $this, hrefUrl, style;
                    $this = $(this);
                    hrefUrl = void 0;
                    style = $this.data('style');
                    if (style === 'loulou') {
                        hrefUrl = 'styles/main.css';
                        $('link[href^="styles/main"]').attr('href', hrefUrl);
                    } else if (style) {
                        style = '-' + style;
                        hrefUrl = 'styles/main' + style + '.css';
                        $('link[href^="styles/main"]').attr('href', hrefUrl);
                    } else {
                        return false;
                    }
                    return event.preventDefault();
                });
            }
        };
    }
]).directive('toggleMinNav', [
    '$rootScope', function ($rootScope) {
        return {
            restrict: 'A',
            link: function (scope, ele, attrs) {
                var $content, $nav, $window, Timer, app, updateClass;
                app = $('#app');
                $window = $(window);
                $nav = $('#nav-container');
                $content = $('#content');
                ele.on('click', function (e) {
                    if (app.hasClass('nav-min')) {
                        app.removeClass('nav-min');
                    } else {
                        app.addClass('nav-min');
                        $rootScope.$broadcast('minNav:enabled');
                    }
                    return e.preventDefault();
                });
                Timer = void 0;
                updateClass = function () {
                    var width;
                    width = $window.width();
                    if (width < 768) {
                        return app.removeClass('nav-min');
                    }
                };
                return $window.resize(function () {
                    var t;
                    clearTimeout(t);
                    return t = setTimeout(updateClass, 300);
                });
            }
        };
    }
]).directive('collapseNav', [
    function () {
        return {
            restrict: 'A',
            link: function (scope, ele, attrs) {
                var $a, $aRest, $lists, $listsRest, app;
                $lists = ele.find('ul').parent('li');
                $lists.append('<i class="fa fa-caret-right icon-has-ul"></i>');
                $a = $lists.children('a');
                $listsRest = ele.children('li').not($lists);
                $aRest = $listsRest.children('a');
                app = $('#app');
                $a.on('click', function (event) {
                    var $parent, $this;
                    if (app.hasClass('nav-min')) {
                        return false;
                    }
                    $this = $(this);
                    $parent = $this.parent('li');
                    $lists.not($parent).removeClass('open').find('ul').slideUp();
                    $parent.toggleClass('open').find('ul').slideToggle();
                    return event.preventDefault();
                });
                $aRest.on('click', function (event) {
                    return $lists.removeClass('open').find('ul').slideUp();
                });
                return scope.$on('minNav:enabled', function (event) {
                    return $lists.removeClass('open').find('ul').slideUp();
                });
            }
        };
    }
]).directive('highlightActive', [
    function () {
        return {
            restrict: "A",
            controller: [
                '$scope', '$element', '$attrs', '$location', function ($scope, $element, $attrs, $location) {
                    var highlightActive, links, path;
                    links = $element.find('a');
                    path = function () {
                        return $location.path();
                    };
                    highlightActive = function (links, path) {
                        path = '#' + path;
                        return angular.forEach(links, function (link) {
                            var $li, $link, href;
                            $link = angular.element(link);
                            $li = $link.parent('li');
                            href = $link.attr('href');
                            if ($li.hasClass('active')) {
                                $li.removeClass('active');
                            }
                            if (path.indexOf(href) === 0) {
                                return $li.addClass('active');
                            }
                        });
                    };
                    highlightActive(links, $location.path());
                    return $scope.$watch(path, function (newVal, oldVal) {
                        if (newVal === oldVal) {
                            return;
                        }
                        return highlightActive(links, $location.path());
                    });
                }
            ]
        };
    }
]).directive('toggleOffCanvas', [
    function () {
        return {
            restrict: 'A',
            link: function (scope, ele, attrs) {
                return ele.on('click', function () {
                    return $('#app').toggleClass('on-canvas');
                });
            }
        };
    }
]).directive('slimScroll', [
    function () {
        return {
            restrict: 'A',
            link: function (scope, ele, attrs) {
                return ele.slimScroll({
                    height: attrs.scrollHeight || '100%'
                });
            }
        };
    }
]).directive('goBack', [
    function () {
        return {
            restrict: "A",
            controller: [
                '$scope', '$element', '$window', function ($scope, $element, $window) {
                    return $element.on('click', function () {
                        return $window.history.back();
                    });
                }
            ]
        };
    }
]);

angular.module('infiniteScroll',  []).directive('infiniteScroll', function($window, $q) {
        return {
            link: function(scope, element, attrs) {
                var offset, scrolling;
                offset = parseInt(attrs.offset, 10) || 10;
                scrolling = false;
                return angular.element($window).bind('scroll', function() {
                    console.log('ooo');

                    var deferred, _ref;
                    if (!scrolling && ((_ref = element[0].offsetParent) != null ? _ref.offsetTop : void 0) + parseInt(element[0].style.height, 10) < $window.scrollY + $window.innerHeight - offset) {
                        scrolling = true;
                        deferred = $q.defer();
                        scope[attrs.infiniteScroll](deferred);
                        return deferred.promise.then(function() {
                            return scrolling = false;
                        });
                    }
                });
            }
        };
    });
