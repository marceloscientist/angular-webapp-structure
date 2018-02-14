import { take } from "rxjs/operator/take";

export const locale = {
    lang: 'pt-br',
    data: {  
        'TITLE': 'RECUPERAÇÃO DE SENHA',
        'DESCRIPTION': 'Não se preocupe! Nós o ajudaremos a retomar a trilha para sucesso agora mesmo!',
        'INPUTS': {            
            'EMAIL': {
                'LABEL': 'Email',
                'ERRORS': {
                    'REQUIRED': 'Email é obrigatório',
                    'EMAIL': 'Por favor, entre com email válido'
                }
            }
        },
        'BUTTONS': {
            'SEND': 'Link de Recuperação de Senha' 
        },
        'BACK_TO': 'Volte para o login'
    }
};