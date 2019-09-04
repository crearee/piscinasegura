var app = angular.module('piscina_segura', []);
app.controller('ctrl_body', ['$scope', '$http', '$templateCache', function ($scope, $http, $templateCache) {

    //----- Almacena los booleanos del formulario de mantenimiento -----
    /*
     * Temporal mientras se piensa si se carga una estructura base para los horarios
     */


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
                "tareas": []
            },
            {
                "tareas": []
            },
            {
                "tareas": []
            },
            {
                "tareas": []
            },
            {
                "tareas": []
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
                        { "id": 10, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Dureza total" },
                        { "id": 12, "frecuencia": "", "observaciones": "", "estado": "", "nom_tarea": "Alcalinidad total" }
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