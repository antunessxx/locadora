
import db from "../config/db.js";


const filmeSchema = new db.Schema({

  nome: {
    type: String,
    required: true,
  },
  data_lancamento: {
    type: Number,
    required: true,
  },
  diretor: {
    type: String,
    required: true,
  },
  classificao: {
    type: String,
    required: true,
  },
});

const Filme = db.model("Filme", filmeSchema);

export default Filme;