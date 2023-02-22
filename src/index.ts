export interface Bairro {
	LOCL_LOCAL: number;
	BAIR_COD_BAIRRO: number;
	BAIR_NOME_BAIRRO: string;
	BAIR_RURAL_URBANO: string;
	ZONA_COD_ZONA: number;
	BAIR_ISENTA_IP: string;
}

export interface MedidorUc {
	TPME_TIPO_MEDIDOR: number;
	MDUC_DT_INSTALACAO: string;
	MDUC_LEIT_INICIAL_CONSUMO: number;
	MDUC_LEIT_FINAL_CONSUMO: number;
	FABR_COD_FABRICANTE: number;
	MEDI_NPL_CONSUMO: number;
	MEDI_CONST_CONSUMO: number;
	TMED_TIPO_MEDICAO: number;
	MEDI_NUMERO_MEDIDOR: string;
}

export interface LeituraInternet {
	LEIN_PROTOCOLO: number;
	UNID_IDENT_UC: number;
	LEIN_USUARIO: string;
	LEIN_DT_LEITURA: string;
	LEIN_LEITURA: number,
	LEIN_INDICA_ORIGEM: string;
	LEIN_INDICA_USO: string;
	LEIN_IP_SOLICITANTE: string,
	LEIN_NOME_SOLICITANTE: string;
	LEIN_DT_REGISTRO: string;
	LEIN_OBSERVACAO: string;
	OSER_NUMERO_OS: number;
	FTCD_MES_ANO_FATMTO: null,
	LEIN_LEITURA_REVERSA: number
}

export interface UnidadeConsumidora {
	CLIE_NOME_CLIENTE: string;
	CLIE_NUMERO_DOCTO_1: string;
	CLIE_IDENT_CLIENTE: number;
	UNID_IDENT_UC: number;
	LOGR_COD_LOGRADOURO: number;
	LOGR_NOME_LOGRADOURO: string;
	UNID_NUMERO_IMOVEL_UC: string;
	UNID_COMPL_ENDERECO_UC: string;
	SETO_SETOR: number;
	ROTA_ROTA: number;
	LOCL_LOCAL: number;
	MUNI_COD_MUNICIPIO: number;
	UNID_E_MAIL: string;
	MUNI_NOME_MUNICIPIO: string;
	TPUC_TIPO_UC: string;
	SIUC_SIT_UC: string;
	UNID_PONTO_REFERENCIA: string;
	TPLG_DESCR_TIPO_LOGRADOURO: string;
	BAIR_NOME_BAIRRO: string;
	TPEN_TIPO_ENTREGA?: 'ORGP' | 'EMAI' | 'EMPR' | 'DOMI' | 'RURA' | 'AGEN' | 'ALTR' | 'CXPO';
	TENS_CLASSIFICACAO: 'BT' | 'MT' | 'AT';
}

export interface USUARIO_WEB {
	CLIE_NUMERO_DOCTO_number;
	UWEB_SENHA: string;
	UWEB_DT_SENHA: string;
	UWEB_E_MAIL: string;
	PSEN_COD_PERGUNTA_SENHA: string;
	UWEB_RESPOSTA_SENHA: string;
	UWEB_DT_ULTIMA_SENHA_INV: string;
	UWEB_QTDE_SENHA_INV: string;
	UWEB_CODIGO_ATIVACAO: string;
}

export interface USUARIO_WEB_LOGIN extends USUARIO_WEB {
	CLIE_NOME_CLIENTE: string;
	CLIE_NOME_FANTASIA: string;
}

