
        // crea variable para mandar el formulario
        let form = document.getElementById("formulario")
        // al enviar el formulario, se activa la funcion
        form.addEventListener('submit', function (event) {
            // previene que el comportamiento por defecto del formulario no se active
            event.preventDefault()
            // activa la funcion limpiar
            limpiar()
            // Crea variables que contienen el valor ingresado por el usuario en cada input
            let name = document.getElementById("nombre").value;
            let subject = document.getElementById("asunto").value;
            let message = document.getElementById("mensaje").value;
            // retorna los valores de la funcion validar
            let resultado = validar(name, subject, message);
            // si todos los valores de resultado son verdaderos, activa la función exito
            if (resultado == true) {
                exito()
            }
        })

        // borra el mensaje impreso por cada error o de exito si estos cambian
        function limpiar(){
            document.querySelector(".resultado").innerHTML = "";
            document.querySelector(".errorNombre").innerHTML = "";
            document.querySelector(".errorAsunto").innerHTML = "";
            document.querySelector(".errorMensaje").innerHTML = "";
        }

        // cuando se cumplen todas las condiciones, imprime un mensaje de éxito
        function exito(){
            document.querySelector(".resultado").innerHTML = "Mensaje enviado con éxito";
        }

        // Función para revisar si lo ingresado es correcto o no
        function validar(name, subject, message){
            // si se cumple con las condiciones, el valor se mantiene true
            let pasamos = true;

            // Expresión regular utilizando el metodo test() para validar si la variable contiene caracteres en mayuscula y/o miniscula.
            let validaciónNombre = /[a-zA-Z]/gim
            // si el metodo no se cumple, imprime un mensaje de error e impide el mensaje de éxito declarandolo como una variable falsa
            if(validaciónNombre.test(name) == false){
                document.querySelector(".errorNombre").innerHTML = 'El nombre es requerido';
                pasamos = false;
            }

            // Expresión regular utilizando el metodo test() para validar si la variable contiene caracteres en mayuscula y/o miniscula.
            let validaciónAsunto = /[a-zA-Z]/gim
            // si el metodo no se cumple, imprime un mensaje de error e impide el mensaje de éxito declarandolo como una variable falsa
            if(validaciónAsunto.test(subject) == false){
                document.querySelector(".errorAsunto").innerHTML = 'El asunto es requerido';
                pasamos = false;
            }

            // Expresión regular utilizando el metodo test() para validar si la variable contiene caracteres en mayuscula y/o miniscula.
            let validaciónMensaje = /[a-zA-Z]/gim
            // si el metodo no se cumple, imprime un mensaje de error e impide el mensaje de éxito declarandolo como una variable falsa
            if(validaciónMensaje.test(message) == false){
                document.querySelector(".errorMensaje").innerHTML = 'El mensaje es requerido';
                pasamos = false;
            }

            // retorna el valor de la variable "pasamos"
            return pasamos;
        }