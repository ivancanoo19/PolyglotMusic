# PolyglotMusic - Red Social Musical

## Config. inicial
1. Clonar el repo
2. Cambiarse a `/backend`
3. Duplicar el archivo `.env.example`, renombrar la copia a `.env` y llenar las credenciales como corresponda
4. Regresar a `/`
5. Abrir en IntelliJ IDEA, Gradle sincroniza en automatico

## Ejecución

```bash
# Levantamos contenedores y esperamos un poco
docker compose up -d

# Verificamos estado
docker ps -a
```

### Para Cassandra - creación de keyspace y tablas
```bash
docker exec -i c-ifc-egm-cassandra cqlsh < /scripts/s-01-create-keyspace-cassandra.cql

docker exec -i c-ifc-egm-cassandra cqlsh < /scripts/s-02-create-tables-cassandra.cql
```

### Para MongoDB - carga inicial de datos
```bash
# Esperar a que se termine de ejecutar
docker exec -i c-ifc-egm-mongo mongosh -u admin -p <password> --authenticationDatabase admin < ./scripts/init-mongo-final.js

# Para verificar si se cargó bien, entrar al contenedor:
docker exec -it c-ifc-egm-mongo mongosh -u admin -p <password> --authenticationDatabase admin

# Ejecutar lo siguiente:
use polyglotmusic
show collections
db.artists.countDocuments()
db.albums.countDocuments()
db.songs.countDocuments()
```

- Si se desea borrar la base de datos para realizar de nuevo el seeding.
```bash
# Entrar al contenedor:
docker exec -it c-ifc-egm-mongo mongosh -u admin -p <password> --authenticationDatabase admin

# Ejecutar lo siguiente:
use polyglotmusic
db.dropDatabase()
```

## Iniciar aplicación

### Para backend
```bash
cd backend

./gradlew bootRun
# Output exitoso:
# <==========---> 80% EXECUTING [2h 39m 27s]
# > :bootRun

# Verificar con el siguiente comando:
curl http://localhost:8080/api/health
# Output exitoso:
# PolyglotMusic Backend Running
```

### Para frontend
```bash
cd ../frontend

# Instalar dependencias:
npm install

# Iniciar servidor
npm run dev

# En el navegador visitar:
# http://localhost:5173/
```

## Pendiente
- Modificar test de redis para que concuerde con el sistema (eduardo)
- Implementar DAO de MongoDB (Cano)