export interface CLIENTE {
	CLIE_NUMERO_DOCTO_1: string;
	CLIE_IDENT_CLIENTE: number;
	CLIE_NOME_CLIENTE: string;
	CLIE_NOME_FANTASIA: string;
	CLIE_NOME_MAE: string;
	TPCL_TIPO_CLIENTE: string;
	CLIE_DT_NASCIMENTO: Date;
	CLIE_DT_FUNDACAO: Date;
	CLIE_DT_CADASTRAMENTO: Date;
	CLIE_INSCR_ESTADUAL: string;
	CLIE_DDD_CLIENTE: string;
	CLIE_TELEFONE_CLIENTE: string;
	CLIE_TIPO_DOCTO_number;
	CLIE_NUMERO_DOCTO_number;
	CLIE_TIPO_DOCTO_2: string;
	CLIE_NUMERO_DOCTO_2: string;
	TPPS_TIPO_PROGRAMA_SOCIAL: string;
	CLIE_NUMERO_PROGRAMA_SOCIAL: number;
	CLIE_E_MAIL: string;
	UNIF_SIGLA_UF: string;
	PAIS_SIGLA: string;
	ESCI_ESTADO_CIVIL: number;
	CLIE_TELEFONE_2: string;
	CLIE_UF_DOCTO_2: string;
	CLIE_DT_EMISSAO_DOCTO_2: Date;
	EMDO_EMISSOR_DOCTO: string;
	TSTIMESTAMP: Date;
	CLIE_RETENCAO: number;
	CLIE_NUMERO_IMOVEL: string;
	CLIE_COMPL_ENDERECO: string;
	CLIE_PONTO_REFERENCIA: string;
	LOCL_LOCAL: number;
	LOGR_COD_LOGRADOURO: number;
	CONJ_COD_CONJUNTO_IMOB: number;
	MUNI_COD_MUNICIPIO: number;
	CLIE_TITULO_ELEITOR: number;
	CLIE_SEXO: string;
	CLIE_DT_PROGRAMA_SOCIAL: Date;
	CLIE_DDD_TELEFONE_2: string;
	CLIE_DT_AUTO_DECL: Date;
	CLIE_SUSP_COBR_ADM: number;
	CLIE_TIPO_RESIDENCIA: number;
	CLIE_VIGENCIA_ATESTADO: Date;
	CLIE_ANEEL_VALIDACAO_Vnumber;
	CLIE_ANEEL_VALIDACAO_V2number;
	CLIE_ANEEL_VALIDACAO_V3: number;
	CLIE_ANEEL_VALIDACAO_V4: number;
	CLIE_ANEEL_VALIDACAO_V5: number;
	CLIE_ANEEL_VALIDACAO_V6number;
	CLIE_DT_CONCESSAO_BENEF: Date;
	CLIE_DT_ATUALIZACAO_FAM: Date;
	CLIE_COD_FAMILIAR_FAM: number;
	CLIE_DT_CADASTRAMENTO_FAM: Date;
	CLIE_COD_IBGE_CRAS: number;
	CLIE_VAL_TOTAL_RENDA_FAM: number;
	CLIE_ANO_MES_EMIS_ULT_CARTA: Date;
	CLIE_MODELO_CARTA: number;
	CLIE_DDD_TELEFONE_3: string;
	CLIE_TELEFONE_3: string;
	CLIE_DDD_TELEFONE_4: string;
	CLIE_TELEFONE_4: string;
	CLIE_ANEEL_VALIDACAO_V22: number;
	CLIE_ANEEL_VALIDACAO_V62: number;
	CLIE_RENDA_PER_CAPITA: number;
	CLIE_CODIGO_CID: string;
	CLIE_TIPO_DOCTO_3: string;
	CLIE_NUMERO_DOCTO_3: string;
	CLIE_DT_VALIDADE_DOCTO_3: Date;
	CLIE_E_MAIL_PRINCIPAL: string;
}

export interface OrdemServico {
	OSER_NUMERO_OS: number;
	UNID_IDENT_UC: number;
	SERV_COD_SERVICO: number;
	X_OSER_DT_ABERTURA: string;
	OSER_DT_ABERTURA: string;
	OSER_DT_MAX_CONCLUSAO: string;
	OSER_HORA_MAX_CONCLUSAO: string;
	OSER_DT_CONC_CANC: string;
	OSER_HORA_CONC_CANC: string;
	OSER_OBSERV_RECLAMACAO: string;
	OSER_SOLUCAO: string;
	OSER_DT_CHEGADA_LOCAL: string;
	OSER_HORA_CHEGADA_LOCAL: string;
	OSER_QUILOMETRAGEM_INICIAL: number;
	TROS_DT_FASE_OS: string;
	FAOS_FASE_OS: number;
	OSER_QUILOMETRAGEM_FINAL: number;
	DIST_COD_DISTRITO: number;
	CLIE_IDENT_CLIENTE: number;
	OSER_PRAZO_SUSPENSO: number;
	OSER_TEMPO_DESLIGADO: number;
	OSER_ALTERA_REG: number;
}

