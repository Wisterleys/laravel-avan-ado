@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Notícias') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    {{ __('You are logged in!') }}
                    
                </div>
            </div>
            <form style="margin-top: 20px" id="form">
                <div class="form-group">
                  <label for="exampleFormControlInput1">Título</label>
                  <input type="text" class="form-control" name="titulo" placeholder="Informativo..." maxlength="200">
                </div>
                
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Exemplo de textarea</label>
                  <textarea class="form-control" name="corpo" rows="3"></textarea>
                </div>
              </form>
              <button type="button" class="btn btn-primary btn-lg btn-block" id="post">Postar</button>
        </div>
    </div>
</div>
<script src="{{asset('js/home.js')}}"></script>
@endsection
