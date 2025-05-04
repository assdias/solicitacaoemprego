export interface ICursos {
  // Cursos
  curso: string;
  ano_conclusao: number | null;
}

export interface ISolicitacaoEmprego {
  // Dados Pessoais
  funcao_pretendida: string;
  nome: string;
  idade: number | null;
  sexo: 'F' | 'M' | '';
  cpf: string;
  rg: string;
  orgao_emissor: string;
  data_expedicao: string; // ISO date
  naturalidade: string;
  data_nascimento: string;
  ctps: string;
  ctps_serie: string;
  pis: string;
  titulo_eleitor: string;
  sessao: string;
  zona: string;
  cor: 'parda' | 'branca' | 'preta' | 'indigena' | 'amarela' | '';
  altura: string;
  peso: string;
  deficiente: boolean;
  deficiencia_especificacao: string;
  endereco: string;
  numero: string;
  bairro: string;
  cep: string;
  cidade: string;
  uf: string;
  email: string;
  contato_particular: string;
  contato_recado: string;

  // Dados Familiares
  estado_civil: string;
  nome_mae: string;
  nome_pai: string;
  nome_conjuge: string;
  cpf_conjuge: string;
  numero_filhos: number | null;
  filhos: {
    nome: string;
    idade: number;
    cpf: string;
  }[];

  // Formação Escolar/Técnica
  ensino_fundamental: boolean;
  ensino_medio: boolean;
  ensino_superior: boolean;
  ensino_superior_nivel: string;
  cursos: ICursos[];

  // Informações Adicionais
  tamanho_camiseta: 'P' | 'M' | 'G' | 'GG' | '';
  usa_vale_transporte: boolean;
  vale_transporte_quantidade_diaria: number | null;
  possui_conta_sicredi: boolean;
  quer_portabilidade_sicredi: boolean;

  // Autorização da Contratação
  apto_trabalho: boolean;
  data_exame: string;
  periodo_experiencia: string;
  data_admissao: string;
  salario: string;
  funcao: string;
  horario_trabalho: string;
  gerente_responsavel: string;
  data_formulario: string;
}
