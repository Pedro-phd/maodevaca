import { supabase } from "../../infra/supabase-client";
import { Transaction } from "./model";

export class TransactionService {

  public async findAll() {
    const { data } = await supabase.from('transaction').select('*')
    return data ;
  }

  public async findById(id: String){
    const { data } = await supabase.from('transaction').select('*').eq('id', id)
    return data;
  } 

  public async newTransaction(data: Transaction){
    const response = await supabase.from('transaction').insert(data)
    return response;
  }
} 