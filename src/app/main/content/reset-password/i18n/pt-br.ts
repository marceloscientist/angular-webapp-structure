import { take } from "rxjs/operator/take";

export const locale = {
    lang: 'pt-br',
    data: {
        'INPUTS': {
            'EMAIL': {
                'LABEL': 'E-mail',
                'ERRORS': {
                    'REQUIRED': 'Email é obrigatório',
                    'EMAIL': 'Por favor, email deve ser válido'
                }
            },
            'PASSWORD': {
                'LABEL': 'Senha',
                'ERRORS': {
                    'REQUIRED': 'Senha é obrigatória'
                }
            },
            'PASSWORD_CONFIRM': {
                'LABEL': 'Senha de confirmação',
                'ERRORS': {
                    'REQUIRED': 'Senha de confirmação é obrigatória'
                }
            }
        },
        'BUTTONS': {
            'RESET': 'Refaça a sua senha'
        },
        'BACK_TO': 'Volte ao login',
        'TITLE': 'Refaça a sua senha'
    }
};