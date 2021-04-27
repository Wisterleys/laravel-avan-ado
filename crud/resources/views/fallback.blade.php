@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    <p>Desculpe! Essa rota não existe.</p>
                    <br>
                    <p>Volte para <b>Home</b> clicando <a href='home'>aqui</a></p>
                   
                </div>
            </div>
        </div>
    </div>
</div>
@endsection