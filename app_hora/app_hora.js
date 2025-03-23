const express = require('express');
const NodeCache = require('node-cache'); 
const app = express();

const cacheTexto = new NodeCache({ stdTTL: 10 });  // Cache 10 segundos
const cacheHora = new NodeCache({ stdTTL: 60 });   // Cache 1 minuto

app.get('/texto', (req, res) => {
    const cachedTexto = cacheTexto.get('texto');  // Verifica se já existe uma resposta em cache

    if (cachedTexto) {
        return res.send(cachedTexto);  // Se existir no cache, retorna a resposta cacheada
    }

    const responseTexto = "DESAFIO HENRIQUE TEXTO COM JS";
    cacheTexto.set('texto', responseTexto);  // Armazena a resposta no cache
    res.send(responseTexto);
}); 


app.get('/hora', (req, res) => {
    const cachedHora = cacheHora.get('hora');  // Verifica se já existe uma resposta em cache

    if (cachedHora) {
        return res.send(cachedHora);  // Se existir no cache, retorna a resposta cacheada
    }

    const now = new Date().toISOString();
    cacheHora.set('hora', now);  // Armazena a hora atual no cache
    res.send(now);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
