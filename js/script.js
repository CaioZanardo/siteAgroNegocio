function validar(){
	var msgE = 'Favor preencher o campo';

	if(document.getElementById('nome').value == '' ){
		//document.getElementById('nome').focus();
		mostrarMensagemErro(msgE, 'nome');
		return;

	}

	if(document.getElementById('email').value == ''){
		//document.getElementById('email').focus();
		mostrarMensagemErro(msgE, 'email');
		return;
	}

	if(document.getElementById('assunto').value == ''){
		//document.getElementById('assunto').focus();
		mostrarMensagemErro(msgE, 'assunto');
		return;
	}

	if(document.getElementById('mensagem').value == ''){
		//document.getElementById('mensagem').focus();
		mostrarMensagemErro(msgE, 'mensagem');
		return;
	}

	document.form.action="resposta.html";
	document.form.submit();

}


function mostrarMensagemErro(msgE, nomeCampo){
	document.getElementById(nomeCampo).focus();
	//alert(msgE  + ' ' + nomeCampo + '!');
	var campoMSG = document.getElementById('mensagemErro');
	campoMSG.style.display ="block";
	campoMSG.innerHTML = msgE + ' ' + nomeCampo + '!';
	campoMSG.style.background='red';
	campoMSG.style.color='#ffffff';
}
