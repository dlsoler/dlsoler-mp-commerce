# Examen práctico de Integración de Mercado Pago

1.  Cantidad máxima de cuotas con tarjeta de crédito: 6.

2.  Evitar pagos con American Express (amex).

3.  Evitar pagos con cajero automático (atm).


### Datos del pagador:

1.   Nombre y apellido: **Lalo Landa**

2.  Email: ****

3.  Código de área: **11**

4.  Teléfono: **22223333**

### Datos del pagador:

1.  Nombre de la calle: **False**

2.  Número de la casa: **123**

3.  Código postal: **1111**

### Producto

1.  ID: ​ 1234

2.  Nombre del Producto: ​Nombre del producto seleccionado del carrito del ejercicio.

3.  Descripción del Producto: "Dispositivo móvil de Tienda e-commerce​"

4.  URL Imagen: ​ Foto del producto seleccionado.(url válida).

5.  Cantidad: ​ 1

6.  Precio: ​ Precio del producto seleccionado.

7.  Número de orden del pedido (external_reference): ​ Deberás indicar aquí **tu Correo electrónico**, el mismo que usarás para rellenar el formulario del examen (el primero).

### Páginas de retorno (back_url)

1.  Rechazado o finalizado (failure).

2.  Pending o "in_progress" (pending).

3.  Mostrar parámetros:

    1.  payment_method_id

    2.  external reference

    3. Id de pago (payment_id o collection_id) de MP.

    4.  auto_return

### Checkout Mercado Pago

El checkout se debe abrir en la misma ventana que se muestra la tienda (redirect).
El botón debe decir "Pagar la compra"