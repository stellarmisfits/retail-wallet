/* eslint import/no-anonymous-default-export: 0 */
export default {
  general: {
    home: "Casa",
    connect: "Conectar",
    public: "público",
    asset: "Ativo",
    swap: "troca",
    lock: "Bloquear",
    swap_assets: "Trocar Ativos",
    from: "De",
    to: "Para",
    balance: "Saldo",
    select: "Selecionar",
    months: "meses",
    cancel: "Cancelar",
    deposit: "Depositar",
    withdraw: "Sacar",
    transactions: "Transações",
    faqs: "Perguntas frequentes",
    deposit_address: "Conta destino de depósito",
    language: "língua",
    logout: "sair",
    select_method: "Selecionar método",
    open_link_new_tab: "Abrir link em uma nova aba",
    copy: "cópia de",
    scan_qr: "Digitalizar QR",
  },
  navbar: {
    deposit_withdraw: "Depositar/Sacar",
    dashboard: "Painel",
    api: "API",
    audit: "Auditoria",
    history: "História",
  },
  homePage: {
    diversification_factor: "Fator de diversificação",
    total_value_in_USDC: "Valor total em USDC",
    total_locked_in_USDC: "Valor bloqueado em USDC",
    total_value_in_USDC_of_unlocked_amount: "Valor desbloqueado em USDC",
    market_size: "Tamanho do mercado",
    market_cap: "Valor de mercado",
    interest_rate: "Percentual de ganho",
    min_time: "Tempo mínimo",
    locked_amount: "Valor bloqueado",
    value_in_usdc: "Valor em USDC",
    unlocked_amount: "Valor desbloqueado",
    last_price: "Último preço",
    twenty_four_hr_volume: "Vol 24h",
    coingecko_price: "Coingecko (Preço)",
  },
  transactions: {
    select_token: "Selecionar moeda",
    in_out: "Entrada/Saída",
    type: "Tipo",
    status: "Status",
    date: "Data",
    copy_balance_and_start: "Copie o saldo e comece ",
    start: "Iniciar",
    of: "de",
    amount: "Valor",
    minimum: "Mínimo",
    destination: "Destino",
    address: "do saque",
    fee: "Taxa",
    total_fee: "Taxa total",
    continue: "Continuar",
    having_issues_with_your_transaction: "Está com problemas na sua transação?",
    contact_anchor_support_at: "Entre em contato com o suporte em",
    anchor: "Âncora",
    estimated_time: "Tempo estimado",
    memo: "Memorando",
    member_id: "ID do membro",
    check_if_memo_required: "Please check if a memo is required",
    language: "Língua",
    logout: "Sair",
    no_transactions: "Nenhuma transação",
    you_dont_currently_have_a_stellar: "Você não tem um Stellar no momento",
    sub_account: "sub conta",
    would_you_like_to_create_trustline: "você gostaria de criar uma linha de confiança agora?",
    support_for_withdraw_to: "Apoio para retirar para",
  },

  connectWalletModal: {
    title: "Conecte sua carteira para começar",
  },
  swapModal: {
    estimated_amount: "valor estimado",
    slippage_tolerance: "Margem de desvio",
    market_price: "Preço de mercado",
    market_price_tooltip: "Preço de mercado da CoinGecko",
    stellar_price: "Preço Stellar",
    stellar_price_tooltip: "Preço Stellar",
    minimum_received: "Mínimo recebido",
    minimum_received_tooltip:
      "Caso haja uma grande variação de preço antes de sua transação ser confirmada, a transação será revertida.",
    price_impact: "Impacto do preço",
    price_impact_tooltip:
      "A diferença entre o preço de mercado e o preço estimado devido ao tamanho da negociação. Verde significa que obtienes fichas adicionales",
    liquidity_provider_fee: "Taxa do Provedor de Liquidez",
    liquidity_provider_fee_tooltip: "Para cada negociação é paga uma taxa de 0,30%",
    bid_offer: "Lance/oferta",
    super_swap: "Supertroca (Beta)",
    advanced: "Avançado",
    selling: "Vendendo",
    buying: "Comprar",
    bid_offer_tooltip: "Bid/offer",
    lp_size_tooltip: "Tamaño del grupo de liquidez",
    advanced_swap_tooltip: "Troca avançada",
  },
  superSwapModal: {
    selling_amount: "Valor de venda",
    buying_asset: "Comprando ativo",
    the_amount_you_are_selling: "A quantidade que você está vendendo",
    the_asset_you_are_buying: "O ativo que você está comprando",
    prices: "Preços",
    path_payment: "Pagamento do caminho",
    market_price_coingecko: "Preço de mercado (Coingecko)",
    best_price: "Melhor preço",
  },
  anchorSelectionModal: {
    type_an_anchor: "Digite uma âncora",
  },
  assetSelectionModal: {
    select_asset: "Selecionar moeda",
    type_a_cryptocurrency: "Digite uma moeda",
  },
  trade: {
    how_do_you_want_to_fund_your_account: "Como você deseja financiar sua conta?",
  },
  lockModal: {
    available_amount: "Valor disponível",
    how_much_do_you_want_to_lock: "Quanto você quer bloquear?",
    enter_the_amount_you_want_to_lock: "Digite o valor que você deseja bloquear",
    minimum_lock_time: "Tempo mínimo de bloqueio",
    are_you_sure_you_want_to_lock: "Tem certeza de que deseja bloquear?",
    you_won_t_be_able_to_unlock_the_locked_asset_until_the_allotted_time:
      "Você não poderá desbloquear o ativo bloqueado até o tempo alocado",
    confirm_lock: "Confirmar bloqueio",
  },
  sep6DepositModal: {
    not_available: "Não disponível",
  },
  faqs: [
    {
      question: "Como posso começar a usar este site?",
      answer: `<b>Passo 1:</b></br> Primeiro você precisa instalar as carteiras Freighter ou Albedo em seu navegador </br></br> Você pode encontrar Albedo aqui:</br><u><a alt="albedo" href="https://albedo.link/install-extension/">https://albedo.link/install-extension/</u></a></br> ou executá-lo diretamente de seu site. </br></br> O Freighter pode ser encontrado aqui:</br><u><a alt="freighter" href="https://www.freighter.app/">https://www.freighter.app/</u></a> </br></br> <b>Passo 2:</b></br> Certifique-se de ter salvo sua chave privada e senha secreta. Lembre-se de que sua chave secreta é como dinheiro. Se alguém tem, eles têm seus fundos. Faça backup de sua chave secreta em 2 lugares, se possível.</br></br><b>etapa 3:</b></br>Clique em Depositar/Retirar e deposite seu CLPX, BTCLN, USDT, USDC (estável), Bitcoin ou Ethereum`,
    },
    {
      question: "O que é a moeda CLPX?",
      answer: `CLPX é uma moeda Stellar que pode ser sacado para uma conta bancária em moeda CLP no Chile. Pode ser “bloqueado” para imóveis com rendimento de 8%.`,
    },
    {
      question: "Como faço para depositar ou retirar CLPX?",
      answer: `Faça login no site com Albedo ou Freighter e selecione a opção Depositar/Sacar Você será solicitado a autenticar e fornecer as informações necessárias para fazer o depósito ou saque.`,
    },
    {
      question: "O que são fundos de bloqueio?",
      answer: `Os fundos de bloqueio são fundos que ficam disponíveis após um determinado período de tempo. Eles estão bloqueados em um contrato inteligente de “Saldo reclamável”. Normalmente 6 meses para CLPX, pois os fundos são imobiliários. </br></br> Para USDC, eles são bloqueados por um mínimo de 1 dia na moeda yUSDC. Para outros ativos, não há necessidade de bloquear e desbloquear os fundos.`,
    },
    {
      question: "Como sei que meus fundos estão seguros?",
      answer: `Este site não tem acesso aos seus fundos. Eles estão bloqueados com um de nossos parceiros.</br> <ul><li>APAY – uma empresa australiana que emite ativos BTC e ETH que pagam um rendimento. Visite apay.io para obter mais informações. Você pode depositar ou retirar sua criptomoeda a qualquer momento.</li><li>Utrastellar – uma empresa estoniana que fornece ativos que fornecem rendimento (yUSDC)</li></ul>`,
    },
    {
      question: "O que é o Fator de Diversificação?",
      answer: `O Fator de Diversificação é um número de 10, mostrando que você tem um XLM suficiente para transacionar adequadamente diversificado. Para aumentar seu fator de diversificação, certifique-se de ter mais de 4 XLM e ter uma mistura de moedas estáveis e criptomoedas.`,
    },
  ],
  messages: {
    invalid_address_format: "Formato de endereço inválido",
    copied: "Copiado!",
    no_token_selected: "Nenhuma moeda selecionada",
    confirm_on_hardware_wallet: "Confirmar na carteira de hardware",
    swap_successful: "Troca bem-sucedida",
    you_swapped: "voce trocou",
    for: "para",
    payment_success: "Sucesso do pagamento",
    authenticate_and_start_deposit_of: "Autenticar e iniciar o depósito de ",
    sep_24_withdraw_modal_message:
      "Agora você será autenticado usando sua carteira. Depois de preencher os formulários, você será solicitado pela carteira a fazer um pagamento no valor que você solicitou para sacar.",
    fetching_market_price_error: "Algo deu errado ao buscar o preço de mercado",
    something_went_wrong: "Algo deu errado!",
    browser_not_supported: "Navegador não suportado!",
    please_select_stellar_app: "Selecione o aplicativo Stellar e tente novamente.",
    firmware_does_not_support_webusb: "O firmware não suporta WebUSB, atualize o firmware.",
    failed_to_connect_ledger: "Certifique-se de que seu Ledger está desbloqueado",
    account_not_found:
      "Você precisa depositar fundos em sua conta - selecione uma moeda como CLPX, USDC, BTCLN, USDT ou XLM - Stellar e <br/> deposite alguns fundos ou comece aqui: <br/> <br/> <a href= 'https://clpx.finance/trade?ref=0'>https://clpx.finance/trade?ref=0</a>",
    popup_closed_before_terminal_status:
      "O pop-up foi fechado antes da transação atingir um status de terminal, se seu saldo não for atualizado em breve, a transação pode ter falhado.",
    popup_closed_pending_user_transfer_start:
      "A transação é criada e está aguardando conformidade e pagamento por você. Se seu saldo estelar não for atualizado em breve, a transação pode ter falhado e você precisará entrar em contato com o suporte do Stellar Anchor.",
    popup_closed_pending_user_transfer_start:
      "A transação é criada e está aguardando conformidade e pagamento por você. Se seu saldo estelar não for atualizado em breve, a transação pode ter falhado e você precisará entrar em contato com o suporte do Stellar Anchor.",
    failed_to_sign_transaction_with_albedo: "Falha ao assinar transação com Albedo",
    failed_to_sign_transaction_with_freighter: "Falha ao assinar transação com Freighter",
    failed_to_sign_transaction_with_rabet: "Falha ao assinar transação com Rabet",
    failed_to_sign_transaction_with_xbull: "Falha ao assinar transação com xbull",
    failed_to_sign_transaction_with_ledger: "Falha ao assinar transação com Ledger",
    error_getting_asset_info: "Ocorreu um erro ao obter as informações do recurso!",
    op_under_dest_min: "Você receberia abaixo do valor mínimo. Tente aumentar a derrapagem",
    op_underfunded: "Operação subfinanciada",
    op_low_reserve: "Essa conta não tem XLM suficiente para atender à reserva mínima de XLM.",
    from_amount_greater_than_balance: "De valor não pode ser maior que o saldo disponível",
    trustline_added_successfully: "Linha de confiança adicionada com sucesso",
    asset_disabled_by_anchor: "Esta operação foi desativada pela âncora do ativo selecionado.",
  },
};
