-- 1. Criar a tabela
CREATE TABLE test_indexing(id serial, name text);

-- 2. Inserir 250.000 linhas com "bob" e mais 250.000 com "alice"
INSERT INTO test_indexing(name) SELECT 'bob' FROM generate_series(1,250000);
INSERT INTO test_indexing(name) SELECT 'alice' FROM generate_series(1,250000);

-- 3. Verificar o desempenho ANTES do índice
EXPLAIN ANALYZE
SELECT * FROM test_indexing WHERE id = 2;

-- 4. Criar o índice na coluna id
CREATE INDEX test_idx_ebac ON test_indexing(id);

-- 5. Verificar o desempenho DEPOIS do índice
EXPLAIN ANALYZE
SELECT * FROM test_indexing WHERE id = 2;
