import db from "../config/db.js";

const aluguelSchema = new db.Schema({

      Entidade: Rented
        {
        rented_by: ObjectId,
        filme_rented: ObjectId ,
        rent_date: Date,
        return_date: Date
       },
 });

const Aluguel = db.model("Aluguel", aluguelSchema);

export default Aluguel;