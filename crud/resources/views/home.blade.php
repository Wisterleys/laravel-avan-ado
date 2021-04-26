@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Notícias') }}</div>

                <div class="card-body">
                    <div class="card-body" id="print">
                        <div class="container-fluid row mb-4 border-bottom">
                            <blockquote class="blockquote text-justify  col-10">
                                <h4>Título</h4>
                                <p contenteditable="false" class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <footer class="blockquote-footer">Alguém famoso na <cite title="Título da fonte">Título da fonte</cite></footer>
                              </blockquote>
                                <div class="col-2">
                                    <button type="button" class="btn btn-primary btn-xs btn-flat mb-3">Editar</button>
                                    <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
                                </div>
                               
                          </div>
                          
                        
                    </div>
                </div>
            </div>
            <form style="margin-top: 20px" id="form">
                @csrf
                <div class="form-group">
                  <label for="exampleFormControlInput1">Título</label>
                  <input type="text" class="form-control" name="titulo" placeholder="Informativo..." maxlength="200">
                </div>
                
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Exemplo de textarea</label>
                  <textarea class="form-control" name="corpo" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-lg btn-block" id="post">Postar</button>
              </form>
        </div>
    </div>
</div>
<script src="{{asset('js/home.js')}}"></script>
@endsection