export interface POTENCIA_EQUIPAMENTO {
	POEQ_COD_EQUIPTO: number;
	POEQ_DESCR_EQUIPTO: string;
	POEQ_POTENCIA_EQUIPTO: number;
	POEQ_TEMPO_MEDIO_RES: number;
	POEQ_CONSUMO_MENSAL_RES: number;
	POEQ_TEMPO_MEDIO_COM: number;
	POEQ_CONSUMO_MENSAL_COM: number;
	POEQ_TEMPO_MEDIO_IND: number;
	POEQ_CONSUMO_MENSAL_IND: number;
	POEQ_INDICA_MONO_BI_TRI: number;
	POEQ_INDICA_QTDE: number;
	TPPC_ID: number;
	TPUE_ID: number;
	POEQ_DT_FIM_VIGENCIA: string;
	POEQ_PERDAS: number;
	POEQ_POTENCIA_EQUIPTO_TOTAL: number;
	POEQ_DIAS_MES_RESIDENCIAL: number;
	POEQ_DIAS_MES_COMERCIAL: number;
	POEQ_DIAS_MES_INDUSTRIAL: number;
	POEQ_INDICA_IP: number;
	POEQ_CONSUMO_MENSAL_RES_ORIG: number;
	POEQ_CONSUMO_MENSAL_COM_ORIG: number;
	POEQ_CONSUMO_MENSAL_IND_ORIG: number;
}

export interface Fatura {
	BAIRRO: string;
	C1_CORRECAO: number;
	C1_CORRECAO_IPU: number;
	C1_JUROS: number;
	C1_JUROS_IPU: number;
	C1_MULTA: number;
	C1_MULTA_IPU: number;
	C1_TOTAL_CORRIGIDO: number;
	CAUC_061_DT_FIM_VIGENCIA: string | null;
	CLIENTE_ATUAL: number;
	CLIENTE_FATURA: number;
	CLIE_IGUAL_DIFER: string;
	CODIGO_BARRAS: string;
	CONSUMO: number;
	DIAS_DE_CONSUMO: number;
	DT_LEIT_ANT: string;
	DT_LEIT_ATUAL: string;
	DT_REF: string;
	DT_REF_EDT: string;
	DT_SIT_FATURA_EDT: string;
	DT_VENCIMENTO: string;
	DT_VENCIMENTO_EDT: string;
	ENDERECO: string;
	FD: number;
	FLAG_CLIENTE_ATUAL: number;
	FORMA_PAGAMENTO: 'O' | 'F' | 'I'; // O - Obrigatório, F - Facutativo, I - Impossibilidade
	IDENT_UC: number;
	MOTIVO_FD: number;
	NOME_CLIENTE: string;
	NOTA_FISCAL: number;
	NUMERO_DOCTO_1: string;
	NUM_LOTE_ARREC: number;
	OS_CORTE: 'S' | 'N';
	SIT_FATURA: 'PAGA' | 'PAGR' | 'ABER' | 'REAV' | 'TRAN';
	// ('ABER' & 'REAV' & 'TRAN') PODE PAGAR
	// ('PAGA' & 'PAGR') NÃO PODE PAGAR
	TOTAL_FATURA: number;
	selected: boolean;
	VENCIDA: number;
	ATUAL_CLIE_IDENT_CLIENTE: number;
	FTCD_SIT_FAT_PROCESSO: number | null;
	COD_AGENTE: number | null; // (Lista o agente - 1 é banco do brasil)
	DT_EMISSAO: Date; // (Dt de emisssao da fatura)
	LINHA_DIGITAVEL_BOLE: string | null; // (linha digitavel do boleto com pontos e espaco)
	LINHA_DIGIT_NUM_BOLE: string | null; // (linha digitavel para humanos somente com numeros)
	COD_BARRAS_BOLE: string | null; // (representacao do codigo de barras)
	PIX_EMV: string | null; // (string pix)
	TIPO_PIX: 1 | 2 | null; // ( 1 - Estático / 2 - Dinamico)
	NOSSO_NUMERO: number | null; // Numero identificador com o banco
	ID_BOLETO: number | null; // id da tabela boleto_web
	STATUS_CARTORIO: string | null;
	VALOR_CARTORIO: string | null;
	NOME_CARTORIO: string | null;
	TIPO_LIGACAO_FATURA: number | null;
}

