var app = angular.module('piscina_segura', []);
app.controller('ctrl_body', ['$scope', '$http', '$templateCache', function ($scope, $http, $templateCache) {

    //----- Almacena los booleanos del formulario de mantenimiento -----
    /*
     * Temporal mientras se piensa si se carga una estructura base para los horarios
     */

    $scope.mostrar_accordion = true;

    $scope.piscina = {
        "id": 111,
        "nom_piscina": "aaaaaa",
        "volumen": 33
    };

    $scope.num_categoria =
        {
            "aseo_general": 0,
            "prueba_diagnostica": 1,
            "aseo_semanal": 3,
            "botiquin": 4,
            "elementos_seguridad": 2
        };

    $scope.final = {
        "categorias": [
            {
                "tareas": [],
                "tareas2": [],
                "tareas3": [],
            },
            {
                "tareas": [],
                "diagnostico": [],
            },
            {
                "tareas": []
            },
            {
                "tareas": [],
                "tareas2": [],
                "tareas3": []
            },
            {
                "tareas": [],
                "tareas2": []
            }
        ]

    };

    $scope.frm_chequeo = {
        "fec_registro": "",
        "categorias": [
            {
                "nom_categoria": "Aseo General",
                "tareas":
                    [
                        { "id": 0, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Aspirado" },
                        { "id": 2, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Recolección de material flotante" },
                        { "id": 4, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Limpieza de borde de piscina" },
                        { "id": 6, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Barrido del área" },
                        { "id": 8, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Lavado y desinfección de duchas y zonas anexas" },
                        { "id": 10, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Lavado de filtros" }
                    ],
                "tareas2":
                    [
                        { "id": 0, "opcion1": "En rango", "opcion2": "Fuera de rango", "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Medición de parámetros diagnóstico" },
                        { "id": 2, "opcion1": "Realizado", "opcion2": "Pendiente", "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Dosificacion de Quimicos (am)" },
                        { "id": 4, "opcion1": "En rango", "opcion2": "Fuera de rango", "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Medicion de parametros al inicio de la jornada" },
                        { "id": 6, "opcion1": "Realizado", "opcion2": "Pendiente", "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Consigna de datos de inico de jornada" },
                        { "id": 8, "opcion1": "En rango", "opcion2": "Fuera de rango", "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Medicion de parametros al final de la jornada" },
                        { "id": 10, "opcion1": "Realizado", "opcion2": "Pendiente", "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Dosificacion de Quimicos (pm)" }

                    ],
                "tareas3":
                    [
                        { "id": 0, "opcion1": "Opera normalmente", "opcion2": "No desconecta la succión", "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Sistema de liberación de vacío" },
                        { "id": 2, "opcion1": "Opera normalmente", "opcion2": "No apaga el cuarto de máquinas", "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Botones de parada de emergencia (am)" },
                        { "id": 4, "opcion1": "Sin evidencia de filtración en las tuberías", "opcion2": "Evidencia de filtración en las tuberías", "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Filtraciones o fisuras en las tuberías del sistema de recirculación" },
                        { "id": 6, "opcion1": "Sin evidencia visual de deterioro u oxidacion", "opcion2": "Se evidencia deterioro de la motobomba", "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Inspección de las motobombas en busca de desgaste de los anclajes" },
                        { "id": 8, "opcion1": "Fondo sin sedimentos", "opcion2": "Agua con sedimentos visibles", "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Inspección del tanque de equilibrio en busca de sedimentos" },
                        { "id": 10, "opcion1": "Mide y dosifica el cloro correctamente", "opcion2": "No dosifica correctamente", "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Dosificador de coloro" },
                        { "id": 12, "opcion1": "Mide y dosifica el ácido correctamente", "opcion2": "No dosifica correctamente", "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Dosificador de ácido" },
                        { "id": 14, "opcion1": "La presion adecuada a lo definido en el manual", "opcion2": "Filtro con corrosión y/o perdidas de presion", "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Inspección visual de los filtros en busca de corrosión o perdidas de presion" }
                    ]
            },
            {
                "nom_categoria": "Prueba Diagnóstica",
                "tareas":
                    [
                        { "id": 0, "opcion1": "Aceptable (Transparente)", "opcion2": "No aceptable (Verde / Lechoso)", "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Color" },
                        { "id": 2, "opcion1": "Presente", "opcion2": "Ausente", "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Materiales Flotantes" },
                        { "id": 4, "opcion1": "Sin olor", "opcion2": "Olor a Cloro", "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Olor" },
                        { "id": 6, "opcion1": "Fondo visible", "opcion2": "Fondo no visible", "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Transparencia" }
                    ],
                "diagnostico":
                    [
                        { "id": 0, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Cloro total" },
                        { "id": 2, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Cloro residual libre" },
                        { "id": 4, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Cloro combinado" },
                        { "id": 6, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "PH" },
                        { "id": 8, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Temperatura del agua (°C)" },
                        { "id": 10, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Ácido Cianúrico" },
                        { "id": 12, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Dureza total" },
                        { "id": 14, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Alcalinidad total" }
                    ]
            },
            {
                "nom_categoria": "Elementos de Seguridad",
                "tareas":
                    [
                        { "id": 0, "frecuencia": "", "observaciones": "", "estado": "", "evidencia": "", "nom_tarea": "Flotador circular" },
                        { "id": 2, "frecuencia": "", "observaciones": "", "estado": "", "evidencia": "", "nom_tarea": "Bastón con gancho" },
                        { "id": 4, "frecuencia": "", "observaciones": "", "estado": "", "evidencia": "", "nom_tarea": "Demarcación profundidad de la pisicna" },
                        { "id": 6, "frecuencia": "", "observaciones": "", "estado": "", "evidencia": "", "nom_tarea": "Teléfono o citófono de emergencia 24/7" },
                        { "id": 8, "frecuencia": "", "observaciones": "", "estado": "", "evidencia": "", "nom_tarea": "Sistemas de cierres automaticos o puertas de control de acceso al area de piscina" },
                        { "id": 10, "frecuencia": "", "observaciones": "", "estado": "", "evidencia": "", "nom_tarea": "Boton de parada de emergencia" },
                        { "id": 12, "frecuencia": "", "observaciones": "", "estado": "", "evidencia": "", "nom_tarea": "Tapones de los orificios de succion" },
                        { "id": 14, "frecuencia": "", "observaciones": "", "estado": "", "evidencia": "", "nom_tarea": "Rejillas fondo" },
                        { "id": 16, "frecuencia": "", "observaciones": "", "estado": "", "evidencia": "", "nom_tarea": "Tabla rígida" },
                        { "id": 18, "frecuencia": "", "observaciones": "", "estado": "", "evidencia": "", "nom_tarea": "Inmovilizadores de cuello y espalda" },
                        { "id": 20, "frecuencia": "", "observaciones": "", "estado": "", "evidencia": "", "nom_tarea": "Paredes de la piscina sin secciones filosas o incrustaciones que puedan generar heridas" },
                        { "id": 22, "frecuencia": "", "observaciones": "", "estado": "", "evidencia": "", "nom_tarea": "Fragua de los azulejos (pisos de piscina)" }
                    ]
            },
            {
                "nom_categoria": "Aseo Semanal",
                "tareas":
                    [
                        { "id": 0, "frecuencia": "", "observaciones": "", "dias": { "l": false, "m": false, "mi": false, "j": false, "v": false, "s": false, "d": false }, "nom_tarea": "Revision semanal del cuarto de quimicos" },
                        { "id": 1, "frecuencia": "", "observaciones": "", "dias": { "l": false, "m": false, "mi": false, "j": false, "v": false, "s": false, "d": false }, "nom_tarea": "Revision semanal de los rotulos de los distintos quimicos" },
                        { "id": 2, "frecuencia": "", "observaciones": "", "dias": { "l": false, "m": false, "mi": false, "j": false, "v": false, "s": false, "d": false }, "nom_tarea": "Limpieza general del cuarto de almacenamiento para prevenir humedades y contaminantes" }
                    ],
                "tareas2":
                    [
                        { "id": 3, "frecuencia": "", "observaciones": "", "dias": { "l": false, "m": false, "mi": false, "j": false, "v": false, "s": false, "d": false }, "nom_tarea": "Revision semanal de orden y aseo en el cuarto de maquinas" },
                        { "id": 4, "frecuencia": "", "observaciones": "", "dias": { "l": false, "m": false, "mi": false, "j": false, "v": false, "s": false, "d": false }, "nom_tarea": "Revision de la demarcacnion de llaves y filtros" }
                    ],
                "tareas3":
                    [
                        { "id": 5, "frecuencia": "", "observaciones": "", "dias": { "l": false, "m": false, "mi": false, "j": false, "v": false, "s": false, "d": false }, "nom_tarea": "Cepillado de valdosas de piscina semanal" }
                    ]
            },
            {
                "nom_categoria": "Botiquín",
                "tareas":
                    [
                        { "id": 0, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Gasas estériles" },
                        { "id": 1, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Compresas" },
                        { "id": 2, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Apósitos" },
                        { "id": 3, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Vendas elásticas" },
                        { "id": 4, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Curitas" },
                        { "id": 5, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Aplicadores" },
                        { "id": 6, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Esparadrapo" },
                        { "id": 7, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Algodón" },
                        { "id": 8, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Desinfectante para uso humano" },
                        { "id": 9, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Solución salina" },
                        { "id": 10, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Jabón quirúrgico" },
                        { "id": 11, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Fonendoscopio" }
                    ],
                "tareas2":
                    [
                        { "id": 12, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Tapabocas" },
                        { "id": 13, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Guantes desechables" },
                        { "id": 14, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Tijeras" },
                        { "id": 15, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Termómetros" },
                        { "id": 16, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Ganchos de nodriza" },
                        { "id": 17, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Pañuelos desechables" },
                        { "id": 18, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Baja lengua" },
                        { "id": 19, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Tensiómetro" },
                        { "id": 20, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Linterna con pilas de repuesto" }
                    ]
            }

        ]
    };

    var id_aseo = 0;
    $scope.duplicar_tarea_aseo = function ($index) {
        $scope.final.categorias[id_aseo].tareas[$index] = $scope.frm_chequeo.categorias[id_aseo].tareas[$index];
        console.log(JSON.stringify($scope.final));
    };
    $scope.duplicar_tarea_aseo2 = function ($index) {
        $scope.final.categorias[id_aseo].tareas2[$index] = $scope.frm_chequeo.categorias[id_aseo].tareas2[$index];
        console.log(JSON.stringify($scope.final));
    };
    $scope.duplicar_tarea_aseo3 = function ($index) {
        $scope.final.categorias[id_aseo].tareas3[$index] = $scope.frm_chequeo.categorias[id_aseo].tareas3[$index];
        console.log(JSON.stringify($scope.final));
    };

    var id_diagnostica = 1;
    $scope.duplicar_tarea_diagnostica = function ($index) {
        $scope.final.categorias[id_diagnostica].tareas[$index] = $scope.frm_chequeo.categorias[id_diagnostica].tareas[$index];
        console.log(JSON.stringify($scope.final));
    };
    $scope.duplicar_tarea_diagnostica2 = function ($index) {
        $scope.final.categorias[id_diagnostica].diagnostico[$index] = $scope.frm_chequeo.categorias[id_diagnostica].diagnostico[$index];
        console.log(JSON.stringify($scope.final));
    };

    var id_seguridad = 2;
    $scope.duplicar_tarea_seguridad = function ($index) {
        $scope.final.categorias[id_seguridad].tareas[$index] = $scope.frm_chequeo.categorias[id_seguridad].tareas[$index];
        console.log(JSON.stringify($scope.final));
    };

    var id_aseo_semanal = 3;
    $scope.duplicar_tarea_aseo_semanal = function ($index) {
        $scope.final.categorias[id_aseo_semanal].tareas[$index] = $scope.frm_chequeo.categorias[id_aseo_semanal].tareas[$index];
        console.log(JSON.stringify($scope.final));
    };
    $scope.duplicar_tarea_aseo_semanal2 = function ($index) {
        $scope.final.categorias[id_aseo_semanal].tareas2[$index] = $scope.frm_chequeo.categorias[id_aseo_semanal].tareas2[$index];
        console.log(JSON.stringify($scope.final));
    };
    $scope.duplicar_tarea_aseo_semanal3 = function ($index) {
        $scope.final.categorias[id_aseo_semanal].tareas2[$index] = $scope.frm_chequeo.categorias[id_aseo_semanal].tareas3[$index];
        console.log(JSON.stringify($scope.final));
    };

    var id_botiquin = 4;
    $scope.duplicar_tarea_botiquin = function ($index) {
        $scope.final.categorias[id_botiquin].tareas[$index] = $scope.frm_chequeo.categorias[id_botiquin].tareas[$index];
        console.log(JSON.stringify($scope.final));
    };
    $scope.duplicar_tarea_botiquin2 = function ($index) {
        $scope.final.categorias[id_botiquin].tareas2[$index] = $scope.frm_chequeo.categorias[id_botiquin].tareas2[$index];
        console.log(JSON.stringify($scope.final));
    };



    //----- Fórmulas para calidad del agua -----
    $scope.calcular = function () {
        console.log("entrando al cálculo");

        var data = $scope.frm_chequeo.categorias[id_diagnostica].diagnostico;
        var volumen = $scope.piscina.volumen;
        var cloro_total = data[0].estado;
        var cloro_libre = data[1].estado;
        var cloro_combinado = cloro_total - cloro_libre;
        $scope.frm_chequeo.categorias[id_diagnostica].diagnostico[2].estado = cloro_combinado;
        var ph = data[3].estado;
        var acido_cianurico = data[5].estado;
        var dureza = data[6].estado;
        var alcalinidad = data[7].estado;
        var cloro_punto_ruptura;

        //----- Constantes objetivos o rangos permitidos -----
        var ph_objetivo = 7.2;
        var alcalinidad_objetivo = 80;
        var cloro_total_objetivo_min = 3;
        var cloro_total_objetivo_max = 5;
        var acido_cianurico_min = 30;
        var acido_cianurico_max = 50;
        var dureza_min = 250;
        var dureza_max = 500;

        $scope.sugerencia1 = {};  //----- PH
        $scope.sugerencia2 = {};  //----- PH    
        $scope.sugerencia3 = {};  //----- Alcalinidad
        $scope.sugerencia4 = {};  //----- Cloro Total
        $scope.sugerencia5 = {};  //----- Cloro Total
        $scope.sugerencia6 = {};  //----- Cloro libre
        $scope.sugerencia7 = {};  //----- Cloro libre
        $scope.sugerencia8 = {};  //----- Ácido Cianúrico
        $scope.sugerencia9 = {};  //----- Dureza 
        $scope.sugerencia10 = {};  //----- Cloro combinado 
        $scope.sugerencia11 = {};  //----- Cloro combinado 

        //-----Primero estabilizar PH -----
        if (ph < 7.2) {
            $scope.sugerencia1.aplicar = volumen * (ph_objetivo - ph) * 1.675;  //----- K para bicarbonato-----
            $scope.sugerencia1.producto = "Bicarbonato de Sodio / Alcali";
            if (ph == 6.5) {
                $scope.sugerencia2.producto = "Soda Cáustica";                                //----- Cálculo para soda cáustica -----
                $scope.sugerencia2.aplicar = 5 * volumen;
            } else if (ph == 6.8) {
                $scope.sugerencia2.producto = "Soda Cáustica";
                $scope.sugerencia2.aplicar = 4 * volumen;
            } else if (ph == 7) {
                $scope.sugerencia2.producto = "Soda Cáustica";
                $scope.sugerencia2.aplicar = 3 * volumen;
            }

        } else if (ph > 7.2) {
            $scope.sugerencia1.aplicar = volumen * (ph - ph_objetivo) * 1.1;
            $scope.sugerencia1.producto = "Tricoloro / Cloro al 91%";
        }

        //----- Alcalinidad -----
        if (alcalinidad > alcalinidad_objetivo) {
            $scope.sugerencia3.aplicar = volumen * (alcalinidad - alcalinidad_objetivo) * 1.1;
            $scope.sugerencia3.producto = "Tricoloro / Cloro al 91%";
        } else {
            $scope.sugerencia3.aplicar = volumen * (alcalinidad - alcalinidad_objetivo) * 1.675;
            $scope.sugerencia3.producto = "Bicarbonato de Sodio / Alcali";
        }

        //----- Cloro total ----
        if (cloro_total < cloro_total_objetivo_min) {
            $scope.sugerencia4.aplicar = volumen * (cloro_total_objetivo_min - cloro_total) * 1.575;
            $scope.sugerencia4.producto = "Hipoclorito de Calcio 70% / Cloro 70%";
            $scope.sugerencia5.aplicar = volumen * (cloro_total_objetivo_min - cloro_total) * 1.1;
            $scope.sugerencia5.producto = "Tricoloro / Cloro al 91%";

        } else if (cloro_total > cloro_total_objetivo_max) {
            $scope.sugerencia4.aplicar = volumen * (cloro_total - cloro_total_objetivo_max) * 1.775;
            $scope.sugerencia4.producto = "Tiosulfato de sodio";
        }

        //----- Cloro libre ----
        if (cloro_libre < cloro_total_objetivo_min) {
            $scope.sugerencia6.aplicar = volumen * (cloro_total_objetivo_min - cloro_libre) * 1.575;
            $scope.sugerencia6.producto = "Hipoclorito de Calcio 70% / Cloro 70%";
            $scope.sugerencia7.aplicar = volumen * (cloro_total_objetivo_min - cloro_libre) * 1.1;
            $scope.sugerencia7.producto = "Tricoloro / Cloro al 91%";

        } else if (cloro_libre > cloro_total_objetivo_max) {
            $scope.sugerencia6.aplicar = volumen * (cloro_libre - cloro_total_objetivo_max) * 1.775;
            $scope.sugerencia6.producto = "Tiosulfato de sodio";
        }

        //----- Ácido cianúrico ----
        if (acido_cianurico < acido_cianurico_min) {
            $scope.sugerencia8.aplicar = volumen * (acido_cianurico_min - acido_cianurico) * 1.1;
            $scope.sugerencia8.producto = "Tricoloro / Cloro al 91%";
        }

        //----- Dureza -----
        if (dureza < dureza_min) {
            $scope.sugerencia9.aplicar = volumen * (dureza_min - dureza) * 1.575;
            $scope.sugerencia9.producto = "Hipoclorito de Calcio 70% / Cloro 70%";
        } else if (dureza > dureza_max) {
            $scope.sugerencia9.producto = "RENOVAR AGUA";
        }

        //----- Cloro Combinado - Cloro libre menor que el cloro total-----
        //----- Ecuación para cloro punto de ruptura -----
        if (cloro_libre < cloro_total) {
            cloro_punto_ruptura = (cloro_combinado * 10) - cloro_libre;
            if (cloro_total < cloro_total_objetivo_min) {
                $scope.sugerencia10.aplicar = volumen * cloro_punto_ruptura * 1.575;
                $scope.sugerencia10.producto = "Hipoclorito de Calcio 70% / Cloro 70%";
            }
        }

        $('#modalAplicacion').modal('show');

    };


    $scope.dosificacion = function () {

        $('#modalAplicacion').modal('show');
    };

    $scope.ir = function () {
        location.href = $scope.destino;
    };

    $scope.cerrar_modal = function () {

        $('#modalAplicacion').modal('hide');
    };












    //----- Actualiza el estado de las labores de mantenimiento -----
    $scope.enviar_informacion = function () {
        console.log("entra a enviar");

        /*$http.post('192.168.0.14:3200/app/lista_chequeo', JSON.stringify($scope.final)).then(function (response) {
            console.log(JSON.stringify(response));

        });*/



        $http({ method: 'POST', url: 'http://192.168.0.14:3200/app/lista_chequeo', cache: $templateCache }).
            then(function (response) {
                $scope.status = response.status;
                $scope.data = response.data;
            }, function (response) {
                console.log(JSON.stringify(response));

            });

    };





}]);