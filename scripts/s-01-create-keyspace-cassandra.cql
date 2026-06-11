// Ejecutar con docker exec -i c-ifc-egm-cassandra cqlsh < /scripts/s-01-create-keyspace-cassandra.cql

DROP KEYSPACE IF EXISTS polyglotmusic;
CREATE KEYSPACE polyglotmusic
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

DESCRIBE KEYSPACE polyglotmusic;