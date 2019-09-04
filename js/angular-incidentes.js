var app = angular.module('piscina_segura', []);
app.controller('ctrl_body', ['$scope', '$http', function ($scope, $http) {

        //----- Almacena los booleanos del formulario de mantenimiento -----
        $scope.frm_incidente = {"cerrar":false};
        
        //----- Actualiza el estado de las labores de mantenimiento -----
         $scope.enviar_incidente = function(incidente) {
             console.log(incidente);
         };

        $(window).on('load', function () {
            /* sparklines */
            $(".dynamicsparkline").sparkline([5, 6, 7, 2, 0, 4, 2, 5, 6, 7, 2, 0, 4, 2, 4], {
                type: 'bar',
                height: '25',
                barSpacing: 2,
                barColor: '#a9d7fe',
                negBarColor: '#ef4055',
                zeroColor: '#ffffff'
            });

            /* gauge chart circular progress */
            $('.progress_profile1').circleProgress({
                fill: '#169cf1',
                lineCap: 'butt'
            });
            $('.progress_profile2').circleProgress({
                fill: '#f4465e',
                lineCap: 'butt'
            });
            $('.progress_profile4').circleProgress({
                fill: '#ffc000',
                lineCap: 'butt'
            });
            $('.progress_profile3').circleProgress({
                fill: '#00c473',
                lineCap: 'butt'
            });
            $('.progress_profile5').circleProgress({
                fill: '#ffffff',
                lineCap: 'butt'
            });

            /*Swiper carousel */
            var mySwiper = new Swiper('.swiper-container', {
                slidesPerView: 2,
                spaceBetween: 0,
                autoplay: {
                    delay: 1500,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                }
            });
            /* tooltip */
            $(function () {
                $('[data-toggle="tooltip"]').tooltip();
            });
        });




    }]);