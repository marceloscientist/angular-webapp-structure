import { take } from "rxjs/operator/take";

export const locale = {
    lang: 'pt-br',
    data: {
        'WELCOME': {
            'WELCOMING': 'Bem Vindo ao Recorte-Me!',
            'WARMING_UP': 'Ferramenta de auto-visibilidade onde suas marcas se potencializam através de um simples compartilhar'
        },
        'ACCESS_ACCOUNT': 'Acesse a sua conta',
        'DESCRIPTION': 'Entre com suas credenciais',
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
            }
        },
        'REMEMBER': '',
        'FORGOT': '',
        'BUTTONS': {
            'SIGN_IN': {
                'SERVER': 'Entre',
                'GOOGLE': 'Entre com google',
                'FACE': 'Entre com facebook'
            }
        },
        'CREATE_ACCOUNT': 'Crie a sua já!',
        'REGISTER': 'Tem uma conta?'
    }
};