export interface FaturaAgrupada {
	UC: number,
	FD: number,
	MES_ANO: string;
	SEGV_MES_ANO_2A_VIA_AGRUP: string;
	ENDERECO: string;
	BAIRRO: string;
	CEP: number,
	NOME_LOCAL: string;
	UF: string;
	VL_TOTAL_FATURA: number,
	DT_VENCTO: string;
	DT_EMI_FAT: string;
	SEGV_SEM_CORRECAO_VENCTO: number,
	SEGV_TIPO_GERACAO: number,
	SEGV_QTDE_FATURA: number,
	CODIGO_BARRAS: string;
	NOME_CLIENTE: string;
}

export interface AUTENTICACAO {
	ID: number;
	NUM_DOC: string;
	EMAIL: string;
	CODE: string;
	TIPO: string;
	TS: Date;
}

export interface USUARIO {
	NUM_DOCTO: number;
	EMAIL: string;
	NOME: string;
	SENHA: string;
}

export interface TENTATIVA {
	TS: Date;
	NUM_DOCTO: string;
	QTD: number;
	TIPO: string;
}

export interface FaturaCadastro {
	FTCD_IDENT_UC: number;
	FTCD_MES_ANO_FATMTO: string
	FTCD_NUMERO_FD: number;
	FTCD_IDENT_CLIENTE: number;
	FTCD_LOCAL: number;
	FTCD_SETOR: number;
	FTCD_ROTA: number;
	FTCD_SEQUENCIA: number;
	FTCD_CLASSE: number;
	FTCD_SUBCLASSE: number;
	FTCD_TENSAO: number;
	FTCD_TIPO_LIGACAO: 2;
	FTCD_NOME_CLIENTE: string
	FTCD_NOTA_FISCAL: number;
	FTCD_DT_EMISSAO: string;
	FTCD_DT_VENCTO: string;
	FTCD_SIT_FATURA: string;
	FTCD_DT_SIT_FATURA: string;
	FTCD_CORRIDA_FATMTO: string;
	FTCD_SIT_UC: string;
	FTCD_COD_LOGRADOURO: number;
	FTCD_NUMERO_IMOVEL_UC: string;
	FTCD_COMPL_ENDERECO_UC: string;
	FTCD_FORMA_PAGAMENTO: string;
	FTCD_TIPO_ENTREGA: string;
	FTCD_CONS_FATUR: number;
	FTCD_DEM_FATUR: number;
	FTCD_ENERGIA_REAT_EXCED: number;
	FTCD_DEM_POT_REAT_EXCED: number;
	FTCD_ALIQ_IMPOSTO: 25;
	FTCD_TARIFA_CONS: number;
	FTCD_TARIFA_DEM: number;
	FTCD_VALOR_IPU: number;
	FTCD_ECE: number;
	FTCD_SIT_FAT_PROCESSO: number;
	FTCD_BASE_IMPOSTO: number;
	FTCD_VALOR_IMPOSTO: number;
	FTCD_IMPORTE_CONS: number;
	FTCD_IMPORTE_DEM: number;
	FTCD_IMPORTE_EREX: number;
	FTCD_IMPORTE_DPREX: number;
	FTCD_TOTAL_DEVOLUCAO: number;
	FTCD_TOTAL_ENCARGO: number;
	FTCD_VALOR_ACM: number;
	FTCD_TOTAL_FATURA: number;
	FTCD_TIPO_AGENTE: 5;
	FTCD_COD_AGENTE: number;
	FTCD_COD_AGENCIA: 99; 
	FTCD_TIPO_UC: string;
	FTCD_ABCISSA_POSTE: string;
	FTCD_ORDENADA_POSTE: string;
	FTCD_NUMERO_PLANTA: number;
	FTCD_NUMERO_POSTE: number;
	FTCD_TIPO_DOCTO_number;
	FTCD_NUMERO_DOCTO_number;
	FTCD_TIPO_DOCTO_2: string;
	FTCD_NUMERO_DOCTO_2: string;
	FTCD_VALOR_RETENCAO: number; 
	FTCD_AUTO_PRODUTOR: number;
	FTCD_CARGA_INSTALADA: number;
	EMPG_MATRIC_EMPREGADO: number;
	FTCD_CONS_AH_KWH: number;
	FTCD_NUM_CONTROLE_IMPR_FAT: number;
	FTCD_TIPO_MEDICAO: number;
	FTCD_DT_CONTAB: string;
	FTCD_INDICA_CASCATA: string;
	FTCD_DT_TRAN_RESERVA: string; 
	FTCD_COD_CONJUNTO_UC: number; 
	FTCD_DT_COMPETENCIA: string;
	FTCD_AMBIENTE_FATMTO: string;
	FTCD_IMPORTE_CONS_PTA: number;
	FTCD_IMPORTE_CONS_FPTA: number;
	FTCD_IMPORTE_DEM_PTA: number;
	FTCD_IMPORTE_DEM_FPTA: number; 
	FTCD_IMPORTE_UFER_PTA: number;
	FTCD_IMPORTE_UFER_FPTA: number;
	FTCD_IMPORTE_DMCR_PTA: number;
	FTCD_IMPORTE_DMCR_FPTA: number;
	FTCD_IMPORTE_DEM_EXC_PTA: number;
	FTCD_IMPORTE_DEM_EXC_FPTA: number;
	FTCD_DEM_FATUR_PTA: number;
	FTCD_DEM_FATUR_FPTA: number;
	FTCD_CONS_FATUR_PTA: number;
	FTCD_CONS_FATUR_FPTA: number;
	FTCD_UFER_PTA: number;
	FTCD_UFER_FPTA: number;
	FTCD_DMCR_PTA: number;
	FTCD_DMCR_FPTA: number;
	FTCD_DEM_EXC_PTA: number;
	FTCD_DEM_EXC_FPTA: number; 
	FTCD_RETENCAO: number;
	FTCD_POTENCIA_KW: number;
	FTCD_IMPORTE_CONS_RESERV: number;
	FTCD_EAEEE: number;
	FTCD_CONS_FATUR_RESERV: number;
	FTCD_DT_REAVISO: string;
	FTCD_DT_PRAZO_CORTE: string;
	FTCD_UF_DOCTO_2: string
	FTCD_DT_EMISSAO_DOCTO_2: string
	FTCD_EMISSOR_DOCTO: string
	FTCD_VALOR_JUROS: number;
	FTCD_MATRIC_VALIDACAO: number;
	FTCD_CHAVE_DIGITAL: string
	FTCD_MATRIC_LEITURISTA: string
	FTCD_DIFERENCA_RECEITA: number; 
	FTCD_TIPO_CLIENTE: string
	FTCD_BENEF_IRRIG: number;
	FTCD_VALOR_COR_MONET: number;
	TSTIMESTAMP: string
	FTCD_DT_LIMITE_CORTE: string
	FTCD_TOTAL_IMPORTE: number;
	FTCD_IMPORTE: {
		FTCD_CONSUMO: number;
		FTCD_TAR_IMPOSTO: number;
		FTCD_IMPORTE: number;
		FTCD_TIPO_ENC_DEV: number;
		FTCD_COD_ENC_DEV: number;
		FTCD_TAR_ORIGINAL: number;
		FTCD_BASE_IMPOSTO: number;
		FTCD_ICMS: number;
		FTCD_PIS: number;
		FTCD_COFINS: number;
	}[];
	FTCD_NUMERO_IMOVEL_PREFEITURA: null;
}

