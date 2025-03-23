from flask import Flask
from datetime import datetime
from flask_caching import Cache

app = Flask(__name__)

# Configuração do cache para usar Redis
cache = Cache(config={'CACHE_TYPE': 'RedisCache', 'CACHE_REDIS_URL': 'redis://redis:6379/0'})
cache.init_app(app)

# Rota com cache de 10 segundos
@app.route('/texto')
@cache.cached(timeout=10)  # Define um cache com tempo de expiração de 10 segundos
def texto():
    return "DESAFIO HENRIQUE TEXTO COM PYTHON"

# Rota com cache de 1 minuto
@app.route('/hora')
@cache.cached(timeout=60)  # Define um cache com tempo de expiração de 60 segundos (1 minuto)
def hora():
    now = datetime.now().isoformat()
    return now

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
