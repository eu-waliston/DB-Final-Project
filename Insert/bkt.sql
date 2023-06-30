def insert_data():
    mydb = mysql.connector.connect(
        host="localhost",
        user="username",
        password="password",
    )

    mycursor = mydb.cursor()
    mycursor.execute("CREATE DATABASE movies2")

    mycursor.execute('''
        CREATE  TABLE `diretor` (
  `idDiretor` INT NOT NULL ,
  `nome` VARCHAR(45) NULL ,
  `pais` VARCHAR(255) NULL,
  PRIMARY KEY (`idDiretor`));
    
    ''')

    mycursor.execute('''
    CREATE  TABLE `ator` (
  `idAtor` INT NOT NULL ,
  `nome` VARCHAR(255) NOT NULL ,
  `sexo` CHAR(1) NULL ,
  `nasc` DATE NULL ,
  `pais` VARCHAR(255) NULL,
  `altura` DECIMAL(3,2) NULL,
  PRIMARY KEY (`idAtor`));
    
    ''')

    mycursor.execute('''
    
    CREATE  TABLE `filme` (
  `idFilme` INT NOT NULL ,
  `idDiretor` INT NOT NULL ,
  `titulo` VARCHAR(45) NOT NULL ,
  `ano` INT NOT NULL ,
  `classificacao` VARCHAR(45) NOT NULL,
  `nota` DOUBLE NOT NULL,
  `bilheteria` DOUBLE NOT NULL ,
  `custo` DOUBLE NOT NULL ,
  `idFilmeAnterior` INT,   
  PRIMARY KEY (`idFilme`) ,
  INDEX `fk_filme_diretor1_idx` (`idDiretor` ASC) ,
  CONSTRAINT `fk_filme_diretor1`
    FOREIGN KEY (`idDiretor` )
    REFERENCES `diretor` (`idDiretor` ),
  CONSTRAINT `fk_filme_filme1`
    FOREIGN KEY (`idFilmeAnterior` )
    REFERENCES `filme` (`idFilme` ));

    ''')

    mycursor.execute('''
    CREATE  TABLE `elenco` (
  `idFilme` INT NOT NULL ,
  `idAtor` INT NOT NULL ,
  PRIMARY KEY (`idFilme`, `idAtor`) ,
  INDEX `fk_elenco_filme_idx` (`idFilme` ASC) ,
  INDEX `fk_elenco_ator_idx` (`idAtor` ASC) ,
  CONSTRAINT `fk_elenco_filme`
    FOREIGN KEY (`idFilme` )
    REFERENCES `filme` (`idFilme` ),
  CONSTRAINT `fk_elenco_ator`
    FOREIGN KEY (`idAtor` )
    REFERENCES `ator` (`idAtor` ));
    
    ''')


  headers = {
        "accept": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjkyZDJkNzAwMGU1N2EyNzk1ZDgyMzZmYzMyMGViOSIsInN1YiI6IjY0OWY1NWI1ODFkYTM5MDBlYTdiOWEzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fECK1TJtzJ0PMRYjYzh88u_J5I_BhchgfMNt_am0a4A"
    }