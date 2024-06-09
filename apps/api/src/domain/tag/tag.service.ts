import { supabase } from "../../infra/supabase-client";
import { Tag } from "./model";


export class TagService {

  async findAll(){
    const { data } = await supabase.from('tags').select('*')
    if(data?.length === 0 ){
      return []
    }

    const response = data?.map(t => ({id: t.id, name: t.name.split('\n')[0]}))
    return response;
  }

  async newTag(data: Tag){
    const response = await supabase.from('tags').insert(data)
    return response;
  }

  async changeTag(data: Tag) {
    const { data: response } = await supabase.from('tags').update({ name: data.name }).eq('id', data.id)
    return response;
  }

}