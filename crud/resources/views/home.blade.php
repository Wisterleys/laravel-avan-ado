@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Notícias') }}</div>

                <div class="card-body">
                    <div class="card-body" id="print">
                        
                          
                        
                    </div>
                </div>
            </div>
            <form style="margin-top: 20px" id="form">
                @csrf
                <div class="form-group">
                  <label for="exampleFormControlInput1">Título</label>
                  <input type="text" class="form-control" name="titulo" id="titulo" maxlength="200">
                </div>
                
                <div class="form-group">
                  <textarea class="form-control" name="corpo" id="corpo" rows="3" placeholder="Texto..."></textarea>
                </div>
                <div class="container-fluid text-center">
                    <button type="submit" class="btn btn-primary btn-lg btn-block" id="post">Postar</button>
                    <button type="reset" class="btn btn-primary btn-default mt-3" >limpar</button>
                </div>
              </form>
        </div>
    </div>
</div>
<script src="{{asset('js/util/Save.js')}}"></script>
<script src="{{asset('js/Controllers/AjaxController.js')}}"></script>
<script src="{{asset('js/home.js')}}"></script>
@endsection
