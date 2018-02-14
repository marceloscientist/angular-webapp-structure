import { FuseNavigationModelInterface } from '../core/components/navigation/navigation.model';

export class FuseNavigationModel implements FuseNavigationModelInterface {
    public model: any[];

    constructor() {
        this.model = [
            {

                'id': 'dashboard',
                'title': 'Dashboard',
                'translate': 'NAV.DASHBOARD.LABEL',
                'type': 'item',
                'icon': 'dashboard',
                'url': '/dashboard'

            },
            {
                'id': 'applications',
                'title': 'Recortes',
                'translate': 'NAV.APPLICATIONS.LABEL',
                'type': 'group',
                'children': [
                    {
                        'id': 'brands',
                        'title': 'Produtos',
                        'translate': 'NAV.APPLICATIONS.PRODUCTS',
                        'type': 'item',
                        'icon': 'shopping_cart',
                        'url': '/pricing'
                    },
                    {
                        'id': 'campaigns',
                        'title': 'Campanhas',
                        'translate': 'NAV.APPLICATIONS.CAMPAIGNS',
                        'type': 'item',
                        'icon': 'important_devices',
                        'url': '/invoice'
                    },
                    {
                        'id': 'links',
                        'title': 'Anúncios',
                        'translate': 'NAV.APPLICATIONS.LINKS',
                        'type': 'item',
                        'icon': 'content_cut',
                        'url': '/links'
                    }

                ]
            },
            {
                'id': 'account',
                'title': 'Conta',
                'translate': 'NAV.ACCOUNT.LABEL',
                'type': 'group',
                'children': [
                    {
                        'id': 'billing',
                        'title': 'Financeiro',
                        'translate': 'NAV.ACCOUNT.BILLING.LABEL',
                        'type': 'collapse',
                        'icon': 'attach_money',
                        'children': [
                            {
                                'id': 'creditcards',
                                'title': 'Informações de Cobrança',
                                'translate': 'NAV.ACCOUNT.BILLING.CREDITCARDS',
                                'type': 'item',
                                'icon': 'credit_card',
                                'url': '/creditcards'
                            },
                            {
                                'id': 'invoices',
                                'title': 'Notas Fiscais',
                                'translate': 'NAV.ACCOUNT.BILLING.INVOICES',
                                'type': 'item',
                                'icon': 'assignment',
                                'url': '/invoices'
                            },
                            {
                                'id': 'plan',
                                'title': 'Meu Plano',
                                'translate': 'NAV.ACCOUNT.BILLING.PLAN',
                                'type': 'item',
                                'icon': 'local_offer',
                                'url': '/plan'
                            }
                        ]
                    },
                    {
                        'id': 'configurations',
                        'title': 'Configurações',
                        'translate': 'NAV.ACCOUNT.CONFIGURATIONS.LABEL',
                        'type': 'collapse',
                        'icon': 'settings',
                        'children': [
                            {
                                'id': 'profile',
                                'title': 'Meu Perfil',
                                'translate': 'NAV.ACCOUNT.CONFIGURATIONS.PROFILE',
                                'type': 'item',
                                'icon': 'account_circle',
                                'url': '/profile'
                            },
                            {
                                'id': 'users',
                                'title': 'Usuários',
                                'translate': 'NAV.ACCOUNT.CONFIGURATIONS.USERS',
                                'type': 'item',
                                'icon': 'account_circle',
                                'url': '/users'
                            },
                            {
                                'id': 'tags-utg',
                                'title': 'Tags UTM',
                                'translate': 'NAV.ACCOUNT.CONFIGURATIONS.TAGS_UTG',
                                'type': 'item',
                                'icon': 'settings_ethernet',
                                'url': '/tags-utm'
                            }
                        ]
                    },
                    {
                        'id': 'support',
                        'title': 'Ajuda',
                        'translate': 'NAV.ACCOUNT.SUPPORT.LABEL',
                        'type': 'collapse',
                        'icon': 'lightbulb_outline',
                        'children': [
                            {
                                'id': 'helpdesk',
                                'title': 'Help Desk',
                                'translate': 'NAV.ACCOUNT.SUPPORT.HELPDESK',
                                'type': 'item',
                                'icon': 'headset_mic',
                                'url': '/help-desk'
                            },
                            {
                                'id': 'first-steps',
                                'title': 'Primeiros Passos',
                                'translate': 'NAV.ACCOUNT.SUPPORT.FIRST_STEPS',
                                'type': 'item',
                                'icon': 'school',
                                'url': '/first-steps'
                            },
                            {
                                'id': 'tips-and-strategies',
                                'title': 'Dicas e Estratégias',
                                'translate': 'NAV.ACCOUNT.SUPPORT.TIPS&STRATEGIES',
                                'type': 'item',
                                'icon': 'whatshot',
                                'url': '/tips-and-strategies'
                            }
                        ]
                    },
                    {
                        'id': 'partnership',
                        'title': 'Painel do Sócio',
                        'translate': 'NAV.ACCOUNT.PARTNERSHIP',
                        'type': 'item',
                        'icon': 'group_add',
                        'url': '/partnership'
                    }
                ]
            }
        ];
    }
}
