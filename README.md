# PolyglotMusic - Red Social Musical

## Config. inicial
1. Clonar el repo
2. Duplicar el archivo `.env.example`, renombrar la copia a `.env` y llenar las credenciales como corresponda
3. Abrir en IntelliJ IDEA, Gradle sincroniza en automatico

## Ejecución

```bash
# Levantamos contenedores y esperamos un poco
docker compose up -d

# Verificamos estado
docker ps -a

# Para Cassandra
docker exec -i c-ifc-egm-cassandra cqlsh < /scripts/s-01-create-keyspace-cassandra.cql

docker exec -i c-ifc-egm-cassandra cqlsh < /scripts/s-02-create-tables-cassandra.cql
```

## Pendiente
- Crear pool y test para mongo, modificar test de redis para que concuerde con el sistema (eduardo)
- Implementar DAO de MongoDB (Cano)
