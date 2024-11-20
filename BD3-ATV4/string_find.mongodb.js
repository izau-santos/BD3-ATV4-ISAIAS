const database = 'BD3-ATV4';
const collection = 'mensagens';

use(database);

db[collection].find({ contato: "Camila", msg: { $regex: "pensou", $options: "i" } });
