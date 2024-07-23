class Orden{
    
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }
    
    constructor(productos,contadorProductosAgregados){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }
    
    get idOrden (){
        return this._idOrden;
    }

    agregarProducto(producto){
        // Validar que no se haya excedido el limite de productos(5)
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            // Agregar un producto al arreglo de productos
            this._productos.push(producto);
            //opción 2
            //this._productos[this.contadorProductosAgregados++] = producto;
        }
        else{
            console.log('No se pueden agregar más productos');
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        // Iterar elementos del arreglo productos
        for(let producto of this._productos){
            totalVenta += producto.precio; // equivale a: totalVenta = totalVenta + producto.precio
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = '';
        for (let producto of this._productos){
            productosOrden += producto.toString() + ' ';
        }
        console.log(`Orden: ${this.idOrden}, Total: ${this.calcularTotal()}, Productos: ${productosOrden}`)
    }
}