export interface Protocolo {
	PROT_NUM_PROTOCOLO: number;
	PROT_DT_ABERTURA: string;
	PROT_DT_CONCLUSAO: string;
	PROT_DDD_TELEFONE: number;
	PROT_TELEFONE: number;
	EMPG_MATRIC_EMPREGADO: number;
	CLIE_IDENT_CLIENTE: number;
	UNID_IDENT_UC: number;
	OSER_NUMERO_OS: number;
	PROT_ANOTACOES: string;
	POAT_POSTO_ATENDIMENTO: number;
	PROT_DT_CHEGADA: string;
	PROT_SENHA_ATENDIMENTO: number;
	PROT_TIPO_ATENDIMENTO: number;
	PROT_NOME_ATENDIDO: string;
	PROT_NUMERO_DOCTO: string;
	AROP_COD_AREA: number;
}

export interface LeituraSMC {
	EQUIPAMENTO: string;
	TRAFO: number;
	CS: number;
	POS: number;
	SERIAL_CLIENTE: number;
	SERIAL_LG: number;
	FASE: number;
	UC: number;
	ESTADO_ENDPOINT: string;
	ESTADO_CONTATOR: string;
	DATA_LEITURA: Date;
	KWH: number;
	PROJETO: string;
	COLETOR: string;
	DATA_INSERCAO: Date;
}

