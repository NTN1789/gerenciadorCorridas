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
  const { usuario, ponto_partida, ponto_destino, custo_estimado } = dados;
  const status = 'ativa';
  const created_at = new Date().toISOString();

  db.run(`INSERT INTO corridas (usuario, ponto_partida, ponto_destino, created_at, custo_estimado, status) VALUES (?, ?, ?, ?, ?, ?)`,
      [usuario, ponto_partida, ponto_destino, created_at, custo_estimado, status], 
      function (err) {
          if (err) return callback(err);
          callback(null, { id: this.lastID, usuario, ponto_partida, ponto_destino, created_at, custo_estimado, status });
      });
    };

const cancelarCorrida = (id, callback) => {
  db.run(`UPDATE corridas SET status = 'cancelada' WHERE id = ?`, [id], function(err) {
      if (err) return callback(err);
      callback(null, { id, status: 'cancelada' });
  });
};

const buscarCorridas = (callback) => {
    db.all(`SELECT * FROM corridas`, [], (err, rows) => {
        if (err) return callback(err);
        callback(null, rows);
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

module.exports = { criarCorrida, cancelarCorrida, buscarCorridas,reativarCorrida };