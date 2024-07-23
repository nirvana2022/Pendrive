// Prueba funcional de aplicación de ventas

class Producto{
    
    static contadorProductos = 0;

    constructor(nombre,precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`;
    }
}

class Orden{
    
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }
    
    constructor(productos,contadorProductosAgregados){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        //this._contadorProductosAgregados = 0;
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
            productosOrden += '\n{' + producto.toString() + '} ';
        }
        console.log(`Orden: ${this.idOrden}, Total: ${this.calcularTotal()}, Productos: ${productosOrden}`)
    }


}


let producto1 = new Producto('Pantalón', 200);
console.log(producto1.toString());
let producto2 = new Producto('Camisa', 100);
console.log(producto2.toString());
let producto3 = new Producto('Cinturon',50);
console.log(producto3.toString());

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.mostrarOrden();