export interface TAXA {
	TAXA_DT_INI_VIG_TAXA: Date;
	TAXA_DT_FIM_VIG_TAXA: Date;
	EDEV_COD_ENC_DEV: number;
	TAXA_PERC_TARIFA_MONO: number;
	TAXA_PERC_TARIFA_BI: number;
	TAXA_PERC_TARIFA_TRI: number;
	TAXA_PERC_TARIFA_GA: number;
	EMPG_MATRIC_EMPREGADO: number
}

export interface Lancamento {
	UNID_IDENT_UC: string;
	TENC_TIPO_ENC_DEV: string;
	EDEV_COD_ENC_DEV: string;
	TPDE_QTDE_PARCELAS: string;
	LANC_NUMERO_PARCELA: string;
	SILC_SIT_LANCTO: string;
	LANC_MES_ANO_VENCTO: string;
	FATR_MES_ANO_FATMTO: string;
	FATR_NUMERO_FD: string;
	TPDE_ANO_TPD: string;
	TPDE_NUMERO_TPD: string;
	LANC_VALOR_MOEDA_ORIGINAL: string;
	LANC_VALOR_MOEDA_CORRENTE: string;
	OSER_NUMERO_OS: string;
	LANC_VALOR_JUROS_PARCELA: string;
	LANC_MES_ANO_FATMTO_ORIGEM: string;
	LANC_NUMERO_FD_ORIGEM: string;
	LANC_DT_VENCTO_ORIGEM: string;
	LANC_DT_PAGTO_ORIGEM: string;
	LANC_OBSERVACOES: string;
}

export interface Encargo_Devolucao {
	TENC_TIPO_ENC_DEV: number;
	EDEV_COD_ENC_DEV: number;
	EDEV_DESCR_RESUM_ENC_DEV: string;
	EDEV_DESCR_ENC_DEV: string;
	EDEV_DEB_CRED: string;
	MOED_COD_MOEDA: number;
	EDEV_COD_OPERACAO: number;
	EDEV_INCIDE_ICMS: number;
	EDEV_VALOR_TERCEIROS: number;
	EDEV_JUROS_MULTA: number;
	EDEV_CLASSE: number;
	EDEV_UC_DESL: number;
	EDEV_GRUPO_PERCENT_RETENCAO: number;
	TPIN_COD_IND_ECON: number;
	EDEV_COD_INVERSO: number;
	EDEV_OPCAO_CALCULO: number;
	EMPG_MATRIC_EMPREGADO: number;
	EDEV_COD_ENCARGO_TPD_VL_TERC: number;
	EDEV_NAO_IMPR_FATURA: number;
	EDEV_ENCARGO_EXPIRA: number;
}

export interface PG_LANCAMENTO_SP_INCLUIR {
	P_UNID_IDENT_UC: number;
	P_TENC_TIPO_ENC_DEV: number;
	P_EDEV_COD_ENC_DEV: number;
	P_TPDE_QTDE_PARCELAS: number | null;
	P_LANC_NUMERO_PARCELA: number | null;
	P_SILC_SIT_LANCTO: string;
	P_LANC_MES_ANO_VENCTO: Date | null;
	P_FATR_MES_ANO_FATMTO: Date | null;
	P_FATR_NUMERO_FD: number | null;
	P_TPDE_ANO_TPD: number | null;
	P_TPDE_NUMERO_TPD: number | null;
	P_LANC_VALOR_MOEDA_ORIGINAL: number | null;
	P_LANC_VALOR_MOEDA_CORRENTE: number | null;
	P_LANC_VALOR_ENTRADA: number | null;
	P_LANC_VALOR_JUROS_PARCELA: number | null;
	P_LANC_MES_ANO_FATMTO_ORIGEM: Date | null;
	P_LANC_NUMERO_FD_ORIGEM: number | null;
	P_LANC_DT_VENCTO_ORIGEM: Date | null;
	P_LANC_DT_PAGTO_ORIGEM: Date | null;
	P_LANC_OBSERVACOES: string | null;
	P_EMPG_MATRIC_EMPREGADO: number | null;
	P_LANC_CONTROLE: string | null;
	P_OSER_NUMERO_OS: number | null;
}