import { supabase } from "../../infra/supabase-client";
import { Transaction, TransactionFilters } from "./model";


export class TransactionService {

  public async findAll({ description, tags_id, type, date }: TransactionFilters) {
    const tagsSearch = tags_id?.split(',') ?? []

    const query = supabase
    .from('transaction')
    .select('*')

    if(description) { query.ilike('description',`%${description}%`) }
    if(tagsSearch.length > 0) {query.contains('tags_id', tagsSearch)}
    if(type) {query.eq('type', type.toUpperCase())}
    if(date) {query.eq('date', date)}
    
    const { data } = await query;

    return await data;
  }

  public async findById(id: String){
    const { data } = await supabase.from('transaction').select('*').eq('id', id)
    return data;
  } 

  public async newTransaction(data: Transaction){
    const response = await supabase.from('transaction').insert(data)
    return response;
  }

  public async totalValues(){
    const { data: totalInput, error: errorInput } = await supabase
    .rpc('total_input')
    const { data: totalOutput, error: errorOutput } = await supabase
    .rpc('total_output')

    console.log(errorInput, errorOutput)
    console.log(totalInput, totalOutput)

    return {
      totalInput,
      totalOutput
    }
  }
} 