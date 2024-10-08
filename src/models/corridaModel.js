const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('database.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS corridas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      usuario TEXT NOT NULL,
      ponto_partida TEXT NOT NULL,
      ponto_destino TEXT NOT NULL,
      created_at TEXT NOT NULL,
      custo_estimado REAL NOT NULL,
      status TEXT NOT NULL
  )`);
});




    const criarCorrida = (dados, callback) => {
        const { usuario, ponto_partida, ponto_destino } = dados;  
        const status = 'ativa';
        const created_at = new Date().toISOString();
        
        const custo_estimado = 75.00;  
      
        db.run(`INSERT INTO corridas (usuario, ponto_partida, ponto_destino, created_at, custo_estimado, status) VALUES (?, ?, ?, ?, ?, ?)`,
            [usuario, ponto_partida, ponto_destino, created_at, custo_estimado, status], 
            function (err) {
                if (err) return callback(err);
                callback(null, { id: this.lastID, usuario, ponto_partida, ponto_destino, created_at, custo_estimado, status });
            });
      };


const buscarCorridas = (callback) => {
    db.all(`SELECT * FROM corridas`, [], (err, rows) => {
        if (err) return callback(err);
        callback(null, rows);
    });
};


const buscarCorridasById = (id, callback) => {
    db.get(`SELECT * FROM corridas WHERE id = ?`, [id], (err, corrida) => {
        if (err) return callback(err);
        if (!corrida) return callback(new Error("Corrida não encontrada"));
        callback(null, corrida);
    });
};

const reativarCorrida = (id, callback) => {
  db.get(`SELECT * FROM corridas WHERE id = ?`, [id], (err, corrida) => {
      if (err) return callback(err);
      if (!corrida) return callback(new Error("Corrida não encontrada"));

      if (corrida.status !== 'cancelada') {
          return callback(new Error("Somente corridas canceladas podem ser reativadas"));
      }

      db.run(`UPDATE corridas SET status = 'ativa' WHERE id = ?`, [id], function(err) {
          if (err) return callback(err);
          callback(null, { id, status: 'ativa' });
      });
  });
};



const cancelarCorrida = (id, callback) => {
    db.get(`SELECT * FROM corridas WHERE id = ?`, [id], (err, corrida) => {
        if (err) return callback(err);
        
      
        if (!corrida) {
            return callback(new Error("Corrida não encontrada"));
        }
  
 
        if (corrida.status !== 'ativa') {
            return callback(new Error("Somente corridas ativas podem ser canceladas"));
        }
  
     
        db.run(`UPDATE corridas SET status = 'cancelada' WHERE id = ?`, [id], (err) => {
            if (err) return callback(err);
            callback(null, { id, status: 'cancelada' });
        });
    });
};

const updateCorrida = (id, dados, callback) => {
    db.run(`UPDATE corridas SET 
        usuario = ?, 
        ponto_partida = ?, 
        ponto_destino = ? 
        WHERE id = ?`,
        [dados.usuario, dados.ponto_partida, dados.ponto_destino, id],
        function (err) {
            if (err) return callback(err);

     
            if (this.changes === 0) {
                return callback(new Error('ID não encontrado.'));
            }

            callback(null, { id, ...dados }); 
        }
    );
};

module.exports = { criarCorrida,buscarCorridas,buscarCorridasById ,cancelarCorrida,reativarCorrida , updateCorrida};




