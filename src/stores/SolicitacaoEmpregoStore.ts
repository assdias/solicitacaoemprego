import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { ISolicitacaoEmprego } from 'src/interfaces/SolicitacaoEmprego';

export const useSolicitacaoEmpregoStore = defineStore(
  'solicitacaoEmprego',
  () => {
    const solicitacao = ref<ISolicitacaoEmprego>(criarSolicitacaoVazia());

    function criarSolicitacaoVazia(): ISolicitacaoEmprego {
      return {
        funcao_pretendida: '',
        nome: '',
        idade: null,
        sexo: '',
        cpf: '',
        rg: '',
        orgao_emissor: '',
        data_expedicao: '',
        naturalidade: '',
        data_nascimento: '',
        ctps: '',
        ctps_serie: '',
        pis: '',
        titulo_eleitor: '',
        sessao: '',
        zona: '',
        cor: '',
        altura: '',
        peso: '',
        deficiente: false,
        deficiencia_especificacao: '',
        endereco: '',
        numero: '',
        bairro: '',
        cep: '',
        cidade: '',
        uf: '',
        email: '',
        contato_particular: '',
        contato_recado: '',
        estado_civil: '',
        nome_mae: '',
        nome_pai: '',
        nome_conjuge: '',
        cpf_conjuge: '',
        numero_filhos: null,
        filhos: [],
        ensino_fundamental: false,
        ensino_medio: false,
        ensino_superior: false,
        ensino_superior_nivel: '',
        cursos: [],
        tamanho_camiseta: '',
        usa_vale_transporte: false,
        vale_transporte_quantidade_diaria: null,
        possui_conta_sicredi: false,
        quer_portabilidade_sicredi: false,
        apto_trabalho: false,
        data_exame: '',
        periodo_experiencia: '',
        data_admissao: '',
        salario: '',
        funcao: '',
        horario_trabalho: '',
        gerente_responsavel: '',
        data_formulario: '',
      };
    }

    function setSolicitacao(data: ISolicitacaoEmprego) {
      solicitacao.value = data;
    }

    function clearSolicitacao() {
      Object.assign(solicitacao.value, criarSolicitacaoVazia());
    }

    return {
      solicitacao,
      setSolicitacao,
      clearSolicitacao,
    };
  },
  {
    persist: true, // persistência ativada
  },
);
