
-- nova database
CREATE  DATABASE exercicio;

-- conectando a data base

\c exercicio;

-- criando esquema publico
CREATE TABLE customer (
    cpf VARCHAR(14) PRIMARY KEY UNIQUE,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    birth_date DATE,
    phone VARCHAR(11),
    email VARCHAR(100) UNIQUE,
    local_address VARCHAR(150),
    city VARCHAR(100),
    local_state CHAR(2),
    zip_code VARCHAR(10)
);

CREATE TABLE product (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    product_description VARCHAR(255),
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INTEGER DEFAULT 0,
    category VARCHAR(100)
);

CREATE TABLE stock (
    inventory_id SERIAL PRIMARY KEY,
    product_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 0,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    -- Relacionamento 1:N com a tabela 'product' via chave estrangeira
    FOREIGN KEY (product_id) REFERENCES product(product_id)
);

-- inserindo clientes

INSERT INTO customer (cpf, first_name, last_name, birth_date, phone, email, local_address, city, local_state, zip_code)
VALUES
('111.111.111-11', 'João', 'Ângelo', '1998-06-07', '11999999999', 'joao@gmail.com', 'Rua A, 10', 'São Paulo', 'SP', '01001-000'),
('222.222.222-22', 'Maria', 'Antonieta', '2000-12-25', '11988888888', 'maria@gmail.com', 'Rua B, 20', 'São Paulo', 'SP', '01001-010');

-- inserindo produtos

INSERT INTO product (product_name, product_description, price, stock_quantity, category)
VALUES 
('Cimento CP II 50kg', 'Saco de cimento CP II de 50kg ideal para obras em geral', 38.90, 120, 'Materiais de Construção'),
('Tijolo Baiano 39x19x14cm', 'Tijolo baiano para alvenaria, medida 39x19x14cm', 1.25, 1000, 'Materiais de Construção');


-- inserindo stock

INSERT INTO stock (product_id, quantity)
VALUES
(1, 120),
(2, 1000);