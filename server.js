const express = require('express');
const morgan = require('morgan');
const app = express();

// Inicialización de array con algunos datos
let arr = ['cero', 'uno', 'dos', 'tres', 'cuatro']

// Agregado para obtener información de las peticiones HTTP en consola 
app.use(morgan('dev'));

// Agregado para poder recuperar el body de las peticiones HTTP 
app.use(express.json());

// Detalle de los endpoints (o rutas)
app.get('/', (req, res) => {
    res.send('App web desarrolla en contexto de pruebas con Jenkins!');
});

app.get('/phones', (req, res) => {

    res.json(arr);
});

app.get('/phones/:id', (req, res) => {
    let id = req.params.id;
    res.json(arr[id]);
});


app.post('/phones', (req, res) => {
    let id = req.body.id;
    let index = arr.indexOf(id);
    if (index === -1) {
        arr.push(id);
        resultado = {Resultado : "Elemento agregado"}
    } else {
        resultado = {Resultado : "Elemento repetido (no agregado)"}
    }
    
    res.json(resultado);
})

app.delete('/phones/:id', (req, res) => {
    let id = req.params.id;
    arr.splice(id,1);
    console.log(id, arr);
    res.json(arr);
})

app.get('/version', (req, res) => {
    res.json({version: "1.0.3"});
});

app.get('/time', (req, res) => {
    let t = new Date();
    res.json(t);
});

// Ejecución del server en modalidad de escucha de peticiones HTTP
let port = 4000;
app.listen(port, function () {
    console.log(`Escuchando el puerto ${port}!`);
    
});